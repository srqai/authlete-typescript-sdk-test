# FederationEndpoint
(*federationEndpoint*)

## Overview

### Available Operations

* [processConfiguration](#processconfiguration) - Process Entity Configuration Request

## processConfiguration

This API gathers the federation configuration about a service.
The authorization server implementation should
retrieve the value of the `action`
response parameter from the API response and take the following steps
according to the value.
### `OK`
When the value of the  `action` response
parameter is `OK`, it means that Authlete
could prepare an entity configuration successfully.
In this case, the implementation of the entity configuration endpoint of the
authorization server should return an HTTP response to the client application
with the HTTP status code "`200 OK`" and the content type
"`application/entity-statement+jwt`". The message body (= an entity
configuration in the JWT format) of the response has been prepared by
Authlete's `/federation/configuration` API and it is available as the
`responseContent` response parameter.
The implementation of the entity configuration endpoint can construct an
HTTP response by doing like below.
```
200 OK
Content-Type: application/entity-statement+jwt
(Other HTTP headers)
(the value of the responseContent response parameter)
```
### `NOT_FOUND`
When the value of the  `action` response
parameter is `NOT_FOUND`, it means that
the service configuration has not enabled the feature of [OpenID Connect
Federation 1.0](https://openid.net/specs/openid-connect-federation-1_0.html) and so the client application should have not access the
entity configuration endpoint.
In this case, the implementation of the entity configuration endpoint of the
authorization server should return an HTTP response to the client application
with the HTTP status code "`404 Not Found`" and the content type
"`application/json`". The message body (= error information in the JSON
format) of the response has been prepared by Authlete's
`/federation/configuration` API and it is available as the
`responseContent` response parameter.
The implementation of the entity configuration endpoint can construct an
HTTP response by doing like below.
```
404 Not Found
Content-Type: application/json
(Other HTTP headers)
(the value of the responseContent response parameter)
```
### `INTERNAL_SERVER_ERROR`
could prepare an entity configuration successfully.
In this case, the implementation of the entity configuration endpoint of the
authorization server should return an HTTP response to the client application
with the HTTP status code "`200 OK`" and the content type
"`application/entity-statement+jwt`". The message body (= an entity
configuration in the JWT format) of the response has been prepared by
Authlete's `/federation/configuration` API and it is available as the
`responseContent` response parameter.
The implementation of the entity configuration endpoint can construct an
HTTP response by doing like below.
```
200 OK
Content-Type: application/entity-statement+jwt
(Other HTTP headers)
(the value of the responseContent response parameter)
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="federation_configuration_api" method="post" path="/api/{serviceId}/federation/configuration" -->
```typescript
import { Authlete } from "authlete-beta";

const authlete = new Authlete({
  security: {
    authlete: process.env["AUTHLETE_AUTHLETE"] ?? "",
  },
});

async function run() {
  const result = await authlete.federationEndpoint.processConfiguration({
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
import { federationEndpointProcessConfiguration } from "authlete/funcs/federationEndpointProcessConfiguration.js";

// Use `AuthleteCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const authlete = new AuthleteCore({
  security: {
    authlete: process.env["AUTHLETE_AUTHLETE"] ?? "",
  },
});

async function run() {
  const res = await federationEndpointProcessConfiguration(authlete, {
    serviceId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("federationEndpointProcessConfiguration failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.FederationConfigurationApiRequest](../../models/operations/federationconfigurationapirequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.FederationConfigurationResponse](../../models/federationconfigurationresponse.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ResultError          | 400, 401, 403               | application/json            |
| errors.ResultError          | 500                         | application/json            |
| errors.AuthleteDefaultError | 4XX, 5XX                    | \*/\*                       |