# AuthSessionApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createItemApiSsoV1SessionsPost**](#createitemapissov1sessionspost) | **POST** /api/sso/v1/sessions | Create Item|
|[**deleteItemApiSsoV1SessionsUidDelete**](#deleteitemapissov1sessionsuiddelete) | **DELETE** /api/sso/v1/sessions/{uid} | Delete Item|
|[**listItemsApiSsoV1SessionsGet**](#listitemsapissov1sessionsget) | **GET** /api/sso/v1/sessions | List Items|
|[**retrieveItemApiSsoV1SessionsUidGet**](#retrieveitemapissov1sessionsuidget) | **GET** /api/sso/v1/sessions/{uid} | Retrieve Item|
|[**updateItemApiSsoV1SessionsUidPatch**](#updateitemapissov1sessionsuidpatch) | **PATCH** /api/sso/v1/sessions/{uid} | Update Item|

# **createItemApiSsoV1SessionsPost**
> AuthSessionSchema createItemApiSsoV1SessionsPost(requestBody)


### Example

```typescript
import {
    AuthSessionApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthSessionApi(configuration);

let requestBody: { [key: string]: any; }; //

const { status, data } = await apiInstance.createItemApiSsoV1SessionsPost(
    requestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **{ [key: string]: any; }**|  | |


### Return type

**AuthSessionSchema**

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

# **deleteItemApiSsoV1SessionsUidDelete**
> AuthSessionSchema deleteItemApiSsoV1SessionsUidDelete()


### Example

```typescript
import {
    AuthSessionApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthSessionApi(configuration);

let uid: string; // (default to undefined)

const { status, data } = await apiInstance.deleteItemApiSsoV1SessionsUidDelete(
    uid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uid** | [**string**] |  | defaults to undefined|


### Return type

**AuthSessionSchema**

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

# **listItemsApiSsoV1SessionsGet**
> PaginatedResponseAuthSessionSchema listItemsApiSsoV1SessionsGet()


### Example

```typescript
import {
    AuthSessionApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthSessionApi(configuration);

let offset: number; // (optional) (default to 0)
let limit: number; // (optional) (default to 10)
let createdAtFrom: string; // (optional) (default to undefined)
let createdAtTo: string; // (optional) (default to undefined)
let userId: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.listItemsApiSsoV1SessionsGet(
    offset,
    limit,
    createdAtFrom,
    createdAtTo,
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **offset** | [**number**] |  | (optional) defaults to 0|
| **limit** | [**number**] |  | (optional) defaults to 10|
| **createdAtFrom** | [**string**] |  | (optional) defaults to undefined|
| **createdAtTo** | [**string**] |  | (optional) defaults to undefined|
| **userId** | [**string**] |  | (optional) defaults to undefined|


### Return type

**PaginatedResponseAuthSessionSchema**

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

# **retrieveItemApiSsoV1SessionsUidGet**
> AuthSessionSchema retrieveItemApiSsoV1SessionsUidGet()


### Example

```typescript
import {
    AuthSessionApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthSessionApi(configuration);

let uid: string; // (default to undefined)

const { status, data } = await apiInstance.retrieveItemApiSsoV1SessionsUidGet(
    uid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uid** | [**string**] |  | defaults to undefined|


### Return type

**AuthSessionSchema**

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

# **updateItemApiSsoV1SessionsUidPatch**
> AuthSessionSchema updateItemApiSsoV1SessionsUidPatch(requestBody)


### Example

```typescript
import {
    AuthSessionApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthSessionApi(configuration);

let uid: string; // (default to undefined)
let requestBody: { [key: string]: any; }; //

const { status, data } = await apiInstance.updateItemApiSsoV1SessionsUidPatch(
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

**AuthSessionSchema**

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

