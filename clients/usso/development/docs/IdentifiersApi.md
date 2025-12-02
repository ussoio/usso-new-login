# IdentifiersApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createItemApiSsoV1IdentifiersPost**](#createitemapissov1identifierspost) | **POST** /api/sso/v1/identifiers | Create Item|
|[**deleteItemApiSsoV1IdentifiersUidDelete**](#deleteitemapissov1identifiersuiddelete) | **DELETE** /api/sso/v1/identifiers/{uid} | Delete Item|
|[**listItemsApiSsoV1IdentifiersGet**](#listitemsapissov1identifiersget) | **GET** /api/sso/v1/identifiers | List Items|
|[**retrieveItemApiSsoV1IdentifiersUidGet**](#retrieveitemapissov1identifiersuidget) | **GET** /api/sso/v1/identifiers/{uid} | Retrieve Item|

# **createItemApiSsoV1IdentifiersPost**
> UserIdentifierSchema createItemApiSsoV1IdentifiersPost(userIdentifierCreateSchema)


### Example

```typescript
import {
    IdentifiersApi,
    Configuration,
    UserIdentifierCreateSchema
} from './api';

const configuration = new Configuration();
const apiInstance = new IdentifiersApi(configuration);

let userIdentifierCreateSchema: UserIdentifierCreateSchema; //

const { status, data } = await apiInstance.createItemApiSsoV1IdentifiersPost(
    userIdentifierCreateSchema
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userIdentifierCreateSchema** | **UserIdentifierCreateSchema**|  | |


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

# **deleteItemApiSsoV1IdentifiersUidDelete**
> UserIdentifierSchema deleteItemApiSsoV1IdentifiersUidDelete()


### Example

```typescript
import {
    IdentifiersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new IdentifiersApi(configuration);

let uid: string; // (default to undefined)

const { status, data } = await apiInstance.deleteItemApiSsoV1IdentifiersUidDelete(
    uid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uid** | [**string**] |  | defaults to undefined|


### Return type

**UserIdentifierSchema**

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

# **listItemsApiSsoV1IdentifiersGet**
> PaginatedResponseUserIdentifierSchema listItemsApiSsoV1IdentifiersGet()


### Example

```typescript
import {
    IdentifiersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new IdentifiersApi(configuration);

let offset: number; // (optional) (default to 0)
let limit: number; // (optional) (default to 10)
let createdAtFrom: string; // (optional) (default to undefined)
let createdAtTo: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.listItemsApiSsoV1IdentifiersGet(
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

# **retrieveItemApiSsoV1IdentifiersUidGet**
> UserIdentifierSchema retrieveItemApiSsoV1IdentifiersUidGet()


### Example

```typescript
import {
    IdentifiersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new IdentifiersApi(configuration);

let uid: string; // (default to undefined)

const { status, data } = await apiInstance.retrieveItemApiSsoV1IdentifiersUidGet(
    uid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uid** | [**string**] |  | defaults to undefined|


### Return type

**UserIdentifierSchema**

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

