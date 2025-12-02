# TokenResponseSchema

OAuth2 Token Response schema.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_token** | **string** | Access token | [default to undefined]
**token_type** | [**AppsTenantIntegrationSchemasTokenType**](AppsTenantIntegrationSchemasTokenType.md) | Token type | [optional] [default to undefined]
**expires_in** | **number** | Token expiration time in seconds | [default to undefined]
**refresh_token** | **string** |  | [optional] [default to undefined]
**scope** | **string** |  | [optional] [default to undefined]
**id_token** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { TokenResponseSchema } from './api';

const instance: TokenResponseSchema = {
    access_token,
    token_type,
    expires_in,
    refresh_token,
    scope,
    id_token,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
