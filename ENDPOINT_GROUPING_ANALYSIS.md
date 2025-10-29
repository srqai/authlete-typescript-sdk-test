# Endpoint Grouping Analysis

## Overview

This document analyzes the mismatch between how endpoints are grouped in the OpenAPI spec vs. how they appear in the generated SDK README.

## Key Finding

There are **TWO levels of grouping**:

1. **OpenAPI Spec Tags** (in `en3-referenced.yaml`): Used for documentation
2. **SDK Groups** (via `x-speakeasy-group` in `.speakeasy/out.openapi.yaml`): Used for SDK organization

## The Mismatch

### Original Spec Tags vs SDK Groups

The original spec (`en3-referenced.yaml`) uses OpenAPI tags like:
- `Service Management`
- `Client Management`
- `Authorization Endpoint`
- `Introspection Endpoint`
- etc.

However, the SDK README shows different groupings because endpoints are reorganized via `x-speakeasy-group` annotations in the generated spec.

## Examples of Mismatches

### Example 1: Introspection

**In Original Spec (`en3-referenced.yaml`):**
- `/api/{serviceId}/auth/introspection` → Tag: "Introspection Endpoint"
- `/api/{serviceId}/auth/introspection/standard` → Tag: "Introspection Endpoint"

**In SDK (via `x-speakeasy-group`):**
- `/api/{serviceId}/auth/introspection` → Group: `introspection` → SDK: `introspection.process()`
- `/api/{serviceId}/auth/introspection/standard` → Group: `introspectionEndpoint` → SDK: `introspectionEndpoint.processIntrospection()`

**Result:** The same OpenAPI tag is split into two different SDK modules!

### Example 2: Service Endpoints

**In Original Spec:**
- `/api/{serviceId}/service/get` → Tag: "Service Management"
- `/api/service/get/list` → Tag: "Service Management"
- `/api/service/create` → Tag: "Service Management"
- `/api/{serviceId}/service/update` → Tag: "Service Management"
- `/api/{serviceId}/service/delete` → Tag: "Service Management"
- `/api/{serviceId}/service/configuration` → Tag: "Service Management"

**In SDK:**
- `/api/{serviceId}/service/get` → Group: `services` → `services.get()`
- `/api/service/get/list` → Group: `serviceManagement` → `serviceManagement.listServices()`
- `/api/service/create` → Group: `serviceManagement` → `serviceManagement.create()`
- `/api/{serviceId}/service/update` → Group: `services` → `services.update()`
- `/api/{serviceId}/service/delete` → Group: `services` → `services.delete()`
- `/api/{serviceId}/service/configuration` → Group: `serviceManagement` → `serviceManagement.getServiceConfiguration()`

**Result:** One tag ("Service Management") is split across two SDK modules (`services` and `serviceManagement`)!

### Example 3: Client Endpoints

**In Original Spec:**
- All client-related endpoints → Tag: "Client Management"

**In SDK:**
- Split across **3** different groups:
  - `clientManagement` (e.g., getClient, deleteClient, updateSecret)
  - `clients` (e.g., list, create, update)
  - `clientRegistration` (e.g., register, get)

## SDK Groups (from README)

The README shows these SDK groups:

1. `authorization`
2. `authorizationEndpoint`
3. `ciba`
4. `clientManagement`
5. `clientRegistration`
6. `clients`
7. `deviceFlow`
8. `dynamicClientRegistration`
9. `federationEndpoint`
10. `grantManagementEndpoint`
11. `hardwareSecurityKey`
12. `hardwareSecurityKeys`
13. `introspection`
14. `introspectionEndpoint`
15. `joseObject`
16. `jwksSet`
17. `nativeSso`
18. `nativesso`
19. `pushedAuthorizationEndpoint`
20. `revocationEndpoint`
21. `serviceManagement`
22. `services`
23. `tokenEndpoint`
24. `tokenOperations`
25. `tokens`
26. `userInfoEndpoint`
27. `userinfoEndpoint`
28. `utilityEndpoints`
29. `verifiableCredentialIssuer`
30. `verifiableCredentials`

## Original Spec Tags (from `en3-referenced.yaml`)

The spec defines these tags:

1. Service Management
2. Client Management
3. Authorization Endpoint
4. Pushed Authorization Endpoint
5. Token Endpoint
6. Token Operations
7. Introspection Endpoint
8. Revocation Endpoint
9. UserInfo Endpoint
10. JWK Set Endpoint
11. Discovery Endpoint
12. Configuration Endpoint
13. Dynamic Client Registration
14. CIBA
15. Grant Management Endpoint
16. Jose Object
17. Device Flow
18. Federation Endpoint
19. Verifiable Credential Issuer
20. Hardware Security Key
21. Utility Endpoints
22. Native SSO

## The Issue

The mismatch occurs because:

1. The original OpenAPI spec groups endpoints by **functionality/tag** (OpenAPI tags)
2. The SDK generation process **reorganizes** endpoints into logical SDK modules using `x-speakeasy-group` annotations
3. This reorganization is documented in `.speakeasy/speakeasy-modifications-overlay.yaml`

**The reorganization was intentional** to create a better developer experience in the SDK, but it means the SDK README groupings don't match the original spec tag groupings.

## Recommendation

To understand the complete mapping:
- Check `.speakeasy/speakeasy-modifications-overlay.yaml` for manual overrides
- Check `.speakeasy/out.openapi.yaml` for the final `x-speakeasy-group` assignments
- Compare with `en3-referenced.yaml` for the original tags

