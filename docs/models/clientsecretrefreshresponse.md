# ClientSecretRefreshResponse

## Example Usage

```typescript
import { ClientSecretRefreshResponse } from "authlete-beta/models";

let value: ClientSecretRefreshResponse = {};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `resultCode`                                               | *string*                                                   | :heavy_minus_sign:                                         | The code which represents the result of the API call.      |
| `resultMessage`                                            | *string*                                                   | :heavy_minus_sign:                                         | A short message which explains the result of the API call. |
| `newClientSecret`                                          | *string*                                                   | :heavy_minus_sign:                                         | The new client secret.<br/>                                |
| `oldClientSecret`                                          | *string*                                                   | :heavy_minus_sign:                                         | The old client secret.<br/>                                |