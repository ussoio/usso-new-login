import axios from "axios";
import { Configuration, AuthenticationApi, OAuth2OIDCApi } from "@workspace/usso/development";

export const axiosInstance = axios.create({
    withCredentials: true,
});

export const configuration = new Configuration();

// Authentication (login) API
export const authApi = new AuthenticationApi(configuration, configuration.basePath, axiosInstance);

// OAuth2/OIDC API
const oauthApi = new OAuth2OIDCApi(configuration, configuration.basePath, axiosInstance);

export function getConsent(params: { consent: boolean; state?: string }) {
    const { consent, state } = params;
    return oauthApi.getConsentAuthorizeApiSsoV1OauthConsentGet(consent, state);
}

export function postConsent(params: { consent: boolean; state?: string }) {
    const { consent, state } = params;
    return oauthApi.consentAuthorizeApiSsoV1OauthConsentPost(consent, state);
}

export type { LoginRequest, LoginResponse, AuthStep, OTPRequest, MagicLinkRequest } from "@workspace/usso/development";
export { AuthIdentifier, AuthSecret, LoginStatus } from "@workspace/usso/development";
