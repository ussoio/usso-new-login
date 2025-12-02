# RefreshResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | [**LoginStatus**](LoginStatus.md) |  | [optional] [default to undefined]
**tokens** | **{ [key: string]: string; }** |  | [optional] [default to undefined]
**expires_in** | **number** |  | [optional] [default to undefined]

## Example

```typescript
import { RefreshResponse } from './api';

const instance: RefreshResponse = {
    status,
    tokens,
    expires_in,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
