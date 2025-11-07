# VciMetadataApiRequest

## Example Usage

```typescript
import { VciMetadataApiRequest } from "authlete-beta/models/operations";

let value: VciMetadataApiRequest = {
  serviceId: "<id>",
  vciMetadataRequest: {
    pretty: false,
  },
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `serviceId`                                                     | *string*                                                        | :heavy_check_mark:                                              | A service ID.                                                   |
| `vciMetadataRequest`                                            | [models.VciMetadataRequest](../../models/vcimetadatarequest.md) | :heavy_check_mark:                                              | N/A                                                             |