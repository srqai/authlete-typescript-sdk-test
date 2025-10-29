# VerifiableCredentialIssuer
(*verifiableCredentialIssuer*)

## Overview

### Available Operations

* [getJwtIssuer](#getjwtissuer) - /api/{serviceId}/vci/jwtissuer API
* [getOfferInfo](#getofferinfo) - /api/{serviceId}/vci/offer/info API
* [issueSingle](#issuesingle) - /api/{serviceId}/vci/single/issue API
* [parseBatch](#parsebatch) - /api/{serviceId}/vci/batch/parse API
* [batchIssue](#batchissue) - /api/{serviceId}/vci/batch/issue API
* [parseDeferred](#parsedeferred) - /api/{serviceId}/vci/deferred/parse API
* [deferredIssue](#deferredissue) - /api/{serviceId}/vci/deferred/issue API

## getJwtIssuer

Get JWT issuer information for Verifiable Credential Issuer (VCI) service

### Example Usage

<!-- UsageSnippet language="typescript" operationID="vci_jwtissuer_api" method="post" path="/api/{serviceId}/vci/jwtissuer" -->
```typescript
import { Authlete } from "authlete";

const authlete = new Authlete({
  security: {
    authlete: process.env["AUTHLETE_AUTHLETE"] ?? "",
  },
});

async function run() {
  const result = await authlete.verifiableCredentialIssuer.getJwtIssuer({
    serviceId: "<id>",
    vciJwtissuerRequest: {
      pretty: true,
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
import { verifiableCredentialIssuerGetJwtIssuer } from "authlete/funcs/verifiableCredentialIssuerGetJwtIssuer.js";

// Use `AuthleteCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const authlete = new AuthleteCore({
  security: {
    authlete: process.env["AUTHLETE_AUTHLETE"] ?? "",
  },
});

async function run() {
  const res = await verifiableCredentialIssuerGetJwtIssuer(authlete, {
    serviceId: "<id>",
    vciJwtissuerRequest: {
      pretty: true,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("verifiableCredentialIssuerGetJwtIssuer failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.VciJwtissuerApiRequest](../../models/operations/vcijwtissuerapirequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.VciJwtissuerResponse](../../models/vcijwtissuerresponse.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ResultError          | 400, 401, 403               | application/json            |
| errors.ResultError          | 500                         | application/json            |
| errors.AuthleteDefaultError | 4XX, 5XX                    | \*/\*                       |

## getOfferInfo

Get offer information for Verifiable Credential Issuer (VCI) service

### Example Usage

<!-- UsageSnippet language="typescript" operationID="vci_offer_info_api" method="post" path="/api/{serviceId}/vci/offer/info" -->
```typescript
import { Authlete } from "authlete";

const authlete = new Authlete({
  security: {
    authlete: process.env["AUTHLETE_AUTHLETE"] ?? "",
  },
});

async function run() {
  const result = await authlete.verifiableCredentialIssuer.getOfferInfo({
    serviceId: "<id>",
    vciOfferInfoRequest: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AuthleteCore } from "authlete/core.js";
import { verifiableCredentialIssuerGetOfferInfo } from "authlete/funcs/verifiableCredentialIssuerGetOfferInfo.js";

// Use `AuthleteCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const authlete = new AuthleteCore({
  security: {
    authlete: process.env["AUTHLETE_AUTHLETE"] ?? "",
  },
});

async function run() {
  const res = await verifiableCredentialIssuerGetOfferInfo(authlete, {
    serviceId: "<id>",
    vciOfferInfoRequest: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("verifiableCredentialIssuerGetOfferInfo failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.VciOfferInfoApiRequest](../../models/operations/vciofferinfoapirequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.VciOfferInfoResponse](../../models/vciofferinforesponse.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ResultError          | 400, 401, 403               | application/json            |
| errors.ResultError          | 500                         | application/json            |
| errors.AuthleteDefaultError | 4XX, 5XX                    | \*/\*                       |

## issueSingle

Issue single credential for Verifiable Credential Issuer (VCI) service

### Example Usage

<!-- UsageSnippet language="typescript" operationID="vci_single_issue_api" method="post" path="/api/{serviceId}/vci/single/issue" -->
```typescript
import { Authlete } from "authlete";

const authlete = new Authlete({
  security: {
    authlete: process.env["AUTHLETE_AUTHLETE"] ?? "",
  },
});

async function run() {
  const result = await authlete.verifiableCredentialIssuer.issueSingle({
    serviceId: "<id>",
    vciSingleIssueRequest: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AuthleteCore } from "authlete/core.js";
import { verifiableCredentialIssuerIssueSingle } from "authlete/funcs/verifiableCredentialIssuerIssueSingle.js";

// Use `AuthleteCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const authlete = new AuthleteCore({
  security: {
    authlete: process.env["AUTHLETE_AUTHLETE"] ?? "",
  },
});

async function run() {
  const res = await verifiableCredentialIssuerIssueSingle(authlete, {
    serviceId: "<id>",
    vciSingleIssueRequest: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("verifiableCredentialIssuerIssueSingle failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.VciSingleIssueApiRequest](../../models/operations/vcisingleissueapirequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.VciSingleIssueResponse](../../models/vcisingleissueresponse.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ResultError          | 400, 401, 403               | application/json            |
| errors.ResultError          | 500                         | application/json            |
| errors.AuthleteDefaultError | 4XX, 5XX                    | \*/\*                       |

## parseBatch

Parse batch credential requests for Verifiable Credential Issuer (VCI) service

### Example Usage

<!-- UsageSnippet language="typescript" operationID="vci_batch_parse_api" method="post" path="/api/{serviceId}/vci/batch/parse" -->
```typescript
import { Authlete } from "authlete";

const authlete = new Authlete({
  security: {
    authlete: process.env["AUTHLETE_AUTHLETE"] ?? "",
  },
});

async function run() {
  const result = await authlete.verifiableCredentialIssuer.parseBatch({
    serviceId: "<id>",
    vciBatchParseRequest: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AuthleteCore } from "authlete/core.js";
import { verifiableCredentialIssuerParseBatch } from "authlete/funcs/verifiableCredentialIssuerParseBatch.js";

// Use `AuthleteCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const authlete = new AuthleteCore({
  security: {
    authlete: process.env["AUTHLETE_AUTHLETE"] ?? "",
  },
});

async function run() {
  const res = await verifiableCredentialIssuerParseBatch(authlete, {
    serviceId: "<id>",
    vciBatchParseRequest: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("verifiableCredentialIssuerParseBatch failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.VciBatchParseApiRequest](../../models/operations/vcibatchparseapirequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.VciBatchParseResponse](../../models/vcibatchparseresponse.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ResultError          | 400, 401, 403               | application/json            |
| errors.ResultError          | 500                         | application/json            |
| errors.AuthleteDefaultError | 4XX, 5XX                    | \*/\*                       |

## batchIssue

Issue batch credentials for Verifiable Credential Issuer (VCI) service

### Example Usage

<!-- UsageSnippet language="typescript" operationID="vci_batch_issue_api" method="post" path="/api/{serviceId}/vci/batch/issue" -->
```typescript
import { Authlete } from "authlete";

const authlete = new Authlete({
  security: {
    authlete: process.env["AUTHLETE_AUTHLETE"] ?? "",
  },
});

async function run() {
  const result = await authlete.verifiableCredentialIssuer.batchIssue({
    serviceId: "<id>",
    vciBatchIssueRequest: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AuthleteCore } from "authlete/core.js";
import { verifiableCredentialIssuerBatchIssue } from "authlete/funcs/verifiableCredentialIssuerBatchIssue.js";

// Use `AuthleteCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const authlete = new AuthleteCore({
  security: {
    authlete: process.env["AUTHLETE_AUTHLETE"] ?? "",
  },
});

async function run() {
  const res = await verifiableCredentialIssuerBatchIssue(authlete, {
    serviceId: "<id>",
    vciBatchIssueRequest: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("verifiableCredentialIssuerBatchIssue failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.VciBatchIssueApiRequest](../../models/operations/vcibatchissueapirequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.VciBatchIssueResponse](../../models/vcibatchissueresponse.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ResultError          | 400, 401, 403               | application/json            |
| errors.ResultError          | 500                         | application/json            |
| errors.AuthleteDefaultError | 4XX, 5XX                    | \*/\*                       |

## parseDeferred

Parse deferred credential request for Verifiable Credential Issuer (VCI) service

### Example Usage

<!-- UsageSnippet language="typescript" operationID="vci_deferred_parse_api" method="post" path="/api/{serviceId}/vci/deferred/parse" -->
```typescript
import { Authlete } from "authlete";

const authlete = new Authlete({
  security: {
    authlete: process.env["AUTHLETE_AUTHLETE"] ?? "",
  },
});

async function run() {
  const result = await authlete.verifiableCredentialIssuer.parseDeferred({
    serviceId: "<id>",
    vciDeferredParseRequest: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AuthleteCore } from "authlete/core.js";
import { verifiableCredentialIssuerParseDeferred } from "authlete/funcs/verifiableCredentialIssuerParseDeferred.js";

// Use `AuthleteCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const authlete = new AuthleteCore({
  security: {
    authlete: process.env["AUTHLETE_AUTHLETE"] ?? "",
  },
});

async function run() {
  const res = await verifiableCredentialIssuerParseDeferred(authlete, {
    serviceId: "<id>",
    vciDeferredParseRequest: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("verifiableCredentialIssuerParseDeferred failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.VciDeferredParseApiRequest](../../models/operations/vcideferredparseapirequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.VciDeferredParseResponse](../../models/vcideferredparseresponse.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ResultError          | 400, 401, 403               | application/json            |
| errors.ResultError          | 500                         | application/json            |
| errors.AuthleteDefaultError | 4XX, 5XX                    | \*/\*                       |

## deferredIssue

Issue deferred credential for Verifiable Credential Issuer (VCI) service

### Example Usage

<!-- UsageSnippet language="typescript" operationID="vci_deferred_issue_api" method="post" path="/api/{serviceId}/vci/deferred/issue" -->
```typescript
import { Authlete } from "authlete";

const authlete = new Authlete({
  security: {
    authlete: process.env["AUTHLETE_AUTHLETE"] ?? "",
  },
});

async function run() {
  const result = await authlete.verifiableCredentialIssuer.deferredIssue({
    serviceId: "<id>",
    vciDeferredIssueRequest: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AuthleteCore } from "authlete/core.js";
import { verifiableCredentialIssuerDeferredIssue } from "authlete/funcs/verifiableCredentialIssuerDeferredIssue.js";

// Use `AuthleteCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const authlete = new AuthleteCore({
  security: {
    authlete: process.env["AUTHLETE_AUTHLETE"] ?? "",
  },
});

async function run() {
  const res = await verifiableCredentialIssuerDeferredIssue(authlete, {
    serviceId: "<id>",
    vciDeferredIssueRequest: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("verifiableCredentialIssuerDeferredIssue failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.VciDeferredIssueApiRequest](../../models/operations/vcideferredissueapirequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.VciDeferredIssueResponse](../../models/vcideferredissueresponse.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ResultError          | 400, 401, 403               | application/json            |
| errors.ResultError          | 500                         | application/json            |
| errors.AuthleteDefaultError | 4XX, 5XX                    | \*/\*                       |