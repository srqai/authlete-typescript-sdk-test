# DeviceVerificationResponseAction

The next action that the authorization server implementation should take.

## Example Usage

```typescript
import { DeviceVerificationResponseAction } from "authlete/models";

let value: DeviceVerificationResponseAction = "NOT_EXIST";
```

## Values

```typescript
"INTERNAL_SERVER_ERROR" | "NOT_EXIST" | "EXPIRED" | "VALID"
```