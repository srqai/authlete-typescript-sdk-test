# AuthIntrospectionApiRequest

## Example Usage

```typescript
import { AuthIntrospectionApiRequest } from "@big76/test-sdk/models/operations";

let value: AuthIntrospectionApiRequest = {
  serviceId: "<id>",
  introspectionRequest: {
    token: "<value>",
  },
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `serviceId`                                                         | *string*                                                            | :heavy_check_mark:                                                  | A service ID.                                                       |
| `introspectionRequest`                                              | [models.IntrospectionRequest](../../models/introspectionrequest.md) | :heavy_check_mark:                                                  | N/A                                                                 |