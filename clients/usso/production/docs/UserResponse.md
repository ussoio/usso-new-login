# UserResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uid** | **string** | Unique identifier for the entity | [optional] [default to undefined]
**created_at** | **string** | Date and time the entity was created | [optional] [default to undefined]
**updated_at** | **string** | Date and time the entity was last updated | [optional] [default to undefined]
**is_deleted** | **boolean** | Whether the entity has been deleted | [optional] [default to false]
**meta_data** | **{ [key: string]: any; }** |  | [optional] [default to undefined]
**tenant_id** | **string** |  | [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**roles** | **Array&lt;string&gt;** |  | [default to undefined]
**scopes** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**workspace_roles** | **{ [key: string]: Array&lt;string&gt;; }** |  | [optional] [default to undefined]
**workspace_ids** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**is_active** | **boolean** |  | [optional] [default to false]
**is_limited** | **boolean** |  | [optional] [default to false]
**activation_status** | [**ActivationStatus**](ActivationStatus.md) |  | [optional] [default to undefined]
**avatar_url** | **string** |  | [optional] [default to undefined]
**custom_claims** | **{ [key: string]: any; }** |  | [optional] [default to undefined]
**history** | **Array&lt;{ [key: string]: any; } | null&gt;** |  | [optional] [default to undefined]
**identifiers** | [**Array&lt;UserIdentifierSchema&gt;**](UserIdentifierSchema.md) |  | [optional] [default to undefined]
**credential_methods** | **Array&lt;string&gt;** |  | [optional] [default to undefined]

## Example

```typescript
import { UserResponse } from './api';

const instance: UserResponse = {
    uid,
    created_at,
    updated_at,
    is_deleted,
    meta_data,
    tenant_id,
    name,
    roles,
    scopes,
    workspace_roles,
    workspace_ids,
    is_active,
    is_limited,
    activation_status,
    avatar_url,
    custom_claims,
    history,
    identifiers,
    credential_methods,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
