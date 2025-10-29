# TokenType

The grant type of the access token when the access token was created.


## Example Usage

```typescript
import { TokenType } from "authlete/models";

let value: TokenType = "JWT_BEARER";
```

## Values

```typescript
"urn:ietf:params:oauth:token-type:jwt" | "urn:ietf:params:oauth:token-type:access_token" | "urn:ietf:params:oauth:token-type:refresh_token" | "urn:ietf:params:oauth:token-type:id_token" | "urn:ietf:params:oauth:token-type:saml1" | "urn:ietf:params:oauth:token-type:saml2" | "DEVICE_CODE" | "TOKEN_EXCHANGE" | "JWT_BEARER"
```