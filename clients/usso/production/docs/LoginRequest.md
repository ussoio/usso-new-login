# LoginRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**method** | [**AuthSecret**](AuthSecret.md) |  | [optional] [default to undefined]
**secret** | **string** |  | [optional] [default to undefined]
**type** | [**AuthIdentifier**](AuthIdentifier.md) |  | [optional] [default to undefined]
**identifier** | **string** | Identifier value (email, phone, username, etc.) | [default to undefined]
**referral_code** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { LoginRequest } from './api';

const instance: LoginRequest = {
    method,
    secret,
    type,
    identifier,
    referral_code,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
