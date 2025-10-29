# AuthAuthorizationApiRequest

## Example Usage

```typescript
import { AuthAuthorizationApiRequest } from "authlete/models/operations";

let value: AuthAuthorizationApiRequest = {
  serviceId: "<id>",
  authorizationRequest: {
    parameters: "<value>",
  },
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `serviceId`                                                         | *string*                                                            | :heavy_check_mark:                                                  | A service ID.                                                       |
| `authorizationRequest`                                              | [models.AuthorizationRequest](../../models/authorizationrequest.md) | :heavy_check_mark:                                                  | N/A                                                                 |