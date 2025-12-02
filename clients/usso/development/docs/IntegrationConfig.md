# IntegrationConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**oauth_providers** | [**{ [key: string]: OAuthProviderConfig; }**](OAuthProviderConfig.md) | Dictionary of OAuth2 provider configurations, keyed by provider name | [optional] [default to undefined]
**oidc** | [**OIDCConfig**](OIDCConfig.md) |  | [optional] [default to undefined]
**api_key** | [**APIKeyConfig**](APIKeyConfig.md) |  | [optional] [default to undefined]
**service_account** | [**ServiceAccountConfig**](ServiceAccountConfig.md) |  | [optional] [default to undefined]
**webhooks** | [**Array&lt;WebhookConfig&gt;**](WebhookConfig.md) | List of webhook configurations for this tenant | [optional] [default to undefined]

## Example

```typescript
import { IntegrationConfig } from './api';

const instance: IntegrationConfig = {
    oauth_providers,
    oidc,
    api_key,
    service_account,
    webhooks,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
