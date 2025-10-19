# TrustAnchor

## Example Usage

```typescript
import { TrustAnchor } from "authlete-test/models";

let value: TrustAnchor = {};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `entityId`                                                       | *string*                                                         | :heavy_minus_sign:                                               | the entity ID of the trust anchor<br/>                           |
| `jwks`                                                           | *string*                                                         | :heavy_minus_sign:                                               | the JWK Set document containing public keys of the trust anchor<br/> |