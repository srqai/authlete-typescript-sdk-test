# DeviceCompleteResponseAction

The next action that the authorization server implementation should take.


## Example Usage

```typescript
import { DeviceCompleteResponseAction } from "authlete-typescript-sdk/models";

let value: DeviceCompleteResponseAction = "INVALID_REQUEST";
```

## Values

```typescript
"SERVER_ERROR" | "USER_CODE_NOT_EXIST" | "USER_CODE_EXPIRED" | "INVALID_REQUEST" | "SUCCESS"
```