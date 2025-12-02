import axios from "axios";
import { Configuration, AuthenticationApi } from "@workspace/usso/development";

// Create axios instance with credentials support for cookies
const axiosInstance = axios.create({
    withCredentials: true,
});

// Configuration with base path from environment variable
const configuration = new Configuration();

// Export the authentication API instance
export const authApi = new AuthenticationApi(configuration, configuration.basePath, axiosInstance);

// Export axios instance for custom requests if needed
export { axiosInstance };

// Re-export types that will be used throughout the app
export type { LoginRequest, LoginResponse, AuthStep, OTPRequest, MagicLinkRequest } from "@workspace/usso/production";

export { AuthIdentifier, AuthSecret, LoginStatus } from "@workspace/usso/production";
