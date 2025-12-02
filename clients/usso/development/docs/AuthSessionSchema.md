# AuthSessionSchema

Represents an authentication session for a user or service.  Stores session metadata, authentication flow used, and expiration logic. Used for tracking active sessions, auditing, and enforcing security policies.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uid** | **string** | Unique identifier for the entity | [optional] [default to undefined]
**created_at** | **string** | Date and time the entity was created | [optional] [default to undefined]
**updated_at** | **string** | Date and time the entity was last updated | [optional] [default to undefined]
**is_deleted** | **boolean** | Whether the entity has been deleted | [optional] [default to false]
**meta_data** | **{ [key: string]: any; }** |  | [optional] [default to undefined]
**user_id** | **string** |  | [default to undefined]
**tenant_id** | **string** |  | [default to undefined]
**workspace_id** | **string** |  | [optional] [default to undefined]
**aud** | **string** |  | [optional] [default to undefined]
**scopes** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**amr** | **Array&lt;string&gt;** | Authentication methods used to create the session | [optional] [default to undefined]
**last_used_at** | **string** | Timestamp of the last session refresh (for sliding expiration) | [optional] [default to undefined]
**max_age_minutes** | **number** |  | [optional] [default to undefined]
**user_agent** | **string** | User agent string of the client initiating the session | [default to undefined]
**ip** | **string** | IP address from which the session was initiated | [default to undefined]
**location** | **string** |  | [optional] [default to undefined]
**session_type** | [**SessionType**](SessionType.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AuthSessionSchema } from './api';

const instance: AuthSessionSchema = {
    uid,
    created_at,
    updated_at,
    is_deleted,
    meta_data,
    user_id,
    tenant_id,
    workspace_id,
    aud,
    scopes,
    amr,
    last_used_at,
    max_age_minutes,
    user_agent,
    ip,
    location,
    session_type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
