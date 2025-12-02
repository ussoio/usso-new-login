# OIDCConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **boolean** | Whether OIDC functionality is enabled | [optional] [default to false]
**issuer_url** | **string** | OIDC issuer URL | [default to undefined]
**jwks_uri** | **string** | OIDC JWKS URI | [default to undefined]

## Example

```typescript
import { OIDCConfig } from './api';

const instance: OIDCConfig = {
    enabled,
    issuer_url,
    jwks_uri,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
