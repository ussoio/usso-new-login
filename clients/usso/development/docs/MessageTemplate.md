# MessageTemplate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Name of the template | [optional] [default to 'message_template']
**template_type** | [**TemplateType**](TemplateType.md) |  | [optional] [default to undefined]
**channel** | [**MessageChannelType**](MessageChannelType.md) |  | [optional] [default to undefined]
**source_type** | [**TemplateSourceType**](TemplateSourceType.md) |  | [optional] [default to undefined]
**subject** | **string** |  | [optional] [default to undefined]
**path** | **string** |  | [optional] [default to undefined]
**url** | **string** |  | [optional] [default to undefined]
**inline_body** | **string** |  | [optional] [default to undefined]
**remote_template_id** | **string** |  | [optional] [default to undefined]
**variables** | **Array&lt;string&gt;** |  | [optional] [default to undefined]

## Example

```typescript
import { MessageTemplate } from './api';

const instance: MessageTemplate = {
    name,
    template_type,
    channel,
    source_type,
    subject,
    path,
    url,
    inline_body,
    remote_template_id,
    variables,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
