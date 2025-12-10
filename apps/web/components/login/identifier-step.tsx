"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import { useRef, useState } from "react";
import { useAuthStore } from "@/stores/auth-store";
import { useLogin } from "@/hooks/use-login";
import { AuthIdentifier } from "@/lib/api";
import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";
import { Field, FieldGroup, FieldLabel, FieldDescription } from "@workspace/ui/components/field";
import { Loader2 } from "lucide-react";
import Altcha, { type AltchaRef, type AltchaStateChangeEvent } from "@workspace/ui/components/altcha";

// Regex patterns for identifier detection
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^(\+98|0)?9\d{9}$/; // Iranian phone format

/**
 * Detect the type of identifier (email, phone, or username)
 */
function detectIdentifierType(value: string): AuthIdentifier {
    if (EMAIL_REGEX.test(value)) {
        return AuthIdentifier.Email;
    }
    if (PHONE_REGEX.test(value.replace(/\s/g, ""))) {
        return AuthIdentifier.Phone;
    }
    return AuthIdentifier.Username;
}

const validationSchema = Yup.object({
    identifier: Yup.string().required("این فیلد الزامی است").min(3, "حداقل ۳ کاراکتر وارد کنید"),
});

export function IdentifierStep() {
    const { setIdentifier, error } = useAuthStore();
    const loginMutation = useLogin();

    const altchaRef = useRef<AltchaRef>(null);

    const [captchaVerified, setCaptchaVerified] = useState(false);
    const [captchaError, setCaptchaError] = useState<string | null>(null);

    const handleCaptchaStateChange = (event: AltchaStateChangeEvent) => {
        console.log(event);
        const { state } = event.detail;
        if (state === "verified") {
            setCaptchaVerified(true);
            setCaptchaError(null);
        } else if (state === "error") {
            setCaptchaVerified(false);
            setCaptchaError("احراز هویت ناموفق بود");
        } else if (state === "expired") {
            setCaptchaVerified(false);
            setCaptchaError("کپچا منقضی شد. دوباره تلاش کنید.");
        }
    };

    const formik = useFormik({
        initialValues: {
            identifier: "",
        },
        validationSchema,
        onSubmit: async (values) => {
            // Validate captcha
            if (!captchaVerified || !altchaRef.current?.value) {
                setCaptchaError("لطفاً کپچا را تکمیل کنید");
                return;
            }

            const identifier = values.identifier.trim();
            const identifierType = detectIdentifierType(identifier);

            // Store identifier in state
            setIdentifier(identifier, identifierType);

            // Call login API with identifier (captcha is validated on client)
            await loginMutation.mutateAsync({
                identifier,
                type: identifierType,
            });
        },
    });

    const isLoading = loginMutation.isPending;

    return (
        <form onSubmit={formik.handleSubmit}>
            <FieldGroup>
                <Field>
                    <FieldLabel htmlFor="identifier">ایمیل، شماره موبایل یا نام کاربری</FieldLabel>
                    <Input
                        id="identifier"
                        name="identifier"
                        type="text"
                        placeholder="email@example.com یا 09123456789"
                        value={formik.values.identifier}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        disabled={isLoading}
                        autoComplete="username"
                        autoFocus
                    />
                    {formik.touched.identifier && formik.errors.identifier && (
                        <FieldDescription className="text-destructive">{formik.errors.identifier}</FieldDescription>
                    )}
                </Field>

                <Field>
                    <Altcha
                        ref={altchaRef}
                        onStateChange={handleCaptchaStateChange}
                        challengeUrl={`${process.env.NEXT_PUBLIC_USSO_URL || ""}/api/sso/v1/captcha/challenge`}
                        verifyUrl={`${process.env.NEXT_PUBLIC_USSO_URL || ""}/api/sso/v1/captcha/verify`}
                        credentials="include"
                    />
                    {captchaError && <FieldDescription className="text-destructive">{captchaError}</FieldDescription>}
                </Field>

                {error && <FieldDescription className="text-destructive">{error}</FieldDescription>}

                <Field>
                    <Button type="submit" className="w-full" disabled={isLoading || !captchaVerified}>
                        {isLoading ? (
                            <>
                                <Loader2 className="ml-2 size-4 animate-spin" />
                                در حال بررسی...
                            </>
                        ) : (
                            "ادامه"
                        )}
                    </Button>
                </Field>
            </FieldGroup>
        </form>
    );
}
