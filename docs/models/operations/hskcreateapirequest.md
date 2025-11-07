# HskCreateApiRequest

## Example Usage

```typescript
import { HskCreateApiRequest } from "@authlete/authlete-typescript-sdk/models/operations";

let value: HskCreateApiRequest = {
  serviceId: "<id>",
  hskCreateRequest: {},
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `serviceId`                                                 | *string*                                                    | :heavy_check_mark:                                          | A service ID.                                               |
| `hskCreateRequest`                                          | [models.HskCreateRequest](../../models/hskcreaterequest.md) | :heavy_check_mark:                                          | N/A                                                         |