# VciDeferredParseRequest

## Example Usage

```typescript
import { VciDeferredParseRequest } from "authlete/models";

let value: VciDeferredParseRequest = {};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `accessToken`                                                          | *string*                                                               | :heavy_minus_sign:                                                     | The access token that came along with the deferred credential request. |
| `requestContent`                                                       | *string*                                                               | :heavy_minus_sign:                                                     | The message body of the deferred credential request.                   |