# IntegrationApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getJwksWellKnownJwksJsonGet**](#getjwkswellknownjwksjsonget) | **GET** /.well-known/jwks.json | Get Jwks|
|[**getOpenidConfigurationWellKnownOpenidConfigurationGet**](#getopenidconfigurationwellknownopenidconfigurationget) | **GET** /.well-known/openid-configuration | Get Openid Configuration|

# **getJwksWellKnownJwksJsonGet**
> { [key: string]: Array<{ [key: string]: ResponseGetJwksWellKnownJwksJsonGetValueInnerValue; }>; } getJwksWellKnownJwksJsonGet()

Get JSON Web Key Set (JWKS) for token verification.

### Example

```typescript
import {
    IntegrationApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new IntegrationApi(configuration);

let domain: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.getJwksWellKnownJwksJsonGet(
    domain
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **domain** | [**string**] |  | (optional) defaults to undefined|


### Return type

**{ [key: string]: Array<{ [key: string]: ResponseGetJwksWellKnownJwksJsonGetValueInnerValue; }>; }**

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

# **getOpenidConfigurationWellKnownOpenidConfigurationGet**
> { [key: string]: ResponseGetOpenidConfigurationWellKnownOpenidConfigurationGetValue; } getOpenidConfigurationWellKnownOpenidConfigurationGet()

Get OpenID Connect configuration.

### Example

```typescript
import {
    IntegrationApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new IntegrationApi(configuration);

const { status, data } = await apiInstance.getOpenidConfigurationWellKnownOpenidConfigurationGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**{ [key: string]: ResponseGetOpenidConfigurationWellKnownOpenidConfigurationGetValue; }**

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

