# UserIdentifierCreateSchema

Schema for creating new user identifiers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**AuthIdentifier**](AuthIdentifier.md) |  | [default to undefined]
**identifier** | **string** |  | [default to undefined]
**is_primary** | **boolean** |  | [optional] [default to false]

## Example

```typescript
import { UserIdentifierCreateSchema } from './api';

const instance: UserIdentifierCreateSchema = {
    type,
    identifier,
    is_primary,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
