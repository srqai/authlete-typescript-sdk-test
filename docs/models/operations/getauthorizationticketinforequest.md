# GetAuthorizationTicketInfoRequest

## Example Usage

```typescript
import { GetAuthorizationTicketInfoRequest } from "authlete/models/operations";

let value: GetAuthorizationTicketInfoRequest = {
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