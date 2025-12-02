# AgentApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**agentAuthApiSsoV1AgentsAuthPost**](#agentauthapissov1agentsauthpost) | **POST** /api/sso/v1/agents/auth | Agent Auth|
|[**createItemApiSsoV1AgentsPost**](#createitemapissov1agentspost) | **POST** /api/sso/v1/agents | Create Item|
|[**deleteItemApiSsoV1AgentsUidDelete**](#deleteitemapissov1agentsuiddelete) | **DELETE** /api/sso/v1/agents/{uid} | Delete Item|
|[**listItemsApiSsoV1AgentsGet**](#listitemsapissov1agentsget) | **GET** /api/sso/v1/agents | List Items|
|[**retrieveItemApiSsoV1AgentsUidGet**](#retrieveitemapissov1agentsuidget) | **GET** /api/sso/v1/agents/{uid} | Retrieve Item|
|[**updateItemApiSsoV1AgentsUidPatch**](#updateitemapissov1agentsuidpatch) | **PATCH** /api/sso/v1/agents/{uid} | Update Item|

# **agentAuthApiSsoV1AgentsAuthPost**
> LoginResponse agentAuthApiSsoV1AgentsAuthPost()

Authenticate an agent.

### Example

```typescript
import {
    AgentApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AgentApi(configuration);

const { status, data } = await apiInstance.agentAuthApiSsoV1AgentsAuthPost();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**LoginResponse**

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

# **createItemApiSsoV1AgentsPost**
> AgentCreateResponse createItemApiSsoV1AgentsPost(agentCreateSchema)


### Example

```typescript
import {
    AgentApi,
    Configuration,
    AgentCreateSchema
} from './api';

const configuration = new Configuration();
const apiInstance = new AgentApi(configuration);

let agentCreateSchema: AgentCreateSchema; //

const { status, data } = await apiInstance.createItemApiSsoV1AgentsPost(
    agentCreateSchema
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **agentCreateSchema** | **AgentCreateSchema**|  | |


### Return type

**AgentCreateResponse**

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

# **deleteItemApiSsoV1AgentsUidDelete**
> AgentSchema deleteItemApiSsoV1AgentsUidDelete()


### Example

```typescript
import {
    AgentApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AgentApi(configuration);

let uid: string; // (default to undefined)

const { status, data } = await apiInstance.deleteItemApiSsoV1AgentsUidDelete(
    uid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uid** | [**string**] |  | defaults to undefined|


### Return type

**AgentSchema**

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

# **listItemsApiSsoV1AgentsGet**
> PaginatedResponseAgentSchema listItemsApiSsoV1AgentsGet()


### Example

```typescript
import {
    AgentApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AgentApi(configuration);

let offset: number; // (optional) (default to 0)
let limit: number; // (optional) (default to 10)
let createdAtFrom: string; // (optional) (default to undefined)
let createdAtTo: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.listItemsApiSsoV1AgentsGet(
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

**PaginatedResponseAgentSchema**

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

# **retrieveItemApiSsoV1AgentsUidGet**
> AgentSchema retrieveItemApiSsoV1AgentsUidGet()


### Example

```typescript
import {
    AgentApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AgentApi(configuration);

let uid: string; // (default to undefined)

const { status, data } = await apiInstance.retrieveItemApiSsoV1AgentsUidGet(
    uid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uid** | [**string**] |  | defaults to undefined|


### Return type

**AgentSchema**

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

# **updateItemApiSsoV1AgentsUidPatch**
> AgentSchema updateItemApiSsoV1AgentsUidPatch(agentUpdateSchema)


### Example

```typescript
import {
    AgentApi,
    Configuration,
    AgentUpdateSchema
} from './api';

const configuration = new Configuration();
const apiInstance = new AgentApi(configuration);

let uid: string; // (default to undefined)
let agentUpdateSchema: AgentUpdateSchema; //

const { status, data } = await apiInstance.updateItemApiSsoV1AgentsUidPatch(
    uid,
    agentUpdateSchema
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **agentUpdateSchema** | **AgentUpdateSchema**|  | |
| **uid** | [**string**] |  | defaults to undefined|


### Return type

**AgentSchema**

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

