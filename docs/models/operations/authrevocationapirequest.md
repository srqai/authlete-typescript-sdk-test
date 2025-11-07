# AuthRevocationApiRequest

## Example Usage

```typescript
import { AuthRevocationApiRequest } from "authlete-beta/models/operations";

let value: AuthRevocationApiRequest = {
  serviceId: "<id>",
  revocationRequest: {
    parameters: "<value>",
  },
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `serviceId`                                                   | *string*                                                      | :heavy_check_mark:                                            | A service ID.                                                 |
| `revocationRequest`                                           | [models.RevocationRequest](../../models/revocationrequest.md) | :heavy_check_mark:                                            | N/A                                                           |