# VciOfferCreateResponse

## Example Usage

```typescript
import { VciOfferCreateResponse } from "@authlete/authlete-typescript-sdk/models";

let value: VciOfferCreateResponse = {};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `resultCode`                                                                     | *string*                                                                         | :heavy_minus_sign:                                                               | The code which represents the result of the API call.                            |
| `resultMessage`                                                                  | *string*                                                                         | :heavy_minus_sign:                                                               | A short message which explains the result of the API call.                       |
| `action`                                                                         | [models.VciOfferCreateResponseAction](../models/vcioffercreateresponseaction.md) | :heavy_minus_sign:                                                               | The result of the `/vci/offer/create` API call.                                  |
| `info`                                                                           | [models.CredentialOfferInfo](../models/credentialofferinfo.md)                   | :heavy_minus_sign:                                                               | N/A                                                                              |