# TokenOperations
(*tokenOperations*)

## Overview

### Available Operations

* [listTokens](#listtokens) - List Issued Tokens
* [create](#create) - Create Access Token
* [update](#update) - Update Access Token

## listTokens

Get the list of access tokens that are associated with the service.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="auth_token_get_list_api" method="get" path="/api/{serviceId}/auth/token/get/list" -->
```typescript
import { AuthleteTest } from "authlete-test";

const authleteTest = new AuthleteTest({
  security: {
    authlete: process.env["AUTHLETETEST_AUTHLETE"] ?? "",
  },
});

async function run() {
  const result = await authleteTest.tokenOperations.listTokens({
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
import { tokenOperationsListTokens } from "authlete-test/funcs/tokenOperationsListTokens.js";

// Use `AuthleteTestCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const authleteTest = new AuthleteTestCore({
  security: {
    authlete: process.env["AUTHLETETEST_AUTHLETE"] ?? "",
  },
});

async function run() {
  const res = await tokenOperationsListTokens(authleteTest, {
    serviceId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("tokenOperationsListTokens failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AuthTokenGetListApiRequest](../../models/operations/authtokengetlistapirequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.TokenGetListResponse](../../models/tokengetlistresponse.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.ResultError              | 400, 401, 403                   | application/json                |
| errors.ResultError              | 500                             | application/json                |
| errors.AuthleteTestDefaultError | 4XX, 5XX                        | \*/\*                           |

## create

Create an access token.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="auth_token_create_api" method="post" path="/api/{serviceId}/auth/token/create" -->
```typescript
import { AuthleteTest } from "authlete-test";

const authleteTest = new AuthleteTest({
  security: {
    authlete: process.env["AUTHLETETEST_AUTHLETE"] ?? "",
  },
});

async function run() {
  const result = await authleteTest.tokenOperations.create({
    serviceId: "<id>",
    tokenCreateRequest: {
      grantType: "AUTHORIZATION_CODE",
      clientId: 26888344961664,
      subject: "john",
      scopes: [
        "history.read",
        "timeline.read",
      ],
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AuthleteTestCore } from "authlete-test/core.js";
import { tokenOperationsCreate } from "authlete-test/funcs/tokenOperationsCreate.js";

// Use `AuthleteTestCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const authleteTest = new AuthleteTestCore({
  security: {
    authlete: process.env["AUTHLETETEST_AUTHLETE"] ?? "",
  },
});

async function run() {
  const res = await tokenOperationsCreate(authleteTest, {
    serviceId: "<id>",
    tokenCreateRequest: {
      grantType: "AUTHORIZATION_CODE",
      clientId: 26888344961664,
      subject: "john",
      scopes: [
        "history.read",
        "timeline.read",
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("tokenOperationsCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AuthTokenCreateApiRequest](../../models/operations/authtokencreateapirequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.TokenCreateResponse](../../models/tokencreateresponse.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.ResultError              | 400, 401, 403                   | application/json                |
| errors.ResultError              | 500                             | application/json                |
| errors.AuthleteTestDefaultError | 4XX, 5XX                        | \*/\*                           |

## update

Update an access token.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="auth_token_update_api" method="post" path="/api/{serviceId}/auth/token/update" -->
```typescript
import { AuthleteTest } from "authlete-test";

const authleteTest = new AuthleteTest({
  security: {
    authlete: process.env["AUTHLETETEST_AUTHLETE"] ?? "",
  },
});

async function run() {
  const result = await authleteTest.tokenOperations.update({
    serviceId: "<id>",
    tokenUpdateRequest: {
      accessToken: "Z5a40U6dWvw2gMoCOAFbZcM85q4HC0Z--0YKD9-Nf6Q",
      scopes: [
        "history.read",
      ],
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AuthleteTestCore } from "authlete-test/core.js";
import { tokenOperationsUpdate } from "authlete-test/funcs/tokenOperationsUpdate.js";

// Use `AuthleteTestCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const authleteTest = new AuthleteTestCore({
  security: {
    authlete: process.env["AUTHLETETEST_AUTHLETE"] ?? "",
  },
});

async function run() {
  const res = await tokenOperationsUpdate(authleteTest, {
    serviceId: "<id>",
    tokenUpdateRequest: {
      accessToken: "Z5a40U6dWvw2gMoCOAFbZcM85q4HC0Z--0YKD9-Nf6Q",
      scopes: [
        "history.read",
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("tokenOperationsUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AuthTokenUpdateApiRequest](../../models/operations/authtokenupdateapirequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.TokenUpdateResponse](../../models/tokenupdateresponse.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.ResultError              | 400, 401, 403                   | application/json                |
| errors.ResultError              | 500                             | application/json                |
| errors.AuthleteTestDefaultError | 4XX, 5XX                        | \*/\*                           |