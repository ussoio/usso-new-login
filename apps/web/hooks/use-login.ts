import { useMutation } from "@tanstack/react-query";
import { authApi, type LoginRequest, type LoginResponse } from "@/lib/api";
import { useAuthStore } from "@/stores/auth-store";
import type { AxiosError } from "axios";

interface ApiError {
    detail?: string | { msg: string }[];
}

function getErrorMessage(error: AxiosError<ApiError>): string {
    const detail = error.response?.data?.detail;
    if (typeof detail === "string") {
        return detail;
    }
    if (Array.isArray(detail) && detail.length > 0 && detail[0]) {
        return detail[0].msg;
    }
    return error.message || "An error occurred";
}

/**
 * Hook for the main login mutation
 * Handles both identifier submission and authentication with method/secret
 */
export function useLogin() {
    const { setLoginResponse, setError } = useAuthStore();

    return useMutation<LoginResponse, AxiosError<ApiError>, LoginRequest>({
        mutationFn: async (request: LoginRequest) => {
            const { data } = await authApi.loginApiSsoV1AuthLoginPost(request);
            return data;
        },
        onSuccess: (response) => {
            setLoginResponse(response);
        },
        onError: (error) => {
            setError(getErrorMessage(error));
        },
    });
}

/**
 * Hook for requesting OTP
 */
export function useRequestOtp() {
    const { setError } = useAuthStore();

    return useMutation<
        unknown,
        AxiosError<ApiError>,
        { identifier: string; type?: string; channel_type?: string }
    >({
        mutationFn: async ({ identifier, type, channel_type }) => {
            const { data } = await authApi.requestOtpApiSsoV1AuthRequestOtpPost({
                identifier,
                type: type as any,
                channel_type: channel_type || "sms",
            });
            return data;
        },
        onError: (error) => {
            setError(getErrorMessage(error));
        },
    });
}

/**
 * Hook for requesting magic link
 */
export function useRequestMagicLink() {
    const { setError } = useAuthStore();

    return useMutation<
        unknown,
        AxiosError<ApiError>,
        { identifier: string; type?: string }
    >({
        mutationFn: async ({ identifier, type }) => {
            const { data } =
                await authApi.magicLinkRequestApiSsoV1AuthRequestMagicLinkPost({
                    identifier,
                    type: type as any,
                });
            return data;
        },
        onError: (error) => {
            setError(getErrorMessage(error));
        },
    });
}

/**
 * Hook for logout
 */
export function useLogout() {
    const reset = useAuthStore((state) => state.reset);

    return useMutation({
        mutationFn: async () => {
            await authApi.logoutApiSsoV1AuthLogoutGet();
        },
        onSuccess: () => {
            reset();
        },
    });
}

/**
 * Hook for refreshing tokens
 */
export function useRefreshToken() {
    return useMutation({
        mutationFn: async () => {
            const { data } = await authApi.refreshCookieApiSsoV1AuthRefreshGet();
            return data;
        },
    });
}

