# ClientAuthorizationGetListApiRequest

## Example Usage

```typescript
import { ClientAuthorizationGetListApiRequest } from "authlete-test/models/operations";

let value: ClientAuthorizationGetListApiRequest = {
  serviceId: "<id>",
  subjectPathParameter: "<value>",
  subjectQueryParameter: "<value>",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `serviceId`                                                        | *string*                                                           | :heavy_check_mark:                                                 | A service ID.                                                      |
| `subjectPathParameter`                                             | *string*                                                           | :heavy_check_mark:                                                 | Unique user ID of an end-user.<br/>                                |
| `subjectQueryParameter`                                            | *string*                                                           | :heavy_check_mark:                                                 | Unique user ID of an end-user.<br/>                                |
| `developer`                                                        | *string*                                                           | :heavy_minus_sign:                                                 | Unique ID of a client developer.<br/>                              |
| `start`                                                            | *number*                                                           | :heavy_minus_sign:                                                 | Start index of search results (inclusive). The default value is 0. |
| `end`                                                              | *number*                                                           | :heavy_minus_sign:                                                 | End index of search results (exclusive). The default value is 5.<br/> |