"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import { useAuthStore } from "@/stores/auth-store";
import { useLogin, useRequestOtp } from "@/hooks/use-login";
import { AuthSecret } from "@/lib/api";
import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";
import {
    Field,
    FieldGroup,
    FieldLabel,
    FieldDescription,
} from "@workspace/ui/components/field";
import { Loader2, ArrowRight, RefreshCw } from "lucide-react";
import { useEffect, useState } from "react";

interface OtpFormProps {
    method: typeof AuthSecret.EmailOtp | typeof AuthSecret.PhoneOtp;
    onBack: () => void;
}

const OTP_LENGTH = 6;
const RESEND_DELAY = 60; // seconds

const validationSchema = Yup.object({
    otp: Yup.string()
        .required("کد تأیید الزامی است")
        .matches(/^\d+$/, "فقط اعداد مجاز است")
        .length(OTP_LENGTH, `کد باید ${OTP_LENGTH} رقم باشد`),
});

export function OtpForm({ method, onBack }: OtpFormProps) {
    const { identifier, identifierType, error } = useAuthStore();
    const loginMutation = useLogin();
    const requestOtpMutation = useRequestOtp();
    const [countdown, setCountdown] = useState(0);
    const [otpSent, setOtpSent] = useState(false);

    // Request OTP on mount
    useEffect(() => {
        if (identifier && !otpSent) {
            requestOtp();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Countdown timer
    useEffect(() => {
        if (countdown > 0) {
            const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [countdown]);

    const requestOtp = async () => {
        if (!identifier) return;

        const channelType = method === AuthSecret.EmailOtp ? "email" : "sms";

        await requestOtpMutation.mutateAsync({
            identifier,
            type: identifierType || undefined,
            channel_type: channelType,
        });

        setOtpSent(true);
        setCountdown(RESEND_DELAY);
    };

    const formik = useFormik({
        initialValues: {
            otp: "",
        },
        validationSchema,
        onSubmit: async (values) => {
            if (!identifier || !identifierType) return;

            await loginMutation.mutateAsync({
                identifier,
                type: identifierType,
                method,
                secret: values.otp,
            });
        },
    });

    const isLoading = loginMutation.isPending;
    const isRequestingOtp = requestOtpMutation.isPending;

    const methodLabel = method === AuthSecret.EmailOtp ? "ایمیل" : "پیامک";

    return (
        <form onSubmit={formik.handleSubmit}>
            <FieldGroup>
                <Field>
                    <FieldLabel htmlFor="otp">کد تأیید</FieldLabel>
                    <FieldDescription>
                        کد {OTP_LENGTH} رقمی ارسال شده به {methodLabel} را وارد کنید
                    </FieldDescription>
                    <Input
                        id="otp"
                        name="otp"
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        placeholder="------"
                        value={formik.values.otp}
                        onChange={(e) => {
                            const value = e.target.value.replace(/\D/g, "").slice(0, OTP_LENGTH);
                            formik.setFieldValue("otp", value);
                        }}
                        onBlur={formik.handleBlur}
                        disabled={isLoading}
                        autoComplete="one-time-code"
                        autoFocus
                        className="text-center text-lg tracking-widest"
                        maxLength={OTP_LENGTH}
                    />
                    {formik.touched.otp && formik.errors.otp && (
                        <FieldDescription className="text-destructive">
                            {formik.errors.otp}
                        </FieldDescription>
                    )}
                    {error && (
                        <FieldDescription className="text-destructive">
                            {error}
                        </FieldDescription>
                    )}
                </Field>

                <Field>
                    <Button
                        type="button"
                        variant="ghost"
                        className="w-full"
                        onClick={requestOtp}
                        disabled={countdown > 0 || isRequestingOtp}
                    >
                        {isRequestingOtp ? (
                            <>
                                <Loader2 className="ml-2 size-4 animate-spin" />
                                در حال ارسال...
                            </>
                        ) : countdown > 0 ? (
                            `ارسال مجدد (${countdown} ثانیه)`
                        ) : (
                            <>
                                <RefreshCw className="ml-2 size-4" />
                                ارسال مجدد کد
                            </>
                        )}
                    </Button>
                </Field>

                <Field>
                    <Button type="submit" className="w-full" disabled={isLoading}>
                        {isLoading ? (
                            <>
                                <Loader2 className="ml-2 size-4 animate-spin" />
                                در حال بررسی...
                            </>
                        ) : (
                            "تأیید"
                        )}
                    </Button>
                </Field>

                <Field>
                    <Button
                        type="button"
                        variant="ghost"
                        className="w-full"
                        onClick={onBack}
                        disabled={isLoading}
                    >
                        <ArrowRight className="ml-2 size-4" />
                        انتخاب روش دیگر
                    </Button>
                </Field>
            </FieldGroup>
        </form>
    );
}

