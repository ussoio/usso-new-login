# WebhookConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **string** | The webhook endpoint URL | [default to undefined]
**headers** | **{ [key: string]: string; }** |  | [optional] [default to undefined]
**events** | **Array&lt;string&gt;** | List of events that trigger this webhook | [optional] [default to undefined]

## Example

```typescript
import { WebhookConfig } from './api';

const instance: WebhookConfig = {
    url,
    headers,
    events,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
