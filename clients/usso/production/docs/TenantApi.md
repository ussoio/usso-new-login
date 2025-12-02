# TenantApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createItemApiSsoV1TenantsPost**](#createitemapissov1tenantspost) | **POST** /api/sso/v1/tenants | Create Item|
|[**deleteItemApiSsoV1TenantsUidDelete**](#deleteitemapissov1tenantsuiddelete) | **DELETE** /api/sso/v1/tenants/{uid} | Delete Item|
|[**getConfigApiSsoV1TenantsConfigGet**](#getconfigapissov1tenantsconfigget) | **GET** /api/sso/v1/tenants/config | Get Config|
|[**listItemsApiSsoV1TenantsGet**](#listitemsapissov1tenantsget) | **GET** /api/sso/v1/tenants | List Items|
|[**retrieveItemApiSsoV1TenantsUidGet**](#retrieveitemapissov1tenantsuidget) | **GET** /api/sso/v1/tenants/{uid} | Retrieve Item|
|[**updateItemApiSsoV1TenantsUidPatch**](#updateitemapissov1tenantsuidpatch) | **PATCH** /api/sso/v1/tenants/{uid} | Update Item|

# **createItemApiSsoV1TenantsPost**
> TenantRetrieveSchema createItemApiSsoV1TenantsPost(tenantCreateSchema)


### Example

```typescript
import {
    TenantApi,
    Configuration,
    TenantCreateSchema
} from './api';

const configuration = new Configuration();
const apiInstance = new TenantApi(configuration);

let tenantCreateSchema: TenantCreateSchema; //

const { status, data } = await apiInstance.createItemApiSsoV1TenantsPost(
    tenantCreateSchema
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantCreateSchema** | **TenantCreateSchema**|  | |


### Return type

**TenantRetrieveSchema**

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

# **deleteItemApiSsoV1TenantsUidDelete**
> TenantRetrieveSchema deleteItemApiSsoV1TenantsUidDelete()


### Example

```typescript
import {
    TenantApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TenantApi(configuration);

let uid: string; // (default to undefined)

const { status, data } = await apiInstance.deleteItemApiSsoV1TenantsUidDelete(
    uid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uid** | [**string**] |  | defaults to undefined|


### Return type

**TenantRetrieveSchema**

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

# **getConfigApiSsoV1TenantsConfigGet**
> PublicTenantConfig getConfigApiSsoV1TenantsConfigGet()


### Example

```typescript
import {
    TenantApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TenantApi(configuration);

const { status, data } = await apiInstance.getConfigApiSsoV1TenantsConfigGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**PublicTenantConfig**

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

# **listItemsApiSsoV1TenantsGet**
> PaginatedResponseTenantRetrieveSchema listItemsApiSsoV1TenantsGet()


### Example

```typescript
import {
    TenantApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TenantApi(configuration);

let offset: number; // (optional) (default to 0)
let limit: number; // (optional) (default to 10)
let createdAtFrom: string; // (optional) (default to undefined)
let createdAtTo: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.listItemsApiSsoV1TenantsGet(
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

**PaginatedResponseTenantRetrieveSchema**

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

# **retrieveItemApiSsoV1TenantsUidGet**
> TenantRetrieveSchema retrieveItemApiSsoV1TenantsUidGet()


### Example

```typescript
import {
    TenantApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TenantApi(configuration);

let uid: string; // (default to undefined)

const { status, data } = await apiInstance.retrieveItemApiSsoV1TenantsUidGet(
    uid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uid** | [**string**] |  | defaults to undefined|


### Return type

**TenantRetrieveSchema**

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

# **updateItemApiSsoV1TenantsUidPatch**
> TenantRetrieveSchema updateItemApiSsoV1TenantsUidPatch(tenantUpdateSchema)


### Example

```typescript
import {
    TenantApi,
    Configuration,
    TenantUpdateSchema
} from './api';

const configuration = new Configuration();
const apiInstance = new TenantApi(configuration);

let uid: string; // (default to undefined)
let tenantUpdateSchema: TenantUpdateSchema; //

const { status, data } = await apiInstance.updateItemApiSsoV1TenantsUidPatch(
    uid,
    tenantUpdateSchema
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantUpdateSchema** | **TenantUpdateSchema**|  | |
| **uid** | [**string**] |  | defaults to undefined|


### Return type

**TenantRetrieveSchema**

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

