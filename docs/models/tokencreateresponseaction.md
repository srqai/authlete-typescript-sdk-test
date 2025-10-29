# TokenCreateResponseAction

The next action that the authorization server implementation should take.

## Example Usage

```typescript
import { TokenCreateResponseAction } from "authlete/models";

let value: TokenCreateResponseAction = "BAD_REQUEST";
```

## Values

```typescript
"INTERNAL_SERVER_ERROR" | "BAD_REQUEST" | "FORBIDDEN" | "OK"
```