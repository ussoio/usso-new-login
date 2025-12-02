# OAuth2OIDCApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**authorizeApiSsoV1OauthAuthorizeGet**](#authorizeapissov1oauthauthorizeget) | **GET** /api/sso/v1/oauth/authorize | Authorize|
|[**consentAuthorizeApiSsoV1OauthConsentPost**](#consentauthorizeapissov1oauthconsentpost) | **POST** /api/sso/v1/oauth/consent | Consent Authorize|
|[**deleteClientApiSsoV1OauthClientsClientIdDelete**](#deleteclientapissov1oauthclientsclientiddelete) | **DELETE** /api/sso/v1/oauth/clients/{client_id} | Delete Client|
|[**getClientApiSsoV1OauthClientsClientIdGet**](#getclientapissov1oauthclientsclientidget) | **GET** /api/sso/v1/oauth/clients/{client_id} | Get Client|
|[**getConsentAuthorizeApiSsoV1OauthConsentGet**](#getconsentauthorizeapissov1oauthconsentget) | **GET** /api/sso/v1/oauth/consent | Get Consent Authorize|
|[**introspectApiSsoV1OauthIntrospectPost**](#introspectapissov1oauthintrospectpost) | **POST** /api/sso/v1/oauth/introspect | Introspect|
|[**listClientsApiSsoV1OauthClientsGet**](#listclientsapissov1oauthclientsget) | **GET** /api/sso/v1/oauth/clients | List Clients|
|[**registerClientEndpointApiSsoV1OauthClientsPost**](#registerclientendpointapissov1oauthclientspost) | **POST** /api/sso/v1/oauth/clients | Register Client Endpoint|
|[**revokeApiSsoV1OauthRevokePost**](#revokeapissov1oauthrevokepost) | **POST** /api/sso/v1/oauth/revoke | Revoke|
|[**rotateClientSecretApiSsoV1OauthClientsClientIdRotateSecretPost**](#rotateclientsecretapissov1oauthclientsclientidrotatesecretpost) | **POST** /api/sso/v1/oauth/clients/{client_id}/rotate-secret | Rotate Client Secret|
|[**tokenApiSsoV1OauthTokenPost**](#tokenapissov1oauthtokenpost) | **POST** /api/sso/v1/oauth/token | Token|
|[**updateClientApiSsoV1OauthClientsClientIdPatch**](#updateclientapissov1oauthclientsclientidpatch) | **PATCH** /api/sso/v1/oauth/clients/{client_id} | Update Client|
|[**userinfoApiSsoV1OauthUserinfoGet**](#userinfoapissov1oauthuserinfoget) | **GET** /api/sso/v1/oauth/userinfo | Userinfo|

# **authorizeApiSsoV1OauthAuthorizeGet**
> any authorizeApiSsoV1OauthAuthorizeGet()

OAuth2 Authorization endpoint.

### Example

```typescript
import {
    OAuth2OIDCApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OAuth2OIDCApi(configuration);

let responseType: ResponseType; //Response type (default to undefined)
let clientId: string; //Client identifier (default to undefined)
let redirectUri: string; //Redirect URI (default to undefined)
let scope: string; //Requested scopes (optional) (default to undefined)
let state: string; //State parameter (optional) (default to undefined)
let codeChallenge: string; //PKCE code challenge (optional) (default to undefined)
let codeChallengeMethod: string; //PKCE code challenge method (optional) (default to undefined)
let nonce: string; //Nonce for ID token (optional) (default to undefined)
let prompt: string; //Prompt parameter (optional) (default to undefined)
let maxAge: number; //Maximum authentication age (optional) (default to undefined)

const { status, data } = await apiInstance.authorizeApiSsoV1OauthAuthorizeGet(
    responseType,
    clientId,
    redirectUri,
    scope,
    state,
    codeChallenge,
    codeChallengeMethod,
    nonce,
    prompt,
    maxAge
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **responseType** | **ResponseType** | Response type | defaults to undefined|
| **clientId** | [**string**] | Client identifier | defaults to undefined|
| **redirectUri** | [**string**] | Redirect URI | defaults to undefined|
| **scope** | [**string**] | Requested scopes | (optional) defaults to undefined|
| **state** | [**string**] | State parameter | (optional) defaults to undefined|
| **codeChallenge** | [**string**] | PKCE code challenge | (optional) defaults to undefined|
| **codeChallengeMethod** | [**string**] | PKCE code challenge method | (optional) defaults to undefined|
| **nonce** | [**string**] | Nonce for ID token | (optional) defaults to undefined|
| **prompt** | [**string**] | Prompt parameter | (optional) defaults to undefined|
| **maxAge** | [**number**] | Maximum authentication age | (optional) defaults to undefined|


### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consentAuthorizeApiSsoV1OauthConsentPost**
> any consentAuthorizeApiSsoV1OauthConsentPost()

OAuth2 Consent endpoint.

### Example

```typescript
import {
    OAuth2OIDCApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OAuth2OIDCApi(configuration);

let consent: boolean; //User consent (default to undefined)
let state: string; //State parameter (optional) (default to '')

const { status, data } = await apiInstance.consentAuthorizeApiSsoV1OauthConsentPost(
    consent,
    state
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **consent** | [**boolean**] | User consent | defaults to undefined|
| **state** | [**string**] | State parameter | (optional) defaults to ''|


### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteClientApiSsoV1OauthClientsClientIdDelete**
> deleteClientApiSsoV1OauthClientsClientIdDelete()

Delete/deactivate OAuth2 client (REST Level 2).

### Example

```typescript
import {
    OAuth2OIDCApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OAuth2OIDCApi(configuration);

let clientId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteClientApiSsoV1OauthClientsClientIdDelete(
    clientId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientId** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getClientApiSsoV1OauthClientsClientIdGet**
> ClientRegistrationResponseSchema getClientApiSsoV1OauthClientsClientIdGet()

Get OAuth2 client information.

### Example

```typescript
import {
    OAuth2OIDCApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OAuth2OIDCApi(configuration);

let clientId: string; // (default to undefined)

const { status, data } = await apiInstance.getClientApiSsoV1OauthClientsClientIdGet(
    clientId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientId** | [**string**] |  | defaults to undefined|


### Return type

**ClientRegistrationResponseSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getConsentAuthorizeApiSsoV1OauthConsentGet**
> any getConsentAuthorizeApiSsoV1OauthConsentGet()


### Example

```typescript
import {
    OAuth2OIDCApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OAuth2OIDCApi(configuration);

let consent: boolean; //User consent (default to undefined)
let state: string; //State parameter (optional) (default to '')

const { status, data } = await apiInstance.getConsentAuthorizeApiSsoV1OauthConsentGet(
    consent,
    state
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **consent** | [**boolean**] | User consent | defaults to undefined|
| **state** | [**string**] | State parameter | (optional) defaults to ''|


### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **introspectApiSsoV1OauthIntrospectPost**
> TokenIntrospectionResponseSchema introspectApiSsoV1OauthIntrospectPost()

OAuth2 Token Introspection endpoint.

### Example

```typescript
import {
    OAuth2OIDCApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OAuth2OIDCApi(configuration);

let token: string; //Token to introspect (default to undefined)
let clientId: string; //Client identifier (default to undefined)
let tokenTypeHint: string; // (optional) (default to undefined)
let clientSecret: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.introspectApiSsoV1OauthIntrospectPost(
    token,
    clientId,
    tokenTypeHint,
    clientSecret
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] | Token to introspect | defaults to undefined|
| **clientId** | [**string**] | Client identifier | defaults to undefined|
| **tokenTypeHint** | [**string**] |  | (optional) defaults to undefined|
| **clientSecret** | [**string**] |  | (optional) defaults to undefined|


### Return type

**TokenIntrospectionResponseSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listClientsApiSsoV1OauthClientsGet**
> Array<ClientRegistrationResponseSchema> listClientsApiSsoV1OauthClientsGet()

List OAuth2 clients (REST Level 2).

### Example

```typescript
import {
    OAuth2OIDCApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OAuth2OIDCApi(configuration);

let isActive: boolean; //Filter by active status (optional) (default to undefined)

const { status, data } = await apiInstance.listClientsApiSsoV1OauthClientsGet(
    isActive
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **isActive** | [**boolean**] | Filter by active status | (optional) defaults to undefined|


### Return type

**Array<ClientRegistrationResponseSchema>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **registerClientEndpointApiSsoV1OauthClientsPost**
> ClientRegistrationResponseSchema registerClientEndpointApiSsoV1OauthClientsPost(clientRegistrationRequestSchema)

OAuth2 Dynamic Client Registration endpoint.

### Example

```typescript
import {
    OAuth2OIDCApi,
    Configuration,
    ClientRegistrationRequestSchema
} from './api';

const configuration = new Configuration();
const apiInstance = new OAuth2OIDCApi(configuration);

let clientRegistrationRequestSchema: ClientRegistrationRequestSchema; //

const { status, data } = await apiInstance.registerClientEndpointApiSsoV1OauthClientsPost(
    clientRegistrationRequestSchema
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientRegistrationRequestSchema** | **ClientRegistrationRequestSchema**|  | |


### Return type

**ClientRegistrationResponseSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **revokeApiSsoV1OauthRevokePost**
> { [key: string]: string | null; } revokeApiSsoV1OauthRevokePost()

OAuth2 Token Revocation endpoint.

### Example

```typescript
import {
    OAuth2OIDCApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OAuth2OIDCApi(configuration);

let token: string; //Token to revoke (default to undefined)
let clientId: string; //Client identifier (default to undefined)
let tokenTypeHint: string; // (optional) (default to undefined)
let clientSecret: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.revokeApiSsoV1OauthRevokePost(
    token,
    clientId,
    tokenTypeHint,
    clientSecret
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] | Token to revoke | defaults to undefined|
| **clientId** | [**string**] | Client identifier | defaults to undefined|
| **tokenTypeHint** | [**string**] |  | (optional) defaults to undefined|
| **clientSecret** | [**string**] |  | (optional) defaults to undefined|


### Return type

**{ [key: string]: string | null; }**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rotateClientSecretApiSsoV1OauthClientsClientIdRotateSecretPost**
> { [key: string]: string | null; } rotateClientSecretApiSsoV1OauthClientsClientIdRotateSecretPost()

Rotate OAuth2 client secret (REST Level 2).

### Example

```typescript
import {
    OAuth2OIDCApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OAuth2OIDCApi(configuration);

let clientId: string; // (default to undefined)

const { status, data } = await apiInstance.rotateClientSecretApiSsoV1OauthClientsClientIdRotateSecretPost(
    clientId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientId** | [**string**] |  | defaults to undefined|


### Return type

**{ [key: string]: string | null; }**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tokenApiSsoV1OauthTokenPost**
> TokenResponseSchema tokenApiSsoV1OauthTokenPost()

OAuth2 Token endpoint.

### Example

```typescript
import {
    OAuth2OIDCApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OAuth2OIDCApi(configuration);

let grantType: GrantType; //Grant type (default to undefined)
let clientId: string; // (optional) (default to undefined)
let clientSecret: string; // (optional) (default to undefined)
let code: string; // (optional) (default to undefined)
let redirectUri: string; // (optional) (default to undefined)
let codeVerifier: string; // (optional) (default to undefined)
let refreshToken: string; // (optional) (default to undefined)
let scope: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.tokenApiSsoV1OauthTokenPost(
    grantType,
    clientId,
    clientSecret,
    code,
    redirectUri,
    codeVerifier,
    refreshToken,
    scope
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **grantType** | **GrantType** | Grant type | defaults to undefined|
| **clientId** | [**string**] |  | (optional) defaults to undefined|
| **clientSecret** | [**string**] |  | (optional) defaults to undefined|
| **code** | [**string**] |  | (optional) defaults to undefined|
| **redirectUri** | [**string**] |  | (optional) defaults to undefined|
| **codeVerifier** | [**string**] |  | (optional) defaults to undefined|
| **refreshToken** | [**string**] |  | (optional) defaults to undefined|
| **scope** | [**string**] |  | (optional) defaults to undefined|


### Return type

**TokenResponseSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateClientApiSsoV1OauthClientsClientIdPatch**
> ClientRegistrationResponseSchema updateClientApiSsoV1OauthClientsClientIdPatch(clientUpdateSchema)

Update OAuth2 client (REST Level 2).

### Example

```typescript
import {
    OAuth2OIDCApi,
    Configuration,
    ClientUpdateSchema
} from './api';

const configuration = new Configuration();
const apiInstance = new OAuth2OIDCApi(configuration);

let clientId: string; // (default to undefined)
let clientUpdateSchema: ClientUpdateSchema; //

const { status, data } = await apiInstance.updateClientApiSsoV1OauthClientsClientIdPatch(
    clientId,
    clientUpdateSchema
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientUpdateSchema** | **ClientUpdateSchema**|  | |
| **clientId** | [**string**] |  | defaults to undefined|


### Return type

**ClientRegistrationResponseSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **userinfoApiSsoV1OauthUserinfoGet**
> UserInfoResponseSchema userinfoApiSsoV1OauthUserinfoGet()

OpenID Connect UserInfo endpoint.

### Example

```typescript
import {
    OAuth2OIDCApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OAuth2OIDCApi(configuration);

const { status, data } = await apiInstance.userinfoApiSsoV1OauthUserinfoGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**UserInfoResponseSchema**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

