# UserinfoResponseAction

The next action that the authorization server implementation should take.

## Example Usage

```typescript
import { UserinfoResponseAction } from "authlete-typescript-sdk/models";

let value: UserinfoResponseAction = "FORBIDDEN";
```

## Values

```typescript
"INTERNAL_SERVER_ERROR" | "BAD_REQUEST" | "UNAUTHORIZED" | "FORBIDDEN" | "OK"
```