# ClientGrantedScopesGetApiRequest

## Example Usage

```typescript
import { ClientGrantedScopesGetApiRequest } from "authlete-beta/models/operations";

let value: ClientGrantedScopesGetApiRequest = {
  serviceId: "715948317",
  clientId: "1140735077",
  subjectPathParameter: "<value>",
  subjectQueryParameter: "<value>",
};
```

## Fields

| Field                           | Type                            | Required                        | Description                     | Example                         |
| ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- |
| `serviceId`                     | *string*                        | :heavy_check_mark:              | A service ID.                   | 715948317                       |
| `clientId`                      | *string*                        | :heavy_check_mark:              | A client ID.<br/>               | 1140735077                      |
| `subjectPathParameter`          | *string*                        | :heavy_check_mark:              | Unique user ID of an end-user.<br/> |                                 |
| `subjectQueryParameter`         | *string*                        | :heavy_check_mark:              | Unique user ID of an end-user.<br/> |                                 |