# RevocationResponseAction

The next action that the authorization server implementation should take.

## Example Usage

```typescript
import { RevocationResponseAction } from "authlete-beta/models";

let value: RevocationResponseAction = "BAD_REQUEST";
```

## Values

```typescript
"INTERNAL_SERVER_ERROR" | "INVALID_CLIENT" | "BAD_REQUEST" | "OK"
```