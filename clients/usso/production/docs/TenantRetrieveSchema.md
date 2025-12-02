# TenantRetrieveSchema


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uid** | **string** | Unique identifier for the entity | [optional] [default to undefined]
**created_at** | **string** | Date and time the entity was created | [optional] [default to undefined]
**updated_at** | **string** | Date and time the entity was last updated | [optional] [default to undefined]
**is_deleted** | **boolean** | Whether the entity has been deleted | [optional] [default to false]
**meta_data** | **{ [key: string]: any; }** |  | [optional] [default to undefined]
**user_id** | **string** |  | [default to undefined]
**name** | **string** | Name of the tenant/organization | [default to undefined]
**is_active** | **boolean** | Whether the tenant is active | [optional] [default to true]
**domains** | **Array&lt;string&gt;** | The domains of the tenant\&#39;s SSO application | [default to undefined]
**config** | [**TenantConfig**](TenantConfig.md) | Tenant configuration | [optional] [default to undefined]
**frontend_urls** | [**TenantFrontendURLConfig**](TenantFrontendURLConfig.md) | Tenant frontend URLs | [optional] [default to undefined]
**custom_payload** | **{ [key: string]: any; }** |  | [optional] [default to undefined]

## Example

```typescript
import { TenantRetrieveSchema } from './api';

const instance: TenantRetrieveSchema = {
    uid,
    created_at,
    updated_at,
    is_deleted,
    meta_data,
    user_id,
    name,
    is_active,
    domains,
    config,
    frontend_urls,
    custom_payload,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
