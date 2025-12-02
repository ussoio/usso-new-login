# CredentialCreateSchema

Schema for creating new credentials.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**method** | [**AuthSecret**](AuthSecret.md) |  | [default to undefined]
**secret** | **string** |  | [default to undefined]
**expires_at** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { CredentialCreateSchema } from './api';

const instance: CredentialCreateSchema = {
    method,
    secret,
    expires_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
