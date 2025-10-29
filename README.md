# authlete

Developer-friendly & type-safe Typescript SDK specifically catered to leverage *authlete* API.

<div align="left">
    <a href="https://www.speakeasy.com/?utm_source=authlete&utm_campaign=typescript"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>


<br /><br />
> [!IMPORTANT]
> This SDK is not yet ready for production use. To complete setup please follow the steps outlined in your [workspace](https://app.speakeasy.com/org/authlete/sdk-workspace). Delete this section before > publishing to a package manager.

<!-- Start Summary [summary] -->
## Summary

Authlete API Explorer: <div class="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6">
  <div class="flex justify-end mb-4">
    <label for="theme-toggle" class="flex items-center cursor-pointer">
      <div class="relative">Dark mode:
        <input type="checkbox" id="theme-toggle" class="sr-only" onchange="toggleTheme()">
        <div class="block bg-gray-600 w-14 h-8 rounded-full"></div>
        <div class="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
      </div>
    </label>
  </div>
  <header class="bg-green-500 dark:bg-green-700 p-4 rounded-lg text-white text-center">
    <p>
      Welcome to the <strong>Authlete API documentation</strong>. Authlete is an <strong>API-first service</strong>
      where every aspect of the platform is configurable via API. This explorer provides a convenient way to
      authenticate and interact with the API, allowing you to see Authlete in action quickly. 🚀
    </p>
    <p>
      At a high level, the Authlete API is grouped into two categories:
    </p>
    <ul class="list-disc list-inside">
      <li><strong>Management APIs</strong>: Enable you to manage services and clients. 🔧</li>
      <li><strong>Runtime APIs</strong>: Allow you to build your own Authorization Servers or Verifiable Credential (VC)
        issuers. 🔐</li>
    </ul>
    <p>All API endpoints are secured using access tokens issued by Authlete's Identity Provider (IdP). If you already
      have an Authlete account, simply use the <em>Get Token</em> option on the Authentication page to log in and obtain
      an access token for API usage. If you don't have an account yet, <a href="https://console.authlete.com/register">sign up
        here</a> to get started.</p>
  </header>
  <main>
    <section id="api-servers" class="mb-10">
      <h2 class="text-2xl font-semibold mb-4">🌐 API Servers</h2>
      <p>Authlete is a global service with clusters available in multiple regions across the world.</p>
      <p>Currently, our service is available in the following regions:</p>
      <div class="grid grid-cols-2 gap-4">
        <div class="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
          <p class="text-center font-semibold">🇺🇸 US</p>
        </div>
        <div class="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
          <p class="text-center font-semibold">🇯🇵 JP</p>
        </div>
        <div class="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
          <p class="text-center font-semibold">🇪🇺 EU</p>
        </div>
        <div class="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
          <p class="text-center font-semibold">🇧🇷 Brazil</p>
        </div>
      </div>
      <p>Our customers can host their data in the region that best meets their requirements.</p>
      <a href="#servers" class="block mt-4 text-green-500 dark:text-green-300 hover:underline text-center">Select your
        preferred server</a>
    </section>
    <section id="authentication" class="mb-10">
      <h2 class="text-2xl font-semibold mb-4">🔑 Authentication</h2>
      <p>The API Explorer requires an access token to call the API.</p>
      <p>You can create the access token from the <a href="https://console.authlete.com">Authlete Management Console</a> and set it in the HTTP Bearer section of Authentication page.</p>
      <p>Alternatively, if you have an Authlete account, the API Explorer can log you in with your Authlete account and
        automatically acquire the required access token.</p>
      <div class="theme-admonition theme-admonition-warning admonition_o5H7 alert alert--warning">
        <div class="admonitionContent_Knsx">
          <p>⚠️ <strong>Important Note:</strong> When the API Explorer acquires the token after login, the access tokens
            will have the same permissions as the user who logs in as part of this flow.</p>
        </div>
      </div>
      <a href="#auth" class="block mt-4 text-green-500 dark:text-green-300 hover:underline text-center">Setup your
        access token</a>
    </section>
    <section id="tutorials" class="mb-10">
      <h2 class="text-2xl font-semibold mb-4">🎓 Tutorials</h2>
      <p>If you have successfully tested the API from the API Console and want to take the next step of integrating the
        API into your application, or if you want to see a sample using Authlete APIs, follow the links below. These
        resources will help you understand key concepts and how to integrate Authlete API into your applications.</p>
      <div class="mt-4">
        <a href="https://www.authlete.com/developers/getting_started/"
          class="block text-green-500 dark:text-green-300 font-bold hover:underline mb-2">🚀 Getting Started with
          Authlete</a>
          </br>
        <a href="https://www.authlete.com/developers/tutorial/signup/"
          class="block text-green-500 dark:text-green-300 font-bold hover:underline">🔑 From Sign-Up to the First API
          Request</a>
      </div>
    </section>
    <section id="support" class="mb-10">
      <h2 class="text-2xl font-semibold mb-4">🛠 Contact Us</h2>
      <p>If you have any questions or need assistance, our team is here to help.</p>
      <a href="https://www.authlete.com/contact/"
        class="block mt-4 text-green-500 dark:text-green-300 font-bold hover:underline">Contact Page</a>
    </section>
  </main>
</div>
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [authlete-test](#authlete-test)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Authentication](#authentication)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Standalone functions](#standalone-functions)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Debugging](#debugging)
* [Development](#development)
  * [Maturity](#maturity)
  * [Contributions](#contributions)
* [authlete-typescript-sdk-test](#authlete-typescript-sdk-test)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add authlete
```

### PNPM

```bash
pnpm add authlete
```

### Bun

```bash
bun add authlete
```

### Yarn

```bash
yarn add authlete zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```

> [!NOTE]
> This package is published with CommonJS and ES Modules (ESM) support.
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { Authlete } from "authlete";

const authlete = new Authlete({
  security: {
    authlete: process.env["AUTHLETE_AUTHLETE"] ?? "",
  },
});

async function run() {
  const result = await authlete.serviceManagement.serviceGetApi({
    serviceId: "<id>",
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security schemes globally:

| Name       | Type   | Scheme       | Environment Variable |
| ---------- | ------ | ------------ | -------------------- |
| `authlete` | oauth2 | OAuth2 token | `AUTHLETE_AUTHLETE`  |
| `bearer`   | http   | HTTP Bearer  | `AUTHLETE_BEARER`    |

You can set the security parameters through the `security` optional parameter when initializing the SDK client instance. The selected scheme will be used by default to authenticate with the API for all operations that support it. For example:
```typescript
import { Authlete } from "authlete";

const authlete = new Authlete({
  security: {
    authlete: process.env["AUTHLETE_AUTHLETE"] ?? "",
  },
});

async function run() {
  const result = await authlete.serviceManagement.serviceGetApi({
    serviceId: "<id>",
  });

  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>


### [authorizationEndpoint](docs/sdks/authorizationendpoint/README.md)

* [authAuthorizationApi](docs/sdks/authorizationendpoint/README.md#authauthorizationapi) - Process Authorization Request
* [authAuthorizationFailApi](docs/sdks/authorizationendpoint/README.md#authauthorizationfailapi) - Fail Authorization Request
* [authAuthorizationIssueApi](docs/sdks/authorizationendpoint/README.md#authauthorizationissueapi) - Issue Authorization Response
* [updateAuthorizationTicket](docs/sdks/authorizationendpoint/README.md#updateauthorizationticket) - Update Ticket Information

### [ciba](docs/sdks/ciba/README.md)

* [backchannelAuthenticationApi](docs/sdks/ciba/README.md#backchannelauthenticationapi) - Process Backchannel Authentication Request
* [backchannelAuthenticationIssueApi](docs/sdks/ciba/README.md#backchannelauthenticationissueapi) - Issue Backchannel Authentication Response
* [backchannelAuthenticationFailApi](docs/sdks/ciba/README.md#backchannelauthenticationfailapi) - Fail Backchannel Authentication Request
* [backchannelAuthenticationCompleteApi](docs/sdks/ciba/README.md#backchannelauthenticationcompleteapi) - Complete Backchannel Authentication

### [clientManagement](docs/sdks/clientmanagement/README.md)

* [clientGetApi](docs/sdks/clientmanagement/README.md#clientgetapi) - Get Client
* [clientGetListApi](docs/sdks/clientmanagement/README.md#clientgetlistapi) - List Clients
* [clientCreateApi](docs/sdks/clientmanagement/README.md#clientcreateapi) - Create Client
* [clientUpdateApi](docs/sdks/clientmanagement/README.md#clientupdateapi) - Update Client
* [clientDeleteApi](docs/sdks/clientmanagement/README.md#clientdeleteapi) - Delete Client ⚡
* [clientFlagUpdateApi](docs/sdks/clientmanagement/README.md#clientflagupdateapi) - Update Client Lock
* [clientSecretRefreshApi](docs/sdks/clientmanagement/README.md#clientsecretrefreshapi) - Rotate Client Secret
* [clientSecretUpdateApi](docs/sdks/clientmanagement/README.md#clientsecretupdateapi) - Update Client Secret
* [clientAuthorizationGetListApi](docs/sdks/clientmanagement/README.md#clientauthorizationgetlistapi) - Get Authorized Applications
* [clientAuthorizationUpdateApi](docs/sdks/clientmanagement/README.md#clientauthorizationupdateapi) - Update Client Tokens
* [clientAuthorizationDeleteApi](docs/sdks/clientmanagement/README.md#clientauthorizationdeleteapi) - Delete Client Tokens
* [clientGrantedScopesGetApi](docs/sdks/clientmanagement/README.md#clientgrantedscopesgetapi) - Get Granted Scopes
* [clientGrantedScopesDeleteApi](docs/sdks/clientmanagement/README.md#clientgrantedscopesdeleteapi) - Delete Granted Scopes
* [clientExtensionRequestablesScopesGetApi](docs/sdks/clientmanagement/README.md#clientextensionrequestablesscopesgetapi) - Get Requestable Scopes
* [clientExtensionRequestablesScopesUpdateApi](docs/sdks/clientmanagement/README.md#clientextensionrequestablesscopesupdateapi) - Update Requestable Scopes
* [clientExtensionRequestablesScopesDeleteApi](docs/sdks/clientmanagement/README.md#clientextensionrequestablesscopesdeleteapi) - Delete Requestable Scopes

### [deviceFlow](docs/sdks/deviceflow/README.md)

* [deviceAuthorizationApi](docs/sdks/deviceflow/README.md#deviceauthorizationapi) - Process Device Authorization Request
* [deviceVerificationApi](docs/sdks/deviceflow/README.md#deviceverificationapi) - Process Device Verification Request
* [deviceCompleteApi](docs/sdks/deviceflow/README.md#devicecompleteapi) - Complete Device Authorization

### [dynamicClientRegistration](docs/sdks/dynamicclientregistration/README.md)

* [clientRegistrationApi](docs/sdks/dynamicclientregistration/README.md#clientregistrationapi) - Register Client
* [clientRegistrationGetApi](docs/sdks/dynamicclientregistration/README.md#clientregistrationgetapi) - Get Client
* [clientRegistrationUpdateApi](docs/sdks/dynamicclientregistration/README.md#clientregistrationupdateapi) - Update Client
* [clientRegistrationDeleteApi](docs/sdks/dynamicclientregistration/README.md#clientregistrationdeleteapi) - Delete Client

### [federationEndpoint](docs/sdks/federationendpoint/README.md)

* [federationConfigurationApi](docs/sdks/federationendpoint/README.md#federationconfigurationapi) - Process Entity Configuration Request
* [federationRegistrationApi](docs/sdks/federationendpoint/README.md#federationregistrationapi) - Process Federation Registration Request

### [grantManagementEndpoint](docs/sdks/grantmanagementendpoint/README.md)

* [grantMApi](docs/sdks/grantmanagementendpoint/README.md#grantmapi) - Process Grant Management Request

### [hardwareSecurityKey](docs/sdks/hardwaresecuritykey/README.md)

* [hskCreateApi](docs/sdks/hardwaresecuritykey/README.md#hskcreateapi) - Create Security Key
* [hskDeleteApi](docs/sdks/hardwaresecuritykey/README.md#hskdeleteapi) - Delete Security Key
* [hskGetApi](docs/sdks/hardwaresecuritykey/README.md#hskgetapi) - Get Security Key
* [hskGetListApi](docs/sdks/hardwaresecuritykey/README.md#hskgetlistapi) - List Security Keys

### [introspectionEndpoint](docs/sdks/introspectionendpoint/README.md)

* [authIntrospectionApi](docs/sdks/introspectionendpoint/README.md#authintrospectionapi) - Process Introspection Request
* [authIntrospectionStandardApi](docs/sdks/introspectionendpoint/README.md#authintrospectionstandardapi) - Process OAuth 2.0 Introspection Request

### [joseObject](docs/sdks/joseobject/README.md)

* [joseVerifyApi](docs/sdks/joseobject/README.md#joseverifyapi) - Verify JOSE

### [jwkSetEndpoint](docs/sdks/jwksetendpoint/README.md)

* [serviceJwksGetApi](docs/sdks/jwksetendpoint/README.md#servicejwksgetapi) - Get JWK Set

### [nativeSSO](docs/sdks/nativesso/README.md)

* [nativeSsoApi](docs/sdks/nativesso/README.md#nativessoapi) - Native SSO Processing
* [nativeSsoLogoutApi](docs/sdks/nativesso/README.md#nativessologoutapi) - Native SSO Logout Processing

### [pushedAuthorizationEndpoint](docs/sdks/pushedauthorizationendpoint/README.md)

* [pushedAuthReqApi](docs/sdks/pushedauthorizationendpoint/README.md#pushedauthreqapi) - Process Pushed Authorization Request

### [revocationEndpoint](docs/sdks/revocationendpoint/README.md)

* [authRevocationApi](docs/sdks/revocationendpoint/README.md#authrevocationapi) - Process Revocation Request

### [serviceManagement](docs/sdks/servicemanagement/README.md)

* [serviceGetApi](docs/sdks/servicemanagement/README.md#servicegetapi) - Get Service
* [serviceGetListApi](docs/sdks/servicemanagement/README.md#servicegetlistapi) - List Services
* [serviceCreateApi](docs/sdks/servicemanagement/README.md#servicecreateapi) - Create Service
* [serviceUpdateApi](docs/sdks/servicemanagement/README.md#serviceupdateapi) - Update Service
* [serviceDeleteApi](docs/sdks/servicemanagement/README.md#servicedeleteapi) - Delete Service ⚡
* [serviceConfigurationApi](docs/sdks/servicemanagement/README.md#serviceconfigurationapi) - Get Service Configuration

### [tokenEndpoint](docs/sdks/tokenendpoint/README.md)

* [authTokenApi](docs/sdks/tokenendpoint/README.md#authtokenapi) - Process Token Request
* [authTokenFailApi](docs/sdks/tokenendpoint/README.md#authtokenfailapi) - Fail Token Request
* [authTokenIssueApi](docs/sdks/tokenendpoint/README.md#authtokenissueapi) - Issue Token Response
* [idtokenReissueApi](docs/sdks/tokenendpoint/README.md#idtokenreissueapi) - Reissue ID Token

### [tokenOperations](docs/sdks/tokenoperations/README.md)

* [authTokenGetListApi](docs/sdks/tokenoperations/README.md#authtokengetlistapi) - List Issued Tokens
* [authTokenCreateApi](docs/sdks/tokenoperations/README.md#authtokencreateapi) - Create Access Token
* [authTokenUpdateApi](docs/sdks/tokenoperations/README.md#authtokenupdateapi) - Update Access Token
* [authTokenDeleteApi](docs/sdks/tokenoperations/README.md#authtokendeleteapi) - Delete Access Token
* [authTokenRevokeApi](docs/sdks/tokenoperations/README.md#authtokenrevokeapi) - Revoke Access Token

### [userInfoEndpoint](docs/sdks/userinfoendpoint/README.md)

* [authUserinfoApi](docs/sdks/userinfoendpoint/README.md#authuserinfoapi) - Process UserInfo Request
* [authUserinfoIssueApi](docs/sdks/userinfoendpoint/README.md#authuserinfoissueapi) - Issue UserInfo Response

### [utilityEndpoints](docs/sdks/utilityendpoints/README.md)

* [infoApi](docs/sdks/utilityendpoints/README.md#infoapi) - Get Server Metadata
* [miscEchoApi](docs/sdks/utilityendpoints/README.md#miscechoapi) - Echo

### [verifiableCredentialIssuer](docs/sdks/verifiablecredentialissuer/README.md)

* [vciMetadataApi](docs/sdks/verifiablecredentialissuer/README.md#vcimetadataapi) - /api/{serviceId}/vci/metadata API
* [vciJwtissuerApi](docs/sdks/verifiablecredentialissuer/README.md#vcijwtissuerapi) - /api/{serviceId}/vci/jwtissuer API
* [vciJwksApi](docs/sdks/verifiablecredentialissuer/README.md#vcijwksapi) - /api/{serviceId}/vci/jwks API
* [vciOfferCreateApi](docs/sdks/verifiablecredentialissuer/README.md#vcioffercreateapi) - /api/{serviceId}/vci/offer/create API
* [vciOfferInfoApi](docs/sdks/verifiablecredentialissuer/README.md#vciofferinfoapi) - /api/{serviceId}/vci/offer/info API
* [vciSingleParseApi](docs/sdks/verifiablecredentialissuer/README.md#vcisingleparseapi) - /api/{serviceId}/vci/single/parse API
* [vciSingleIssueApi](docs/sdks/verifiablecredentialissuer/README.md#vcisingleissueapi) - /api/{serviceId}/vci/single/issue API
* [vciBatchParseApi](docs/sdks/verifiablecredentialissuer/README.md#vcibatchparseapi) - /api/{serviceId}/vci/batch/parse API
* [vciBatchIssueApi](docs/sdks/verifiablecredentialissuer/README.md#vcibatchissueapi) - /api/{serviceId}/vci/batch/issue API
* [vciDeferredParseApi](docs/sdks/verifiablecredentialissuer/README.md#vcideferredparseapi) - /api/{serviceId}/vci/deferred/parse API
* [vciDeferredIssueApi](docs/sdks/verifiablecredentialissuer/README.md#vcideferredissueapi) - /api/{serviceId}/vci/deferred/issue API

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`authorizationEndpointAuthAuthorizationApi`](docs/sdks/authorizationendpoint/README.md#authauthorizationapi) - Process Authorization Request
- [`authorizationEndpointAuthAuthorizationFailApi`](docs/sdks/authorizationendpoint/README.md#authauthorizationfailapi) - Fail Authorization Request
- [`authorizationEndpointAuthAuthorizationIssueApi`](docs/sdks/authorizationendpoint/README.md#authauthorizationissueapi) - Issue Authorization Response
- [`authorizationEndpointUpdateAuthorizationTicket`](docs/sdks/authorizationendpoint/README.md#updateauthorizationticket) - Update Ticket Information
- [`cibaBackchannelAuthenticationApi`](docs/sdks/ciba/README.md#backchannelauthenticationapi) - Process Backchannel Authentication Request
- [`cibaBackchannelAuthenticationCompleteApi`](docs/sdks/ciba/README.md#backchannelauthenticationcompleteapi) - Complete Backchannel Authentication
- [`cibaBackchannelAuthenticationFailApi`](docs/sdks/ciba/README.md#backchannelauthenticationfailapi) - Fail Backchannel Authentication Request
- [`cibaBackchannelAuthenticationIssueApi`](docs/sdks/ciba/README.md#backchannelauthenticationissueapi) - Issue Backchannel Authentication Response
- [`clientManagementClientAuthorizationDeleteApi`](docs/sdks/clientmanagement/README.md#clientauthorizationdeleteapi) - Delete Client Tokens
- [`clientManagementClientAuthorizationGetListApi`](docs/sdks/clientmanagement/README.md#clientauthorizationgetlistapi) - Get Authorized Applications
- [`clientManagementClientAuthorizationUpdateApi`](docs/sdks/clientmanagement/README.md#clientauthorizationupdateapi) - Update Client Tokens
- [`clientManagementClientCreateApi`](docs/sdks/clientmanagement/README.md#clientcreateapi) - Create Client
- [`clientManagementClientDeleteApi`](docs/sdks/clientmanagement/README.md#clientdeleteapi) - Delete Client ⚡
- [`clientManagementClientExtensionRequestablesScopesDeleteApi`](docs/sdks/clientmanagement/README.md#clientextensionrequestablesscopesdeleteapi) - Delete Requestable Scopes
- [`clientManagementClientExtensionRequestablesScopesGetApi`](docs/sdks/clientmanagement/README.md#clientextensionrequestablesscopesgetapi) - Get Requestable Scopes
- [`clientManagementClientExtensionRequestablesScopesUpdateApi`](docs/sdks/clientmanagement/README.md#clientextensionrequestablesscopesupdateapi) - Update Requestable Scopes
- [`clientManagementClientFlagUpdateApi`](docs/sdks/clientmanagement/README.md#clientflagupdateapi) - Update Client Lock
- [`clientManagementClientGetApi`](docs/sdks/clientmanagement/README.md#clientgetapi) - Get Client
- [`clientManagementClientGetListApi`](docs/sdks/clientmanagement/README.md#clientgetlistapi) - List Clients
- [`clientManagementClientGrantedScopesDeleteApi`](docs/sdks/clientmanagement/README.md#clientgrantedscopesdeleteapi) - Delete Granted Scopes
- [`clientManagementClientGrantedScopesGetApi`](docs/sdks/clientmanagement/README.md#clientgrantedscopesgetapi) - Get Granted Scopes
- [`clientManagementClientSecretRefreshApi`](docs/sdks/clientmanagement/README.md#clientsecretrefreshapi) - Rotate Client Secret
- [`clientManagementClientSecretUpdateApi`](docs/sdks/clientmanagement/README.md#clientsecretupdateapi) - Update Client Secret
- [`clientManagementClientUpdateApi`](docs/sdks/clientmanagement/README.md#clientupdateapi) - Update Client
- [`deviceFlowDeviceAuthorizationApi`](docs/sdks/deviceflow/README.md#deviceauthorizationapi) - Process Device Authorization Request
- [`deviceFlowDeviceCompleteApi`](docs/sdks/deviceflow/README.md#devicecompleteapi) - Complete Device Authorization
- [`deviceFlowDeviceVerificationApi`](docs/sdks/deviceflow/README.md#deviceverificationapi) - Process Device Verification Request
- [`dynamicClientRegistrationClientRegistrationApi`](docs/sdks/dynamicclientregistration/README.md#clientregistrationapi) - Register Client
- [`dynamicClientRegistrationClientRegistrationDeleteApi`](docs/sdks/dynamicclientregistration/README.md#clientregistrationdeleteapi) - Delete Client
- [`dynamicClientRegistrationClientRegistrationGetApi`](docs/sdks/dynamicclientregistration/README.md#clientregistrationgetapi) - Get Client
- [`dynamicClientRegistrationClientRegistrationUpdateApi`](docs/sdks/dynamicclientregistration/README.md#clientregistrationupdateapi) - Update Client
- [`federationEndpointFederationConfigurationApi`](docs/sdks/federationendpoint/README.md#federationconfigurationapi) - Process Entity Configuration Request
- [`federationEndpointFederationRegistrationApi`](docs/sdks/federationendpoint/README.md#federationregistrationapi) - Process Federation Registration Request
- [`grantManagementEndpointGrantMApi`](docs/sdks/grantmanagementendpoint/README.md#grantmapi) - Process Grant Management Request
- [`hardwareSecurityKeyHskCreateApi`](docs/sdks/hardwaresecuritykey/README.md#hskcreateapi) - Create Security Key
- [`hardwareSecurityKeyHskDeleteApi`](docs/sdks/hardwaresecuritykey/README.md#hskdeleteapi) - Delete Security Key
- [`hardwareSecurityKeyHskGetApi`](docs/sdks/hardwaresecuritykey/README.md#hskgetapi) - Get Security Key
- [`hardwareSecurityKeyHskGetListApi`](docs/sdks/hardwaresecuritykey/README.md#hskgetlistapi) - List Security Keys
- [`introspectionEndpointAuthIntrospectionApi`](docs/sdks/introspectionendpoint/README.md#authintrospectionapi) - Process Introspection Request
- [`introspectionEndpointAuthIntrospectionStandardApi`](docs/sdks/introspectionendpoint/README.md#authintrospectionstandardapi) - Process OAuth 2.0 Introspection Request
- [`joseObjectJoseVerifyApi`](docs/sdks/joseobject/README.md#joseverifyapi) - Verify JOSE
- [`jwkSetEndpointServiceJwksGetApi`](docs/sdks/jwksetendpoint/README.md#servicejwksgetapi) - Get JWK Set
- [`nativeSSONativeSSOApi`](docs/sdks/nativesso/README.md#nativessoapi) - Native SSO Processing
- [`nativeSSONativeSSOLogoutApi`](docs/sdks/nativesso/README.md#nativessologoutapi) - Native SSO Logout Processing
- [`pushedAuthorizationEndpointPushedAuthReqApi`](docs/sdks/pushedauthorizationendpoint/README.md#pushedauthreqapi) - Process Pushed Authorization Request
- [`revocationEndpointAuthRevocationApi`](docs/sdks/revocationendpoint/README.md#authrevocationapi) - Process Revocation Request
- [`serviceManagementServiceConfigurationApi`](docs/sdks/servicemanagement/README.md#serviceconfigurationapi) - Get Service Configuration
- [`serviceManagementServiceCreateApi`](docs/sdks/servicemanagement/README.md#servicecreateapi) - Create Service
- [`serviceManagementServiceDeleteApi`](docs/sdks/servicemanagement/README.md#servicedeleteapi) - Delete Service ⚡
- [`serviceManagementServiceGetApi`](docs/sdks/servicemanagement/README.md#servicegetapi) - Get Service
- [`serviceManagementServiceGetListApi`](docs/sdks/servicemanagement/README.md#servicegetlistapi) - List Services
- [`serviceManagementServiceUpdateApi`](docs/sdks/servicemanagement/README.md#serviceupdateapi) - Update Service
- [`tokenEndpointAuthTokenApi`](docs/sdks/tokenendpoint/README.md#authtokenapi) - Process Token Request
- [`tokenEndpointAuthTokenFailApi`](docs/sdks/tokenendpoint/README.md#authtokenfailapi) - Fail Token Request
- [`tokenEndpointAuthTokenIssueApi`](docs/sdks/tokenendpoint/README.md#authtokenissueapi) - Issue Token Response
- [`tokenEndpointIdtokenReissueApi`](docs/sdks/tokenendpoint/README.md#idtokenreissueapi) - Reissue ID Token
- [`tokenOperationsAuthTokenCreateApi`](docs/sdks/tokenoperations/README.md#authtokencreateapi) - Create Access Token
- [`tokenOperationsAuthTokenDeleteApi`](docs/sdks/tokenoperations/README.md#authtokendeleteapi) - Delete Access Token
- [`tokenOperationsAuthTokenGetListApi`](docs/sdks/tokenoperations/README.md#authtokengetlistapi) - List Issued Tokens
- [`tokenOperationsAuthTokenRevokeApi`](docs/sdks/tokenoperations/README.md#authtokenrevokeapi) - Revoke Access Token
- [`tokenOperationsAuthTokenUpdateApi`](docs/sdks/tokenoperations/README.md#authtokenupdateapi) - Update Access Token
- [`userInfoEndpointAuthUserinfoApi`](docs/sdks/userinfoendpoint/README.md#authuserinfoapi) - Process UserInfo Request
- [`userInfoEndpointAuthUserinfoIssueApi`](docs/sdks/userinfoendpoint/README.md#authuserinfoissueapi) - Issue UserInfo Response
- [`utilityEndpointsInfoApi`](docs/sdks/utilityendpoints/README.md#infoapi) - Get Server Metadata
- [`utilityEndpointsMiscEchoApi`](docs/sdks/utilityendpoints/README.md#miscechoapi) - Echo
- [`verifiableCredentialIssuerVciBatchIssueApi`](docs/sdks/verifiablecredentialissuer/README.md#vcibatchissueapi) - /api/{serviceId}/vci/batch/issue API
- [`verifiableCredentialIssuerVciBatchParseApi`](docs/sdks/verifiablecredentialissuer/README.md#vcibatchparseapi) - /api/{serviceId}/vci/batch/parse API
- [`verifiableCredentialIssuerVciDeferredIssueApi`](docs/sdks/verifiablecredentialissuer/README.md#vcideferredissueapi) - /api/{serviceId}/vci/deferred/issue API
- [`verifiableCredentialIssuerVciDeferredParseApi`](docs/sdks/verifiablecredentialissuer/README.md#vcideferredparseapi) - /api/{serviceId}/vci/deferred/parse API
- [`verifiableCredentialIssuerVciJwksApi`](docs/sdks/verifiablecredentialissuer/README.md#vcijwksapi) - /api/{serviceId}/vci/jwks API
- [`verifiableCredentialIssuerVciJwtissuerApi`](docs/sdks/verifiablecredentialissuer/README.md#vcijwtissuerapi) - /api/{serviceId}/vci/jwtissuer API
- [`verifiableCredentialIssuerVciMetadataApi`](docs/sdks/verifiablecredentialissuer/README.md#vcimetadataapi) - /api/{serviceId}/vci/metadata API
- [`verifiableCredentialIssuerVciOfferCreateApi`](docs/sdks/verifiablecredentialissuer/README.md#vcioffercreateapi) - /api/{serviceId}/vci/offer/create API
- [`verifiableCredentialIssuerVciOfferInfoApi`](docs/sdks/verifiablecredentialissuer/README.md#vciofferinfoapi) - /api/{serviceId}/vci/offer/info API
- [`verifiableCredentialIssuerVciSingleIssueApi`](docs/sdks/verifiablecredentialissuer/README.md#vcisingleissueapi) - /api/{serviceId}/vci/single/issue API
- [`verifiableCredentialIssuerVciSingleParseApi`](docs/sdks/verifiablecredentialissuer/README.md#vcisingleparseapi) - /api/{serviceId}/vci/single/parse API

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { Authlete } from "authlete";

const authlete = new Authlete({
  security: {
    authlete: process.env["AUTHLETE_AUTHLETE"] ?? "",
  },
});

async function run() {
  const result = await authlete.serviceManagement.serviceGetApi({
    serviceId: "<id>",
  }, {
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { Authlete } from "authlete";

const authlete = new Authlete({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  security: {
    authlete: process.env["AUTHLETE_AUTHLETE"] ?? "",
  },
});

async function run() {
  const result = await authlete.serviceManagement.serviceGetApi({
    serviceId: "<id>",
  });

  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

[`AuthleteError`](./src/models/errors/authleteerror.ts) is the base class for all HTTP error responses. It has the following properties:

| Property            | Type       | Description                                                                             |
| ------------------- | ---------- | --------------------------------------------------------------------------------------- |
| `error.message`     | `string`   | Error message                                                                           |
| `error.statusCode`  | `number`   | HTTP response status code eg `404`                                                      |
| `error.headers`     | `Headers`  | HTTP response headers                                                                   |
| `error.body`        | `string`   | HTTP body. Can be empty string if no body is returned.                                  |
| `error.rawResponse` | `Response` | Raw HTTP response                                                                       |
| `error.data$`       |            | Optional. Some errors may contain structured data. [See Error Classes](#error-classes). |

### Example
```typescript
import { Authlete } from "authlete";
import * as errors from "authlete/models/errors";

const authlete = new Authlete({
  security: {
    authlete: process.env["AUTHLETE_AUTHLETE"] ?? "",
  },
});

async function run() {
  try {
    const result = await authlete.serviceManagement.serviceGetApi({
      serviceId: "<id>",
    });

    console.log(result);
  } catch (error) {
    // The base class for HTTP error responses
    if (error instanceof errors.AuthleteError) {
      console.log(error.message);
      console.log(error.statusCode);
      console.log(error.body);
      console.log(error.headers);

      // Depending on the method different errors may be thrown
      if (error instanceof errors.ResultError) {
        console.log(error.data$.resultCode); // string
        console.log(error.data$.resultMessage); // string
      }
    }
  }
}

run();

```

### Error Classes
**Primary errors:**
* [`AuthleteError`](./src/models/errors/authleteerror.ts): The base class for HTTP error responses.
  * [`ResultError`](./src/models/errors/resulterror.ts): . *

<details><summary>Less common errors (6)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/models/errors/httpclienterrors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/models/errors/httpclienterrors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/models/errors/httpclienterrors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/models/errors/httpclienterrors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/models/errors/httpclienterrors.ts): Unrecognised or unexpected error.


**Inherit from [`AuthleteError`](./src/models/errors/authleteerror.ts)**:
* [`ResponseValidationError`](./src/models/errors/responsevalidationerror.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

</details>

\* Check [the method documentation](#available-resources-and-operations) to see if the error is applicable.
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx: number` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| #   | Server                    | Description         |
| --- | ------------------------- | ------------------- |
| 0   | `https://us.authlete.com` | 🇺🇸 US Cluster     |
| 1   | `https://jp.authlete.com` | 🇯🇵 Japan Cluster  |
| 2   | `https://eu.authlete.com` | 🇪🇺 Europe Cluster |
| 3   | `https://br.authlete.com` | 🇧🇷 Brazil Cluster |

#### Example

```typescript
import { Authlete } from "authlete";

const authlete = new Authlete({
  serverIdx: 3,
  security: {
    authlete: process.env["AUTHLETE_AUTHLETE"] ?? "",
  },
});

async function run() {
  const result = await authlete.serviceManagement.serviceGetApi({
    serviceId: "<id>",
  });

  console.log(result);
}

run();

```

### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { Authlete } from "authlete";

const authlete = new Authlete({
  serverURL: "https://br.authlete.com",
  security: {
    authlete: process.env["AUTHLETE_AUTHLETE"] ?? "",
  },
});

async function run() {
  const result = await authlete.serviceManagement.serviceGetApi({
    serviceId: "<id>",
  });

  console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { Authlete } from "authlete";
import { HTTPClient } from "authlete/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new Authlete({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { Authlete } from "authlete";

const sdk = new Authlete({ debugLogger: console });
```

You can also enable a default debug logger by setting an environment variable `AUTHLETE_DEBUG` to true.
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release. 

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=authlete&utm_campaign=typescript)
# authlete-typescript-sdk-test
