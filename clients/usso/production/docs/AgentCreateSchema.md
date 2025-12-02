# AgentCreateSchema


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**scopes** | **Array&lt;string&gt;** |  | [default to undefined]
**alg** | [**Algorithm**](Algorithm.md) |  | [optional] [default to undefined]
**verify_key** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { AgentCreateSchema } from './api';

const instance: AgentCreateSchema = {
    name,
    description,
    scopes,
    alg,
    verify_key,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
