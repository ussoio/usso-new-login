# ClientRegistrationRequestSchema

Dynamic Client Registration Request schema.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_name** | **string** | Human-readable client name | [default to undefined]
**redirect_uris** | **Array&lt;string&gt;** | Redirect URIs | [default to undefined]
**grant_types** | [**Array&lt;GrantType&gt;**](GrantType.md) | Grant types | [optional] [default to undefined]
**response_types** | [**Array&lt;ResponseType&gt;**](ResponseType.md) | Response types | [optional] [default to undefined]
**scope** | **string** | Requested scopes | [optional] [default to 'openid profile email']
**logo_uri** | **string** |  | [optional] [default to undefined]
**client_uri** | **string** |  | [optional] [default to undefined]
**policy_uri** | **string** |  | [optional] [default to undefined]
**tos_uri** | **string** |  | [optional] [default to undefined]
**jwks_uri** | **string** |  | [optional] [default to undefined]
**jwks** | **{ [key: string]: any; }** |  | [optional] [default to undefined]
**software_id** | **string** |  | [optional] [default to undefined]
**software_version** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { ClientRegistrationRequestSchema } from './api';

const instance: ClientRegistrationRequestSchema = {
    client_name,
    redirect_uris,
    grant_types,
    response_types,
    scope,
    logo_uri,
    client_uri,
    policy_uri,
    tos_uri,
    jwks_uri,
    jwks,
    software_id,
    software_version,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
