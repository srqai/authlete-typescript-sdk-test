# FederationEndpoint
(*federationEndpoint*)

## Overview

### Available Operations

* [processConfiguration](#processconfiguration) - Process Entity Configuration Request
* [processRegistration](#processregistration) - Process Federation Registration Request

## processConfiguration

This API gathers the federation configuration about a service.

The authorization server implementation should
retrieve the value of the <code>action</code>
response parameter from the API response and take the following steps
according to the value.

<h3><code>OK</code></h3>

When the value of the <code> action</code> response
parameter is <code>OK</code>, it means that Authlete
could prepare an entity configuration successfully.

In this case, the implementation of the entity configuration endpoint of the
authorization server should return an HTTP response to the client application
with the HTTP status code "`200 OK`" and the content type
"`application/entity-statement+jwt`". The message body (= an entity
configuration in the JWT format) of the response has been prepared by
Authlete's `/federation/configuration` API and it is available as the
<code>responseContent</code> response parameter.

The implementation of the entity configuration endpoint can construct an
HTTP response by doing like below.

<pre style="border: solid 1px black; padding: 0.5em;">
200 OK
Content-Type: application/entity-statement+jwt
(Other HTTP headers)

<i>(the value of the responseContent response parameter)</i></pre>

<h3><code>NOT_FOUND</code></h3>

When the value of the <code> action</code> response
parameter is <code>NOT_FOUND</code>, it means that
the service configuration has not enabled the feature of <a href=
"https://openid.net/specs/openid-connect-federation-1_0.html">OpenID Connect
Federation 1.0</a> and so the client application should have not access the
entity configuration endpoint.

In this case, the implementation of the entity configuration endpoint of the
authorization server should return an HTTP response to the client application
with the HTTP status code "`404 Not Found`" and the content type
"`application/json`". The message body (= error information in the JSON
format) of the response has been prepared by Authlete's
`/federation/configuration` API and it is available as the
<code>responseContent</code> response parameter.

The implementation of the entity configuration endpoint can construct an
HTTP response by doing like below.

<pre style="border: solid 1px black; padding: 0.5em;">
404 Not Found
Content-Type: application/json
(Other HTTP headers)

<i>(the value of the responseContent response parameter)</i></pre>

<h3><code>INTERNAL_SERVER_ERROR</code></h3>

could prepare an entity configuration successfully.

In this case, the implementation of the entity configuration endpoint of the
authorization server should return an HTTP response to the client application
with the HTTP status code "`200 OK`" and the content type
"`application/entity-statement+jwt`". The message body (= an entity
configuration in the JWT format) of the response has been prepared by
Authlete's `/federation/configuration` API and it is available as the
<code>responseContent</code> response parameter.

The implementation of the entity configuration endpoint can construct an
HTTP response by doing like below.

<pre style="border: solid 1px black; padding: 0.5em;">
200 OK
Content-Type: application/entity-statement+jwt
(Other HTTP headers)

<i>(the value of the responseContent response parameter)</i></pre>


</details>


### Example Usage

<!-- UsageSnippet language="typescript" operationID="federation_configuration_api" method="post" path="/api/{serviceId}/federation/configuration" -->
```typescript
import { AuthleteTest } from "authlete-test";

const authleteTest = new AuthleteTest({
  security: {
    authlete: process.env["AUTHLETETEST_AUTHLETE"] ?? "",
  },
});

async function run() {
  const result = await authleteTest.federationEndpoint.processConfiguration({
    serviceId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AuthleteTestCore } from "authlete-test/core.js";
import { federationEndpointProcessConfiguration } from "authlete-test/funcs/federationEndpointProcessConfiguration.js";

// Use `AuthleteTestCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const authleteTest = new AuthleteTestCore({
  security: {
    authlete: process.env["AUTHLETETEST_AUTHLETE"] ?? "",
  },
});

async function run() {
  const res = await federationEndpointProcessConfiguration(authleteTest, {
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

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.ResultError              | 400, 401, 403                   | application/json                |
| errors.ResultError              | 500                             | application/json                |
| errors.AuthleteTestDefaultError | 4XX, 5XX                        | \*/\*                           |

## processRegistration

The Authlete API is for implementations of the <b>federation registration
endpoint</b> that accepts "explicit client registration". Its details are
defined in <a href="https://openid.net/specs/openid-connect-federation-1_0.html"
>OpenID Connect Federation 1.0</a>.
</p>

<p>
The endpoint accepts `POST` requests whose `Content-Type`
is either of the following.
</p>

<ol>
  <li>`application/entity-statement+jwt`
  <li>`application/trust-chain+json`
</ol>

<p>
When the `Content-Type` of a request is
`application/entity-statement+jwt`, the content of the request is
the entity configuration of a relying party that is to be registered.
In this case, the implementation of the federation registration endpoint
should call Authlete's `/federation/registration` API with the
entity configuration set to the `entityConfiguration` request
parameter.
</p>

<p>
On the other hand, when the `Content-Type` of a request is
`application/trust-chain+json`, the content of the request is a
JSON array that contains entity statements in JWT format. The sequence
of the entity statements composes the trust chain of a relying party
that is to be registered. In this case, the implementation of the
federation registration endpoint should call Authlete's
`/federation/registration` API with the trust chain set to the
`trustChain` request parameter.
</p>


### Example Usage

<!-- UsageSnippet language="typescript" operationID="federation_registration_api" method="post" path="/api/{serviceId}/federation/registration" -->
```typescript
import { AuthleteTest } from "authlete-test";

const authleteTest = new AuthleteTest({
  security: {
    authlete: process.env["AUTHLETETEST_AUTHLETE"] ?? "",
  },
});

async function run() {
  const result = await authleteTest.federationEndpoint.processRegistration({
    serviceId: "<id>",
    federationRegistrationRequest: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AuthleteTestCore } from "authlete-test/core.js";
import { federationEndpointProcessRegistration } from "authlete-test/funcs/federationEndpointProcessRegistration.js";

// Use `AuthleteTestCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const authleteTest = new AuthleteTestCore({
  security: {
    authlete: process.env["AUTHLETETEST_AUTHLETE"] ?? "",
  },
});

async function run() {
  const res = await federationEndpointProcessRegistration(authleteTest, {
    serviceId: "<id>",
    federationRegistrationRequest: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("federationEndpointProcessRegistration failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.FederationRegistrationApiRequest](../../models/operations/federationregistrationapirequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.FederationRegistrationResponse](../../models/federationregistrationresponse.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.ResultError              | 400, 401, 403                   | application/json                |
| errors.ResultError              | 500                             | application/json                |
| errors.AuthleteTestDefaultError | 4XX, 5XX                        | \*/\*                           |