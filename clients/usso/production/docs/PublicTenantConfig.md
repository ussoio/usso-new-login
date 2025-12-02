# PublicTenantConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**branding** | [**BrandingModel**](BrandingModel.md) |  | [optional] [default to undefined]
**legal** | [**LegalModel**](LegalModel.md) |  | [optional] [default to undefined]
**default_redirect_url** | **string** |  | [optional] [default to '/']
**auth** | [**AuthenticationConfig**](AuthenticationConfig.md) |  | [optional] [default to undefined]
**integration** | **Array&lt;string&gt;** | List of OAuth2 provider names | [optional] [default to undefined]
**workspace** | [**WorkspaceConfig**](WorkspaceConfig.md) |  | [optional] [default to undefined]
**registration** | [**RegistrationConfig**](RegistrationConfig.md) |  | [optional] [default to undefined]

## Example

```typescript
import { PublicTenantConfig } from './api';

const instance: PublicTenantConfig = {
    branding,
    legal,
    default_redirect_url,
    auth,
    integration,
    workspace,
    registration,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
