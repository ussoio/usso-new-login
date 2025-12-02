# AgentSchema


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
**name** | **string** |  | [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**alg** | [**Algorithm**](Algorithm.md) |  | [optional] [default to undefined]
**verify_key** | **string** |  | [optional] [default to undefined]
**scopes** | **Array&lt;string&gt;** |  | [default to undefined]
**is_active** | **boolean** |  | [optional] [default to true]
**last_used_at** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { AgentSchema } from './api';

const instance: AgentSchema = {
    uid,
    created_at,
    updated_at,
    is_deleted,
    meta_data,
    user_id,
    tenant_id,
    name,
    description,
    alg,
    verify_key,
    scopes,
    is_active,
    last_used_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
