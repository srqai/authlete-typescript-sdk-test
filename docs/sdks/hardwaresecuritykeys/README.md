# HardwareSecurityKeys
(*hardwareSecurityKeys*)

## Overview

### Available Operations

* [create](#create) - Create Security Key
* [list](#list) - List Security Keys

## create

Create Security Key

### Example Usage

<!-- UsageSnippet language="typescript" operationID="hsk_create_api" method="post" path="/api/{serviceId}/hsk/create" -->
```typescript
import { AuthleteTest } from "authlete-test";

const authleteTest = new AuthleteTest({
  security: {
    authlete: process.env["AUTHLETETEST_AUTHLETE"] ?? "",
  },
});

async function run() {
  const result = await authleteTest.hardwareSecurityKeys.create({
    serviceId: "<id>",
    hskCreateRequest: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AuthleteTestCore } from "authlete-test/core.js";
import { hardwareSecurityKeysCreate } from "authlete-test/funcs/hardwareSecurityKeysCreate.js";

// Use `AuthleteTestCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const authleteTest = new AuthleteTestCore({
  security: {
    authlete: process.env["AUTHLETETEST_AUTHLETE"] ?? "",
  },
});

async function run() {
  const res = await hardwareSecurityKeysCreate(authleteTest, {
    serviceId: "<id>",
    hskCreateRequest: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hardwareSecurityKeysCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.HskCreateApiRequest](../../models/operations/hskcreateapirequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.HskCreateResponse](../../models/hskcreateresponse.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.ResultError              | 400, 401, 403                   | application/json                |
| errors.ResultError              | 500                             | application/json                |
| errors.AuthleteTestDefaultError | 4XX, 5XX                        | \*/\*                           |

## list

List Security Keys

### Example Usage

<!-- UsageSnippet language="typescript" operationID="hsk_get_list_api" method="get" path="/api/{serviceId}/hsk/get/list" -->
```typescript
import { AuthleteTest } from "authlete-test";

const authleteTest = new AuthleteTest({
  security: {
    authlete: process.env["AUTHLETETEST_AUTHLETE"] ?? "",
  },
});

async function run() {
  const result = await authleteTest.hardwareSecurityKeys.list({
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
import { hardwareSecurityKeysList } from "authlete-test/funcs/hardwareSecurityKeysList.js";

// Use `AuthleteTestCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const authleteTest = new AuthleteTestCore({
  security: {
    authlete: process.env["AUTHLETETEST_AUTHLETE"] ?? "",
  },
});

async function run() {
  const res = await hardwareSecurityKeysList(authleteTest, {
    serviceId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("hardwareSecurityKeysList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.HskGetListApiRequest](../../models/operations/hskgetlistapirequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.HskGetListResponse](../../models/hskgetlistresponse.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.ResultError              | 400, 401, 403                   | application/json                |
| errors.ResultError              | 500                             | application/json                |
| errors.AuthleteTestDefaultError | 4XX, 5XX                        | \*/\*                           |