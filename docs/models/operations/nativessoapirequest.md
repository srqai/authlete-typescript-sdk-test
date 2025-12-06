# NativeSsoApiRequest

## Example Usage

```typescript
import { NativeSsoApiRequest } from "@big76/test-sdk/models/operations";

let value: NativeSsoApiRequest = {
  serviceId: "715948317",
  nativeSsoRequest: {
    accessToken: "<value>",
    deviceSecret: "<value>",
  },
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 | Example                                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `serviceId`                                                 | *string*                                                    | :heavy_check_mark:                                          | A service ID.                                               | 715948317                                                   |
| `nativeSsoRequest`                                          | [models.NativeSsoRequest](../../models/nativessorequest.md) | :heavy_check_mark:                                          | N/A                                                         |                                                             |