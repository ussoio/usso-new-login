# CaptchaApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getChallengeApiSsoV1CaptchaChallengeGet**](#getchallengeapissov1captchachallengeget) | **GET** /api/sso/v1/captcha/challenge | Get Challenge|
|[**verifyApiSsoV1CaptchaVerifyPost**](#verifyapissov1captchaverifypost) | **POST** /api/sso/v1/captcha/verify | Verify|

# **getChallengeApiSsoV1CaptchaChallengeGet**
> { [key: string]: any; } getChallengeApiSsoV1CaptchaChallengeGet()


### Example

```typescript
import {
    CaptchaApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CaptchaApi(configuration);

const { status, data } = await apiInstance.getChallengeApiSsoV1CaptchaChallengeGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**{ [key: string]: any; }**

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

# **verifyApiSsoV1CaptchaVerifyPost**
> { [key: string]: any; } verifyApiSsoV1CaptchaVerifyPost()

Verify the captcha payload and return status with input data.

### Example

```typescript
import {
    CaptchaApi,
    Configuration,
    BodyVerifyApiSsoV1CaptchaVerifyPost
} from './api';

const configuration = new Configuration();
const apiInstance = new CaptchaApi(configuration);

let bodyVerifyApiSsoV1CaptchaVerifyPost: BodyVerifyApiSsoV1CaptchaVerifyPost; // (optional)

const { status, data } = await apiInstance.verifyApiSsoV1CaptchaVerifyPost(
    bodyVerifyApiSsoV1CaptchaVerifyPost
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **bodyVerifyApiSsoV1CaptchaVerifyPost** | **BodyVerifyApiSsoV1CaptchaVerifyPost**|  | |


### Return type

**{ [key: string]: any; }**

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

