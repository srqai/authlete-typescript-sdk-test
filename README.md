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
* [authlete](#authlete)
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

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

> [!TIP]
> To finish publishing your SDK to npm and others you must [run your first generation action](https://www.speakeasy.com/docs/github-setup#step-by-step-guide).


The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

> [!WARNING]
> Temporary test releases are published under the `authlete-beta` name until the primary `authlete` package name becomes available again.

### NPM

```bash
npm add authlete-beta
```

### PNPM

```bash
pnpm add authlete-beta
```

### Bun

```bash
bun add authlete-beta
```

### Yarn

```bash
yarn add authlete-beta
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
<!-- End Authentication [security] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [authorization](docs/sdks/authorization/README.md)

* [process](docs/sdks/authorization/README.md#process) - Process Authorization Request
* [issue](docs/sdks/authorization/README.md#issue) - Issue Authorization Response
* [updateTicket](docs/sdks/authorization/README.md#updateticket) - Update Ticket Information

### [authorizationEndpoint](docs/sdks/authorizationendpoint/README.md)

* [fail](docs/sdks/authorizationendpoint/README.md#fail) - Fail Authorization Request
* [getTicketInfo](docs/sdks/authorizationendpoint/README.md#getticketinfo) - Get Ticket Information

### [ciba](docs/sdks/ciba/README.md)

* [processRequest](docs/sdks/ciba/README.md#processrequest) - Process Backchannel Authentication Request
* [issueAuthenticationResponse](docs/sdks/ciba/README.md#issueauthenticationresponse) - Issue Backchannel Authentication Response
* [fail](docs/sdks/ciba/README.md#fail) - Fail Backchannel Authentication Request
* [complete](docs/sdks/ciba/README.md#complete) - Complete Backchannel Authentication

### [clientManagement](docs/sdks/clientmanagement/README.md)

* [getGrantedScopes](docs/sdks/clientmanagement/README.md#getgrantedscopes) - Get Granted Scopes
* [deleteGrantedScopes](docs/sdks/clientmanagement/README.md#deletegrantedscopes) - Delete Granted Scopes
* [getRequestableScopes](docs/sdks/clientmanagement/README.md#getrequestablescopes) - Get Requestable Scopes

### [clients](docs/sdks/clients/README.md)

* [get](docs/sdks/clients/README.md#get) - Get Client
* [getList](docs/sdks/clients/README.md#getlist) - List Clients
* [create](docs/sdks/clients/README.md#create) - Create Client
* [update](docs/sdks/clients/README.md#update) - Update Client
* [delete](docs/sdks/clients/README.md#delete) - Delete Client ⚡
* [updateLockFlag](docs/sdks/clients/README.md#updatelockflag) - Update Client Lock
* [rotateSecret](docs/sdks/clients/README.md#rotatesecret) - Rotate Client Secret
* [updateSecret](docs/sdks/clients/README.md#updatesecret) - Update Client Secret
* [getAuthorizedApplications](docs/sdks/clients/README.md#getauthorizedapplications) - Get Authorized Applications
* [updateTokens](docs/sdks/clients/README.md#updatetokens) - Update Client Tokens
* [deleteTokens](docs/sdks/clients/README.md#deletetokens) - Delete Client Tokens
* [updateRequestableScopes](docs/sdks/clients/README.md#updaterequestablescopes) - Update Requestable Scopes
* [deleteRequestableScopes](docs/sdks/clients/README.md#deleterequestablescopes) - Delete Requestable Scopes

### [deviceFlow](docs/sdks/deviceflow/README.md)

* [authorize](docs/sdks/deviceflow/README.md#authorize) - Process Device Authorization Request
* [verify](docs/sdks/deviceflow/README.md#verify) - Process Device Verification Request
* [complete](docs/sdks/deviceflow/README.md#complete) - Complete Device Authorization

### [dynamicClientRegistration](docs/sdks/dynamicclientregistration/README.md)

* [get](docs/sdks/dynamicclientregistration/README.md#get) - Get Client
* [update](docs/sdks/dynamicclientregistration/README.md#update) - Update Client

### [dynamicClientRegistrations](docs/sdks/dynamicclientregistrations/README.md)

* [register](docs/sdks/dynamicclientregistrations/README.md#register) - Register Client
* [delete](docs/sdks/dynamicclientregistrations/README.md#delete) - Delete Client

### [federationEndpoint](docs/sdks/federationendpoint/README.md)

* [processConfiguration](docs/sdks/federationendpoint/README.md#processconfiguration) - Process Entity Configuration Request

### [federations](docs/sdks/federations/README.md)

* [register](docs/sdks/federations/README.md#register) - Process Federation Registration Request

### [grantManagementEndpoint](docs/sdks/grantmanagementendpoint/README.md)

* [processRequest](docs/sdks/grantmanagementendpoint/README.md#processrequest) - Process Grant Management Request

### [hardwareSecurityKey](docs/sdks/hardwaresecuritykey/README.md)

* [delete](docs/sdks/hardwaresecuritykey/README.md#delete) - Delete Security Key
* [get](docs/sdks/hardwaresecuritykey/README.md#get) - Get Security Key

### [hardwareSecurityKeys](docs/sdks/hardwaresecuritykeys/README.md)

* [create](docs/sdks/hardwaresecuritykeys/README.md#create) - Create Security Key
* [getList](docs/sdks/hardwaresecuritykeys/README.md#getlist) - List Security Keys

### [introspection](docs/sdks/introspection/README.md)

* [request](docs/sdks/introspection/README.md#request) - Process Introspection Request

### [introspectionEndpoint](docs/sdks/introspectionendpoint/README.md)

* [processStandard](docs/sdks/introspectionendpoint/README.md#processstandard) - Process OAuth 2.0 Introspection Request

### [joseObjects](docs/sdks/joseobjects/README.md)

* [verify](docs/sdks/joseobjects/README.md#verify) - Verify JOSE

### [jwkSets](docs/sdks/jwksets/README.md)

* [get](docs/sdks/jwksets/README.md#get) - Get JWK Set

### [nativeSSO](docs/sdks/nativesso/README.md)

* [process](docs/sdks/nativesso/README.md#process) - Native SSO Processing
* [logout](docs/sdks/nativesso/README.md#logout) - Native SSO Logout Processing

### [pushedAuthorization](docs/sdks/pushedauthorization/README.md)

* [request](docs/sdks/pushedauthorization/README.md#request) - Process Pushed Authorization Request

### [revocations](docs/sdks/revocations/README.md)

* [process](docs/sdks/revocations/README.md#process) - Process Revocation Request

### [serviceManagement](docs/sdks/servicemanagement/README.md)

* [get](docs/sdks/servicemanagement/README.md#get) - Get Service
* [update](docs/sdks/servicemanagement/README.md#update) - Update Service

### [services](docs/sdks/services/README.md)

* [list](docs/sdks/services/README.md#list) - List Services
* [create](docs/sdks/services/README.md#create) - Create Service
* [delete](docs/sdks/services/README.md#delete) - Delete Service ⚡
* [configuration](docs/sdks/services/README.md#configuration) - Get Service Configuration

### [tokenEndpoint](docs/sdks/tokenendpoint/README.md)

* [reissueIdToken](docs/sdks/tokenendpoint/README.md#reissueidtoken) - Reissue ID Token

### [tokenOperations](docs/sdks/tokenoperations/README.md)

* [list](docs/sdks/tokenoperations/README.md#list) - List Issued Tokens
* [create](docs/sdks/tokenoperations/README.md#create) - Create Access Token
* [delete](docs/sdks/tokenoperations/README.md#delete) - Delete Access Token

### [tokens](docs/sdks/tokens/README.md)

* [request](docs/sdks/tokens/README.md#request) - Process Token Request
* [failRequest](docs/sdks/tokens/README.md#failrequest) - Fail Token Request
* [issue](docs/sdks/tokens/README.md#issue) - Issue Token Response
* [update](docs/sdks/tokens/README.md#update) - Update Access Token
* [revoke](docs/sdks/tokens/README.md#revoke) - Revoke Access Token

### [userInfoEndpoint](docs/sdks/userinfoendpoint/README.md)

* [process](docs/sdks/userinfoendpoint/README.md#process) - Process UserInfo Request
* [issue](docs/sdks/userinfoendpoint/README.md#issue) - Issue UserInfo Response

### [utilities](docs/sdks/utilities/README.md)

* [echo](docs/sdks/utilities/README.md#echo) - Echo

### [utilityEndpoints](docs/sdks/utilityendpoints/README.md)

* [getInfo](docs/sdks/utilityendpoints/README.md#getinfo) - Get Server Metadata

### [verifiableCredentialIssuer](docs/sdks/verifiablecredentialissuer/README.md)

* [getJwtIssuerInfo](docs/sdks/verifiablecredentialissuer/README.md#getjwtissuerinfo) - Get JWT Issuer Information
* [parseSingle](docs/sdks/verifiablecredentialissuer/README.md#parsesingle) - Parse Single Credential

### [verifiableCredentialIssuers](docs/sdks/verifiablecredentialissuers/README.md)

* [getJwks](docs/sdks/verifiablecredentialissuers/README.md#getjwks) - Get JSON Web Key Set
* [createOffer](docs/sdks/verifiablecredentialissuers/README.md#createoffer) - Create Credential Offer
* [issueBatch](docs/sdks/verifiablecredentialissuers/README.md#issuebatch) - Issue Batch Credentials
* [parseDeferred](docs/sdks/verifiablecredentialissuers/README.md#parsedeferred) - Parse Deferred Credential
* [issueDeferred](docs/sdks/verifiablecredentialissuers/README.md#issuedeferred) - Issue Deferred Credential

### [verifiableCredentials](docs/sdks/verifiablecredentials/README.md)

* [getMetadata](docs/sdks/verifiablecredentials/README.md#getmetadata) - Get Verifiable Credential Issuer Metadata
* [getOfferInfo](docs/sdks/verifiablecredentials/README.md#getofferinfo) - Get Credential Offer Information
* [issueSingle](docs/sdks/verifiablecredentials/README.md#issuesingle) - Issue Single Credential
* [parseBatch](docs/sdks/verifiablecredentials/README.md#parsebatch) - Parse Batch Credentials

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

- [`authorizationEndpointFail`](docs/sdks/authorizationendpoint/README.md#fail) - Fail Authorization Request
- [`authorizationEndpointGetTicketInfo`](docs/sdks/authorizationendpoint/README.md#getticketinfo) - Get Ticket Information
- [`authorizationIssue`](docs/sdks/authorization/README.md#issue) - Issue Authorization Response
- [`authorizationProcess`](docs/sdks/authorization/README.md#process) - Process Authorization Request
- [`authorizationUpdateTicket`](docs/sdks/authorization/README.md#updateticket) - Update Ticket Information
- [`cibaComplete`](docs/sdks/ciba/README.md#complete) - Complete Backchannel Authentication
- [`cibaFail`](docs/sdks/ciba/README.md#fail) - Fail Backchannel Authentication Request
- [`cibaIssueAuthenticationResponse`](docs/sdks/ciba/README.md#issueauthenticationresponse) - Issue Backchannel Authentication Response
- [`cibaProcessRequest`](docs/sdks/ciba/README.md#processrequest) - Process Backchannel Authentication Request
- [`clientManagementDeleteGrantedScopes`](docs/sdks/clientmanagement/README.md#deletegrantedscopes) - Delete Granted Scopes
- [`clientManagementGetGrantedScopes`](docs/sdks/clientmanagement/README.md#getgrantedscopes) - Get Granted Scopes
- [`clientManagementGetRequestableScopes`](docs/sdks/clientmanagement/README.md#getrequestablescopes) - Get Requestable Scopes
- [`clientsCreate`](docs/sdks/clients/README.md#create) - Create Client
- [`clientsDelete`](docs/sdks/clients/README.md#delete) - Delete Client ⚡
- [`clientsDeleteRequestableScopes`](docs/sdks/clients/README.md#deleterequestablescopes) - Delete Requestable Scopes
- [`clientsDeleteTokens`](docs/sdks/clients/README.md#deletetokens) - Delete Client Tokens
- [`clientsGet`](docs/sdks/clients/README.md#get) - Get Client
- [`clientsGetAuthorizedApplications`](docs/sdks/clients/README.md#getauthorizedapplications) - Get Authorized Applications
- [`clientsGetList`](docs/sdks/clients/README.md#getlist) - List Clients
- [`clientsRotateSecret`](docs/sdks/clients/README.md#rotatesecret) - Rotate Client Secret
- [`clientsUpdate`](docs/sdks/clients/README.md#update) - Update Client
- [`clientsUpdateLockFlag`](docs/sdks/clients/README.md#updatelockflag) - Update Client Lock
- [`clientsUpdateRequestableScopes`](docs/sdks/clients/README.md#updaterequestablescopes) - Update Requestable Scopes
- [`clientsUpdateSecret`](docs/sdks/clients/README.md#updatesecret) - Update Client Secret
- [`clientsUpdateTokens`](docs/sdks/clients/README.md#updatetokens) - Update Client Tokens
- [`deviceFlowAuthorize`](docs/sdks/deviceflow/README.md#authorize) - Process Device Authorization Request
- [`deviceFlowComplete`](docs/sdks/deviceflow/README.md#complete) - Complete Device Authorization
- [`deviceFlowVerify`](docs/sdks/deviceflow/README.md#verify) - Process Device Verification Request
- [`dynamicClientRegistrationGet`](docs/sdks/dynamicclientregistration/README.md#get) - Get Client
- [`dynamicClientRegistrationsDelete`](docs/sdks/dynamicclientregistrations/README.md#delete) - Delete Client
- [`dynamicClientRegistrationsRegister`](docs/sdks/dynamicclientregistrations/README.md#register) - Register Client
- [`dynamicClientRegistrationUpdate`](docs/sdks/dynamicclientregistration/README.md#update) - Update Client
- [`federationEndpointProcessConfiguration`](docs/sdks/federationendpoint/README.md#processconfiguration) - Process Entity Configuration Request
- [`federationsRegister`](docs/sdks/federations/README.md#register) - Process Federation Registration Request
- [`grantManagementEndpointProcessRequest`](docs/sdks/grantmanagementendpoint/README.md#processrequest) - Process Grant Management Request
- [`hardwareSecurityKeyDelete`](docs/sdks/hardwaresecuritykey/README.md#delete) - Delete Security Key
- [`hardwareSecurityKeyGet`](docs/sdks/hardwaresecuritykey/README.md#get) - Get Security Key
- [`hardwareSecurityKeysCreate`](docs/sdks/hardwaresecuritykeys/README.md#create) - Create Security Key
- [`hardwareSecurityKeysGetList`](docs/sdks/hardwaresecuritykeys/README.md#getlist) - List Security Keys
- [`introspectionEndpointProcessStandard`](docs/sdks/introspectionendpoint/README.md#processstandard) - Process OAuth 2.0 Introspection Request
- [`introspectionRequest`](docs/sdks/introspection/README.md#request) - Process Introspection Request
- [`joseObjectsVerify`](docs/sdks/joseobjects/README.md#verify) - Verify JOSE
- [`jwkSetsGet`](docs/sdks/jwksets/README.md#get) - Get JWK Set
- [`nativeSSOLogout`](docs/sdks/nativesso/README.md#logout) - Native SSO Logout Processing
- [`nativeSSOProcess`](docs/sdks/nativesso/README.md#process) - Native SSO Processing
- [`pushedAuthorizationRequest`](docs/sdks/pushedauthorization/README.md#request) - Process Pushed Authorization Request
- [`revocationsProcess`](docs/sdks/revocations/README.md#process) - Process Revocation Request
- [`serviceManagementGet`](docs/sdks/servicemanagement/README.md#get) - Get Service
- [`serviceManagementUpdate`](docs/sdks/servicemanagement/README.md#update) - Update Service
- [`servicesConfiguration`](docs/sdks/services/README.md#configuration) - Get Service Configuration
- [`servicesCreate`](docs/sdks/services/README.md#create) - Create Service
- [`servicesDelete`](docs/sdks/services/README.md#delete) - Delete Service ⚡
- [`servicesList`](docs/sdks/services/README.md#list) - List Services
- [`tokenEndpointReissueIdToken`](docs/sdks/tokenendpoint/README.md#reissueidtoken) - Reissue ID Token
- [`tokenOperationsCreate`](docs/sdks/tokenoperations/README.md#create) - Create Access Token
- [`tokenOperationsDelete`](docs/sdks/tokenoperations/README.md#delete) - Delete Access Token
- [`tokenOperationsList`](docs/sdks/tokenoperations/README.md#list) - List Issued Tokens
- [`tokensFailRequest`](docs/sdks/tokens/README.md#failrequest) - Fail Token Request
- [`tokensIssue`](docs/sdks/tokens/README.md#issue) - Issue Token Response
- [`tokensRequest`](docs/sdks/tokens/README.md#request) - Process Token Request
- [`tokensRevoke`](docs/sdks/tokens/README.md#revoke) - Revoke Access Token
- [`tokensUpdate`](docs/sdks/tokens/README.md#update) - Update Access Token
- [`userInfoEndpointIssue`](docs/sdks/userinfoendpoint/README.md#issue) - Issue UserInfo Response
- [`userInfoEndpointProcess`](docs/sdks/userinfoendpoint/README.md#process) - Process UserInfo Request
- [`utilitiesEcho`](docs/sdks/utilities/README.md#echo) - Echo
- [`utilityEndpointsGetInfo`](docs/sdks/utilityendpoints/README.md#getinfo) - Get Server Metadata
- [`verifiableCredentialIssuerGetJwtIssuerInfo`](docs/sdks/verifiablecredentialissuer/README.md#getjwtissuerinfo) - Get JWT Issuer Information
- [`verifiableCredentialIssuerParseSingle`](docs/sdks/verifiablecredentialissuer/README.md#parsesingle) - Parse Single Credential
- [`verifiableCredentialIssuersCreateOffer`](docs/sdks/verifiablecredentialissuers/README.md#createoffer) - Create Credential Offer
- [`verifiableCredentialIssuersGetJwks`](docs/sdks/verifiablecredentialissuers/README.md#getjwks) - Get JSON Web Key Set
- [`verifiableCredentialIssuersIssueBatch`](docs/sdks/verifiablecredentialissuers/README.md#issuebatch) - Issue Batch Credentials
- [`verifiableCredentialIssuersIssueDeferred`](docs/sdks/verifiablecredentialissuers/README.md#issuedeferred) - Issue Deferred Credential
- [`verifiableCredentialIssuersParseDeferred`](docs/sdks/verifiablecredentialissuers/README.md#parsedeferred) - Parse Deferred Credential
- [`verifiableCredentialsGetMetadata`](docs/sdks/verifiablecredentials/README.md#getmetadata) - Get Verifiable Credential Issuer Metadata
- [`verifiableCredentialsGetOfferInfo`](docs/sdks/verifiablecredentials/README.md#getofferinfo) - Get Credential Offer Information
- [`verifiableCredentialsIssueSingle`](docs/sdks/verifiablecredentials/README.md#issuesingle) - Issue Single Credential
- [`verifiableCredentialsParseBatch`](docs/sdks/verifiablecredentials/README.md#parsebatch) - Parse Batch Credentials

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
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
import { Authlete } from "authlete-beta";

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
  const result = await authlete.serviceManagement.get({
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
import { Authlete } from "authlete-beta";
import * as errors from "authlete/models/errors";

const authlete = new Authlete({
  security: {
    authlete: process.env["AUTHLETE_AUTHLETE"] ?? "",
  },
});

async function run() {
  try {
    const result = await authlete.serviceManagement.get({
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
import { Authlete } from "authlete-beta";

const authlete = new Authlete({
  serverIdx: 0,
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

### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { Authlete } from "authlete-beta";

const authlete = new Authlete({
  serverURL: "https://br.authlete.com",
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
import { Authlete } from "authlete-beta";
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

const sdk = new Authlete({ httpClient: httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { Authlete } from "authlete-beta";

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
