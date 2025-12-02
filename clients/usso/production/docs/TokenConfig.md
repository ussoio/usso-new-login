# TokenConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_timeout** | **number** |  | [optional] [default to 600]
**refresh_timeout** | **number** |  | [optional] [default to 2592000]
**refresh_token_rotation** | **boolean** |  | [optional] [default to false]
**refresh_sliding_timeout** | **number** |  | [optional] [default to 604800]
**refresh_token_reuse_grace_period** | **number** |  | [optional] [default to 60]
**temporary_token_timeout** | **number** |  | [optional] [default to 600]
**secure_action_timeout** | **number** |  | [optional] [default to 60]
**secure_action_max_uses** | **number** |  | [optional] [default to 1]
**secure_session_timeout** | **number** |  | [optional] [default to 600]

## Example

```typescript
import { TokenConfig } from './api';

const instance: TokenConfig = {
    access_timeout,
    refresh_timeout,
    refresh_token_rotation,
    refresh_sliding_timeout,
    refresh_token_reuse_grace_period,
    temporary_token_timeout,
    secure_action_timeout,
    secure_action_max_uses,
    secure_session_timeout,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
