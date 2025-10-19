# BackchannelAuthenticationApiRequest

## Example Usage

```typescript
import { BackchannelAuthenticationApiRequest } from "authlete-test/models/operations";

let value: BackchannelAuthenticationApiRequest = {
  serviceId: "<id>",
  backchannelAuthenticationRequest: {
    parameters: "<value>",
  },
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `serviceId`                                                                                 | *string*                                                                                    | :heavy_check_mark:                                                                          | A service ID.                                                                               |
| `backchannelAuthenticationRequest`                                                          | [models.BackchannelAuthenticationRequest](../../models/backchannelauthenticationrequest.md) | :heavy_check_mark:                                                                          | N/A                                                                                         |