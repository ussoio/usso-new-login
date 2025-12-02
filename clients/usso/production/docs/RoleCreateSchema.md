# RoleCreateSchema


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**scopes** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**is_active** | **boolean** |  | [optional] [default to true]
**workspace_id** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { RoleCreateSchema } from './api';

const instance: RoleCreateSchema = {
    name,
    description,
    scopes,
    is_active,
    workspace_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
