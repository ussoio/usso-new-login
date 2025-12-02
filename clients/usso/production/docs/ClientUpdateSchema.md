# ClientUpdateSchema

Schema for updating OAuth client (partial update).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_name** | **string** |  | [optional] [default to undefined]
**redirect_uris** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**allowed_scopes** | [**Array&lt;Scope&gt;**](Scope.md) |  | [optional] [default to undefined]
**grant_types** | [**Array&lt;GrantType&gt;**](GrantType.md) |  | [optional] [default to undefined]
**response_types** | [**Array&lt;ResponseType&gt;**](ResponseType.md) |  | [optional] [default to undefined]
**logo_uri** | **string** |  | [optional] [default to undefined]
**client_uri** | **string** |  | [optional] [default to undefined]
**policy_uri** | **string** |  | [optional] [default to undefined]
**tos_uri** | **string** |  | [optional] [default to undefined]
**require_pkce** | **boolean** |  | [optional] [default to undefined]
**token_endpoint_auth_method** | **string** |  | [optional] [default to undefined]
**is_active** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { ClientUpdateSchema } from './api';

const instance: ClientUpdateSchema = {
    client_name,
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
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
