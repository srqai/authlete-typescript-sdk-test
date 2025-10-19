# AuthTokenIssueApiRequest

## Example Usage

```typescript
import { AuthTokenIssueApiRequest } from "authlete-test/models/operations";

let value: AuthTokenIssueApiRequest = {
  serviceId: "<id>",
  tokenIssueRequest: {
    ticket: "<value>",
    subject: "<value>",
  },
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `serviceId`                                                   | *string*                                                      | :heavy_check_mark:                                            | A service ID.                                                 |
| `tokenIssueRequest`                                           | [models.TokenIssueRequest](../../models/tokenissuerequest.md) | :heavy_check_mark:                                            | N/A                                                           |