# GrantMApiRequest

## Example Usage

```typescript
import { GrantMApiRequest } from "authlete/models/operations";

let value: GrantMApiRequest = {
  serviceId: "<id>",
  gMRequest: {},
};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `serviceId`                                   | *string*                                      | :heavy_check_mark:                            | A service ID.                                 |
| `gMRequest`                                   | [models.GMRequest](../../models/gmrequest.md) | :heavy_check_mark:                            | N/A                                           |