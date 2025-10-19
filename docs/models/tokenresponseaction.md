# TokenResponseAction

The next action that the authorization server implementation should take.

## Example Usage

```typescript
import { TokenResponseAction } from "authlete-test/models";

let value: TokenResponseAction = "OK";
```

## Values

```typescript
"INTERNAL_SERVER_ERROR" | "INVALID_CLIENT" | "BAD_REQUEST" | "PASSWORD" | "OK" | "TOKEN_EXCHANGE" | "JWT_BEARER"
```