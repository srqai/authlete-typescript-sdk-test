# HskGetListResponse

## Example Usage

```typescript
import { HskGetListResponse } from "@big76/test-sdk/models";

let value: HskGetListResponse = {};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `resultCode`                                                             | *string*                                                                 | :heavy_minus_sign:                                                       | The code which represents the result of the API call.                    |
| `resultMessage`                                                          | *string*                                                                 | :heavy_minus_sign:                                                       | A short message which explains the result of the API call.               |
| `action`                                                                 | [models.HskGetListResponseAction](../models/hskgetlistresponseaction.md) | :heavy_minus_sign:                                                       | Result of the API call                                                   |
| `hsks`                                                                   | [models.Hsk](../models/hsk.md)[]                                         | :heavy_minus_sign:                                                       | List of HSK                                                              |