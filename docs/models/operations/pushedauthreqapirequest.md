# PushedAuthReqApiRequest

## Example Usage

```typescript
import { PushedAuthReqApiRequest } from "authlete/models/operations";

let value: PushedAuthReqApiRequest = {
  serviceId: "<id>",
  pushedAuthorizationRequest: {
    parameters: "<value>",
  },
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `serviceId`                                                                     | *string*                                                                        | :heavy_check_mark:                                                              | A service ID.                                                                   |
| `pushedAuthorizationRequest`                                                    | [models.PushedAuthorizationRequest](../../models/pushedauthorizationrequest.md) | :heavy_check_mark:                                                              | N/A                                                                             |