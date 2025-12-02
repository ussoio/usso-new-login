# PaginatedResponseAuthSessionSchema


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**heads** | **{ [key: string]: { [key: string]: string; }; }** |  | [optional] [default to undefined]
**items** | [**Array&lt;AuthSessionSchema&gt;**](AuthSessionSchema.md) |  | [default to undefined]
**total** | **number** |  | [default to undefined]
**offset** | **number** |  | [default to undefined]
**limit** | **number** |  | [default to undefined]

## Example

```typescript
import { PaginatedResponseAuthSessionSchema } from './api';

const instance: PaginatedResponseAuthSessionSchema = {
    heads,
    items,
    total,
    offset,
    limit,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
