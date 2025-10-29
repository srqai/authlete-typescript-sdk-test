# ClientGrantedScopesGetApiRequest

## Example Usage

```typescript
import { ClientGrantedScopesGetApiRequest } from "authlete/models/operations";

let value: ClientGrantedScopesGetApiRequest = {
  serviceId: "<id>",
  clientId: "<id>",
  subjectPathParameter: "<value>",
  subjectQueryParameter: "<value>",
};
```

## Fields

| Field                           | Type                            | Required                        | Description                     |
| ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- |
| `serviceId`                     | *string*                        | :heavy_check_mark:              | A service ID.                   |
| `clientId`                      | *string*                        | :heavy_check_mark:              | A client ID.<br/>               |
| `subjectPathParameter`          | *string*                        | :heavy_check_mark:              | Unique user ID of an end-user.<br/> |
| `subjectQueryParameter`         | *string*                        | :heavy_check_mark:              | Unique user ID of an end-user.<br/> |