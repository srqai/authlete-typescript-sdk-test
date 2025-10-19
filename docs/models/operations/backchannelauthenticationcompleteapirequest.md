# BackchannelAuthenticationCompleteApiRequest

## Example Usage

```typescript
import { BackchannelAuthenticationCompleteApiRequest } from "authlete-test/models/operations";

let value: BackchannelAuthenticationCompleteApiRequest = {
  serviceId: "<id>",
  backchannelAuthenticationCompleteRequest: {
    ticket: "<value>",
    result: "TRANSACTION_FAILED",
    subject: "<value>",
  },
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `serviceId`                                                                                                 | *string*                                                                                                    | :heavy_check_mark:                                                                                          | A service ID.                                                                                               |
| `backchannelAuthenticationCompleteRequest`                                                                  | [models.BackchannelAuthenticationCompleteRequest](../../models/backchannelauthenticationcompleterequest.md) | :heavy_check_mark:                                                                                          | N/A                                                                                                         |