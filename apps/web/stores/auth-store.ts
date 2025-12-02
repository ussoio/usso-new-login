import { create } from "zustand";
import type { LoginResponse, AuthStep } from "@/lib/api";
import { AuthIdentifier, AuthSecret, LoginStatus } from "@/lib/api";

export type FlowStep = "identifier" | "methods" | "completed" | "error";

interface AuthState {
    // Flow state
    currentStep: FlowStep;
    identifier: string | null;
    identifierType: AuthIdentifier | null;
    selectedMethod: AuthSecret | null;

    // API response state
    loginResponse: LoginResponse | null;
    availableMethods: AuthSecret[];
    completedMethods: string[]; // amr array
    requiredNum: number;
    isTemporaryToken: boolean;

    // Tokens
    tokens: { [key: string]: string } | null;

    // Error state
    error: string | null;

    // Actions
    setIdentifier: (identifier: string, type: AuthIdentifier) => void;
    setSelectedMethod: (method: AuthSecret) => void;
    setLoginResponse: (response: LoginResponse) => void;
    setError: (error: string | null) => void;
    goToStep: (step: FlowStep) => void;
    reset: () => void;
}

const initialState = {
    currentStep: "identifier" as FlowStep,
    identifier: null,
    identifierType: null,
    selectedMethod: null,
    loginResponse: null,
    availableMethods: [],
    completedMethods: [],
    requiredNum: 0,
    isTemporaryToken: false,
    tokens: null,
    error: null,
};

export const useAuthStore = create<AuthState>((set, get) => ({
    ...initialState,

    setIdentifier: (identifier: string, type: AuthIdentifier) => {
        set({
            identifier,
            identifierType: type,
            error: null,
        });
    },

    setSelectedMethod: (method: AuthSecret) => {
        set({
            selectedMethod: method,
            error: null,
        });
    },

    setLoginResponse: (response: LoginResponse) => {
        const isCompleted = response.status === LoginStatus.Completed;
        const nextStep = response.next_step;
        const availableMethods = (nextStep?.methods as AuthSecret[]) || [];
        const requiredNum = nextStep?.required_num ?? 0;
        const isTemporaryToken = response.token_type === "temporary";

        set({
            loginResponse: response,
            availableMethods,
            completedMethods: response.amr || [],
            requiredNum,
            isTemporaryToken,
            tokens: isCompleted ? response.tokens : null,
            currentStep: isCompleted ? "completed" : availableMethods.length > 0 ? "methods" : "identifier",
            selectedMethod: null, // Reset selected method after each successful auth
            error: null,
        });

        // Handle special statuses
        if (response.status === LoginStatus.Failed) {
            set({ error: "Authentication failed", currentStep: "error" });
        }
    },

    setError: (error: string | null) => {
        set({ error });
    },

    goToStep: (step: FlowStep) => {
        set({ currentStep: step, error: null });
    },

    reset: () => {
        set(initialState);
    },
}));

// Selectors for common derived state
export const selectIsAuthenticated = (state: AuthState) => state.currentStep === "completed" && state.tokens !== null;

export const selectNeedsMoreAuth = (state: AuthState) => state.requiredNum > 0 && state.isTemporaryToken;

export const selectCanGoBack = (state: AuthState) =>
    state.currentStep === "methods" && state.completedMethods.length === 0;
