# TokenFailRequest

## Example Usage

```typescript
import { TokenFailRequest } from "test-sdk/models";

let value: TokenFailRequest = {
  ticket: "<value>",
  reason: "INVALID_TARGET",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `ticket`                                                             | *string*                                                             | :heavy_check_mark:                                                   | The ticket issued from Authlete `/auth/token` API.<br/>              |
| `reason`                                                             | [models.TokenFailRequestReason](../models/tokenfailrequestreason.md) | :heavy_check_mark:                                                   | The reason of the failure of the token request.<br/>                 |