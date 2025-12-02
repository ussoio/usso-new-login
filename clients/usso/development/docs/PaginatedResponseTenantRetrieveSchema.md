# PaginatedResponseTenantRetrieveSchema


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**heads** | **{ [key: string]: { [key: string]: string; }; }** |  | [optional] [default to undefined]
**items** | [**Array&lt;TenantRetrieveSchema&gt;**](TenantRetrieveSchema.md) |  | [default to undefined]
**total** | **number** |  | [default to undefined]
**offset** | **number** |  | [default to undefined]
**limit** | **number** |  | [default to undefined]

## Example

```typescript
import { PaginatedResponseTenantRetrieveSchema } from './api';

const instance: PaginatedResponseTenantRetrieveSchema = {
    heads,
    items,
    total,
    offset,
    limit,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
