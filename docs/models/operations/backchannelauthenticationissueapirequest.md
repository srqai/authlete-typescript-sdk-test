# BackchannelAuthenticationIssueApiRequest

## Example Usage

```typescript
import { BackchannelAuthenticationIssueApiRequest } from "@authlete/authlete-typescript-sdk/models/operations";

let value: BackchannelAuthenticationIssueApiRequest = {
  serviceId: "<id>",
  backchannelAuthenticationIssueRequest: {
    ticket: "<value>",
  },
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `serviceId`                                                                                           | *string*                                                                                              | :heavy_check_mark:                                                                                    | A service ID.                                                                                         |
| `backchannelAuthenticationIssueRequest`                                                               | [models.BackchannelAuthenticationIssueRequest](../../models/backchannelauthenticationissuerequest.md) | :heavy_check_mark:                                                                                    | N/A                                                                                                   |