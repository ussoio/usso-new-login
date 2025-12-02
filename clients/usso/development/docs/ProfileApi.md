# ProfileApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createItemApiSsoV1ProfilesPost**](#createitemapissov1profilespost) | **POST** /api/sso/v1/profiles | Create Item|
|[**deleteItemApiSsoV1ProfilesUidDelete**](#deleteitemapissov1profilesuiddelete) | **DELETE** /api/sso/v1/profiles/{uid} | Delete Item|
|[**listItemsApiSsoV1ProfilesGet**](#listitemsapissov1profilesget) | **GET** /api/sso/v1/profiles | List Items|
|[**mineItemsApiSsoV1ProfilesMineGet**](#mineitemsapissov1profilesmineget) | **GET** /api/sso/v1/profiles/mine | Mine Items|
|[**retrieveItemApiSsoV1ProfilesUidGet**](#retrieveitemapissov1profilesuidget) | **GET** /api/sso/v1/profiles/{uid} | Retrieve Item|
|[**updateItemApiSsoV1ProfilesUidPatch**](#updateitemapissov1profilesuidpatch) | **PATCH** /api/sso/v1/profiles/{uid} | Update Item|
|[**updateMineItemsApiSsoV1ProfilesMinePatch**](#updatemineitemsapissov1profilesminepatch) | **PATCH** /api/sso/v1/profiles/mine | Update Mine Items|

# **createItemApiSsoV1ProfilesPost**
> ProfileSchema createItemApiSsoV1ProfilesPost(profileCreateSchema)


### Example

```typescript
import {
    ProfileApi,
    Configuration,
    ProfileCreateSchema
} from './api';

const configuration = new Configuration();
const apiInstance = new ProfileApi(configuration);

let profileCreateSchema: ProfileCreateSchema; //

const { status, data } = await apiInstance.createItemApiSsoV1ProfilesPost(
    profileCreateSchema
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **profileCreateSchema** | **ProfileCreateSchema**|  | |


### Return type

**ProfileSchema**

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

# **deleteItemApiSsoV1ProfilesUidDelete**
> ProfileSchema deleteItemApiSsoV1ProfilesUidDelete()


### Example

```typescript
import {
    ProfileApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProfileApi(configuration);

let uid: string; // (default to undefined)

const { status, data } = await apiInstance.deleteItemApiSsoV1ProfilesUidDelete(
    uid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uid** | [**string**] |  | defaults to undefined|


### Return type

**ProfileSchema**

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

# **listItemsApiSsoV1ProfilesGet**
> PaginatedResponseProfileSchema listItemsApiSsoV1ProfilesGet()


### Example

```typescript
import {
    ProfileApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProfileApi(configuration);

let offset: number; // (optional) (default to 0)
let limit: number; // (optional) (default to 10)
let createdAtFrom: string; // (optional) (default to undefined)
let createdAtTo: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.listItemsApiSsoV1ProfilesGet(
    offset,
    limit,
    createdAtFrom,
    createdAtTo
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **offset** | [**number**] |  | (optional) defaults to 0|
| **limit** | [**number**] |  | (optional) defaults to 10|
| **createdAtFrom** | [**string**] |  | (optional) defaults to undefined|
| **createdAtTo** | [**string**] |  | (optional) defaults to undefined|


### Return type

**PaginatedResponseProfileSchema**

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

# **mineItemsApiSsoV1ProfilesMineGet**
> ProfileSchema mineItemsApiSsoV1ProfilesMineGet()


### Example

```typescript
import {
    ProfileApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProfileApi(configuration);

const { status, data } = await apiInstance.mineItemsApiSsoV1ProfilesMineGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ProfileSchema**

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

# **retrieveItemApiSsoV1ProfilesUidGet**
> ProfileSchema retrieveItemApiSsoV1ProfilesUidGet()


### Example

```typescript
import {
    ProfileApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProfileApi(configuration);

let uid: string; // (default to undefined)

const { status, data } = await apiInstance.retrieveItemApiSsoV1ProfilesUidGet(
    uid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uid** | [**string**] |  | defaults to undefined|


### Return type

**ProfileSchema**

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

# **updateItemApiSsoV1ProfilesUidPatch**
> ProfileSchema updateItemApiSsoV1ProfilesUidPatch(profileUpdateSchema)


### Example

```typescript
import {
    ProfileApi,
    Configuration,
    ProfileUpdateSchema
} from './api';

const configuration = new Configuration();
const apiInstance = new ProfileApi(configuration);

let uid: string; // (default to undefined)
let profileUpdateSchema: ProfileUpdateSchema; //

const { status, data } = await apiInstance.updateItemApiSsoV1ProfilesUidPatch(
    uid,
    profileUpdateSchema
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **profileUpdateSchema** | **ProfileUpdateSchema**|  | |
| **uid** | [**string**] |  | defaults to undefined|


### Return type

**ProfileSchema**

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

# **updateMineItemsApiSsoV1ProfilesMinePatch**
> ProfileSchema updateMineItemsApiSsoV1ProfilesMinePatch(profileUpdateSchema)


### Example

```typescript
import {
    ProfileApi,
    Configuration,
    ProfileUpdateSchema
} from './api';

const configuration = new Configuration();
const apiInstance = new ProfileApi(configuration);

let profileUpdateSchema: ProfileUpdateSchema; //

const { status, data } = await apiInstance.updateMineItemsApiSsoV1ProfilesMinePatch(
    profileUpdateSchema
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **profileUpdateSchema** | **ProfileUpdateSchema**|  | |


### Return type

**ProfileSchema**

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

