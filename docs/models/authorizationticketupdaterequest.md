# AuthorizationTicketUpdateRequest

## Example Usage

```typescript
import { AuthorizationTicketUpdateRequest } from "@authlete/typescript-sdk/models";

let value: AuthorizationTicketUpdateRequest = {
  ticket: "<value>",
  info: "<value>",
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `ticket`                          | *string*                          | :heavy_check_mark:                | The ticket.                       |
| `info`                            | *string*                          | :heavy_check_mark:                | The information about the ticket. |