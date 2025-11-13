# Testing the Proxy Overlay SDK

This repository contains the Authlete TypeScript SDK with proxy overlay support for `serviceId` constructor parameter.

## Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/srqai/test-sdk.git
cd test-sdk
```

### 2. Build the SDK
```bash
npm install
npm run build
```

### 3. Use in Your Project

**Option A: Install from GitHub**
```bash
npm install git+https://github.com/srqai/test-sdk.git
```

**Option B: Use as Local Dependency**
```json
{
  "dependencies": {
    "@authlete/typescript-sdk": "git+https://github.com/srqai/test-sdk.git"
  }
}
```

**Option C: Link Locally**
```bash
cd test-sdk
npm link
cd ../your-project
npm link @authlete/typescript-sdk
```

## Usage Examples

### With serviceId in Constructor (New Feature)
```typescript
import { Authlete } from "@authlete/typescript-sdk";

// Set serviceId once in constructor
const authlete = new Authlete({
    serverURL: "https://api.authlete.com",
    serviceId: "YOUR_SERVICE_ID", // Set once, used everywhere
});

// serviceId is automatically injected into all API calls
await authlete.authorization.issue({
    authorizationIssueRequest: {
        ticket: "TICKET_ID",
        subject: "user1"
    }
    // No need to pass serviceId - it's injected automatically!
});
```

### Override serviceId Per-Request (Still Supported)
```typescript
// Use default serviceId from constructor
await authlete.authorization.issue({
    authorizationIssueRequest: { ticket: "T1", subject: "u1" }
});

// Override for this specific call
await authlete.authorization.issue({
    serviceId: "DIFFERENT_SERVICE_ID",
    authorizationIssueRequest: { ticket: "T2", subject: "u2" }
});
```

### Traditional Usage (Still Works)
```typescript
const authlete = new Authlete({
    serverURL: "https://api.authlete.com"
    // No serviceId in constructor
});

// Pass serviceId in every call (original behavior)
await authlete.authorization.issue({
    serviceId: "YOUR_SERVICE_ID",
    authorizationIssueRequest: {
        ticket: "TICKET_ID",
        subject: "user1"
    }
});
```

## TypeScript Note

⚠️ **Type Checking**: TypeScript may show `serviceId` as required in request types, but the runtime will work correctly. The Proxy injects `serviceId` automatically even if TypeScript doesn't recognize it as optional.

**Workaround** (if needed):
```typescript
// Option 1: Pass empty string (Proxy will inject constructor value)
await authlete.authorization.issue({
    serviceId: "",
    authorizationIssueRequest: { ticket: "T1", subject: "u1" }
});

// Option 2: Use type assertion
await authlete.authorization.issue({
    authorizationIssueRequest: { ticket: "T1", subject: "u1" }
} as any);
```

## Testing

See `examples/` directory for more examples.

## What's Different?

- ✅ `serviceId` can be set once in the constructor
- ✅ Automatically injected into all 100+ API endpoints
- ✅ Can still override per-request if needed
- ✅ Backward compatible with existing code
- ⚠️ TypeScript types may show warnings (runtime works correctly)

