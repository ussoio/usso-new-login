# UserInfoResponseSchema

OpenID Connect UserInfo Response schema.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sub** | **string** | Subject identifier | [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**given_name** | **string** |  | [optional] [default to undefined]
**family_name** | **string** |  | [optional] [default to undefined]
**middle_name** | **string** |  | [optional] [default to undefined]
**nickname** | **string** |  | [optional] [default to undefined]
**preferred_username** | **string** |  | [optional] [default to undefined]
**profile** | **string** |  | [optional] [default to undefined]
**picture** | **string** |  | [optional] [default to undefined]
**website** | **string** |  | [optional] [default to undefined]
**email** | **string** |  | [optional] [default to undefined]
**email_verified** | **boolean** |  | [optional] [default to undefined]
**gender** | **string** |  | [optional] [default to undefined]
**birthdate** | **string** |  | [optional] [default to undefined]
**zoneinfo** | **string** |  | [optional] [default to undefined]
**locale** | **string** |  | [optional] [default to undefined]
**phone_number** | **string** |  | [optional] [default to undefined]
**phone_number_verified** | **boolean** |  | [optional] [default to undefined]
**address** | **{ [key: string]: any; }** |  | [optional] [default to undefined]
**updated_at** | **number** |  | [optional] [default to undefined]

## Example

```typescript
import { UserInfoResponseSchema } from './api';

const instance: UserInfoResponseSchema = {
    sub,
    name,
    given_name,
    family_name,
    middle_name,
    nickname,
    preferred_username,
    profile,
    picture,
    website,
    email,
    email_verified,
    gender,
    birthdate,
    zoneinfo,
    locale,
    phone_number,
    phone_number_verified,
    address,
    updated_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
