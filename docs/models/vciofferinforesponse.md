# VciOfferInfoResponse

## Example Usage

```typescript
import { VciOfferInfoResponse } from "@big76/test-sdk/models";

let value: VciOfferInfoResponse = {};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `resultCode`                                                                 | *string*                                                                     | :heavy_minus_sign:                                                           | The code which represents the result of the API call.                        |
| `resultMessage`                                                              | *string*                                                                     | :heavy_minus_sign:                                                           | A short message which explains the result of the API call.                   |
| `action`                                                                     | [models.VciOfferInfoResponseAction](../models/vciofferinforesponseaction.md) | :heavy_minus_sign:                                                           | The result of the `/vci/offer/info` API call.                                |
| `info`                                                                       | [models.CredentialOfferInfo](../models/credentialofferinfo.md)               | :heavy_minus_sign:                                                           | N/A                                                                          |