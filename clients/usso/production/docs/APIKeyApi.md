# APIKeyApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createItemApiSsoV1ApikeysPost**](#createitemapissov1apikeyspost) | **POST** /api/sso/v1/apikeys | Create Item|
|[**deleteItemApiSsoV1ApikeysUidDelete**](#deleteitemapissov1apikeysuiddelete) | **DELETE** /api/sso/v1/apikeys/{uid} | Delete Item|
|[**listItemsApiSsoV1ApikeysGet**](#listitemsapissov1apikeysget) | **GET** /api/sso/v1/apikeys | List Items|
|[**retrieveItemApiSsoV1ApikeysUidGet**](#retrieveitemapissov1apikeysuidget) | **GET** /api/sso/v1/apikeys/{uid} | Retrieve Item|
|[**verifyApiSsoV1ApikeysVerifyPost**](#verifyapissov1apikeysverifypost) | **POST** /api/sso/v1/apikeys/verify | Verify|

# **createItemApiSsoV1ApikeysPost**
> APIKeyCreateResponseSchema createItemApiSsoV1ApikeysPost(aPIKeyCreateSchema)


### Example

```typescript
import {
    APIKeyApi,
    Configuration,
    APIKeyCreateSchema
} from './api';

const configuration = new Configuration();
const apiInstance = new APIKeyApi(configuration);

let aPIKeyCreateSchema: APIKeyCreateSchema; //

const { status, data } = await apiInstance.createItemApiSsoV1ApikeysPost(
    aPIKeyCreateSchema
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aPIKeyCreateSchema** | **APIKeyCreateSchema**|  | |


### Return type

**APIKeyCreateResponseSchema**

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

# **deleteItemApiSsoV1ApikeysUidDelete**
> APIKeyResponseSchema deleteItemApiSsoV1ApikeysUidDelete()


### Example

```typescript
import {
    APIKeyApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new APIKeyApi(configuration);

let uid: string; // (default to undefined)

const { status, data } = await apiInstance.deleteItemApiSsoV1ApikeysUidDelete(
    uid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uid** | [**string**] |  | defaults to undefined|


### Return type

**APIKeyResponseSchema**

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

# **listItemsApiSsoV1ApikeysGet**
> PaginatedResponseAPIKeyResponseSchema listItemsApiSsoV1ApikeysGet()


### Example

```typescript
import {
    APIKeyApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new APIKeyApi(configuration);

let offset: number; // (optional) (default to 0)
let limit: number; // (optional) (default to 10)
let createdAtFrom: string; // (optional) (default to undefined)
let createdAtTo: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.listItemsApiSsoV1ApikeysGet(
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

**PaginatedResponseAPIKeyResponseSchema**

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

# **retrieveItemApiSsoV1ApikeysUidGet**
> APIKeyResponseSchema retrieveItemApiSsoV1ApikeysUidGet()


### Example

```typescript
import {
    APIKeyApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new APIKeyApi(configuration);

let uid: string; // (default to undefined)

const { status, data } = await apiInstance.retrieveItemApiSsoV1ApikeysUidGet(
    uid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uid** | [**string**] |  | defaults to undefined|


### Return type

**APIKeyResponseSchema**

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

# **verifyApiSsoV1ApikeysVerifyPost**
> UserData verifyApiSsoV1ApikeysVerifyPost(aPIKeyVerifySchema)


### Example

```typescript
import {
    APIKeyApi,
    Configuration,
    APIKeyVerifySchema
} from './api';

const configuration = new Configuration();
const apiInstance = new APIKeyApi(configuration);

let aPIKeyVerifySchema: APIKeyVerifySchema; //

const { status, data } = await apiInstance.verifyApiSsoV1ApikeysVerifyPost(
    aPIKeyVerifySchema
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aPIKeyVerifySchema** | **APIKeyVerifySchema**|  | |


### Return type

**UserData**

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

