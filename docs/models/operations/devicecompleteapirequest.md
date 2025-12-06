# DeviceCompleteApiRequest

## Example Usage

```typescript
import { DeviceCompleteApiRequest } from "@big76/test-sdk/models/operations";

let value: DeviceCompleteApiRequest = {
  serviceId: "<id>",
  deviceCompleteRequest: {
    userCode: "<value>",
    result: "AUTHORIZED",
    subject: "<value>",
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `serviceId`                                                           | *string*                                                              | :heavy_check_mark:                                                    | A service ID.                                                         |
| `deviceCompleteRequest`                                               | [models.DeviceCompleteRequest](../../models/devicecompleterequest.md) | :heavy_check_mark:                                                    | N/A                                                                   |