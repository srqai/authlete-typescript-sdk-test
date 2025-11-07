# TokenGetListResponse

## Example Usage

```typescript
import { TokenGetListResponse } from "@authlete/authlete-typescript-sdk/models";

let value: TokenGetListResponse = {};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `start`                                            | *number*                                           | :heavy_minus_sign:                                 | Start index of search results (inclusive).<br/>    |
| `end`                                              | *number*                                           | :heavy_minus_sign:                                 | End index of search results (exclusive).<br/>      |
| `totalCount`                                       | *number*                                           | :heavy_minus_sign:                                 | Unique ID of a client developer.<br/>              |
| `client`                                           | [models.ClientLimited](../models/clientlimited.md) | :heavy_minus_sign:                                 | N/A                                                |
| `subject`                                          | *string*                                           | :heavy_minus_sign:                                 | Unique user ID of an end-user.<br/>                |
| `accessTokens`                                     | [models.AccessToken](../models/accesstoken.md)[]   | :heavy_minus_sign:                                 | An array of access tokens.<br/>                    |