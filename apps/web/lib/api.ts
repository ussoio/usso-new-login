import axios from "axios";
import { Configuration, AuthenticationApi } from "@workspace/usso/development";

export const axiosInstance = axios.create({
    withCredentials: true,
});

const configuration = new Configuration();
export const authApi = new AuthenticationApi(configuration, configuration.basePath, axiosInstance);

export type { LoginRequest, LoginResponse, AuthStep, OTPRequest, MagicLinkRequest } from "@workspace/usso/development";
export { AuthIdentifier, AuthSecret, LoginStatus } from "@workspace/usso/development";
