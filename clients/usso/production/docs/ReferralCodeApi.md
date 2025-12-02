# ReferralCodeApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createItemApiSsoV1ReferralsPost**](#createitemapissov1referralspost) | **POST** /api/sso/v1/referrals | Create Item|
|[**deleteItemApiSsoV1ReferralsUidDelete**](#deleteitemapissov1referralsuiddelete) | **DELETE** /api/sso/v1/referrals/{uid} | Delete Item|
|[**listItemsApiSsoV1ReferralsGet**](#listitemsapissov1referralsget) | **GET** /api/sso/v1/referrals | List Items|
|[**retrieveItemApiSsoV1ReferralsUidGet**](#retrieveitemapissov1referralsuidget) | **GET** /api/sso/v1/referrals/{uid} | Retrieve Item|
|[**updateItemApiSsoV1ReferralsUidPatch**](#updateitemapissov1referralsuidpatch) | **PATCH** /api/sso/v1/referrals/{uid} | Update Item|

# **createItemApiSsoV1ReferralsPost**
> ReferralCodeSchema createItemApiSsoV1ReferralsPost(requestBody)


### Example

```typescript
import {
    ReferralCodeApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ReferralCodeApi(configuration);

let requestBody: { [key: string]: any; }; //

const { status, data } = await apiInstance.createItemApiSsoV1ReferralsPost(
    requestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **{ [key: string]: any; }**|  | |


### Return type

**ReferralCodeSchema**

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

# **deleteItemApiSsoV1ReferralsUidDelete**
> ReferralCodeSchema deleteItemApiSsoV1ReferralsUidDelete()


### Example

```typescript
import {
    ReferralCodeApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ReferralCodeApi(configuration);

let uid: string; // (default to undefined)

const { status, data } = await apiInstance.deleteItemApiSsoV1ReferralsUidDelete(
    uid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uid** | [**string**] |  | defaults to undefined|


### Return type

**ReferralCodeSchema**

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

# **listItemsApiSsoV1ReferralsGet**
> PaginatedResponseReferralCodeSchema listItemsApiSsoV1ReferralsGet()


### Example

```typescript
import {
    ReferralCodeApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ReferralCodeApi(configuration);

let offset: number; // (optional) (default to 0)
let limit: number; // (optional) (default to 10)
let createdAtFrom: string; // (optional) (default to undefined)
let createdAtTo: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.listItemsApiSsoV1ReferralsGet(
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

**PaginatedResponseReferralCodeSchema**

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

# **retrieveItemApiSsoV1ReferralsUidGet**
> ReferralCodeSchema retrieveItemApiSsoV1ReferralsUidGet()


### Example

```typescript
import {
    ReferralCodeApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ReferralCodeApi(configuration);

let uid: string; // (default to undefined)

const { status, data } = await apiInstance.retrieveItemApiSsoV1ReferralsUidGet(
    uid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uid** | [**string**] |  | defaults to undefined|


### Return type

**ReferralCodeSchema**

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

# **updateItemApiSsoV1ReferralsUidPatch**
> ReferralCodeSchema updateItemApiSsoV1ReferralsUidPatch(requestBody)


### Example

```typescript
import {
    ReferralCodeApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ReferralCodeApi(configuration);

let uid: string; // (default to undefined)
let requestBody: { [key: string]: any; }; //

const { status, data } = await apiInstance.updateItemApiSsoV1ReferralsUidPatch(
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

**ReferralCodeSchema**

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

