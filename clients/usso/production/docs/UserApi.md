# UserApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createCredentialApiSsoV1UsersUidCredentialsPost**](#createcredentialapissov1usersuidcredentialspost) | **POST** /api/sso/v1/users/{uid}/credentials | Create Credential|
|[**createIdentifierApiSsoV1UsersUidIdentifiersPost**](#createidentifierapissov1usersuididentifierspost) | **POST** /api/sso/v1/users/{uid}/identifiers | Create Identifier|
|[**createItemApiSsoV1UsersPost**](#createitemapissov1userspost) | **POST** /api/sso/v1/users | Create Item|
|[**deleteCredentialApiSsoV1UsersUidCredentialsCredentialIdDelete**](#deletecredentialapissov1usersuidcredentialscredentialiddelete) | **DELETE** /api/sso/v1/users/{uid}/credentials/{credential_id} | Delete Credential|
|[**deleteIdentifierApiSsoV1UsersUidIdentifiersIdentifierIdDelete**](#deleteidentifierapissov1usersuididentifiersidentifieriddelete) | **DELETE** /api/sso/v1/users/{uid}/identifiers/{identifier_id} | Delete Identifier|
|[**deleteItemApiSsoV1UsersUidDelete**](#deleteitemapissov1usersuiddelete) | **DELETE** /api/sso/v1/users/{uid} | Delete Item|
|[**impersonateItemApiSsoV1UsersUidImpersonatePost**](#impersonateitemapissov1usersuidimpersonatepost) | **POST** /api/sso/v1/users/{uid}/impersonate | Impersonate Item|
|[**listCredentialsApiSsoV1UsersUidCredentialsGet**](#listcredentialsapissov1usersuidcredentialsget) | **GET** /api/sso/v1/users/{uid}/credentials | List Credentials|
|[**listIdentifiersApiSsoV1UsersUidIdentifiersGet**](#listidentifiersapissov1usersuididentifiersget) | **GET** /api/sso/v1/users/{uid}/identifiers | List Identifiers|
|[**listItemsApiSsoV1UsersGet**](#listitemsapissov1usersget) | **GET** /api/sso/v1/users | List Items|
|[**resendVerificationApiSsoV1UsersUidIdentifiersIdentifierIdResendPost**](#resendverificationapissov1usersuididentifiersidentifieridresendpost) | **POST** /api/sso/v1/users/{uid}/identifiers/{identifier_id}/resend | Resend Verification|
|[**resetCredentialApiSsoV1UsersUidCredentialsCredentialIdResetPost**](#resetcredentialapissov1usersuidcredentialscredentialidresetpost) | **POST** /api/sso/v1/users/{uid}/credentials/{credential_id}/reset | Reset Credential|
|[**retrieveItemApiSsoV1UsersUidGet**](#retrieveitemapissov1usersuidget) | **GET** /api/sso/v1/users/{uid} | Retrieve Item|
|[**updateIdentifierApiSsoV1UsersUidIdentifiersIdentifierIdPatch**](#updateidentifierapissov1usersuididentifiersidentifieridpatch) | **PATCH** /api/sso/v1/users/{uid}/identifiers/{identifier_id} | Update Identifier|
|[**updateItemApiSsoV1UsersUidPatch**](#updateitemapissov1usersuidpatch) | **PATCH** /api/sso/v1/users/{uid} | Update Item|

# **createCredentialApiSsoV1UsersUidCredentialsPost**
> CredentialResponseSchema createCredentialApiSsoV1UsersUidCredentialsPost(credentialCreateSchema)

Add a new credential to a user.

### Example

```typescript
import {
    UserApi,
    Configuration,
    CredentialCreateSchema
} from './api';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

let uid: string; // (default to undefined)
let credentialCreateSchema: CredentialCreateSchema; //

const { status, data } = await apiInstance.createCredentialApiSsoV1UsersUidCredentialsPost(
    uid,
    credentialCreateSchema
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **credentialCreateSchema** | **CredentialCreateSchema**|  | |
| **uid** | [**string**] |  | defaults to undefined|


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

# **createIdentifierApiSsoV1UsersUidIdentifiersPost**
> UserIdentifierSchema createIdentifierApiSsoV1UsersUidIdentifiersPost(userIdentifierCreateSchema)

Add a new identifier to a user.

### Example

```typescript
import {
    UserApi,
    Configuration,
    UserIdentifierCreateSchema
} from './api';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

let uid: string; // (default to undefined)
let userIdentifierCreateSchema: UserIdentifierCreateSchema; //

const { status, data } = await apiInstance.createIdentifierApiSsoV1UsersUidIdentifiersPost(
    uid,
    userIdentifierCreateSchema
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userIdentifierCreateSchema** | **UserIdentifierCreateSchema**|  | |
| **uid** | [**string**] |  | defaults to undefined|


### Return type

**UserIdentifierSchema**

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

# **createItemApiSsoV1UsersPost**
> UserResponse createItemApiSsoV1UsersPost(userCreateSchema)


### Example

```typescript
import {
    UserApi,
    Configuration,
    UserCreateSchema
} from './api';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

let userCreateSchema: UserCreateSchema; //

const { status, data } = await apiInstance.createItemApiSsoV1UsersPost(
    userCreateSchema
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userCreateSchema** | **UserCreateSchema**|  | |


### Return type

**UserResponse**

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

# **deleteCredentialApiSsoV1UsersUidCredentialsCredentialIdDelete**
> Credential deleteCredentialApiSsoV1UsersUidCredentialsCredentialIdDelete()

Delete a credential.

### Example

```typescript
import {
    UserApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

let uid: string; // (default to undefined)
let credentialId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteCredentialApiSsoV1UsersUidCredentialsCredentialIdDelete(
    uid,
    credentialId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uid** | [**string**] |  | defaults to undefined|
| **credentialId** | [**string**] |  | defaults to undefined|


### Return type

**Credential**

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

# **deleteIdentifierApiSsoV1UsersUidIdentifiersIdentifierIdDelete**
> UserIdentifier deleteIdentifierApiSsoV1UsersUidIdentifiersIdentifierIdDelete()

Delete an identifier.

### Example

```typescript
import {
    UserApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

let uid: string; // (default to undefined)
let identifierId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteIdentifierApiSsoV1UsersUidIdentifiersIdentifierIdDelete(
    uid,
    identifierId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uid** | [**string**] |  | defaults to undefined|
| **identifierId** | [**string**] |  | defaults to undefined|


### Return type

**UserIdentifier**

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

# **deleteItemApiSsoV1UsersUidDelete**
> UserResponse deleteItemApiSsoV1UsersUidDelete()


### Example

```typescript
import {
    UserApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

let uid: string; // (default to undefined)

const { status, data } = await apiInstance.deleteItemApiSsoV1UsersUidDelete(
    uid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uid** | [**string**] |  | defaults to undefined|


### Return type

**UserResponse**

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

# **impersonateItemApiSsoV1UsersUidImpersonatePost**
> BaseEntitySchema impersonateItemApiSsoV1UsersUidImpersonatePost()


### Example

```typescript
import {
    UserApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

let uid: string; // (default to undefined)

const { status, data } = await apiInstance.impersonateItemApiSsoV1UsersUidImpersonatePost(
    uid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uid** | [**string**] |  | defaults to undefined|


### Return type

**BaseEntitySchema**

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

# **listCredentialsApiSsoV1UsersUidCredentialsGet**
> PaginatedResponseCredentialResponseSchema listCredentialsApiSsoV1UsersUidCredentialsGet()

List all credentials for a user (without sensitive data).

### Example

```typescript
import {
    UserApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

let uid: string; // (default to undefined)
let offset: number; //Number of items to skip (optional) (default to 0)
let limit: number; //Number of items to return (optional) (default to 50)

const { status, data } = await apiInstance.listCredentialsApiSsoV1UsersUidCredentialsGet(
    uid,
    offset,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uid** | [**string**] |  | defaults to undefined|
| **offset** | [**number**] | Number of items to skip | (optional) defaults to 0|
| **limit** | [**number**] | Number of items to return | (optional) defaults to 50|


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

# **listIdentifiersApiSsoV1UsersUidIdentifiersGet**
> PaginatedResponseUserIdentifierSchema listIdentifiersApiSsoV1UsersUidIdentifiersGet()

List all identifiers for a user.

### Example

```typescript
import {
    UserApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

let uid: string; // (default to undefined)
let offset: number; //Number of items to skip (optional) (default to 0)
let limit: number; //Number of items to return (optional) (default to 50)

const { status, data } = await apiInstance.listIdentifiersApiSsoV1UsersUidIdentifiersGet(
    uid,
    offset,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uid** | [**string**] |  | defaults to undefined|
| **offset** | [**number**] | Number of items to skip | (optional) defaults to 0|
| **limit** | [**number**] | Number of items to return | (optional) defaults to 50|


### Return type

**PaginatedResponseUserIdentifierSchema**

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

# **listItemsApiSsoV1UsersGet**
> PaginatedResponseUserResponse listItemsApiSsoV1UsersGet()


### Example

```typescript
import {
    UserApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

let offset: number; // (optional) (default to 0)
let limit: number; // (optional) (default to 10)
let createdAtFrom: string; // (optional) (default to undefined)
let createdAtTo: string; // (optional) (default to undefined)
let identifierType: AuthIdentifier; // (optional) (default to undefined)
let identifier: string; // (optional) (default to undefined)
let role: string; // (optional) (default to undefined)
let isActive: boolean; // (optional) (default to undefined)
let isLimited: boolean; // (optional) (default to undefined)

const { status, data } = await apiInstance.listItemsApiSsoV1UsersGet(
    offset,
    limit,
    createdAtFrom,
    createdAtTo,
    identifierType,
    identifier,
    role,
    isActive,
    isLimited
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **offset** | [**number**] |  | (optional) defaults to 0|
| **limit** | [**number**] |  | (optional) defaults to 10|
| **createdAtFrom** | [**string**] |  | (optional) defaults to undefined|
| **createdAtTo** | [**string**] |  | (optional) defaults to undefined|
| **identifierType** | **AuthIdentifier** |  | (optional) defaults to undefined|
| **identifier** | [**string**] |  | (optional) defaults to undefined|
| **role** | [**string**] |  | (optional) defaults to undefined|
| **isActive** | [**boolean**] |  | (optional) defaults to undefined|
| **isLimited** | [**boolean**] |  | (optional) defaults to undefined|


### Return type

**PaginatedResponseUserResponse**

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

# **resendVerificationApiSsoV1UsersUidIdentifiersIdentifierIdResendPost**
> any resendVerificationApiSsoV1UsersUidIdentifiersIdentifierIdResendPost()

Resend verification code for an identifier.

### Example

```typescript
import {
    UserApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

let uid: string; // (default to undefined)
let identifierId: string; // (default to undefined)

const { status, data } = await apiInstance.resendVerificationApiSsoV1UsersUidIdentifiersIdentifierIdResendPost(
    uid,
    identifierId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uid** | [**string**] |  | defaults to undefined|
| **identifierId** | [**string**] |  | defaults to undefined|


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

# **resetCredentialApiSsoV1UsersUidCredentialsCredentialIdResetPost**
> any resetCredentialApiSsoV1UsersUidCredentialsCredentialIdResetPost()

Reset a specific credential (e.g., generate new TOTP secret).

### Example

```typescript
import {
    UserApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

let uid: string; // (default to undefined)
let credentialId: string; // (default to undefined)

const { status, data } = await apiInstance.resetCredentialApiSsoV1UsersUidCredentialsCredentialIdResetPost(
    uid,
    credentialId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uid** | [**string**] |  | defaults to undefined|
| **credentialId** | [**string**] |  | defaults to undefined|


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

# **retrieveItemApiSsoV1UsersUidGet**
> UserResponse retrieveItemApiSsoV1UsersUidGet()


### Example

```typescript
import {
    UserApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

let uid: string; // (default to undefined)

const { status, data } = await apiInstance.retrieveItemApiSsoV1UsersUidGet(
    uid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uid** | [**string**] |  | defaults to undefined|


### Return type

**UserResponse**

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

# **updateIdentifierApiSsoV1UsersUidIdentifiersIdentifierIdPatch**
> UserIdentifierSchema updateIdentifierApiSsoV1UsersUidIdentifiersIdentifierIdPatch(userIdentifierUpdateSchema)

Update an existing identifier.

### Example

```typescript
import {
    UserApi,
    Configuration,
    UserIdentifierUpdateSchema
} from './api';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

let uid: string; // (default to undefined)
let identifierId: string; // (default to undefined)
let userIdentifierUpdateSchema: UserIdentifierUpdateSchema; //

const { status, data } = await apiInstance.updateIdentifierApiSsoV1UsersUidIdentifiersIdentifierIdPatch(
    uid,
    identifierId,
    userIdentifierUpdateSchema
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userIdentifierUpdateSchema** | **UserIdentifierUpdateSchema**|  | |
| **uid** | [**string**] |  | defaults to undefined|
| **identifierId** | [**string**] |  | defaults to undefined|


### Return type

**UserIdentifierSchema**

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

# **updateItemApiSsoV1UsersUidPatch**
> UserResponse updateItemApiSsoV1UsersUidPatch(userUpdateSchema)


### Example

```typescript
import {
    UserApi,
    Configuration,
    UserUpdateSchema
} from './api';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

let uid: string; // (default to undefined)
let userUpdateSchema: UserUpdateSchema; //

const { status, data } = await apiInstance.updateItemApiSsoV1UsersUidPatch(
    uid,
    userUpdateSchema
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userUpdateSchema** | **UserUpdateSchema**|  | |
| **uid** | [**string**] |  | defaults to undefined|


### Return type

**UserResponse**

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

