# AuthIntrospectionStandardApiRequest

## Example Usage

```typescript
import { AuthIntrospectionStandardApiRequest } from "authlete-beta/models/operations";

let value: AuthIntrospectionStandardApiRequest = {
  serviceId: "<id>",
  standardIntrospectionRequest: {
    parameters: "<value>",
  },
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `serviceId`                                                                         | *string*                                                                            | :heavy_check_mark:                                                                  | A service ID.                                                                       |
| `standardIntrospectionRequest`                                                      | [models.StandardIntrospectionRequest](../../models/standardintrospectionrequest.md) | :heavy_check_mark:                                                                  | N/A                                                                                 |