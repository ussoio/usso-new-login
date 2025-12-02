# TenantCreateSchema


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Name of the tenant/organization | [default to undefined]
**domains** | **Array&lt;string&gt;** | The domains of the tenant\&#39;s SSO application | [default to undefined]
**algorithm** | [**Algorithm**](Algorithm.md) |  | [optional] [default to undefined]

## Example

```typescript
import { TenantCreateSchema } from './api';

const instance: TenantCreateSchema = {
    name,
    domains,
    algorithm,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
