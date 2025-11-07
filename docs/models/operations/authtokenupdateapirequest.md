# AuthTokenUpdateApiRequest

## Example Usage

```typescript
import { AuthTokenUpdateApiRequest } from "@authlete/authlete-typescript-sdk/models/operations";

let value: AuthTokenUpdateApiRequest = {
  serviceId: "<id>",
  tokenUpdateRequest: {
    accessToken: "<value>",
  },
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `serviceId`                                                     | *string*                                                        | :heavy_check_mark:                                              | A service ID.                                                   |
| `tokenUpdateRequest`                                            | [models.TokenUpdateRequest](../../models/tokenupdaterequest.md) | :heavy_check_mark:                                              | N/A                                                             |