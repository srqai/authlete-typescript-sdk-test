# ClientRegistrationDeleteApiRequestBody

## Example Usage

```typescript
import { ClientRegistrationDeleteApiRequestBody } from "test-sdk/models/operations";

let value: ClientRegistrationDeleteApiRequestBody = {
  token: "<value>",
  clientId: "<id>",
};
```

## Fields

| Field                                                                                                                                                          | Type                                                                                                                                                           | Required                                                                                                                                                       | Description                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `json`                                                                                                                                                         | *string*                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                             | Client metadata in JSON format that complies with [RFC 7591](https://datatracker.ietf.org/doc/html/rfc7591)<br/>(OAuth 2.0 Dynamic Client Registration Protocol).<br/> |
| `token`                                                                                                                                                        | *string*                                                                                                                                                       | :heavy_check_mark:                                                                                                                                             | The client registration access token. Used only for GET, UPDATE, and DELETE requests.<br/>                                                                     |
| `clientId`                                                                                                                                                     | *string*                                                                                                                                                       | :heavy_check_mark:                                                                                                                                             | The client's identifier. Used for GET, UPDATE, and DELETE requests<br/>                                                                                        |