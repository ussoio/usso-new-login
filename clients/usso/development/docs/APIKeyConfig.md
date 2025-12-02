# APIKeyConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **boolean** | Whether API key authentication is enabled | [optional] [default to true]
**prefix** | **string** | Prefix for generated API keys | [optional] [default to 'uss_']
**length** | **number** | Length of generated API keys | [optional] [default to 32]

## Example

```typescript
import { APIKeyConfig } from './api';

const instance: APIKeyConfig = {
    enabled,
    prefix,
    length,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
