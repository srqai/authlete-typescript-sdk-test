# VciSingleParseResponse

## Example Usage

```typescript
import { VciSingleParseResponse } from "authlete/models";

let value: VciSingleParseResponse = {};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `resultCode`                                                                     | *string*                                                                         | :heavy_minus_sign:                                                               | The code which represents the result of the API call.                            |
| `resultMessage`                                                                  | *string*                                                                         | :heavy_minus_sign:                                                               | A short message which explains the result of the API call.                       |
| `action`                                                                         | [models.VciSingleParseResponseAction](../models/vcisingleparseresponseaction.md) | :heavy_minus_sign:                                                               | The next action that the credential endpoint should take.                        |
| `responseContent`                                                                | *string*                                                                         | :heavy_minus_sign:                                                               | The content of the response to the request sender.                               |
| `info`                                                                           | [models.CredentialRequestInfo](../models/credentialrequestinfo.md)               | :heavy_minus_sign:                                                               | N/A                                                                              |