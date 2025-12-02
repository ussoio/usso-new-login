# AuthStep

A single step in the login flow that can have multiple parallel authentication methods.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**methods** | [**Array&lt;AuthSecret&gt;**](AuthSecret.md) | List of authentication methods that can be used in this step | [default to undefined]
**required_num** | **number** | Number of methods that must be passed in this step | [optional] [default to 1]

## Example

```typescript
import { AuthStep } from './api';

const instance: AuthStep = {
    methods,
    required_num,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
