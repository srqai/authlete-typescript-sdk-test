# AuthorizationResponseAction

The next action that the authorization server implementation should take.

## Example Usage

```typescript
import { AuthorizationResponseAction } from "@big76/test-sdk/models";

let value: AuthorizationResponseAction = "FORM";
```

## Values

```typescript
"INTERNAL_SERVER_ERROR" | "BAD_REQUEST" | "LOCATION" | "FORM" | "NO_INTERACTION" | "INTERACTION"
```