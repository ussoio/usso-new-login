"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import { useAuthStore } from "@/stores/auth-store";
import { useLogin } from "@/hooks/use-login";
import { AuthSecret } from "@/lib/api";
import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";
import {
    Field,
    FieldGroup,
    FieldLabel,
    FieldDescription,
} from "@workspace/ui/components/field";
import { Loader2, ArrowRight, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

interface PasswordFormProps {
    onBack: () => void;
}

const validationSchema = Yup.object({
    password: Yup.string()
        .required("رمز عبور الزامی است")
        .min(8, "رمز عبور باید حداقل ۸ کاراکتر باشد"),
});

export function PasswordForm({ onBack }: PasswordFormProps) {
    const { identifier, identifierType, error } = useAuthStore();
    const loginMutation = useLogin();
    const [showPassword, setShowPassword] = useState(false);

    const formik = useFormik({
        initialValues: {
            password: "",
        },
        validationSchema,
        onSubmit: async (values) => {
            if (!identifier || !identifierType) return;

            await loginMutation.mutateAsync({
                identifier,
                type: identifierType,
                method: AuthSecret.Password,
                secret: values.password,
            });
        },
    });

    const isLoading = loginMutation.isPending;

    return (
        <form onSubmit={formik.handleSubmit}>
            <FieldGroup>
                <Field>
                    <div className="flex items-center justify-between">
                        <FieldLabel htmlFor="password">رمز عبور</FieldLabel>
                        <a
                            href="/forgot-password"
                            className="text-primary text-sm hover:underline"
                        >
                            فراموشی رمز عبور
                        </a>
                    </div>
                    <div className="relative">
                        <Input
                            id="password"
                            name="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="رمز عبور خود را وارد کنید"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            disabled={isLoading}
                            autoComplete="current-password"
                            autoFocus
                            className="pl-10"
                        />
                        <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="absolute top-1/2 left-1 -translate-y-1/2"
                            onClick={() => setShowPassword(!showPassword)}
                            tabIndex={-1}
                        >
                            {showPassword ? (
                                <EyeOff className="size-4" />
                            ) : (
                                <Eye className="size-4" />
                            )}
                        </Button>
                    </div>
                    {formik.touched.password && formik.errors.password && (
                        <FieldDescription className="text-destructive">
                            {formik.errors.password}
                        </FieldDescription>
                    )}
                    {error && (
                        <FieldDescription className="text-destructive">
                            {error}
                        </FieldDescription>
                    )}
                </Field>

                <Field>
                    <Button type="submit" className="w-full" disabled={isLoading}>
                        {isLoading ? (
                            <>
                                <Loader2 className="ml-2 size-4 animate-spin" />
                                در حال بررسی...
                            </>
                        ) : (
                            "ورود"
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

