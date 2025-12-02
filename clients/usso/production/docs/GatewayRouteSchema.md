# GatewayRouteSchema


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
**slug** | **string** | A URL-friendly slug for the routing keymap, must be unique. | [default to undefined]
**scopes** | **Array&lt;string&gt;** | The scopes required for the plugin. | [default to undefined]
**title** | **string** | A human-readable display name for the routing keymap. | [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**icon** | **string** |  | [optional] [default to undefined]
**upstream** | [**Upstream**](Upstream.md) | The upstream for the service. | [default to undefined]
**front_visible** | **boolean** |  | [optional] [default to true]

## Example

```typescript
import { GatewayRouteSchema } from './api';

const instance: GatewayRouteSchema = {
    uid,
    created_at,
    updated_at,
    is_deleted,
    meta_data,
    user_id,
    tenant_id,
    slug,
    scopes,
    title,
    description,
    icon,
    upstream,
    front_visible,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
