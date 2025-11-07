# ServiceManagement
(*serviceManagement*)

## Overview

### Available Operations

* [get](#get) - Get Service
* [update](#update) - Update Service

## get

Get a service.

If the access token can only view or modify clients underneath this service, but does not
have access to view this service directly, a limited view of the service will be returned.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="service_get_api" method="get" path="/api/{serviceId}/service/get" -->
```typescript
import { Authlete } from "authlete-beta";

const authlete = new Authlete({
  security: {
    authlete: process.env["AUTHLETE_AUTHLETE"] ?? "",
  },
});

async function run() {
  const result = await authlete.serviceManagement.get({
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
import { serviceManagementGet } from "authlete/funcs/serviceManagementGet.js";

// Use `AuthleteCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const authlete = new AuthleteCore({
  security: {
    authlete: process.env["AUTHLETE_AUTHLETE"] ?? "",
  },
});

async function run() {
  const res = await serviceManagementGet(authlete, {
    serviceId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("serviceManagementGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ServiceGetApiRequest](../../models/operations/servicegetapirequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.Service](../../models/service.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ResultError          | 400, 401, 403               | application/json            |
| errors.ResultError          | 500                         | application/json            |
| errors.AuthleteDefaultError | 4XX, 5XX                    | \*/\*                       |

## update

Update a service.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="service_update_api" method="post" path="/api/{serviceId}/service/update" -->
```typescript
import { Authlete } from "authlete-beta";

const authlete = new Authlete({
  security: {
    authlete: process.env["AUTHLETE_AUTHLETE"] ?? "",
  },
});

async function run() {
  const result = await authlete.serviceManagement.update({
    serviceId: "<id>",
    service: {
      serviceName: "My updated service",
      issuer: "https://my-service.example.com",
      clientIdAliasEnabled: true,
      supportedGrantTypes: [
        "AUTHORIZATION_CODE",
        "REFRESH_TOKEN",
      ],
      supportedResponseTypes: [
        "CODE",
      ],
      errorDescriptionOmitted: false,
      errorUriOmitted: false,
      authorizationEndpoint: "https://my-service.example.com/authz",
      directAuthorizationEndpointEnabled: false,
      supportedDisplays: [
        "PAGE",
      ],
      pkceRequired: true,
      pkceS256Required: false,
      authorizationResponseDuration: 0,
      tokenEndpoint: "https://my-service.example.com/token",
      directTokenEndpointEnabled: false,
      supportedTokenAuthMethods: [
        "CLIENT_SECRET_BASIC",
      ],
      missingClientIdAllowed: false,
      revocationEndpoint: "https://my-service.example.com/revocation",
      directRevocationEndpointEnabled: false,
      supportedRevocationAuthMethods: [
        "CLIENT_SECRET_BASIC",
      ],
      introspectionEndpoint: "https://my-service.example.com/introspection",
      directIntrospectionEndpointEnabled: false,
      supportedIntrospectionAuthMethods: [
        "CLIENT_SECRET_BASIC",
      ],
      pushedAuthReqDuration: 0,
      parRequired: false,
      requestObjectRequired: false,
      traditionalRequestObjectProcessingApplied: false,
      mutualTlsValidatePkiCertChain: false,
      accessTokenType: "Bearer",
      tlsClientCertificateBoundAccessTokens: false,
      accessTokenDuration: 3600,
      singleAccessTokenPerSubject: false,
      refreshTokenDuration: 3600,
      refreshTokenDurationKept: false,
      refreshTokenDurationReset: false,
      refreshTokenKept: false,
      supportedScopes: [
        {
          name: "history.read",
          defaultEntry: false,
          description: "A permission to read your history.",
        },
        {
          name: "timeline.read",
          defaultEntry: false,
          description: "A permission to read your timeline.",
        },
      ],
      scopeRequired: false,
      idTokenDuration: 0,
      allowableClockSkew: 0,
      supportedClaimTypes: [
        "NORMAL",
      ],
      claimShortcutRestrictive: false,
      directJwksEndpointEnabled: false,
      directUserInfoEndpointEnabled: false,
      dynamicRegistrationSupported: false,
      backchannelAuthReqIdDuration: 0,
      backchannelPollingInterval: 0,
      backchannelUserCodeParameterSupported: false,
      backchannelBindingMessageRequiredInFapi: false,
      deviceFlowCodeDuration: 0,
      deviceFlowPollingInterval: 0,
      userCodeLength: 0,
      attributes: [
        {
          key: "attribute1-key",
          value: "attribute1-value",
        },
        {
          key: "attribute2-key",
          value: "attribute2-value",
        },
      ],
      nbfOptional: false,
      issSuppressed: false,
      tokenExpirationLinked: false,
      frontChannelRequestObjectEncryptionRequired: false,
      requestObjectEncryptionAlgMatchRequired: false,
      requestObjectEncryptionEncMatchRequired: false,
      hsmEnabled: false,
      grantManagementActionRequired: false,
      unauthorizedOnClientConfigSupported: false,
      dcrScopeUsedAsRequestable: false,
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
import { serviceManagementUpdate } from "authlete/funcs/serviceManagementUpdate.js";

// Use `AuthleteCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const authlete = new AuthleteCore({
  security: {
    authlete: process.env["AUTHLETE_AUTHLETE"] ?? "",
  },
});

async function run() {
  const res = await serviceManagementUpdate(authlete, {
    serviceId: "<id>",
    service: {
      serviceName: "My updated service",
      issuer: "https://my-service.example.com",
      clientIdAliasEnabled: true,
      supportedGrantTypes: [
        "AUTHORIZATION_CODE",
        "REFRESH_TOKEN",
      ],
      supportedResponseTypes: [
        "CODE",
      ],
      errorDescriptionOmitted: false,
      errorUriOmitted: false,
      authorizationEndpoint: "https://my-service.example.com/authz",
      directAuthorizationEndpointEnabled: false,
      supportedDisplays: [
        "PAGE",
      ],
      pkceRequired: true,
      pkceS256Required: false,
      authorizationResponseDuration: 0,
      tokenEndpoint: "https://my-service.example.com/token",
      directTokenEndpointEnabled: false,
      supportedTokenAuthMethods: [
        "CLIENT_SECRET_BASIC",
      ],
      missingClientIdAllowed: false,
      revocationEndpoint: "https://my-service.example.com/revocation",
      directRevocationEndpointEnabled: false,
      supportedRevocationAuthMethods: [
        "CLIENT_SECRET_BASIC",
      ],
      introspectionEndpoint: "https://my-service.example.com/introspection",
      directIntrospectionEndpointEnabled: false,
      supportedIntrospectionAuthMethods: [
        "CLIENT_SECRET_BASIC",
      ],
      pushedAuthReqDuration: 0,
      parRequired: false,
      requestObjectRequired: false,
      traditionalRequestObjectProcessingApplied: false,
      mutualTlsValidatePkiCertChain: false,
      accessTokenType: "Bearer",
      tlsClientCertificateBoundAccessTokens: false,
      accessTokenDuration: 3600,
      singleAccessTokenPerSubject: false,
      refreshTokenDuration: 3600,
      refreshTokenDurationKept: false,
      refreshTokenDurationReset: false,
      refreshTokenKept: false,
      supportedScopes: [
        {
          name: "history.read",
          defaultEntry: false,
          description: "A permission to read your history.",
        },
        {
          name: "timeline.read",
          defaultEntry: false,
          description: "A permission to read your timeline.",
        },
      ],
      scopeRequired: false,
      idTokenDuration: 0,
      allowableClockSkew: 0,
      supportedClaimTypes: [
        "NORMAL",
      ],
      claimShortcutRestrictive: false,
      directJwksEndpointEnabled: false,
      directUserInfoEndpointEnabled: false,
      dynamicRegistrationSupported: false,
      backchannelAuthReqIdDuration: 0,
      backchannelPollingInterval: 0,
      backchannelUserCodeParameterSupported: false,
      backchannelBindingMessageRequiredInFapi: false,
      deviceFlowCodeDuration: 0,
      deviceFlowPollingInterval: 0,
      userCodeLength: 0,
      attributes: [
        {
          key: "attribute1-key",
          value: "attribute1-value",
        },
        {
          key: "attribute2-key",
          value: "attribute2-value",
        },
      ],
      nbfOptional: false,
      issSuppressed: false,
      tokenExpirationLinked: false,
      frontChannelRequestObjectEncryptionRequired: false,
      requestObjectEncryptionAlgMatchRequired: false,
      requestObjectEncryptionEncMatchRequired: false,
      hsmEnabled: false,
      grantManagementActionRequired: false,
      unauthorizedOnClientConfigSupported: false,
      dcrScopeUsedAsRequestable: false,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("serviceManagementUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ServiceUpdateApiRequest](../../models/operations/serviceupdateapirequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.Service](../../models/service.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ResultError          | 400, 401, 403               | application/json            |
| errors.ResultError          | 500                         | application/json            |
| errors.AuthleteDefaultError | 4XX, 5XX                    | \*/\*                       |