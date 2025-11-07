# VciBatchParseRequest

## Example Usage

```typescript
import { VciBatchParseRequest } from "authlete-typescript-sdk/models";

let value: VciBatchParseRequest = {};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `accessToken`                                                 | *string*                                                      | :heavy_minus_sign:                                            | The access token that came along with the credential request. |
| `requestContent`                                              | *string*                                                      | :heavy_minus_sign:                                            | The message body of the batch credential request.             |