# RoleSchema


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uid** | **string** | Unique identifier for the entity | [optional] [default to undefined]
**created_at** | **string** | Date and time the entity was created | [optional] [default to undefined]
**updated_at** | **string** | Date and time the entity was last updated | [optional] [default to undefined]
**is_deleted** | **boolean** | Whether the entity has been deleted | [optional] [default to false]
**meta_data** | **{ [key: string]: any; }** |  | [optional] [default to undefined]
**tenant_id** | **string** |  | [default to undefined]
**name** | **string** |  | [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**scopes** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**is_active** | **boolean** |  | [optional] [default to true]
**workspace_id** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { RoleSchema } from './api';

const instance: RoleSchema = {
    uid,
    created_at,
    updated_at,
    is_deleted,
    meta_data,
    tenant_id,
    name,
    description,
    scopes,
    is_active,
    workspace_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
