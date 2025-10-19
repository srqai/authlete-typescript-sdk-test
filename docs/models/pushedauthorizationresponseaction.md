# PushedAuthorizationResponseAction

The next action that the authorization server implementation should take. Any other value other than "CREATED" should be handled as unsuccessful result.

## Example Usage

```typescript
import { PushedAuthorizationResponseAction } from "authlete-test/models";

let value: PushedAuthorizationResponseAction = "CREATED";
```

## Values

```typescript
"CREATED" | "BAD_REQUEST" | "UNAUTHORIZED" | "FORBIDDEN" | "PAYLOAD_TOO_LARGE" | "INTERNAL_SERVER_ERROR"
```