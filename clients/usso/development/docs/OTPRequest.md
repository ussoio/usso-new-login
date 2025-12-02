# OTPRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**AuthIdentifier**](AuthIdentifier.md) |  | [optional] [default to undefined]
**identifier** | **string** | Identifier value (email, phone, username, etc.) | [default to undefined]
**channel_type** | **string** | Channel type: sms, email, bale, etc | [optional] [default to 'sms']

## Example

```typescript
import { OTPRequest } from './api';

const instance: OTPRequest = {
    type,
    identifier,
    channel_type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
