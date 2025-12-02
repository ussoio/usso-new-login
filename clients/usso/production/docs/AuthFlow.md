# AuthFlow

Configuration for a authentication flow.  This model defines a sequence of authentication steps, where each step can have multiple parallel methods. The flow starts with a list of allowed identifiers that can be used to identify the user.  Example: AuthFlow(     allowed_identifiers=[AuthIdentifier.EMAIL, AuthIdentifier.PHONE],     steps=[         LoginStep(             methods=[AuthSecret.PASSWORD],             required_num=1         ),         LoginStep(             methods=[AuthSecret.TOTP, AuthSecret.EMAIL_OTP],             required_num=1         )     ] )

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_identifiers** | [**Array&lt;AuthIdentifier&gt;**](AuthIdentifier.md) | List of allowed identifier types for this flow | [default to undefined]
**steps** | [**Array&lt;AuthStep&gt;**](AuthStep.md) | List of authentication steps in sequence | [optional] [default to undefined]

## Example

```typescript
import { AuthFlow } from './api';

const instance: AuthFlow = {
    allowed_identifiers,
    steps,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
