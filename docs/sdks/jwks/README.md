# Jwks
(*jwks*)

## Overview

### Available Operations

* [get](#get) - Get JWK Set

## get

This API gathers JWK Set information for a service so that its client applications can verify
signatures by the service and encrypt their requests to the service.

<br>
<details>
<summary>Description</summary>

This API is supposed to be called from within the implementation of the jwk set endpoint of the
service where the service that supports OpenID Connect must expose its JWK Set information so that
client applications can verify signatures by the service and encrypt their requests to the service.
The URI of the endpoint can be found as the value of `jwks_uri` in [OpenID Provider Metadata](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata)
if the service supports [OpenID Connect Discovery 1.0](https://openid.net/specs/openid-connect-discovery-1_0.html).

</details>


### Example Usage

<!-- UsageSnippet language="typescript" operationID="service_jwks_get_api" method="get" path="/api/{serviceId}/service/jwks/get" -->
```typescript
import { Authlete } from "authlete";

const authlete = new Authlete({
  security: {
    authlete: process.env["AUTHLETE_AUTHLETE"] ?? "",
  },
});

async function run() {
  const result = await authlete.jwks.get({
    serviceId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AuthleteCore } from "authlete/core.js";
import { jwksGet } from "authlete/funcs/jwksGet.js";

// Use `AuthleteCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const authlete = new AuthleteCore({
  security: {
    authlete: process.env["AUTHLETE_AUTHLETE"] ?? "",
  },
});

async function run() {
  const res = await jwksGet(authlete, {
    serviceId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("jwksGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ServiceJwksGetApiRequest](../../models/operations/servicejwksgetapirequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ServiceJwksGetResponse](../../models/servicejwksgetresponse.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ResultError          | 400, 401, 403               | application/json            |
| errors.ResultError          | 500                         | application/json            |
| errors.AuthleteDefaultError | 4XX, 5XX                    | \*/\*                       |