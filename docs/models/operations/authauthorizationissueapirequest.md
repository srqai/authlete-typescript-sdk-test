# AuthAuthorizationIssueApiRequest

## Example Usage

```typescript
import { AuthAuthorizationIssueApiRequest } from "test-sdk/models/operations";

let value: AuthAuthorizationIssueApiRequest = {
  serviceId: "<id>",
  authorizationIssueRequest: {
    ticket: "<value>",
    subject: "<value>",
  },
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `serviceId`                                                                   | *string*                                                                      | :heavy_check_mark:                                                            | A service ID.                                                                 |
| `authorizationIssueRequest`                                                   | [models.AuthorizationIssueRequest](../../models/authorizationissuerequest.md) | :heavy_check_mark:                                                            | N/A                                                                           |