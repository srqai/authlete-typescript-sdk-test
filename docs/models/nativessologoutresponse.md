# NativeSsoLogoutResponse

## Example Usage

```typescript
import { NativeSsoLogoutResponse } from "@big76/test-sdk/models";

let value: NativeSsoLogoutResponse = {};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `resultCode`                                                                       | *string*                                                                           | :heavy_minus_sign:                                                                 | The code which represents the result of the API call.                              |
| `resultMessage`                                                                    | *string*                                                                           | :heavy_minus_sign:                                                                 | A short message which explains the result of the API call.                         |
| `action`                                                                           | [models.NativeSsoLogoutResponseAction](../models/nativessologoutresponseaction.md) | :heavy_minus_sign:                                                                 | The next action that the API caller should take.<br/>                              |
| `count`                                                                            | *number*                                                                           | :heavy_minus_sign:                                                                 | The number of deleted access/refresh token records.<br/>                           |