# CredentialsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createItemApiSsoV1CredentialsPost**](#createitemapissov1credentialspost) | **POST** /api/sso/v1/credentials | Create Item|
|[**createWebauthnCredentialApiSsoV1CredentialsWebauthnPost**](#createwebauthncredentialapissov1credentialswebauthnpost) | **POST** /api/sso/v1/credentials/webauthn | Create Webauthn Credential|
|[**deleteItemApiSsoV1CredentialsUidDelete**](#deleteitemapissov1credentialsuiddelete) | **DELETE** /api/sso/v1/credentials/{uid} | Delete Item|
|[**getWebauthnChallengeApiSsoV1CredentialsWebauthnGet**](#getwebauthnchallengeapissov1credentialswebauthnget) | **GET** /api/sso/v1/credentials/webauthn | Get Webauthn Challenge|
|[**listItemsApiSsoV1CredentialsGet**](#listitemsapissov1credentialsget) | **GET** /api/sso/v1/credentials | List Items|
|[**retrieveItemApiSsoV1CredentialsUidGet**](#retrieveitemapissov1credentialsuidget) | **GET** /api/sso/v1/credentials/{uid} | Retrieve Item|

# **createItemApiSsoV1CredentialsPost**
> CredentialResponseSchema createItemApiSsoV1CredentialsPost(credentialCreateSchema)


### Example

```typescript
import {
    CredentialsApi,
    Configuration,
    CredentialCreateSchema
} from './api';

const configuration = new Configuration();
const apiInstance = new CredentialsApi(configuration);

let credentialCreateSchema: CredentialCreateSchema; //

const { status, data } = await apiInstance.createItemApiSsoV1CredentialsPost(
    credentialCreateSchema
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **credentialCreateSchema** | **CredentialCreateSchema**|  | |


### Return type

**CredentialResponseSchema**

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

# **createWebauthnCredentialApiSsoV1CredentialsWebauthnPost**
> CredentialResponseSchema createWebauthnCredentialApiSsoV1CredentialsWebauthnPost(passkeyAssertion)


### Example

```typescript
import {
    CredentialsApi,
    Configuration,
    PasskeyAssertion
} from './api';

const configuration = new Configuration();
const apiInstance = new CredentialsApi(configuration);

let passkeyAssertion: PasskeyAssertion; //

const { status, data } = await apiInstance.createWebauthnCredentialApiSsoV1CredentialsWebauthnPost(
    passkeyAssertion
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **passkeyAssertion** | **PasskeyAssertion**|  | |


### Return type

**CredentialResponseSchema**

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

# **deleteItemApiSsoV1CredentialsUidDelete**
> CredentialResponseSchema deleteItemApiSsoV1CredentialsUidDelete()


### Example

```typescript
import {
    CredentialsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CredentialsApi(configuration);

let uid: string; // (default to undefined)

const { status, data } = await apiInstance.deleteItemApiSsoV1CredentialsUidDelete(
    uid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uid** | [**string**] |  | defaults to undefined|


### Return type

**CredentialResponseSchema**

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

# **getWebauthnChallengeApiSsoV1CredentialsWebauthnGet**
> { [key: string]: any; } getWebauthnChallengeApiSsoV1CredentialsWebauthnGet()

Generate webauthn challenge for new passkey registration

### Example

```typescript
import {
    CredentialsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CredentialsApi(configuration);

const { status, data } = await apiInstance.getWebauthnChallengeApiSsoV1CredentialsWebauthnGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**{ [key: string]: any; }**

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

# **listItemsApiSsoV1CredentialsGet**
> PaginatedResponseCredentialResponseSchema listItemsApiSsoV1CredentialsGet()


### Example

```typescript
import {
    CredentialsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CredentialsApi(configuration);

let offset: number; // (optional) (default to 0)
let limit: number; // (optional) (default to 10)

const { status, data } = await apiInstance.listItemsApiSsoV1CredentialsGet(
    offset,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **offset** | [**number**] |  | (optional) defaults to 0|
| **limit** | [**number**] |  | (optional) defaults to 10|


### Return type

**PaginatedResponseCredentialResponseSchema**

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

# **retrieveItemApiSsoV1CredentialsUidGet**
> CredentialResponseSchema retrieveItemApiSsoV1CredentialsUidGet()


### Example

```typescript
import {
    CredentialsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CredentialsApi(configuration);

let uid: string; // (default to undefined)

const { status, data } = await apiInstance.retrieveItemApiSsoV1CredentialsUidGet(
    uid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uid** | [**string**] |  | defaults to undefined|


### Return type

**CredentialResponseSchema**

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

