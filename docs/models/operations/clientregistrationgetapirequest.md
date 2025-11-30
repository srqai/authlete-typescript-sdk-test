# ClientRegistrationGetApiRequest

## Example Usage

```typescript
import { ClientRegistrationGetApiRequest } from "@big76/test-sdk/models/operations";

let value: ClientRegistrationGetApiRequest = {
  serviceId: "<id>",
  requestBody: {
    token: "<value>",
    clientId: "<id>",
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `serviceId`                                                                                                      | *string*                                                                                                         | :heavy_check_mark:                                                                                               | A service ID.                                                                                                    |
| `requestBody`                                                                                                    | [operations.ClientRegistrationGetApiRequestBody](../../models/operations/clientregistrationgetapirequestbody.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |