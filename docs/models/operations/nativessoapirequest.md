# NativeSsoApiRequest

## Example Usage

```typescript
import { NativeSsoApiRequest } from "authlete/models/operations";

let value: NativeSsoApiRequest = {
  serviceId: "<id>",
  nativeSsoRequest: {
    accessToken: "<value>",
    deviceSecret: "<value>",
  },
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `serviceId`                                                 | *string*                                                    | :heavy_check_mark:                                          | A service ID.                                               |
| `nativeSsoRequest`                                          | [models.NativeSsoRequest](../../models/nativessorequest.md) | :heavy_check_mark:                                          | N/A                                                         |