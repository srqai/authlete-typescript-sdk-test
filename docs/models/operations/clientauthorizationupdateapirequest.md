# ClientAuthorizationUpdateApiRequest

## Example Usage

```typescript
import { ClientAuthorizationUpdateApiRequest } from "authlete-test/models/operations";

let value: ClientAuthorizationUpdateApiRequest = {
  serviceId: "<id>",
  clientId: "<id>",
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `serviceId`                                                                                 | *string*                                                                                    | :heavy_check_mark:                                                                          | A service ID.                                                                               |
| `clientId`                                                                                  | *string*                                                                                    | :heavy_check_mark:                                                                          | A client ID.<br/>                                                                           |
| `clientAuthorizationUpdateRequest`                                                          | [models.ClientAuthorizationUpdateRequest](../../models/clientauthorizationupdaterequest.md) | :heavy_minus_sign:                                                                          | N/A                                                                                         |