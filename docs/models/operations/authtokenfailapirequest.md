# AuthTokenFailApiRequest

## Example Usage

```typescript
import { AuthTokenFailApiRequest } from "authlete-test/models/operations";

let value: AuthTokenFailApiRequest = {
  serviceId: "<id>",
  tokenFailRequest: {
    ticket: "<value>",
    reason: "INVALID_RESOURCE_OWNER_CREDENTIALS",
  },
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `serviceId`                                                 | *string*                                                    | :heavy_check_mark:                                          | A service ID.                                               |
| `tokenFailRequest`                                          | [models.TokenFailRequest](../../models/tokenfailrequest.md) | :heavy_check_mark:                                          | N/A                                                         |