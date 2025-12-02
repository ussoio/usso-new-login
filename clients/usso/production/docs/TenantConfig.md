# TenantConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**branding** | [**BrandingModel**](BrandingModel.md) |  | [optional] [default to undefined]
**legal** | [**LegalModel**](LegalModel.md) |  | [optional] [default to undefined]
**default_redirect_url** | **string** |  | [optional] [default to '/']
**auth** | [**AuthenticationConfig**](AuthenticationConfig.md) |  | [optional] [default to undefined]
**token** | [**TokenConfig**](TokenConfig.md) |  | [optional] [default to undefined]
**integration** | [**IntegrationConfig**](IntegrationConfig.md) |  | [optional] [default to undefined]
**image_captcha_tries** | **number** | Number of image captcha tries | [optional] [default to 2]
**workspace** | [**WorkspaceConfig**](WorkspaceConfig.md) |  | [optional] [default to undefined]
**agents** | [**AgentConfig**](AgentConfig.md) |  | [optional] [default to undefined]
**templates** | [**{ [key: string]: MessageTemplate; }**](MessageTemplate.md) |  | [optional] [default to undefined]
**registration** | [**RegistrationConfig**](RegistrationConfig.md) |  | [optional] [default to undefined]

## Example

```typescript
import { TenantConfig } from './api';

const instance: TenantConfig = {
    branding,
    legal,
    default_redirect_url,
    auth,
    token,
    integration,
    image_captcha_tries,
    workspace,
    agents,
    templates,
    registration,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
