# OAuthProviderConfig

Configuration for OAuth provider settings.  Attributes:     name: The name of the OAuth provider (e.g., \'google\', \'github\')     client_id: The OAuth client ID provided by the OAuth provider     client_secret: The OAuth client secret provided by the OAuth provider     redirect_uri: The callback URL where the OAuth                   provider will redirect after authentication     scopes: List of OAuth scopes to request from the provider

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The name of the OAuth provider (e.g., \&#39;google\&#39;, \&#39;github\&#39;) | [default to undefined]
**client_id** | **string** | The OAuth client ID provided by the OAuth provider | [default to undefined]
**client_secret** | **string** | The OAuth client secret provided by the OAuth provider | [default to undefined]
**redirect_uri** | **string** |  | [optional] [default to undefined]
**scopes** | **Array&lt;string&gt;** | List of OAuth scopes to request from the provider | [optional] [default to undefined]

## Example

```typescript
import { OAuthProviderConfig } from './api';

const instance: OAuthProviderConfig = {
    name,
    client_id,
    client_secret,
    redirect_uri,
    scopes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
