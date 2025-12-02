# UserIdentifierSchema


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
**type** | [**AuthIdentifier**](AuthIdentifier.md) |  | [default to undefined]
**identifier** | **string** |  | [default to undefined]
**verified_at** | **string** |  | [optional] [default to undefined]
**is_primary** | **boolean** |  | [optional] [default to false]
**is_active** | **boolean** |  | [optional] [default to true]

## Example

```typescript
import { UserIdentifierSchema } from './api';

const instance: UserIdentifierSchema = {
    uid,
    created_at,
    updated_at,
    is_deleted,
    meta_data,
    user_id,
    tenant_id,
    type,
    identifier,
    verified_at,
    is_primary,
    is_active,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
