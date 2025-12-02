# UserUpdateSchema


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [optional] [default to undefined]
**roles** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**scopes** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**workspace_roles** | **{ [key: string]: Array&lt;string&gt;; }** |  | [optional] [default to undefined]
**workspace_ids** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**is_active** | **boolean** |  | [optional] [default to undefined]
**is_limited** | **boolean** |  | [optional] [default to undefined]
**activation_status** | [**ActivationStatus**](ActivationStatus.md) |  | [optional] [default to undefined]
**avatar_url** | **string** |  | [optional] [default to undefined]
**custom_claims** | **{ [key: string]: any; }** |  | [optional] [default to undefined]

## Example

```typescript
import { UserUpdateSchema } from './api';

const instance: UserUpdateSchema = {
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
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
