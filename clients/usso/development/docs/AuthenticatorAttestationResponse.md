# AuthenticatorAttestationResponse

AuthenticatorAttestationResponse from WebAuthn.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clientDataJSON** | **string** | Base64url-encoded client data | [default to undefined]
**authenticatorData** | **string** | Base64url-encoded authenticator data | [default to undefined]
**attestationObject** | **string** |  | [optional] [default to undefined]
**signature** | **string** |  | [optional] [default to undefined]
**userHandle** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { AuthenticatorAttestationResponse } from './api';

const instance: AuthenticatorAttestationResponse = {
    clientDataJSON,
    authenticatorData,
    attestationObject,
    signature,
    userHandle,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
