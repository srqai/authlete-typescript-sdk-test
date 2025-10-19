# AuthTokenApiRequest

## Example Usage

```typescript
import { AuthTokenApiRequest } from "authlete-test/models/operations";

let value: AuthTokenApiRequest = {
  serviceId: "<id>",
  tokenRequest: {
    parameters: "<value>",
  },
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `serviceId`                                         | *string*                                            | :heavy_check_mark:                                  | A service ID.                                       |
| `tokenRequest`                                      | [models.TokenRequest](../../models/tokenrequest.md) | :heavy_check_mark:                                  | N/A                                                 |