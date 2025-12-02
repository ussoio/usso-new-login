# PasskeyAssertion

SimpleWebAuthn registration response format.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** |  | [optional] [default to TypeEnum_PublicKey]
**id** | **string** | Base64url-encoded credential ID | [default to undefined]
**rawId** | **string** | Base64url-encoded raw credential ID | [default to undefined]
**authenticatorAttachment** | **string** |  | [optional] [default to undefined]
**clientExtensionResults** | **{ [key: string]: any; }** |  | [optional] [default to undefined]
**response** | [**AuthenticatorAttestationResponse**](AuthenticatorAttestationResponse.md) | Authenticator attestation response | [default to undefined]

## Example

```typescript
import { PasskeyAssertion } from './api';

const instance: PasskeyAssertion = {
    type,
    id,
    rawId,
    authenticatorAttachment,
    clientExtensionResults,
    response,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
