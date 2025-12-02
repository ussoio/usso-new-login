# GatewayRouteApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createItemApiSsoV1GatewayroutesPost**](#createitemapissov1gatewayroutespost) | **POST** /api/sso/v1/gatewayroutes | Create Item|
|[**deleteItemApiSsoV1GatewayroutesUidDelete**](#deleteitemapissov1gatewayroutesuiddelete) | **DELETE** /api/sso/v1/gatewayroutes/{uid} | Delete Item|
|[**listItemsApiSsoV1GatewayroutesGet**](#listitemsapissov1gatewayroutesget) | **GET** /api/sso/v1/gatewayroutes | List Items|
|[**retrieveItemApiSsoV1GatewayroutesUidGet**](#retrieveitemapissov1gatewayroutesuidget) | **GET** /api/sso/v1/gatewayroutes/{uid} | Retrieve Item|
|[**updateItemApiSsoV1GatewayroutesUidPatch**](#updateitemapissov1gatewayroutesuidpatch) | **PATCH** /api/sso/v1/gatewayroutes/{uid} | Update Item|

# **createItemApiSsoV1GatewayroutesPost**
> GatewayRouteSchema createItemApiSsoV1GatewayroutesPost(gatewayRouteCreateSchema)


### Example

```typescript
import {
    GatewayRouteApi,
    Configuration,
    GatewayRouteCreateSchema
} from './api';

const configuration = new Configuration();
const apiInstance = new GatewayRouteApi(configuration);

let gatewayRouteCreateSchema: GatewayRouteCreateSchema; //

const { status, data } = await apiInstance.createItemApiSsoV1GatewayroutesPost(
    gatewayRouteCreateSchema
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **gatewayRouteCreateSchema** | **GatewayRouteCreateSchema**|  | |


### Return type

**GatewayRouteSchema**

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

# **deleteItemApiSsoV1GatewayroutesUidDelete**
> GatewayRouteSchema deleteItemApiSsoV1GatewayroutesUidDelete()


### Example

```typescript
import {
    GatewayRouteApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GatewayRouteApi(configuration);

let uid: string; // (default to undefined)

const { status, data } = await apiInstance.deleteItemApiSsoV1GatewayroutesUidDelete(
    uid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uid** | [**string**] |  | defaults to undefined|


### Return type

**GatewayRouteSchema**

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

# **listItemsApiSsoV1GatewayroutesGet**
> PaginatedResponseGatewayRouteSchema listItemsApiSsoV1GatewayroutesGet()


### Example

```typescript
import {
    GatewayRouteApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GatewayRouteApi(configuration);

let offset: number; // (optional) (default to 0)
let limit: number; // (optional) (default to 10)
let createdAtFrom: string; // (optional) (default to undefined)
let createdAtTo: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.listItemsApiSsoV1GatewayroutesGet(
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

**PaginatedResponseGatewayRouteSchema**

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

# **retrieveItemApiSsoV1GatewayroutesUidGet**
> GatewayRouteSchema retrieveItemApiSsoV1GatewayroutesUidGet()


### Example

```typescript
import {
    GatewayRouteApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GatewayRouteApi(configuration);

let uid: string; // (default to undefined)

const { status, data } = await apiInstance.retrieveItemApiSsoV1GatewayroutesUidGet(
    uid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uid** | [**string**] |  | defaults to undefined|


### Return type

**GatewayRouteSchema**

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

# **updateItemApiSsoV1GatewayroutesUidPatch**
> GatewayRouteSchema updateItemApiSsoV1GatewayroutesUidPatch(requestBody)


### Example

```typescript
import {
    GatewayRouteApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GatewayRouteApi(configuration);

let uid: string; // (default to undefined)
let requestBody: { [key: string]: any; }; //

const { status, data } = await apiInstance.updateItemApiSsoV1GatewayroutesUidPatch(
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

**GatewayRouteSchema**

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

