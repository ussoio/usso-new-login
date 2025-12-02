# WorkspaceApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createItemApiSsoV1WorkspacesPost**](#createitemapissov1workspacespost) | **POST** /api/sso/v1/workspaces | Create Item|
|[**deleteItemApiSsoV1WorkspacesUidDelete**](#deleteitemapissov1workspacesuiddelete) | **DELETE** /api/sso/v1/workspaces/{uid} | Delete Item|
|[**listItemsApiSsoV1WorkspacesGet**](#listitemsapissov1workspacesget) | **GET** /api/sso/v1/workspaces | List Items|
|[**retrieveItemApiSsoV1WorkspacesUidGet**](#retrieveitemapissov1workspacesuidget) | **GET** /api/sso/v1/workspaces/{uid} | Retrieve Item|
|[**updateItemApiSsoV1WorkspacesUidPatch**](#updateitemapissov1workspacesuidpatch) | **PATCH** /api/sso/v1/workspaces/{uid} | Update Item|

# **createItemApiSsoV1WorkspacesPost**
> WorkspaceSchema createItemApiSsoV1WorkspacesPost(requestBody)


### Example

```typescript
import {
    WorkspaceApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WorkspaceApi(configuration);

let requestBody: { [key: string]: any; }; //

const { status, data } = await apiInstance.createItemApiSsoV1WorkspacesPost(
    requestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **{ [key: string]: any; }**|  | |


### Return type

**WorkspaceSchema**

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

# **deleteItemApiSsoV1WorkspacesUidDelete**
> WorkspaceSchema deleteItemApiSsoV1WorkspacesUidDelete()


### Example

```typescript
import {
    WorkspaceApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WorkspaceApi(configuration);

let uid: string; // (default to undefined)

const { status, data } = await apiInstance.deleteItemApiSsoV1WorkspacesUidDelete(
    uid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uid** | [**string**] |  | defaults to undefined|


### Return type

**WorkspaceSchema**

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

# **listItemsApiSsoV1WorkspacesGet**
> PaginatedResponseWorkspaceSchema listItemsApiSsoV1WorkspacesGet()


### Example

```typescript
import {
    WorkspaceApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WorkspaceApi(configuration);

let offset: number; // (optional) (default to 0)
let limit: number; // (optional) (default to 10)
let createdAtFrom: string; // (optional) (default to undefined)
let createdAtTo: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.listItemsApiSsoV1WorkspacesGet(
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

**PaginatedResponseWorkspaceSchema**

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

# **retrieveItemApiSsoV1WorkspacesUidGet**
> WorkspaceSchema retrieveItemApiSsoV1WorkspacesUidGet()


### Example

```typescript
import {
    WorkspaceApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WorkspaceApi(configuration);

let uid: string; // (default to undefined)

const { status, data } = await apiInstance.retrieveItemApiSsoV1WorkspacesUidGet(
    uid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uid** | [**string**] |  | defaults to undefined|


### Return type

**WorkspaceSchema**

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

# **updateItemApiSsoV1WorkspacesUidPatch**
> WorkspaceSchema updateItemApiSsoV1WorkspacesUidPatch(requestBody)


### Example

```typescript
import {
    WorkspaceApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WorkspaceApi(configuration);

let uid: string; // (default to undefined)
let requestBody: { [key: string]: any; }; //

const { status, data } = await apiInstance.updateItemApiSsoV1WorkspacesUidPatch(
    uid,
    requestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **{ [key: string]: any; }**|  | |
| **uid** | [**string**] |  | defaults to undefined|


### Return type

**WorkspaceSchema**

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

