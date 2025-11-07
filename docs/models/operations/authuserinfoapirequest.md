# AuthUserinfoApiRequest

## Example Usage

```typescript
import { AuthUserinfoApiRequest } from "@authlete/authlete-typescript-sdk/models/operations";

let value: AuthUserinfoApiRequest = {
  serviceId: "<id>",
  userinfoRequest: {
    token: "<value>",
  },
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `serviceId`                                               | *string*                                                  | :heavy_check_mark:                                        | A service ID.                                             |
| `userinfoRequest`                                         | [models.UserinfoRequest](../../models/userinforequest.md) | :heavy_check_mark:                                        | N/A                                                       |