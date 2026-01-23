# AuthorizationTicketInfoRequest

## Example Usage

```typescript
import { AuthorizationTicketInfoRequest } from "@big76/test-sdk/models";

let value: AuthorizationTicketInfoRequest = {
  ticket: "<value>",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `ticket`                                                            | *string*                                                            | :heavy_check_mark:                                                  | The ticket that has been issued from the `/auth/authorization` API. |