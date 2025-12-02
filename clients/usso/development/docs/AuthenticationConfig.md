# AuthenticationConfig

Authentication configuration for a tenant. Defines the login flow(s) and related policies.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**login_flow** | [**AuthFlow**](AuthFlow.md) | The login flow configuration for this tenant | [optional] [default to undefined]
**mfa_timeout** | **number** |  | [optional] [default to 300]
**otp_timeout** | **number** |  | [optional] [default to 300]
**otp_length** | **number** |  | [optional] [default to 6]
**magic_link_timeout** | **number** |  | [optional] [default to 900]
**password_min_length** | **number** |  | [optional] [default to 8]
**password_prevent_reuse** | **boolean** |  | [optional] [default to false]
**password_prevent_dictionary** | **boolean** |  | [optional] [default to true]
**password_require_special** | **boolean** |  | [optional] [default to true]
**password_require_numbers** | **boolean** |  | [optional] [default to true]
**password_require_uppercase** | **boolean** |  | [optional] [default to true]
**password_require_lowercase** | **boolean** |  | [optional] [default to true]
**max_concurrent_sessions** | **number** |  | [optional] [default to undefined]
**session_inactivity_timeout** | **number** |  | [optional] [default to undefined]
**require_recent_authentication** | **boolean** | Require recent authentication for sensitive actions | [optional] [default to false]

## Example

```typescript
import { AuthenticationConfig } from './api';

const instance: AuthenticationConfig = {
    login_flow,
    mfa_timeout,
    otp_timeout,
    otp_length,
    magic_link_timeout,
    password_min_length,
    password_prevent_reuse,
    password_prevent_dictionary,
    password_require_special,
    password_require_numbers,
    password_require_uppercase,
    password_require_lowercase,
    max_concurrent_sessions,
    session_inactivity_timeout,
    require_recent_authentication,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
