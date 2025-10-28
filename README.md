# authlete-test

Developer-friendly & type-safe Typescript SDK specifically catered to leverage *authlete-test* API.

<div align="left">
    <a href="https://www.speakeasy.com/?utm_source=authlete-test&utm_campaign=typescript"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
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
npm add authlete-test
```

### PNPM

```bash
pnpm add authlete-test
```

### Bun

```bash
bun add authlete-test
```

### Yarn

```bash
yarn add authlete-test
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
import { AuthleteTest } from "authlete-test";

const authleteTest = new AuthleteTest({
  security: {
    authlete: process.env["AUTHLETETEST_AUTHLETE"] ?? "",
  },
});

async function run() {
  const result = await authleteTest.services.get({
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

| Name       | Type   | Scheme       | Environment Variable    |
| ---------- | ------ | ------------ | ----------------------- |
| `authlete` | oauth2 | OAuth2 token | `AUTHLETETEST_AUTHLETE` |
| `bearer`   | http   | HTTP Bearer  | `AUTHLETETEST_BEARER`   |

You can set the security parameters through the `security` optional parameter when initializing the SDK client instance. The selected scheme will be used by default to authenticate with the API for all operations that support it. For example:
```typescript
import { AuthleteTest } from "authlete-test";

const authleteTest = new AuthleteTest({
  security: {
    authlete: process.env["AUTHLETETEST_AUTHLETE"] ?? "",
  },
});

async function run() {
  const result = await authleteTest.services.get({
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

* [ticketUpdate](docs/sdks/authorization/README.md#ticketupdate) - Update Ticket Information

### [authorizationEndpoint](docs/sdks/authorizationendpoint/README.md)

* [processAuthorization](docs/sdks/authorizationendpoint/README.md#processauthorization) - Process Authorization Request
* [failAuthorization](docs/sdks/authorizationendpoint/README.md#failauthorization) - Fail Authorization Request
* [issueAuthorization](docs/sdks/authorizationendpoint/README.md#issueauthorization) - Issue Authorization Response

### [ciba](docs/sdks/ciba/README.md)

* [processAuthentication](docs/sdks/ciba/README.md#processauthentication) - Process Backchannel Authentication Request
* [issue](docs/sdks/ciba/README.md#issue) - Issue Backchannel Authentication Response
* [failBackchannelAuthentication](docs/sdks/ciba/README.md#failbackchannelauthentication) - Fail Backchannel Authentication Request
* [completeBackchannelAuthentication](docs/sdks/ciba/README.md#completebackchannelauthentication) - Complete Backchannel Authentication

### [clientManagement](docs/sdks/clientmanagement/README.md)

* [getClient](docs/sdks/clientmanagement/README.md#getclient) - Get Client
* [deleteClient](docs/sdks/clientmanagement/README.md#deleteclient) - Delete Client ⚡
* [updateSecret](docs/sdks/clientmanagement/README.md#updatesecret) - Update Client Secret
* [listAuthorizedApplications](docs/sdks/clientmanagement/README.md#listauthorizedapplications) - Get Authorized Applications
* [updateAuthorization](docs/sdks/clientmanagement/README.md#updateauthorization) - Update Client Tokens
* [deleteAuthorizations](docs/sdks/clientmanagement/README.md#deleteauthorizations) - Delete Client Tokens
* [getRequestableScopes](docs/sdks/clientmanagement/README.md#getrequestablescopes) - Get Requestable Scopes
* [deleteRequestableScopes](docs/sdks/clientmanagement/README.md#deleterequestablescopes) - Delete Requestable Scopes

### [clientRegistration](docs/sdks/clientregistration/README.md)

* [register](docs/sdks/clientregistration/README.md#register) - Register Client
* [get](docs/sdks/clientregistration/README.md#get) - Get Client

### [clients](docs/sdks/clients/README.md)

* [list](docs/sdks/clients/README.md#list) - List Clients
* [create](docs/sdks/clients/README.md#create) - Create Client
* [update](docs/sdks/clients/README.md#update) - Update Client
* [updateLockFlag](docs/sdks/clients/README.md#updatelockflag) - Update Client Lock
* [refreshSecret](docs/sdks/clients/README.md#refreshsecret) - Rotate Client Secret
* [getGrantedScopes](docs/sdks/clients/README.md#getgrantedscopes) - Get Granted Scopes
* [deleteGrantedScopes](docs/sdks/clients/README.md#deletegrantedscopes) - Delete Granted Scopes
* [updateRequestableScopes](docs/sdks/clients/README.md#updaterequestablescopes) - Update Requestable Scopes

### [deviceFlow](docs/sdks/deviceflow/README.md)

* [processAuthorization](docs/sdks/deviceflow/README.md#processauthorization) - Process Device Authorization Request
* [processVerification](docs/sdks/deviceflow/README.md#processverification) - Process Device Verification Request
* [complete](docs/sdks/deviceflow/README.md#complete) - Complete Device Authorization

### [dynamicClientRegistration](docs/sdks/dynamicclientregistration/README.md)

* [update](docs/sdks/dynamicclientregistration/README.md#update) - Update Client
* [delete](docs/sdks/dynamicclientregistration/README.md#delete) - Delete Client

### [federationEndpoint](docs/sdks/federationendpoint/README.md)

* [processConfiguration](docs/sdks/federationendpoint/README.md#processconfiguration) - Process Entity Configuration Request
* [processRegistration](docs/sdks/federationendpoint/README.md#processregistration) - Process Federation Registration Request

### [grantManagementEndpoint](docs/sdks/grantmanagementendpoint/README.md)

* [processGrantManagement](docs/sdks/grantmanagementendpoint/README.md#processgrantmanagement) - Process Grant Management Request

### [hardwareSecurityKey](docs/sdks/hardwaresecuritykey/README.md)

* [delete](docs/sdks/hardwaresecuritykey/README.md#delete) - Delete Security Key
* [get](docs/sdks/hardwaresecuritykey/README.md#get) - Get Security Key

### [hardwareSecurityKeys](docs/sdks/hardwaresecuritykeys/README.md)

* [create](docs/sdks/hardwaresecuritykeys/README.md#create) - Create Security Key
* [list](docs/sdks/hardwaresecuritykeys/README.md#list) - List Security Keys

### [introspection](docs/sdks/introspection/README.md)

* [process](docs/sdks/introspection/README.md#process) - Process Introspection Request

### [introspectionEndpoint](docs/sdks/introspectionendpoint/README.md)

* [processIntrospection](docs/sdks/introspectionendpoint/README.md#processintrospection) - Process OAuth 2.0 Introspection Request

### [joseObject](docs/sdks/joseobject/README.md)

* [verify](docs/sdks/joseobject/README.md#verify) - Verify JOSE

### [jwksSet](docs/sdks/jwksset/README.md)

* [get](docs/sdks/jwksset/README.md#get) - Get JWK Set

### [nativeSso](docs/sdks/nativesso/README.md)

* [process](docs/sdks/nativesso/README.md#process) - Native SSO Processing
* [logout](docs/sdks/nativesso/README.md#logout) - Native SSO Logout Processing

### [pushedAuthorizationEndpoint](docs/sdks/pushedauthorizationendpoint/README.md)

* [create](docs/sdks/pushedauthorizationendpoint/README.md#create) - Process Pushed Authorization Request

### [revocationEndpoint](docs/sdks/revocationendpoint/README.md)

* [processRevocation](docs/sdks/revocationendpoint/README.md#processrevocation) - Process Revocation Request

### [serviceManagement](docs/sdks/servicemanagement/README.md)

* [listServices](docs/sdks/servicemanagement/README.md#listservices) - List Services
* [create](docs/sdks/servicemanagement/README.md#create) - Create Service
* [getServiceConfiguration](docs/sdks/servicemanagement/README.md#getserviceconfiguration) - Get Service Configuration

### [services](docs/sdks/services/README.md)

* [get](docs/sdks/services/README.md#get) - Get Service
* [update](docs/sdks/services/README.md#update) - Update Service
* [delete](docs/sdks/services/README.md#delete) - Delete Service ⚡

### [tokenEndpoint](docs/sdks/tokenendpoint/README.md)

* [processToken](docs/sdks/tokenendpoint/README.md#processtoken) - Process Token Request
* [issueToken](docs/sdks/tokenendpoint/README.md#issuetoken) - Issue Token Response
* [reissueIdToken](docs/sdks/tokenendpoint/README.md#reissueidtoken) - Reissue ID Token

### [tokenOperations](docs/sdks/tokenoperations/README.md)

* [listTokens](docs/sdks/tokenoperations/README.md#listtokens) - List Issued Tokens
* [create](docs/sdks/tokenoperations/README.md#create) - Create Access Token
* [update](docs/sdks/tokenoperations/README.md#update) - Update Access Token

### [tokens](docs/sdks/tokens/README.md)

* [fail](docs/sdks/tokens/README.md#fail) - Fail Token Request
* [delete](docs/sdks/tokens/README.md#delete) - Delete Access Token
* [revoke](docs/sdks/tokens/README.md#revoke) - Revoke Access Token

### [userinfoEndpoint](docs/sdks/userinfoendpoint1/README.md)

* [processUserInfo](docs/sdks/userinfoendpoint1/README.md#processuserinfo) - Process UserInfo Request

### [userInfoEndpoint](docs/sdks/userinfoendpoint2/README.md)

* [issueIdToken](docs/sdks/userinfoendpoint2/README.md#issueidtoken) - Issue UserInfo Response

### [utilityEndpoints](docs/sdks/utilityendpoints/README.md)

* [getServerMetadata](docs/sdks/utilityendpoints/README.md#getservermetadata) - Get Server Metadata
* [echo](docs/sdks/utilityendpoints/README.md#echo) - Echo

### [verifiableCredentialIssuer](docs/sdks/verifiablecredentialissuer/README.md)

* [getJwtIssuer](docs/sdks/verifiablecredentialissuer/README.md#getjwtissuer) - /api/{serviceId}/vci/jwtissuer API
* [getOfferInfo](docs/sdks/verifiablecredentialissuer/README.md#getofferinfo) - /api/{serviceId}/vci/offer/info API
* [issueSingle](docs/sdks/verifiablecredentialissuer/README.md#issuesingle) - /api/{serviceId}/vci/single/issue API
* [parseBatch](docs/sdks/verifiablecredentialissuer/README.md#parsebatch) - /api/{serviceId}/vci/batch/parse API
* [batchIssue](docs/sdks/verifiablecredentialissuer/README.md#batchissue) - /api/{serviceId}/vci/batch/issue API
* [parseDeferred](docs/sdks/verifiablecredentialissuer/README.md#parsedeferred) - /api/{serviceId}/vci/deferred/parse API
* [deferredIssue](docs/sdks/verifiablecredentialissuer/README.md#deferredissue) - /api/{serviceId}/vci/deferred/issue API

### [verifiableCredentials](docs/sdks/verifiablecredentials/README.md)

* [getMetadata](docs/sdks/verifiablecredentials/README.md#getmetadata) - /api/{serviceId}/vci/metadata API
* [getJwks](docs/sdks/verifiablecredentials/README.md#getjwks) - /api/{serviceId}/vci/jwks API
* [createOffer](docs/sdks/verifiablecredentials/README.md#createoffer) - /api/{serviceId}/vci/offer/create API
* [parse](docs/sdks/verifiablecredentials/README.md#parse) - /api/{serviceId}/vci/single/parse API

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

- [`authorizationEndpointFailAuthorization`](docs/sdks/authorizationendpoint/README.md#failauthorization) - Fail Authorization Request
- [`authorizationEndpointIssueAuthorization`](docs/sdks/authorizationendpoint/README.md#issueauthorization) - Issue Authorization Response
- [`authorizationEndpointProcessAuthorization`](docs/sdks/authorizationendpoint/README.md#processauthorization) - Process Authorization Request
- [`authorizationTicketUpdate`](docs/sdks/authorization/README.md#ticketupdate) - Update Ticket Information
- [`cibaCompleteBackchannelAuthentication`](docs/sdks/ciba/README.md#completebackchannelauthentication) - Complete Backchannel Authentication
- [`cibaFailBackchannelAuthentication`](docs/sdks/ciba/README.md#failbackchannelauthentication) - Fail Backchannel Authentication Request
- [`cibaIssue`](docs/sdks/ciba/README.md#issue) - Issue Backchannel Authentication Response
- [`cibaProcessAuthentication`](docs/sdks/ciba/README.md#processauthentication) - Process Backchannel Authentication Request
- [`clientManagementDeleteAuthorizations`](docs/sdks/clientmanagement/README.md#deleteauthorizations) - Delete Client Tokens
- [`clientManagementDeleteClient`](docs/sdks/clientmanagement/README.md#deleteclient) - Delete Client ⚡
- [`clientManagementDeleteRequestableScopes`](docs/sdks/clientmanagement/README.md#deleterequestablescopes) - Delete Requestable Scopes
- [`clientManagementGetClient`](docs/sdks/clientmanagement/README.md#getclient) - Get Client
- [`clientManagementGetRequestableScopes`](docs/sdks/clientmanagement/README.md#getrequestablescopes) - Get Requestable Scopes
- [`clientManagementListAuthorizedApplications`](docs/sdks/clientmanagement/README.md#listauthorizedapplications) - Get Authorized Applications
- [`clientManagementUpdateAuthorization`](docs/sdks/clientmanagement/README.md#updateauthorization) - Update Client Tokens
- [`clientManagementUpdateSecret`](docs/sdks/clientmanagement/README.md#updatesecret) - Update Client Secret
- [`clientRegistrationGet`](docs/sdks/clientregistration/README.md#get) - Get Client
- [`clientRegistrationRegister`](docs/sdks/clientregistration/README.md#register) - Register Client
- [`clientsCreate`](docs/sdks/clients/README.md#create) - Create Client
- [`clientsDeleteGrantedScopes`](docs/sdks/clients/README.md#deletegrantedscopes) - Delete Granted Scopes
- [`clientsGetGrantedScopes`](docs/sdks/clients/README.md#getgrantedscopes) - Get Granted Scopes
- [`clientsList`](docs/sdks/clients/README.md#list) - List Clients
- [`clientsRefreshSecret`](docs/sdks/clients/README.md#refreshsecret) - Rotate Client Secret
- [`clientsUpdate`](docs/sdks/clients/README.md#update) - Update Client
- [`clientsUpdateLockFlag`](docs/sdks/clients/README.md#updatelockflag) - Update Client Lock
- [`clientsUpdateRequestableScopes`](docs/sdks/clients/README.md#updaterequestablescopes) - Update Requestable Scopes
- [`deviceFlowComplete`](docs/sdks/deviceflow/README.md#complete) - Complete Device Authorization
- [`deviceFlowProcessAuthorization`](docs/sdks/deviceflow/README.md#processauthorization) - Process Device Authorization Request
- [`deviceFlowProcessVerification`](docs/sdks/deviceflow/README.md#processverification) - Process Device Verification Request
- [`dynamicClientRegistrationDelete`](docs/sdks/dynamicclientregistration/README.md#delete) - Delete Client
- [`dynamicClientRegistrationUpdate`](docs/sdks/dynamicclientregistration/README.md#update) - Update Client
- [`federationEndpointProcessConfiguration`](docs/sdks/federationendpoint/README.md#processconfiguration) - Process Entity Configuration Request
- [`federationEndpointProcessRegistration`](docs/sdks/federationendpoint/README.md#processregistration) - Process Federation Registration Request
- [`grantManagementEndpointProcessGrantManagement`](docs/sdks/grantmanagementendpoint/README.md#processgrantmanagement) - Process Grant Management Request
- [`hardwareSecurityKeyDelete`](docs/sdks/hardwaresecuritykey/README.md#delete) - Delete Security Key
- [`hardwareSecurityKeyGet`](docs/sdks/hardwaresecuritykey/README.md#get) - Get Security Key
- [`hardwareSecurityKeysCreate`](docs/sdks/hardwaresecuritykeys/README.md#create) - Create Security Key
- [`hardwareSecurityKeysList`](docs/sdks/hardwaresecuritykeys/README.md#list) - List Security Keys
- [`introspectionEndpointProcessIntrospection`](docs/sdks/introspectionendpoint/README.md#processintrospection) - Process OAuth 2.0 Introspection Request
- [`introspectionProcess`](docs/sdks/introspection/README.md#process) - Process Introspection Request
- [`joseObjectVerify`](docs/sdks/joseobject/README.md#verify) - Verify JOSE
- [`jwksSetGet`](docs/sdks/jwksset/README.md#get) - Get JWK Set
- [`nativeSsoLogout`](docs/sdks/nativesso/README.md#logout) - Native SSO Logout Processing
- [`nativeSsoProcess`](docs/sdks/nativesso/README.md#process) - Native SSO Processing
- [`pushedAuthorizationEndpointCreate`](docs/sdks/pushedauthorizationendpoint/README.md#create) - Process Pushed Authorization Request
- [`revocationEndpointProcessRevocation`](docs/sdks/revocationendpoint/README.md#processrevocation) - Process Revocation Request
- [`serviceManagementCreate`](docs/sdks/servicemanagement/README.md#create) - Create Service
- [`serviceManagementGetServiceConfiguration`](docs/sdks/servicemanagement/README.md#getserviceconfiguration) - Get Service Configuration
- [`serviceManagementListServices`](docs/sdks/servicemanagement/README.md#listservices) - List Services
- [`servicesDelete`](docs/sdks/services/README.md#delete) - Delete Service ⚡
- [`servicesGet`](docs/sdks/services/README.md#get) - Get Service
- [`servicesUpdate`](docs/sdks/services/README.md#update) - Update Service
- [`tokenEndpointIssueToken`](docs/sdks/tokenendpoint/README.md#issuetoken) - Issue Token Response
- [`tokenEndpointProcessToken`](docs/sdks/tokenendpoint/README.md#processtoken) - Process Token Request
- [`tokenEndpointReissueIdToken`](docs/sdks/tokenendpoint/README.md#reissueidtoken) - Reissue ID Token
- [`tokenOperationsCreate`](docs/sdks/tokenoperations/README.md#create) - Create Access Token
- [`tokenOperationsListTokens`](docs/sdks/tokenoperations/README.md#listtokens) - List Issued Tokens
- [`tokenOperationsUpdate`](docs/sdks/tokenoperations/README.md#update) - Update Access Token
- [`tokensDelete`](docs/sdks/tokens/README.md#delete) - Delete Access Token
- [`tokensFail`](docs/sdks/tokens/README.md#fail) - Fail Token Request
- [`tokensRevoke`](docs/sdks/tokens/README.md#revoke) - Revoke Access Token
- [`userInfoEndpointIssueIdToken`](docs/sdks/userinfoendpoint2/README.md#issueidtoken) - Issue UserInfo Response
- [`userinfoEndpointProcessUserInfo`](docs/sdks/userinfoendpoint1/README.md#processuserinfo) - Process UserInfo Request
- [`utilityEndpointsEcho`](docs/sdks/utilityendpoints/README.md#echo) - Echo
- [`utilityEndpointsGetServerMetadata`](docs/sdks/utilityendpoints/README.md#getservermetadata) - Get Server Metadata
- [`verifiableCredentialIssuerBatchIssue`](docs/sdks/verifiablecredentialissuer/README.md#batchissue) - /api/{serviceId}/vci/batch/issue API
- [`verifiableCredentialIssuerDeferredIssue`](docs/sdks/verifiablecredentialissuer/README.md#deferredissue) - /api/{serviceId}/vci/deferred/issue API
- [`verifiableCredentialIssuerGetJwtIssuer`](docs/sdks/verifiablecredentialissuer/README.md#getjwtissuer) - /api/{serviceId}/vci/jwtissuer API
- [`verifiableCredentialIssuerGetOfferInfo`](docs/sdks/verifiablecredentialissuer/README.md#getofferinfo) - /api/{serviceId}/vci/offer/info API
- [`verifiableCredentialIssuerIssueSingle`](docs/sdks/verifiablecredentialissuer/README.md#issuesingle) - /api/{serviceId}/vci/single/issue API
- [`verifiableCredentialIssuerParseBatch`](docs/sdks/verifiablecredentialissuer/README.md#parsebatch) - /api/{serviceId}/vci/batch/parse API
- [`verifiableCredentialIssuerParseDeferred`](docs/sdks/verifiablecredentialissuer/README.md#parsedeferred) - /api/{serviceId}/vci/deferred/parse API
- [`verifiableCredentialsCreateOffer`](docs/sdks/verifiablecredentials/README.md#createoffer) - /api/{serviceId}/vci/offer/create API
- [`verifiableCredentialsGetJwks`](docs/sdks/verifiablecredentials/README.md#getjwks) - /api/{serviceId}/vci/jwks API
- [`verifiableCredentialsGetMetadata`](docs/sdks/verifiablecredentials/README.md#getmetadata) - /api/{serviceId}/vci/metadata API
- [`verifiableCredentialsParse`](docs/sdks/verifiablecredentials/README.md#parse) - /api/{serviceId}/vci/single/parse API

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { AuthleteTest } from "authlete-test";

const authleteTest = new AuthleteTest({
  security: {
    authlete: process.env["AUTHLETETEST_AUTHLETE"] ?? "",
  },
});

async function run() {
  const result = await authleteTest.services.get({
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
import { AuthleteTest } from "authlete-test";

const authleteTest = new AuthleteTest({
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
    authlete: process.env["AUTHLETETEST_AUTHLETE"] ?? "",
  },
});

async function run() {
  const result = await authleteTest.services.get({
    serviceId: "<id>",
  });

  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

[`AuthleteTestError`](./src/models/errors/authletetesterror.ts) is the base class for all HTTP error responses. It has the following properties:

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
import { AuthleteTest } from "authlete-test";
import * as errors from "authlete-test/models/errors";

const authleteTest = new AuthleteTest({
  security: {
    authlete: process.env["AUTHLETETEST_AUTHLETE"] ?? "",
  },
});

async function run() {
  try {
    const result = await authleteTest.services.get({
      serviceId: "<id>",
    });

    console.log(result);
  } catch (error) {
    // The base class for HTTP error responses
    if (error instanceof errors.AuthleteTestError) {
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
* [`AuthleteTestError`](./src/models/errors/authletetesterror.ts): The base class for HTTP error responses.
  * [`ResultError`](./src/models/errors/resulterror.ts): . *

<details><summary>Less common errors (6)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/models/errors/httpclienterrors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/models/errors/httpclienterrors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/models/errors/httpclienterrors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/models/errors/httpclienterrors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/models/errors/httpclienterrors.ts): Unrecognised or unexpected error.


**Inherit from [`AuthleteTestError`](./src/models/errors/authletetesterror.ts)**:
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
import { AuthleteTest } from "authlete-test";

const authleteTest = new AuthleteTest({
  serverIdx: 3,
  security: {
    authlete: process.env["AUTHLETETEST_AUTHLETE"] ?? "",
  },
});

async function run() {
  const result = await authleteTest.services.get({
    serviceId: "<id>",
  });

  console.log(result);
}

run();

```

### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { AuthleteTest } from "authlete-test";

const authleteTest = new AuthleteTest({
  serverURL: "https://br.authlete.com",
  security: {
    authlete: process.env["AUTHLETETEST_AUTHLETE"] ?? "",
  },
});

async function run() {
  const result = await authleteTest.services.get({
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
import { AuthleteTest } from "authlete-test";
import { HTTPClient } from "authlete-test/lib/http";

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

const sdk = new AuthleteTest({ httpClient: httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { AuthleteTest } from "authlete-test";

const sdk = new AuthleteTest({ debugLogger: console });
```

You can also enable a default debug logger by setting an environment variable `AUTHLETETEST_DEBUG` to true.
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

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=authlete-test&utm_campaign=typescript)
# authlete-typescript-sdk-test
