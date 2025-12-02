# CredentialResponseSchema

Response schema for credentials - excludes sensitive data.

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
**method** | [**AuthSecret**](AuthSecret.md) |  | [default to undefined]
**last_used_at** | **string** |  | [optional] [default to undefined]
**is_active** | **boolean** |  | [optional] [default to true]
**expires_at** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { CredentialResponseSchema } from './api';

const instance: CredentialResponseSchema = {
    uid,
    created_at,
    updated_at,
    is_deleted,
    meta_data,
    user_id,
    tenant_id,
    method,
    last_used_at,
    is_active,
    expires_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
