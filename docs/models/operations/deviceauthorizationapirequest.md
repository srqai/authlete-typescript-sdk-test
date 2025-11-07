# DeviceAuthorizationApiRequest

## Example Usage

```typescript
import { DeviceAuthorizationApiRequest } from "authlete-typescript-sdk/models/operations";

let value: DeviceAuthorizationApiRequest = {
  serviceId: "<id>",
  deviceAuthorizationRequest: {
    parameters: "<value>",
  },
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `serviceId`                                                                     | *string*                                                                        | :heavy_check_mark:                                                              | A service ID.                                                                   |
| `deviceAuthorizationRequest`                                                    | [models.DeviceAuthorizationRequest](../../models/deviceauthorizationrequest.md) | :heavy_check_mark:                                                              | N/A                                                                             |