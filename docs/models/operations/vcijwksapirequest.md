# VciJwksApiRequest

## Example Usage

```typescript
import { VciJwksApiRequest } from "authlete-typescript-sdk/models/operations";

let value: VciJwksApiRequest = {
  serviceId: "<id>",
  vciJwksRequest: {
    pretty: false,
  },
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `serviceId`                                             | *string*                                                | :heavy_check_mark:                                      | A service ID.                                           |
| `vciJwksRequest`                                        | [models.VciJwksRequest](../../models/vcijwksrequest.md) | :heavy_check_mark:                                      | N/A                                                     |