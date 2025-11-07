# AuthorizationTicketInfoPostApiRequest

## Example Usage

```typescript
import { AuthorizationTicketInfoPostApiRequest } from "@authlete/typescript-sdk/models/operations";

let value: AuthorizationTicketInfoPostApiRequest = {
  serviceId: "<id>",
  authorizationTicketInfoRequest: {
    ticket: "<value>",
  },
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `serviceId`                                                                             | *string*                                                                                | :heavy_check_mark:                                                                      | A service ID.                                                                           |
| `authorizationTicketInfoRequest`                                                        | [models.AuthorizationTicketInfoRequest](../../models/authorizationticketinforequest.md) | :heavy_check_mark:                                                                      | N/A                                                                                     |