/*
 * Custom overlay to add serviceId to constructor using method wrapping
 * 
 * Uses JavaScript Proxy to automatically intercept ALL method calls and inject
 * serviceId into request objects before they reach path construction.
 * 
 * This works for all 100+ endpoints automatically - no manual wrapping needed.
 */

import { Authlete as GeneratedAuthlete } from "./sdk/sdk.js";
import { SDKOptions } from "./lib/config.js";

export interface AuthleteOptions extends SDKOptions {
  /**
   * Default service ID to use for all API calls.
   * Can be overridden per-request by passing serviceId in the request object.
   */
  serviceId?: string;
}

/**
 * Helper to inject serviceId into request objects
 */
function injectServiceId<T extends Record<string, any>>(
  request: T,
  defaultServiceId?: string
): T {
  if (!defaultServiceId) {
    return request;
  }
  
  // If request has serviceId property and it's missing/empty, inject default
  if ('serviceId' in request) {
    const currentServiceId = request['serviceId'];
    if (!currentServiceId || currentServiceId === '' || currentServiceId === undefined || currentServiceId === null) {
      return { ...request, serviceId: defaultServiceId };
    }
    // If serviceId is provided, keep it (allows override)
    return request;
  }
  
  // If request doesn't have serviceId property, add it
  // This handles cases where serviceId is required but not provided
  return { ...request, serviceId: defaultServiceId };
}

/**
 * Creates a proxy that intercepts method calls and injects serviceId
 */
function createServiceIdProxy<T extends object>(
  target: T,
  defaultServiceId?: string
): T {
  if (!defaultServiceId) {
    return target;
  }
  
  // Track what we've already proxied to avoid double-proxying
  const proxyCache = new WeakMap<object, any>();
  
  return new Proxy(target, {
    get(propTarget, propName) {
      const value = Reflect.get(propTarget, propName);
      
      // Don't proxy native constructors or special objects
      if (value === null || value === undefined) {
        return value;
      }
      
      // Don't proxy built-in constructors (URL, Date, etc.)
      if (typeof value === 'function') {
        // Check if it's a native constructor by name
        const funcName = (value as any).name || '';
        const isNativeConstructor = 
          funcName === 'URL' ||
          funcName === 'Date' ||
          funcName === 'Object' ||
          funcName === 'Array' ||
          funcName === 'String' ||
          funcName === 'Number' ||
          funcName === 'Boolean' ||
          funcName === 'RegExp' ||
          funcName === 'Error' ||
          funcName === 'Promise' ||
          funcName === 'Map' ||
          funcName === 'Set' ||
          funcName === 'WeakMap' ||
          funcName === 'WeakSet';
        
        if (isNativeConstructor) {
          return value;
        }
      }
      
      // If it's a function, wrap it to inject serviceId
      if (typeof value === 'function') {
        return function (this: any, ...args: any[]) {
          // First argument is typically the request object
          if (args.length > 0 && typeof args[0] === 'object' && args[0] !== null) {
            args[0] = injectServiceId(args[0], defaultServiceId);
          }
          // Use the original target (not proxied) as 'this' context to avoid issues with native methods
          return value.apply(target, args);
        };
      }
      
      // If it's an object (like authorization, token, etc.), proxy it too
      // But skip native objects and already-proxied objects
      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        // Don't proxy native objects
        if (value instanceof URL || 
            value instanceof Date || 
            value instanceof RegExp ||
            value instanceof Map ||
            value instanceof Set ||
            value instanceof WeakMap ||
            value instanceof WeakSet ||
            value instanceof Promise) {
          return value;
        }
        
        // Check if already proxied
        if (proxyCache.has(value)) {
          return proxyCache.get(value);
        }
        
        // Only proxy SDK objects (Authorization, Token, etc.)
        // Skip plain objects that might be request/response objects
        const constructorName = value.constructor?.name || '';
        // Proxy SDK classes (Authorization, Token, Service, etc.)
        if (constructorName && 
            !constructorName.startsWith('Native') &&
            constructorName !== 'Object' &&
            constructorName !== 'Array') {
          const proxied = createServiceIdProxy(value, defaultServiceId);
          proxyCache.set(value, proxied);
          return proxied;
        }
      }
      
      return value;
    },
  });
}

/**
 * Authlete SDK client.
 *
 * You can specify a default `serviceId` once in the constructor, alongside `serverURL`.
 * The SDK will automatically inject this `serviceId` into all API calls that require it.
 * 
 * @example
 * // Option 1 — Pass serviceId in every call (standard OpenAPI pattern)
 * const authlete = new Authlete({ serverURL: "https://api.authlete.com" });
 * await authlete.authorization.issue({
 *   serviceId: "SERVICE_ID",
 *   authorizationIssueRequest: { ticket: "t1", subject: "u1" },
 * });
 * 
 * @example
 * // Option 2 — Set serviceId once in constructor (recommended for single-service apps)
 * const authlete = new Authlete({
 *   serverURL: "https://api.authlete.com",
 *   serviceId: "SERVICE_ID",
 * });
 * // serviceId is now automatically applied to all calls
 * await authlete.authorization.issue({
 *   authorizationIssueRequest: { ticket: "t1", subject: "u1" },
 * });
 * 
 * @example
 * // Option 2 — Can still override per-request when needed
 * const authlete = new Authlete({
 *   serverURL: "https://api.authlete.com",
 *   serviceId: "DEFAULT_SERVICE_ID",
 * });
 * // Uses default serviceId
 * await authlete.authorization.issue({
 *   authorizationIssueRequest: { ticket: "t1", subject: "u1" },
 * });
 * // Override for this specific call
 * await authlete.authorization.issue({
 *   serviceId: "DIFFERENT_SERVICE_ID",
 *   authorizationIssueRequest: { ticket: "t2", subject: "u2" },
 * });
 * 
 * @remarks
 * The constructor-based `serviceId` works for all 100+ endpoints automatically.
 * Uses JavaScript Proxy to intercept method calls and inject `serviceId` into request
 * objects before path construction, so it works seamlessly with the generated SDK.
 */
export class Authlete extends GeneratedAuthlete {
  private readonly defaultServiceId: string | undefined;

  constructor(options: AuthleteOptions = {}) {
    const { serviceId, ...restOptions } = options;
    super(restOptions);
    this.defaultServiceId = serviceId;
    
    // Wrap the entire instance in a proxy to intercept all method calls
    if (serviceId) {
      return createServiceIdProxy(this, serviceId) as this;
    }
  }

  /**
   * Get the default service ID configured in the constructor.
   */
  getServiceId(): string | undefined {
    return this.defaultServiceId;
  }
}

