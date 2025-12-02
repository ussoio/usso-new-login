# TokenIntrospectionResponseSchema

OAuth2 Token Introspection Response schema.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **boolean** | Whether the token is active | [default to undefined]
**scope** | **string** |  | [optional] [default to undefined]
**client_id** | **string** |  | [optional] [default to undefined]
**username** | **string** |  | [optional] [default to undefined]
**token_type** | **string** |  | [optional] [default to undefined]
**exp** | **number** |  | [optional] [default to undefined]
**iat** | **number** |  | [optional] [default to undefined]
**nbf** | **number** |  | [optional] [default to undefined]
**sub** | **string** |  | [optional] [default to undefined]
**aud** | **string** |  | [optional] [default to undefined]
**iss** | **string** |  | [optional] [default to undefined]
**jti** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { TokenIntrospectionResponseSchema } from './api';

const instance: TokenIntrospectionResponseSchema = {
    active,
    scope,
    client_id,
    username,
    token_type,
    exp,
    iat,
    nbf,
    sub,
    aud,
    iss,
    jti,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
