# TokenRevokeResponse

## Example Usage

```typescript
import { TokenRevokeResponse } from "@authlete/authlete-typescript-sdk/models";

let value: TokenRevokeResponse = {};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `resultCode`                                               | *string*                                                   | :heavy_minus_sign:                                         | The code which represents the result of the API call.      |
| `resultMessage`                                            | *string*                                                   | :heavy_minus_sign:                                         | A short message which explains the result of the API call. |
| `count`                                                    | *number*                                                   | :heavy_minus_sign:                                         | The number of tokens revoked                               |