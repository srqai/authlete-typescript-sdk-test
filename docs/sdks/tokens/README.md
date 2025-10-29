# Tokens
(*tokens*)

## Overview

### Available Operations

* [fail](#fail) - Fail Token Request
* [delete](#delete) - Delete Access Token
* [revoke](#revoke) - Revoke Access Token

## fail

This API generates a content of an error token response that the authorization server implementation
returns to the client application.

<br>
<details>
<summary>Description</summary>

This API is supposed to be called from within the implementation of the token endpoint of the service
in order to generate an error response to the client application.

The description of the `/auth/token` API describes the timing when this API should be called. See
the description for the case of `action=PASSWORD`.

The response from `/auth/token/fail` API has some parameters. Among them, it is `action` parameter
that the authorization server implementation should check first because it denotes the next action
that the authorization server implementation should take. According to the value of `action`, the
authorization server implementation must take the steps described below.

**INTERNAL_SERVER_ERROR**

When the value of `action` is `INTERNAL_SERVER_ERROR`, it means that the request from the authorization
server implementation was wrong or that an error occurred in Authlete.

In either case, from the viewpoint of the client application, it is an error on the server side.
Therefore, the service implementation should generate a response to the client application with
HTTP status of "500 Internal Server Error".

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

The endpoint implementation may return another different response to the client application
since "500 Internal Server Error" is not required by OAuth 2.0.

**BAD_REQUEST**

When the value of `action` is `BAD_REQUEST`, it means that Authlete's `/auth/token/fail` API successfully
generated an error response for the client application.

The HTTP status of the response returned to the client application must be "400 Bad Request" and
the content type must be `application/json`.

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

</details>


### Example Usage

<!-- UsageSnippet language="typescript" operationID="auth_token_fail_api" method="post" path="/api/{serviceId}/auth/token/fail" -->
```typescript
import { Authlete } from "authlete";

const authlete = new Authlete({
  security: {
    authlete: process.env["AUTHLETE_AUTHLETE"] ?? "",
  },
});

async function run() {
  const result = await authlete.tokens.fail({
    serviceId: "<id>",
    tokenFailRequest: {
      ticket: "83BNqKIhGMyrkvop_7jQjv2Z1612LNdGSQKkvkrf47c",
      reason: "INVALID_RESOURCE_OWNER_CREDENTIALS",
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
import { tokensFail } from "authlete/funcs/tokensFail.js";

// Use `AuthleteCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const authlete = new AuthleteCore({
  security: {
    authlete: process.env["AUTHLETE_AUTHLETE"] ?? "",
  },
});

async function run() {
  const res = await tokensFail(authlete, {
    serviceId: "<id>",
    tokenFailRequest: {
      ticket: "83BNqKIhGMyrkvop_7jQjv2Z1612LNdGSQKkvkrf47c",
      reason: "INVALID_RESOURCE_OWNER_CREDENTIALS",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("tokensFail failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AuthTokenFailApiRequest](../../models/operations/authtokenfailapirequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.TokenFailResponse](../../models/tokenfailresponse.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ResultError          | 400, 401, 403               | application/json            |
| errors.ResultError          | 500                         | application/json            |
| errors.AuthleteDefaultError | 4XX, 5XX                    | \*/\*                       |

## delete

Delete an access token.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="auth_token_delete_api" method="delete" path="/api/{serviceId}/auth/token/delete/{accessTokenIdentifier}" -->
```typescript
import { Authlete } from "authlete";

const authlete = new Authlete({
  security: {
    authlete: process.env["AUTHLETE_AUTHLETE"] ?? "",
  },
});

async function run() {
  await authlete.tokens.delete({
    serviceId: "<id>",
    accessTokenIdentifier: "<value>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AuthleteCore } from "authlete/core.js";
import { tokensDelete } from "authlete/funcs/tokensDelete.js";

// Use `AuthleteCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const authlete = new AuthleteCore({
  security: {
    authlete: process.env["AUTHLETE_AUTHLETE"] ?? "",
  },
});

async function run() {
  const res = await tokensDelete(authlete, {
    serviceId: "<id>",
    accessTokenIdentifier: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("tokensDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AuthTokenDeleteApiRequest](../../models/operations/authtokendeleteapirequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ResultError          | 400, 401, 403               | application/json            |
| errors.ResultError          | 500                         | application/json            |
| errors.AuthleteDefaultError | 4XX, 5XX                    | \*/\*                       |

## revoke

Revoke an access token.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="auth_token_revoke_api" method="post" path="/api/{serviceId}/auth/token/revoke" -->
```typescript
import { Authlete } from "authlete";

const authlete = new Authlete({
  security: {
    authlete: process.env["AUTHLETE_AUTHLETE"] ?? "",
  },
});

async function run() {
  const result = await authlete.tokens.revoke({
    serviceId: "<id>",
    tokenRevokeRequest: {
      accessTokenIdentifier: "Z5a40U6dWvw2gMoCOAFbZcM85q4HC0Z--0YKD9-Nf6Q",
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
import { tokensRevoke } from "authlete/funcs/tokensRevoke.js";

// Use `AuthleteCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const authlete = new AuthleteCore({
  security: {
    authlete: process.env["AUTHLETE_AUTHLETE"] ?? "",
  },
});

async function run() {
  const res = await tokensRevoke(authlete, {
    serviceId: "<id>",
    tokenRevokeRequest: {
      accessTokenIdentifier: "Z5a40U6dWvw2gMoCOAFbZcM85q4HC0Z--0YKD9-Nf6Q",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("tokensRevoke failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AuthTokenRevokeApiRequest](../../models/operations/authtokenrevokeapirequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.TokenRevokeResponse](../../models/tokenrevokeresponse.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ResultError          | 400, 401, 403               | application/json            |
| errors.ResultError          | 500                         | application/json            |
| errors.AuthleteDefaultError | 4XX, 5XX                    | \*/\*                       |