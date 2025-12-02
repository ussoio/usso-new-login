# GatewayRouteCreateSchema

Schema for creating a new routing keymap entry.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**slug** | **string** | A URL-friendly slug for the routing keymap, must be unique. | [default to undefined]
**scopes** | **Array&lt;string&gt;** | The scopes required for the plugin. | [default to undefined]
**title** | **string** | A human-readable display name for the routing keymap. | [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**icon** | **string** |  | [optional] [default to undefined]
**upstream** | [**Upstream**](Upstream.md) | The upstream for the service. | [default to undefined]
**front_visible** | **boolean** |  | [optional] [default to true]

## Example

```typescript
import { GatewayRouteCreateSchema } from './api';

const instance: GatewayRouteCreateSchema = {
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
