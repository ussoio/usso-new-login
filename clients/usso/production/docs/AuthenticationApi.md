# AuthenticationApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**activateApiSsoV1AuthActivatePost**](#activateapissov1authactivatepost) | **POST** /api/sso/v1/auth/activate | Activate|
|[**generatePasskeyApiSsoV1AuthPasskeyGet**](#generatepasskeyapissov1authpasskeyget) | **GET** /api/sso/v1/auth/passkey | Generate Passkey|
|[**getAllRouteApiSsoV1AuthGet**](#getallrouteapissov1authget) | **GET** /api/sso/v1/auth/ | Get All Route|
|[**loginApiSsoV1AuthLoginPost**](#loginapissov1authloginpost) | **POST** /api/sso/v1/auth/login | Login|
|[**loginApiSsoV1AuthLoginPost_0**](#loginapissov1authloginpost_0) | **POST** /api/sso/v1/auth/login | Login|
|[**loginByMagicLinkApiSsoV1AuthMagicLinkGet**](#loginbymagiclinkapissov1authmagiclinkget) | **GET** /api/sso/v1/auth/magic-link | Login By Magic Link|
|[**logoutApiSsoV1AuthLogoutGet**](#logoutapissov1authlogoutget) | **GET** /api/sso/v1/auth/logout | Logout|
|[**logoutPostApiSsoV1AuthLogoutPost**](#logoutpostapissov1authlogoutpost) | **POST** /api/sso/v1/auth/logout | Logout Post|
|[**magicLinkRequestApiSsoV1AuthRequestMagicLinkPost**](#magiclinkrequestapissov1authrequestmagiclinkpost) | **POST** /api/sso/v1/auth/request-magic-link | Magic Link Request|
|[**magicLinkRequestApiSsoV1AuthRequestMagicLinkPost_0**](#magiclinkrequestapissov1authrequestmagiclinkpost_0) | **POST** /api/sso/v1/auth/request-magic-link | Magic Link Request|
|[**meApiSsoV1AuthMeGet**](#meapissov1authmeget) | **GET** /api/sso/v1/auth/me | Me|
|[**oauthAuthorizeApiSsoV1AuthOauthProviderAuthorizeGet**](#oauthauthorizeapissov1authoauthproviderauthorizeget) | **GET** /api/sso/v1/auth/oauth/{provider}/authorize | Oauth Authorize|
|[**oauthCallbackApiSsoV1AuthOauthProviderCallbackGet**](#oauthcallbackapissov1authoauthprovidercallbackget) | **GET** /api/sso/v1/auth/oauth/{provider}/callback | Oauth Callback|
|[**passkeyApiSsoV1AuthPasskeyPost**](#passkeyapissov1authpasskeypost) | **POST** /api/sso/v1/auth/passkey | Passkey|
|[**qrGenerateApiSsoV1AuthQrGet**](#qrgenerateapissov1authqrget) | **GET** /api/sso/v1/auth/qr | Qr Generate|
|[**qrLoginApiSsoV1AuthQrPost**](#qrloginapissov1authqrpost) | **POST** /api/sso/v1/auth/qr | Qr Login|
|[**qrStatusApiSsoV1AuthQrStatusGet**](#qrstatusapissov1authqrstatusget) | **GET** /api/sso/v1/auth/qr/status | Qr Status|
|[**refreshBodyApiSsoV1AuthRefreshPost**](#refreshbodyapissov1authrefreshpost) | **POST** /api/sso/v1/auth/refresh | Refresh Body|
|[**refreshCookieApiSsoV1AuthRefreshGet**](#refreshcookieapissov1authrefreshget) | **GET** /api/sso/v1/auth/refresh | Refresh Cookie|
|[**requestOtpApiSsoV1AuthRequestOtpPost**](#requestotpapissov1authrequestotppost) | **POST** /api/sso/v1/auth/request-otp | Request Otp|
|[**requestOtpApiSsoV1AuthRequestOtpPost_0**](#requestotpapissov1authrequestotppost_0) | **POST** /api/sso/v1/auth/request-otp | Request Otp|
|[**resetPasswordApiSsoV1AuthResetPasswordPost**](#resetpasswordapissov1authresetpasswordpost) | **POST** /api/sso/v1/auth/reset-password | Reset Password|
|[**resetPasswordApiSsoV1AuthResetPasswordPost_0**](#resetpasswordapissov1authresetpasswordpost_0) | **POST** /api/sso/v1/auth/reset-password | Reset Password|
|[**signinApiSsoV1AuthSigninPost**](#signinapissov1authsigninpost) | **POST** /api/sso/v1/auth/signin | Signin|
|[**verifyTokenApiSsoV1AuthVerifyTokenPost**](#verifytokenapissov1authverifytokenpost) | **POST** /api/sso/v1/auth/verify-token | Verify Token|

# **activateApiSsoV1AuthActivatePost**
> any activateApiSsoV1AuthActivatePost(identifier)

Activate account.

### Example

```typescript
import {
    AuthenticationApi,
    Configuration,
    Identifier
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

let identifier: Identifier; //

const { status, data } = await apiInstance.activateApiSsoV1AuthActivatePost(
    identifier
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **identifier** | **Identifier**|  | |


### Return type

**any**

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

# **generatePasskeyApiSsoV1AuthPasskeyGet**
> { [key: string]: any; } generatePasskeyApiSsoV1AuthPasskeyGet()

Passkey authentication.

### Example

```typescript
import {
    AuthenticationApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

const { status, data } = await apiInstance.generatePasskeyApiSsoV1AuthPasskeyGet();
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

# **getAllRouteApiSsoV1AuthGet**
> Array<string | null> getAllRouteApiSsoV1AuthGet()

Return all routes.

### Example

```typescript
import {
    AuthenticationApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

const { status, data } = await apiInstance.getAllRouteApiSsoV1AuthGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<string | null>**

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

# **loginApiSsoV1AuthLoginPost**
> LoginResponse loginApiSsoV1AuthLoginPost(loginRequest)

User login.

### Example

```typescript
import {
    AuthenticationApi,
    Configuration,
    LoginRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

let loginRequest: LoginRequest; //

const { status, data } = await apiInstance.loginApiSsoV1AuthLoginPost(
    loginRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loginRequest** | **LoginRequest**|  | |


### Return type

**LoginResponse**

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

# **loginApiSsoV1AuthLoginPost_0**
> LoginResponse loginApiSsoV1AuthLoginPost_0(loginRequest)

User login.

### Example

```typescript
import {
    AuthenticationApi,
    Configuration,
    LoginRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

let loginRequest: LoginRequest; //

const { status, data } = await apiInstance.loginApiSsoV1AuthLoginPost_0(
    loginRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loginRequest** | **LoginRequest**|  | |


### Return type

**LoginResponse**

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

# **loginByMagicLinkApiSsoV1AuthMagicLinkGet**
> any loginByMagicLinkApiSsoV1AuthMagicLinkGet()

Login using magic link.

### Example

```typescript
import {
    AuthenticationApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

let token: string; // (default to undefined)

const { status, data } = await apiInstance.loginByMagicLinkApiSsoV1AuthMagicLinkGet(
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] |  | defaults to undefined|


### Return type

**any**

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

# **logoutApiSsoV1AuthLogoutGet**
> logoutApiSsoV1AuthLogoutGet()

End session.

### Example

```typescript
import {
    AuthenticationApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

const { status, data } = await apiInstance.logoutApiSsoV1AuthLogoutGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **logoutPostApiSsoV1AuthLogoutPost**
> logoutPostApiSsoV1AuthLogoutPost()

End session.

### Example

```typescript
import {
    AuthenticationApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

const { status, data } = await apiInstance.logoutPostApiSsoV1AuthLogoutPost();
```

### Parameters
This endpoint does not have any parameters.


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **magicLinkRequestApiSsoV1AuthRequestMagicLinkPost**
> any magicLinkRequestApiSsoV1AuthRequestMagicLinkPost(magicLinkRequest)

Request magic link.

### Example

```typescript
import {
    AuthenticationApi,
    Configuration,
    MagicLinkRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

let magicLinkRequest: MagicLinkRequest; //

const { status, data } = await apiInstance.magicLinkRequestApiSsoV1AuthRequestMagicLinkPost(
    magicLinkRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **magicLinkRequest** | **MagicLinkRequest**|  | |


### Return type

**any**

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

# **magicLinkRequestApiSsoV1AuthRequestMagicLinkPost_0**
> any magicLinkRequestApiSsoV1AuthRequestMagicLinkPost_0(magicLinkRequest)

Request magic link.

### Example

```typescript
import {
    AuthenticationApi,
    Configuration,
    MagicLinkRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

let magicLinkRequest: MagicLinkRequest; //

const { status, data } = await apiInstance.magicLinkRequestApiSsoV1AuthRequestMagicLinkPost_0(
    magicLinkRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **magicLinkRequest** | **MagicLinkRequest**|  | |


### Return type

**any**

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

# **meApiSsoV1AuthMeGet**
> PayloadData meApiSsoV1AuthMeGet()

Current user info.

### Example

```typescript
import {
    AuthenticationApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

const { status, data } = await apiInstance.meApiSsoV1AuthMeGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**PayloadData**

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

# **oauthAuthorizeApiSsoV1AuthOauthProviderAuthorizeGet**
> any oauthAuthorizeApiSsoV1AuthOauthProviderAuthorizeGet()

OAuth authorize.

### Example

```typescript
import {
    AuthenticationApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

let provider: string; // (default to undefined)

const { status, data } = await apiInstance.oauthAuthorizeApiSsoV1AuthOauthProviderAuthorizeGet(
    provider
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **provider** | [**string**] |  | defaults to undefined|


### Return type

**any**

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

# **oauthCallbackApiSsoV1AuthOauthProviderCallbackGet**
> any oauthCallbackApiSsoV1AuthOauthProviderCallbackGet()

OAuth callback.

### Example

```typescript
import {
    AuthenticationApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

let provider: string; // (default to undefined)
let state: string; // (default to undefined)
let code: string; // (default to undefined)

const { status, data } = await apiInstance.oauthCallbackApiSsoV1AuthOauthProviderCallbackGet(
    provider,
    state,
    code
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **provider** | [**string**] |  | defaults to undefined|
| **state** | [**string**] |  | defaults to undefined|
| **code** | [**string**] |  | defaults to undefined|


### Return type

**any**

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

# **passkeyApiSsoV1AuthPasskeyPost**
> any passkeyApiSsoV1AuthPasskeyPost(passkeyAssertion)

Passkey authentication.

### Example

```typescript
import {
    AuthenticationApi,
    Configuration,
    PasskeyAssertion
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

let passkeyAssertion: PasskeyAssertion; //

const { status, data } = await apiInstance.passkeyApiSsoV1AuthPasskeyPost(
    passkeyAssertion
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **passkeyAssertion** | **PasskeyAssertion**|  | |


### Return type

**any**

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

# **qrGenerateApiSsoV1AuthQrGet**
> QRCodeResponse qrGenerateApiSsoV1AuthQrGet()

Generate a new QR code session and return its token.

### Example

```typescript
import {
    AuthenticationApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

const { status, data } = await apiInstance.qrGenerateApiSsoV1AuthQrGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**QRCodeResponse**

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

# **qrLoginApiSsoV1AuthQrPost**
> RefreshResponse qrLoginApiSsoV1AuthQrPost(qRLoginRequest)

Authenticate a QR session (simulate mobile scan). Update session status and return tokens.

### Example

```typescript
import {
    AuthenticationApi,
    Configuration,
    QRLoginRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

let qRLoginRequest: QRLoginRequest; //

const { status, data } = await apiInstance.qrLoginApiSsoV1AuthQrPost(
    qRLoginRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **qRLoginRequest** | **QRLoginRequest**|  | |


### Return type

**RefreshResponse**

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

# **qrStatusApiSsoV1AuthQrStatusGet**
> any qrStatusApiSsoV1AuthQrStatusGet()

Check the status of a QR code session. Returns: {status: pending|authenticated|expired, ...}.

### Example

```typescript
import {
    AuthenticationApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

let qrToken: string; //QR session token to check status for (default to undefined)

const { status, data } = await apiInstance.qrStatusApiSsoV1AuthQrStatusGet(
    qrToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **qrToken** | [**string**] | QR session token to check status for | defaults to undefined|


### Return type

**any**

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

# **refreshBodyApiSsoV1AuthRefreshPost**
> RefreshResponse refreshBodyApiSsoV1AuthRefreshPost(refreshRequest)

Refresh access token. Use request body to check if the refresh token is valid.

### Example

```typescript
import {
    AuthenticationApi,
    Configuration,
    RefreshRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

let refreshRequest: RefreshRequest; //

const { status, data } = await apiInstance.refreshBodyApiSsoV1AuthRefreshPost(
    refreshRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **refreshRequest** | **RefreshRequest**|  | |


### Return type

**RefreshResponse**

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

# **refreshCookieApiSsoV1AuthRefreshGet**
> RefreshResponse refreshCookieApiSsoV1AuthRefreshGet()

Refresh access token. Use cookie to check if the refresh token is valid.

### Example

```typescript
import {
    AuthenticationApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

const { status, data } = await apiInstance.refreshCookieApiSsoV1AuthRefreshGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**RefreshResponse**

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

# **requestOtpApiSsoV1AuthRequestOtpPost**
> any requestOtpApiSsoV1AuthRequestOtpPost(oTPRequest)

Request OTP.

### Example

```typescript
import {
    AuthenticationApi,
    Configuration,
    OTPRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

let oTPRequest: OTPRequest; //

const { status, data } = await apiInstance.requestOtpApiSsoV1AuthRequestOtpPost(
    oTPRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **oTPRequest** | **OTPRequest**|  | |


### Return type

**any**

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

# **requestOtpApiSsoV1AuthRequestOtpPost_0**
> any requestOtpApiSsoV1AuthRequestOtpPost_0(oTPRequest)

Request OTP.

### Example

```typescript
import {
    AuthenticationApi,
    Configuration,
    OTPRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

let oTPRequest: OTPRequest; //

const { status, data } = await apiInstance.requestOtpApiSsoV1AuthRequestOtpPost_0(
    oTPRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **oTPRequest** | **OTPRequest**|  | |


### Return type

**any**

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

# **resetPasswordApiSsoV1AuthResetPasswordPost**
> any resetPasswordApiSsoV1AuthResetPasswordPost(resetPasswordRequest)

Password reset.

### Example

```typescript
import {
    AuthenticationApi,
    Configuration,
    ResetPasswordRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

let resetPasswordRequest: ResetPasswordRequest; //

const { status, data } = await apiInstance.resetPasswordApiSsoV1AuthResetPasswordPost(
    resetPasswordRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **resetPasswordRequest** | **ResetPasswordRequest**|  | |


### Return type

**any**

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

# **resetPasswordApiSsoV1AuthResetPasswordPost_0**
> any resetPasswordApiSsoV1AuthResetPasswordPost_0(resetPasswordRequest)

Password reset.

### Example

```typescript
import {
    AuthenticationApi,
    Configuration,
    ResetPasswordRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

let resetPasswordRequest: ResetPasswordRequest; //

const { status, data } = await apiInstance.resetPasswordApiSsoV1AuthResetPasswordPost_0(
    resetPasswordRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **resetPasswordRequest** | **ResetPasswordRequest**|  | |


### Return type

**any**

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

# **signinApiSsoV1AuthSigninPost**
> LoginResponse signinApiSsoV1AuthSigninPost(data)

User login.

### Example

```typescript
import {
    AuthenticationApi,
    Configuration,
    Data
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

let data: Data; //

const { status, data } = await apiInstance.signinApiSsoV1AuthSigninPost(
    data
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **data** | **Data**|  | |


### Return type

**LoginResponse**

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

# **verifyTokenApiSsoV1AuthVerifyTokenPost**
> PayloadData verifyTokenApiSsoV1AuthVerifyTokenPost(verifyTokenRequest)

Verify token.

### Example

```typescript
import {
    AuthenticationApi,
    Configuration,
    VerifyTokenRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

let verifyTokenRequest: VerifyTokenRequest; //

const { status, data } = await apiInstance.verifyTokenApiSsoV1AuthVerifyTokenPost(
    verifyTokenRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **verifyTokenRequest** | **VerifyTokenRequest**|  | |


### Return type

**PayloadData**

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

