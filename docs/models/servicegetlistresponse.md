# ServiceGetListResponse

## Example Usage

```typescript
import { ServiceGetListResponse } from "authlete/models";

let value: ServiceGetListResponse = {};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `start`                                                                                                                   | *number*                                                                                                                  | :heavy_minus_sign:                                                                                                        | Start index (inclusive) of the result set. The default value is 0. Must not be a negative<br/>number.<br/>                |
| `end`                                                                                                                     | *number*                                                                                                                  | :heavy_minus_sign:                                                                                                        | Start index (inclusive) of the result set. The default value is 0. Must not be a negative<br/>number.<br/>                |
| `totalCount`                                                                                                              | *number*                                                                                                                  | :heavy_minus_sign:                                                                                                        | Total number of services owned by the service owner. This doesn't mean the number of services<br/>contained in the response.<br/> |
| `services`                                                                                                                | [models.Service](../models/service.md)[]                                                                                  | :heavy_minus_sign:                                                                                                        | An array of services.<br/>                                                                                                |