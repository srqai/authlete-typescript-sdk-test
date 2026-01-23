# ClientFlagUpdateApiRequest

## Example Usage

```typescript
import { ClientFlagUpdateApiRequest } from "@big76/test-sdk/models/operations";

let value: ClientFlagUpdateApiRequest = {
  serviceId: "<id>",
  clientIdentifier: "<value>",
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `serviceId`                                                               | *string*                                                                  | :heavy_check_mark:                                                        | A service ID.                                                             |
| `clientIdentifier`                                                        | *string*                                                                  | :heavy_check_mark:                                                        | A client ID.                                                              |
| `clientFlagUpdateRequest`                                                 | [models.ClientFlagUpdateRequest](../../models/clientflagupdaterequest.md) | :heavy_minus_sign:                                                        | N/A                                                                       |