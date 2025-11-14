/**
 * Type augmentation to make serviceId optional in request types
 * This allows the Proxy overlay to inject serviceId at runtime
 * without requiring it in the request object when using the constructor.
 * 
 * This file is automatically included when importing from @big76/test-sdk
 */

declare module "./src/models/operations/authauthorizationissueapi.js" {
  export interface AuthAuthorizationIssueApiRequest {
    serviceId?: string;
  }
}

declare module "./src/models/operations/authauthorizationapi.js" {
  export interface AuthAuthorizationApiRequest {
    serviceId?: string;
  }
}

declare module "./src/models/operations/authtokenissueapi.js" {
  export interface AuthTokenIssueApiRequest {
    serviceId?: string;
  }
}

// Add more request types as needed
// This pattern can be extended to all API request types

