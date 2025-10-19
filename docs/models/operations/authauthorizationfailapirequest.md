# AuthAuthorizationFailApiRequest

## Example Usage

```typescript
import { AuthAuthorizationFailApiRequest } from "authlete-test/models/operations";

let value: AuthAuthorizationFailApiRequest = {
  serviceId: "<id>",
  authorizationFailRequest: {
    ticket: "<value>",
    reason: "CONSENT_REQUIRED",
  },
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `serviceId`                                                                 | *string*                                                                    | :heavy_check_mark:                                                          | A service ID.                                                               |
| `authorizationFailRequest`                                                  | [models.AuthorizationFailRequest](../../models/authorizationfailrequest.md) | :heavy_check_mark:                                                          | N/A                                                                         |