# AuthorizationEndpoint
(*authorizationEndpoint*)

## Overview

### Available Operations

* [fail](#fail) - Fail Authorization Request
* [getTicketInfo](#getticketinfo) - Get Ticket Information

## fail

This API generates a content of an error authorization response that the authorization server implementation
returns to the client application.
### Description
This API is supposed to be called from within the implementation of the authorization endpoint of the service
in order to generate an error response to the client application.
The description of the `/auth/authorization` API describes the timing when this API should be called.
The response from `/auth/authorization/fail` API has some parameters.
Among them, it is `action` parameter that the authorization server implementation should check first because
it denotes the next action that the authorization server implementation should take.
According to the value of `action`, the authorization server implementation must take the steps described below.
**INTERNAL\_SERVER\_ERROR**
When the value of `action` is `INTERNAL\_SERVER\_ERROR`, it means that the request from the authorization
server implementation was wrong or that an error occurred in Authlete.
In either case, from the viewpoint of the client application, it is an error on the server side.
Therefore, the service implementation should generate a response to the client application with
HTTP status of "500 Internal Server Error". Authlete recommends `application/json` as the content type.
The value of `responseContent` is a JSON string which describes the error, so it can be used
as the entity body of the response.
The following illustrates the response which the service implementation should generate and return
to the client application.
```
HTTP/1.1 500 Internal Server Error
Content-Type: application/json
Cache-Control: no-store
Pragma: no-cache
{responseContent}
```
The endpoint implementation may return another different response to the client application since
"500 Internal Server Error" is not required by OAuth 2.0.
**BAD\_REQUEST**
When the value of `action` is `BAD\_REQUEST`, it means that the ticket is no longer valid (deleted
or expired) and that the reason of the invalidity was probably due to the end-user's too-delayed
response to the authorization UI.
A response with HTTP status of "400 Bad Request" should be returned to the client application and
Authlete recommends `application/json` as the content type.
The value of `responseContent` is a JSON string which describes the error, so it can be used
as the entity body of the response.
The following illustrates the response which the service implementation should generate and return
to the client application.
```
HTTP/1.1 400 Bad Request
Content-Type: application/json
Cache-Control: no-store
Pragma: no-cache
{responseContent}
```
The endpoint implementation may return another different response to the client application since
"400 Bad Request" is not required by OAuth 2.0.
**LOCATION**
When the value of `action` is `LOCATION`, it means that the response to the client application must
be "302 Found" with Location header.
The parameter responseContent contains a redirect URI with (1) an authorization code, an ID token
and/or an access token (on success) or (2) an error code (on failure), so it can be used as the
value of `Location` header.
The following illustrates the response which the service implementation must generate and return
to the client application.
```
HTTP/1.1 302 Found
Location: {responseContent}
Cache-Control: no-store
Pragma: no-cache
```
**FORM**
When the value of `action` is `FORM`, it means that the response to the client application must be 200 OK
with an HTML which triggers redirection by JavaScript.
This happens when the authorization request from the client application contained `response\_mode=form\_post`.
The value of `responseContent` is an HTML which can be used as the entity body of the response.
The following illustrates the response which the service implementation must generate and return
to the client application.
```
HTTP/1.1 200 OK
Content-Type: text/html;charset=UTF-8
Cache-Control: no-store
Pragma: no-cache
{responseContent}
```


### Example Usage

<!-- UsageSnippet language="typescript" operationID="auth_authorization_fail_api" method="post" path="/api/{serviceId}/auth/authorization/fail" -->
```typescript
import { Authlete } from "authlete";

const authlete = new Authlete({
  security: {
    authlete: process.env["AUTHLETE_AUTHLETE"] ?? "",
  },
});

async function run() {
  const result = await authlete.authorizationEndpoint.fail({
    serviceId: "<id>",
    authorizationFailRequest: {
      ticket: "qA7wGybwArICpbUSutrf5Xc9-i1fHE0ySOHxR1eBoBQ",
      reason: "NOT_AUTHENTICATED",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AuthleteCore } from "authlete/core.js";
import { authorizationEndpointFail } from "authlete/funcs/authorizationEndpointFail.js";

// Use `AuthleteCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const authlete = new AuthleteCore({
  security: {
    authlete: process.env["AUTHLETE_AUTHLETE"] ?? "",
  },
});

async function run() {
  const res = await authorizationEndpointFail(authlete, {
    serviceId: "<id>",
    authorizationFailRequest: {
      ticket: "qA7wGybwArICpbUSutrf5Xc9-i1fHE0ySOHxR1eBoBQ",
      reason: "NOT_AUTHENTICATED",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("authorizationEndpointFail failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AuthAuthorizationFailApiRequest](../../models/operations/authauthorizationfailapirequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.AuthorizationFailResponse](../../models/authorizationfailresponse.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ResultError          | 400, 401, 403               | application/json            |
| errors.ResultError          | 500                         | application/json            |
| errors.AuthleteDefaultError | 4XX, 5XX                    | \*/\*                       |

## getTicketInfo

Get Ticket Information

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getAuthorizationTicketInfo" method="post" path="/api/{serviceId}/auth/authorization/ticket/info" -->
```typescript
import { Authlete } from "authlete";

const authlete = new Authlete({
  security: {
    authlete: process.env["AUTHLETE_AUTHLETE"] ?? "",
  },
});

async function run() {
  const result = await authlete.authorizationEndpoint.getTicketInfo({
    serviceId: "<id>",
    authorizationTicketInfoRequest: {
      ticket: "<value>",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AuthleteCore } from "authlete/core.js";
import { authorizationEndpointGetTicketInfo } from "authlete/funcs/authorizationEndpointGetTicketInfo.js";

// Use `AuthleteCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const authlete = new AuthleteCore({
  security: {
    authlete: process.env["AUTHLETE_AUTHLETE"] ?? "",
  },
});

async function run() {
  const res = await authorizationEndpointGetTicketInfo(authlete, {
    serviceId: "<id>",
    authorizationTicketInfoRequest: {
      ticket: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("authorizationEndpointGetTicketInfo failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAuthorizationTicketInfoRequest](../../models/operations/getauthorizationticketinforequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.AuthorizationTicketInfoResponse](../../models/authorizationticketinforesponse.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ResultError          | 400, 401, 403               | application/json            |
| errors.ResultError          | 500                         | application/json            |
| errors.AuthleteDefaultError | 4XX, 5XX                    | \*/\*                       |