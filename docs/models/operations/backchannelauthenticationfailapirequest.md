# BackchannelAuthenticationFailApiRequest

## Example Usage

```typescript
import { BackchannelAuthenticationFailApiRequest } from "authlete/models/operations";

let value: BackchannelAuthenticationFailApiRequest = {
  serviceId: "<id>",
  backchannelAuthenticationFailRequest: {
    ticket: "<value>",
    reason: "EXPIRED_LOGIN_HINT_TOKEN",
  },
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `serviceId`                                                                                         | *string*                                                                                            | :heavy_check_mark:                                                                                  | A service ID.                                                                                       |
| `backchannelAuthenticationFailRequest`                                                              | [models.BackchannelAuthenticationFailRequest](../../models/backchannelauthenticationfailrequest.md) | :heavy_check_mark:                                                                                  | N/A                                                                                                 |