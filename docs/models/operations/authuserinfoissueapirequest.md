# AuthUserinfoIssueApiRequest

## Example Usage

```typescript
import { AuthUserinfoIssueApiRequest } from "test-sdk/models/operations";

let value: AuthUserinfoIssueApiRequest = {
  serviceId: "<id>",
  userinfoIssueRequest: {
    token: "<value>",
  },
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `serviceId`                                                         | *string*                                                            | :heavy_check_mark:                                                  | A service ID.                                                       |
| `userinfoIssueRequest`                                              | [models.UserinfoIssueRequest](../../models/userinfoissuerequest.md) | :heavy_check_mark:                                                  | N/A                                                                 |