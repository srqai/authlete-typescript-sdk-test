# VciJwtissuerApiRequest

## Example Usage

```typescript
import { VciJwtissuerApiRequest } from "authlete-beta/models/operations";

let value: VciJwtissuerApiRequest = {
  serviceId: "<id>",
  vciJwtissuerRequest: {
    pretty: false,
  },
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `serviceId`                                                       | *string*                                                          | :heavy_check_mark:                                                | A service ID.                                                     |
| `vciJwtissuerRequest`                                             | [models.VciJwtissuerRequest](../../models/vcijwtissuerrequest.md) | :heavy_check_mark:                                                | N/A                                                               |