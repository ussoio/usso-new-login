# RoleApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createItemApiSsoV1RolesPost**](#createitemapissov1rolespost) | **POST** /api/sso/v1/roles | Create Item|
|[**deleteItemApiSsoV1RolesUidDelete**](#deleteitemapissov1rolesuiddelete) | **DELETE** /api/sso/v1/roles/{uid} | Delete Item|
|[**listItemsApiSsoV1RolesGet**](#listitemsapissov1rolesget) | **GET** /api/sso/v1/roles | List Items|
|[**retrieveItemApiSsoV1RolesUidGet**](#retrieveitemapissov1rolesuidget) | **GET** /api/sso/v1/roles/{uid} | Retrieve Item|
|[**updateItemApiSsoV1RolesUidPatch**](#updateitemapissov1rolesuidpatch) | **PATCH** /api/sso/v1/roles/{uid} | Update Item|

# **createItemApiSsoV1RolesPost**
> RoleSchema createItemApiSsoV1RolesPost(roleCreateSchema)


### Example

```typescript
import {
    RoleApi,
    Configuration,
    RoleCreateSchema
} from './api';

const configuration = new Configuration();
const apiInstance = new RoleApi(configuration);

let roleCreateSchema: RoleCreateSchema; //

const { status, data } = await apiInstance.createItemApiSsoV1RolesPost(
    roleCreateSchema
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **roleCreateSchema** | **RoleCreateSchema**|  | |


### Return type

**RoleSchema**

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

# **deleteItemApiSsoV1RolesUidDelete**
> RoleSchema deleteItemApiSsoV1RolesUidDelete()


### Example

```typescript
import {
    RoleApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RoleApi(configuration);

let uid: string; // (default to undefined)

const { status, data } = await apiInstance.deleteItemApiSsoV1RolesUidDelete(
    uid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uid** | [**string**] |  | defaults to undefined|


### Return type

**RoleSchema**

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

# **listItemsApiSsoV1RolesGet**
> PaginatedResponseRoleSchema listItemsApiSsoV1RolesGet()


### Example

```typescript
import {
    RoleApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RoleApi(configuration);

let offset: number; // (optional) (default to 0)
let limit: number; // (optional) (default to 10)
let createdAtFrom: string; // (optional) (default to undefined)
let createdAtTo: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.listItemsApiSsoV1RolesGet(
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

**PaginatedResponseRoleSchema**

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

# **retrieveItemApiSsoV1RolesUidGet**
> RoleSchema retrieveItemApiSsoV1RolesUidGet()


### Example

```typescript
import {
    RoleApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RoleApi(configuration);

let uid: string; // (default to undefined)

const { status, data } = await apiInstance.retrieveItemApiSsoV1RolesUidGet(
    uid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uid** | [**string**] |  | defaults to undefined|


### Return type

**RoleSchema**

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

# **updateItemApiSsoV1RolesUidPatch**
> RoleSchema updateItemApiSsoV1RolesUidPatch(roleUpdateSchema)


### Example

```typescript
import {
    RoleApi,
    Configuration,
    RoleUpdateSchema
} from './api';

const configuration = new Configuration();
const apiInstance = new RoleApi(configuration);

let uid: string; // (default to undefined)
let roleUpdateSchema: RoleUpdateSchema; //

const { status, data } = await apiInstance.updateItemApiSsoV1RolesUidPatch(
    uid,
    roleUpdateSchema
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **roleUpdateSchema** | **RoleUpdateSchema**|  | |
| **uid** | [**string**] |  | defaults to undefined|


### Return type

**RoleSchema**

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

