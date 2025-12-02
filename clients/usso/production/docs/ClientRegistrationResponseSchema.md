# ClientRegistrationResponseSchema

Dynamic Client Registration Response schema.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uid** | **string** | Unique identifier for the entity | [optional] [default to undefined]
**created_at** | **string** | Date and time the entity was created | [optional] [default to undefined]
**updated_at** | **string** | Date and time the entity was last updated | [optional] [default to undefined]
**is_deleted** | **boolean** | Whether the entity has been deleted | [optional] [default to false]
**meta_data** | **{ [key: string]: any; }** |  | [optional] [default to undefined]
**user_id** | **string** |  | [default to undefined]
**tenant_id** | **string** |  | [default to undefined]
**client_id** | **string** | Unique client identifier | [default to undefined]
**client_secret** | **string** | Client secret (for confidential clients) | [default to undefined]
**client_name** | **string** | Human-readable client name | [default to undefined]
**client_type** | [**ClientType**](ClientType.md) | Client type (public or confidential) | [default to undefined]
**redirect_uris** | **Array&lt;string&gt;** | Allowed redirect URIs | [default to undefined]
**allowed_scopes** | [**Array&lt;Scope&gt;**](Scope.md) | Allowed scopes for this client | [optional] [default to undefined]
**grant_types** | [**Array&lt;GrantType&gt;**](GrantType.md) | Allowed grant types | [optional] [default to undefined]
**response_types** | [**Array&lt;ResponseType&gt;**](ResponseType.md) | Allowed response types | [optional] [default to undefined]
**logo_uri** | **string** |  | [optional] [default to undefined]
**client_uri** | **string** |  | [optional] [default to undefined]
**policy_uri** | **string** |  | [optional] [default to undefined]
**tos_uri** | **string** |  | [optional] [default to undefined]
**require_pkce** | **boolean** | Require PKCE for authorization code flow | [optional] [default to false]
**token_endpoint_auth_method** | **string** | Token endpoint authentication method | [optional] [default to 'client_secret_basic']
**is_active** | **boolean** | Whether the client is active | [optional] [default to true]
**client_id_issued_at** | **number** | Client ID issuance timestamp | [default to undefined]
**client_secret_expires_at** | **number** | Client secret expiration | [optional] [default to 0]
**registration_access_token** | **string** | Registration access token | [default to undefined]

## Example

```typescript
import { ClientRegistrationResponseSchema } from './api';

const instance: ClientRegistrationResponseSchema = {
    uid,
    created_at,
    updated_at,
    is_deleted,
    meta_data,
    user_id,
    tenant_id,
    client_id,
    client_secret,
    client_name,
    client_type,
    redirect_uris,
    allowed_scopes,
    grant_types,
    response_types,
    logo_uri,
    client_uri,
    policy_uri,
    tos_uri,
    require_pkce,
    token_endpoint_auth_method,
    is_active,
    client_id_issued_at,
    client_secret_expires_at,
    registration_access_token,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
