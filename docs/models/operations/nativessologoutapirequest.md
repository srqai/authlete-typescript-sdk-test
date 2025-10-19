# NativeSsoLogoutApiRequest

## Example Usage

```typescript
import { NativeSsoLogoutApiRequest } from "authlete-test/models/operations";

let value: NativeSsoLogoutApiRequest = {
  serviceId: "<id>",
  nativeSsoLogoutRequest: {
    sessionId: "<id>",
  },
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `serviceId`                                                             | *string*                                                                | :heavy_check_mark:                                                      | A service ID.                                                           |
| `nativeSsoLogoutRequest`                                                | [models.NativeSsoLogoutRequest](../../models/nativessologoutrequest.md) | :heavy_check_mark:                                                      | N/A                                                                     |