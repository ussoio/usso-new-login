# RegistrationConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_allowed** | **boolean** |  | [optional] [default to true]
**approval_mode** | [**ApprovalMode**](ApprovalMode.md) |  | [optional] [default to undefined]
**allow_self_deactivate** | **boolean** |  | [optional] [default to false]
**invite_only** | **boolean** |  | [optional] [default to false]

## Example

```typescript
import { RegistrationConfig } from './api';

const instance: RegistrationConfig = {
    is_allowed,
    approval_mode,
    allow_self_deactivate,
    invite_only,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
