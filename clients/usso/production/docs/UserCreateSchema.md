# UserCreateSchema


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [optional] [default to undefined]
**identifier_type** | [**AuthIdentifier**](AuthIdentifier.md) |  | [optional] [default to undefined]
**identifier** | **string** | Identifier address | [default to undefined]
**roles** | **Array&lt;string&gt;** |  | [optional] [default to undefined]

## Example

```typescript
import { UserCreateSchema } from './api';

const instance: UserCreateSchema = {
    name,
    identifier_type,
    identifier,
    roles,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
