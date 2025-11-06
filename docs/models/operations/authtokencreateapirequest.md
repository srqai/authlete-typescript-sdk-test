# AuthTokenCreateApiRequest

## Example Usage

```typescript
import { AuthTokenCreateApiRequest } from "authlete/models/operations";

let value: AuthTokenCreateApiRequest = {
  serviceId: "<id>",
  tokenCreateRequest: {
    grantType: "DEVICE_CODE",
    clientId: 622368,
  },
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `serviceId`                                                     | *string*                                                        | :heavy_check_mark:                                              | A service ID.                                                   |
| `tokenCreateRequest`                                            | [models.TokenCreateRequest](../../models/tokencreaterequest.md) | :heavy_check_mark:                                              | N/A                                                             |