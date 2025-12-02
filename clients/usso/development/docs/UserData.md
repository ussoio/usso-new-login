# UserData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**iss** | **string** |  | [optional] [default to undefined]
**sub** | **string** |  | [optional] [default to undefined]
**aud** | **string** |  | [optional] [default to undefined]
**iat** | **number** |  | [optional] [default to undefined]
**nbf** | **number** |  | [optional] [default to undefined]
**exp** | **number** |  | [optional] [default to undefined]
**jti** | **string** |  | [optional] [default to undefined]
**token_type** | [**UssoUserTokenType**](UssoUserTokenType.md) |  | [optional] [default to undefined]
**session_id** | **string** |  | [optional] [default to undefined]
**tenant_id** | **string** |  | [optional] [default to undefined]
**workspace_id** | **string** |  | [optional] [default to undefined]
**roles** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**scopes** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**acr** | **string** |  | [optional] [default to undefined]
**amr** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**signing_level** | **string** |  | [optional] [default to undefined]
**claims** | **{ [key: string]: any; }** |  | [optional] [default to undefined]

## Example

```typescript
import { UserData } from './api';

const instance: UserData = {
    iss,
    sub,
    aud,
    iat,
    nbf,
    exp,
    jti,
    token_type,
    session_id,
    tenant_id,
    workspace_id,
    roles,
    scopes,
    acr,
    amr,
    signing_level,
    claims,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
