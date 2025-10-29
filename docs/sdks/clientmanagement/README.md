# ClientManagement
(*clientManagement*)

## Overview

### Available Operations

* [getClient](#getclient) - Get Client
* [deleteClient](#deleteclient) - Delete Client ⚡
* [updateSecret](#updatesecret) - Update Client Secret
* [listAuthorizedApplications](#listauthorizedapplications) - Get Authorized Applications
* [updateAuthorization](#updateauthorization) - Update Client Tokens
* [deleteAuthorizations](#deleteauthorizations) - Delete Client Tokens
* [getRequestableScopes](#getrequestablescopes) - Get Requestable Scopes
* [deleteRequestableScopes](#deleterequestablescopes) - Delete Requestable Scopes

## getClient

Get a client.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="client_get_api" method="get" path="/api/{serviceId}/client/get/{clientId}" -->
```typescript
import { Authlete } from "authlete";

const authlete = new Authlete({
  security: {
    authlete: process.env["AUTHLETE_AUTHLETE"] ?? "",
  },
});

async function run() {
  const result = await authlete.clientManagement.getClient({
    serviceId: "<id>",
    clientId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AuthleteCore } from "authlete/core.js";
import { clientManagementGetClient } from "authlete/funcs/clientManagementGetClient.js";

// Use `AuthleteCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const authlete = new AuthleteCore({
  security: {
    authlete: process.env["AUTHLETE_AUTHLETE"] ?? "",
  },
});

async function run() {
  const res = await clientManagementGetClient(authlete, {
    serviceId: "<id>",
    clientId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("clientManagementGetClient failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ClientGetApiRequest](../../models/operations/clientgetapirequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.Client](../../models/client.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ResultError          | 400, 401, 403               | application/json            |
| errors.ResultError          | 500                         | application/json            |
| errors.AuthleteDefaultError | 4XX, 5XX                    | \*/\*                       |

## deleteClient

Delete a client.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="client_delete_api" method="delete" path="/api/{serviceId}/client/delete/{clientId}" -->
```typescript
import { Authlete } from "authlete";

const authlete = new Authlete({
  security: {
    authlete: process.env["AUTHLETE_AUTHLETE"] ?? "",
  },
});

async function run() {
  await authlete.clientManagement.deleteClient({
    serviceId: "<id>",
    clientId: "<id>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AuthleteCore } from "authlete/core.js";
import { clientManagementDeleteClient } from "authlete/funcs/clientManagementDeleteClient.js";

// Use `AuthleteCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const authlete = new AuthleteCore({
  security: {
    authlete: process.env["AUTHLETE_AUTHLETE"] ?? "",
  },
});

async function run() {
  const res = await clientManagementDeleteClient(authlete, {
    serviceId: "<id>",
    clientId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("clientManagementDeleteClient failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ClientDeleteApiRequest](../../models/operations/clientdeleteapirequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

## updateSecret

Update the client secret of a client.

If you want to have the Authlete server generate a new value of the client secret, use `/api/client/secret/refresh`
API.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="client_secret_update_api" method="post" path="/api/{serviceId}/client/secret/update/{clientIdentifier}" -->
```typescript
import { Authlete } from "authlete";

const authlete = new Authlete({
  security: {
    authlete: process.env["AUTHLETE_AUTHLETE"] ?? "",
  },
});

async function run() {
  const result = await authlete.clientManagement.updateSecret({
    serviceId: "<id>",
    clientIdentifier: "<value>",
    clientSecretUpdateRequest: {
      clientSecret: "my_updated_client_secret",
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
import { clientManagementUpdateSecret } from "authlete/funcs/clientManagementUpdateSecret.js";

// Use `AuthleteCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const authlete = new AuthleteCore({
  security: {
    authlete: process.env["AUTHLETE_AUTHLETE"] ?? "",
  },
});

async function run() {
  const res = await clientManagementUpdateSecret(authlete, {
    serviceId: "<id>",
    clientIdentifier: "<value>",
    clientSecretUpdateRequest: {
      clientSecret: "my_updated_client_secret",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("clientManagementUpdateSecret failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ClientSecretUpdateApiRequest](../../models/operations/clientsecretupdateapirequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ClientSecretUpdateResponse](../../models/clientsecretupdateresponse.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ResultError          | 400, 401, 403               | application/json            |
| errors.ResultError          | 500                         | application/json            |
| errors.AuthleteDefaultError | 4XX, 5XX                    | \*/\*                       |

## listAuthorizedApplications

Get a list of client applications that an end-user has authorized.

The subject parameter is required and can be provided either in the path or as a query parameter.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="client_authorization_get_list_api" method="get" path="/api/{serviceId}/client/authorization/get/list/{subject}" -->
```typescript
import { Authlete } from "authlete";

const authlete = new Authlete({
  security: {
    authlete: process.env["AUTHLETE_AUTHLETE"] ?? "",
  },
});

async function run() {
  const result = await authlete.clientManagement.listAuthorizedApplications({
    serviceId: "<id>",
    subjectPathParameter: "<value>",
    subjectQueryParameter: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AuthleteCore } from "authlete/core.js";
import { clientManagementListAuthorizedApplications } from "authlete/funcs/clientManagementListAuthorizedApplications.js";

// Use `AuthleteCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const authlete = new AuthleteCore({
  security: {
    authlete: process.env["AUTHLETE_AUTHLETE"] ?? "",
  },
});

async function run() {
  const res = await clientManagementListAuthorizedApplications(authlete, {
    serviceId: "<id>",
    subjectPathParameter: "<value>",
    subjectQueryParameter: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("clientManagementListAuthorizedApplications failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ClientAuthorizationGetListApiRequest](../../models/operations/clientauthorizationgetlistapirequest.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ClientAuthorizationGetListResponse](../../models/clientauthorizationgetlistresponse.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ResultError          | 400, 401, 403               | application/json            |
| errors.ResultError          | 500                         | application/json            |
| errors.AuthleteDefaultError | 4XX, 5XX                    | \*/\*                       |

## updateAuthorization

Update attributes of all existing access tokens given to a client application.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="client_authorization_update_api" method="post" path="/api/{serviceId}/client/authorization/update/{clientId}" -->
```typescript
import { Authlete } from "authlete";

const authlete = new Authlete({
  security: {
    authlete: process.env["AUTHLETE_AUTHLETE"] ?? "",
  },
});

async function run() {
  const result = await authlete.clientManagement.updateAuthorization({
    serviceId: "<id>",
    clientId: "<id>",
    clientAuthorizationUpdateRequest: {
      subject: "john",
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
import { AuthleteCore } from "authlete/core.js";
import { clientManagementUpdateAuthorization } from "authlete/funcs/clientManagementUpdateAuthorization.js";

// Use `AuthleteCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const authlete = new AuthleteCore({
  security: {
    authlete: process.env["AUTHLETE_AUTHLETE"] ?? "",
  },
});

async function run() {
  const res = await clientManagementUpdateAuthorization(authlete, {
    serviceId: "<id>",
    clientId: "<id>",
    clientAuthorizationUpdateRequest: {
      subject: "john",
      scopes: [
        "history.read",
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("clientManagementUpdateAuthorization failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ClientAuthorizationUpdateApiRequest](../../models/operations/clientauthorizationupdateapirequest.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ClientAuthorizationUpdateResponse](../../models/clientauthorizationupdateresponse.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ResultError          | 400, 401, 403               | application/json            |
| errors.ResultError          | 500                         | application/json            |
| errors.AuthleteDefaultError | 4XX, 5XX                    | \*/\*                       |

## deleteAuthorizations

Delete all existing access tokens issued to a client application by an end-user.

The subject parameter is required and can be provided either in the path or as a query parameter.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="client_authorization_delete_api" method="delete" path="/api/{serviceId}/client/authorization/delete/{clientId}/{subject}" -->
```typescript
import { Authlete } from "authlete";

const authlete = new Authlete({
  security: {
    authlete: process.env["AUTHLETE_AUTHLETE"] ?? "",
  },
});

async function run() {
  const result = await authlete.clientManagement.deleteAuthorizations({
    serviceId: "<id>",
    clientId: "<id>",
    subjectPathParameter: "<value>",
    subjectQueryParameter: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AuthleteCore } from "authlete/core.js";
import { clientManagementDeleteAuthorizations } from "authlete/funcs/clientManagementDeleteAuthorizations.js";

// Use `AuthleteCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const authlete = new AuthleteCore({
  security: {
    authlete: process.env["AUTHLETE_AUTHLETE"] ?? "",
  },
});

async function run() {
  const res = await clientManagementDeleteAuthorizations(authlete, {
    serviceId: "<id>",
    clientId: "<id>",
    subjectPathParameter: "<value>",
    subjectQueryParameter: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("clientManagementDeleteAuthorizations failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ClientAuthorizationDeleteApiRequest](../../models/operations/clientauthorizationdeleteapirequest.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ClientAuthorizationDeleteResponse](../../models/clientauthorizationdeleteresponse.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ResultError          | 400, 401, 403               | application/json            |
| errors.ResultError          | 500                         | application/json            |
| errors.AuthleteDefaultError | 4XX, 5XX                    | \*/\*                       |

## getRequestableScopes

Get the requestable scopes per client


### Example Usage

<!-- UsageSnippet language="typescript" operationID="client_extension_requestables_scopes_get_api" method="get" path="/api/{serviceId}/client/extension/requestable_scopes/get/{clientId}" -->
```typescript
import { Authlete } from "authlete";

const authlete = new Authlete({
  security: {
    authlete: process.env["AUTHLETE_AUTHLETE"] ?? "",
  },
});

async function run() {
  const result = await authlete.clientManagement.getRequestableScopes({
    serviceId: "<id>",
    clientId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AuthleteCore } from "authlete/core.js";
import { clientManagementGetRequestableScopes } from "authlete/funcs/clientManagementGetRequestableScopes.js";

// Use `AuthleteCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const authlete = new AuthleteCore({
  security: {
    authlete: process.env["AUTHLETE_AUTHLETE"] ?? "",
  },
});

async function run() {
  const res = await clientManagementGetRequestableScopes(authlete, {
    serviceId: "<id>",
    clientId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("clientManagementGetRequestableScopes failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ClientExtensionRequestablesScopesGetApiRequest](../../models/operations/clientextensionrequestablesscopesgetapirequest.md)                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ClientExtensionRequestableScopesGetResponse](../../models/clientextensionrequestablescopesgetresponse.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ResultError          | 400, 401, 403               | application/json            |
| errors.ResultError          | 500                         | application/json            |
| errors.AuthleteDefaultError | 4XX, 5XX                    | \*/\*                       |

## deleteRequestableScopes

Delete requestable scopes of a client


### Example Usage

<!-- UsageSnippet language="typescript" operationID="client_extension_requestables_scopes_delete_api" method="delete" path="/api/{serviceId}/client/extension/requestable_scopes/delete/{clientId}" -->
```typescript
import { Authlete } from "authlete";

const authlete = new Authlete({
  security: {
    authlete: process.env["AUTHLETE_AUTHLETE"] ?? "",
  },
});

async function run() {
  await authlete.clientManagement.deleteRequestableScopes({
    serviceId: "<id>",
    clientId: "<id>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AuthleteCore } from "authlete/core.js";
import { clientManagementDeleteRequestableScopes } from "authlete/funcs/clientManagementDeleteRequestableScopes.js";

// Use `AuthleteCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const authlete = new AuthleteCore({
  security: {
    authlete: process.env["AUTHLETE_AUTHLETE"] ?? "",
  },
});

async function run() {
  const res = await clientManagementDeleteRequestableScopes(authlete, {
    serviceId: "<id>",
    clientId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("clientManagementDeleteRequestableScopes failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ClientExtensionRequestablesScopesDeleteApiRequest](../../models/operations/clientextensionrequestablesscopesdeleteapirequest.md)                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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