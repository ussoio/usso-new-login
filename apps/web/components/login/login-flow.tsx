"use client";

import { useAuthStore } from "@/stores/auth-store";
import { IdentifierStep } from "./identifier-step";
import { MethodSelector } from "./method-selector";
import { PasswordForm } from "./password-form";
import { OtpForm } from "./otp-form";
import { MagicLinkForm } from "./magic-link-form";
import { OAuthButtons } from "./oauth-buttons";
import { LoginComplete } from "./login-complete";
import { AuthSecret } from "@/lib/api";
import { cn } from "@workspace/ui/lib/utils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@workspace/ui/components/card";
import { Button } from "@workspace/ui/components/button";
import { ArrowRight } from "lucide-react";

interface LoginFlowProps {
    className?: string;
}

export function LoginFlow({ className }: LoginFlowProps) {
    const {
        currentStep,
        selectedMethod,
        availableMethods,
        completedMethods,
        error,
        setSelectedMethod,
        goToStep,
        reset,
    } = useAuthStore();

    // Render the appropriate step
    const renderStep = () => {
        switch (currentStep) {
            case "identifier":
                return <IdentifierStep />;

            case "methods":
                // If a method is selected, show the corresponding form
                if (selectedMethod) {
                    return renderAuthForm(selectedMethod);
                }
                // Otherwise, show method selection
                return (
                    <MethodSelector
                        methods={availableMethods}
                        onSelect={setSelectedMethod}
                        completedMethods={completedMethods}
                    />
                );

            case "completed":
                return <LoginComplete />;

            case "error":
                return (
                    <div className="space-y-4 text-center">
                        <p className="text-destructive">{error || "خطایی رخ داد"}</p>
                        <Button onClick={reset} variant="outline">
                            تلاش مجدد
                        </Button>
                    </div>
                );

            default:
                return <IdentifierStep />;
        }
    };

    const renderAuthForm = (method: AuthSecret) => {
        switch (method) {
            case AuthSecret.Password:
                return <PasswordForm onBack={() => setSelectedMethod(null as any)} />;

            case AuthSecret.EmailOtp:
            case AuthSecret.PhoneOtp:
                return <OtpForm method={method} onBack={() => setSelectedMethod(null as any)} />;

            case AuthSecret.MagicLink:
                return <MagicLinkForm onBack={() => setSelectedMethod(null as any)} />;

            case AuthSecret.Oauth:
                return <OAuthButtons onBack={() => setSelectedMethod(null as any)} />;

            default:
                return (
                    <div className="text-center">
                        <p className="text-muted-foreground">این روش احراز هویت هنوز پیاده‌سازی نشده است</p>
                        <Button variant="ghost" onClick={() => setSelectedMethod(null as any)} className="mt-4">
                            <ArrowRight className="ml-2 size-4" />
                            بازگشت
                        </Button>
                    </div>
                );
        }
    };

    const getStepTitle = () => {
        switch (currentStep) {
            case "identifier":
                return "ورود به حساب کاربری";
            case "methods":
                if (selectedMethod) {
                    switch (selectedMethod) {
                        case AuthSecret.Password:
                            return "رمز عبور";
                        case AuthSecret.EmailOtp:
                        case AuthSecret.PhoneOtp:
                            return "کد تأیید";
                        case AuthSecret.MagicLink:
                            return "لینک جادویی";
                        case AuthSecret.Oauth:
                            return "ورود با حساب دیگر";
                        default:
                            return "احراز هویت";
                    }
                }
                return "روش ورود را انتخاب کنید";
            case "completed":
                return "ورود موفق";
            case "error":
                return "خطا";
            default:
                return "ورود";
        }
    };

    const getStepDescription = () => {
        switch (currentStep) {
            case "identifier":
                return "ایمیل، شماره موبایل یا نام کاربری خود را وارد کنید";
            case "methods":
                if (completedMethods.length > 0) {
                    return `${completedMethods.length} مرحله تکمیل شد`;
                }
                return "یکی از روش‌های زیر را برای ورود انتخاب کنید";
            case "completed":
                return "به حساب کاربری خود خوش آمدید";
            default:
                return "";
        }
    };

    return (
        <div className={cn("flex flex-col gap-6", className)}>
            <Card>
                <CardHeader className="text-center">
                    <CardTitle className="text-xl">{getStepTitle()}</CardTitle>
                    <CardDescription>{getStepDescription()}</CardDescription>
                </CardHeader>
                <CardContent>{renderStep()}</CardContent>
            </Card>
        </div>
    );
}
