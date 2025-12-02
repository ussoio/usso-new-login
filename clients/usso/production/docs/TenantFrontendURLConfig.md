# TenantFrontendURLConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**login_url** | **string** |  | [optional] [default to '/login']
**register_url** | **string** |  | [optional] [default to '/register']
**reset_password_url** | **string** |  | [optional] [default to '/reset-password']
**request_otp_url** | **string** |  | [optional] [default to '/request-otp']
**verify_email_url** | **string** |  | [optional] [default to '/verify-email']
**verify_phone_url** | **string** |  | [optional] [default to '/verify-phone']
**verify_national_id_url** | **string** |  | [optional] [default to '/verify-national-id']
**verify_id_url** | **string** |  | [optional] [default to '/verify-id']
**magic_link_url** | **string** |  | [optional] [default to '/magic-link']
**passkey_url** | **string** |  | [optional] [default to '/passkey']
**qr_url** | **string** |  | [optional] [default to '/qr']
**oauth_authorize_url** | **string** |  | [optional] [default to '/oauth/authorize']
**oauth_failed_url** | **string** |  | [optional] [default to '/oauth/failed']
**consent_url** | **string** |  | [optional] [default to '/oauth/consent']

## Example

```typescript
import { TenantFrontendURLConfig } from './api';

const instance: TenantFrontendURLConfig = {
    login_url,
    register_url,
    reset_password_url,
    request_otp_url,
    verify_email_url,
    verify_phone_url,
    verify_national_id_url,
    verify_id_url,
    magic_link_url,
    passkey_url,
    qr_url,
    oauth_authorize_url,
    oauth_failed_url,
    consent_url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
