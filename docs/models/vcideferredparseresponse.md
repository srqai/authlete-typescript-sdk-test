# VciDeferredParseResponse

## Example Usage

```typescript
import { VciDeferredParseResponse } from "test-sdk/models";

let value: VciDeferredParseResponse = {};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `resultCode`                                                                         | *string*                                                                             | :heavy_minus_sign:                                                                   | The code which represents the result of the API call.                                |
| `resultMessage`                                                                      | *string*                                                                             | :heavy_minus_sign:                                                                   | A short message which explains the result of the API call.                           |
| `action`                                                                             | [models.VciDeferredParseResponseAction](../models/vcideferredparseresponseaction.md) | :heavy_minus_sign:                                                                   | The next action that the deferred credential endpoint should take.                   |
| `responseContent`                                                                    | *string*                                                                             | :heavy_minus_sign:                                                                   | The content of the response to the request sender.                                   |
| `info`                                                                               | [models.CredentialRequestInfo](../models/credentialrequestinfo.md)                   | :heavy_minus_sign:                                                                   | N/A                                                                                  |