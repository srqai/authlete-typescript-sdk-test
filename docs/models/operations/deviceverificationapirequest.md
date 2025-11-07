# DeviceVerificationApiRequest

## Example Usage

```typescript
import { DeviceVerificationApiRequest } from "@authlete/authlete-typescript-sdk/models/operations";

let value: DeviceVerificationApiRequest = {
  serviceId: "<id>",
  deviceVerificationRequest: {
    userCode: "<value>",
  },
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `serviceId`                                                                   | *string*                                                                      | :heavy_check_mark:                                                            | A service ID.                                                                 |
| `deviceVerificationRequest`                                                   | [models.DeviceVerificationRequest](../../models/deviceverificationrequest.md) | :heavy_check_mark:                                                            | N/A                                                                           |