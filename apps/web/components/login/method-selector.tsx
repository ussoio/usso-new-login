"use client";

import { AuthSecret } from "@/lib/api";
import { Button } from "@workspace/ui/components/button";
import { Field, FieldGroup } from "@workspace/ui/components/field";
import {
    KeyRound,
    Mail,
    Smartphone,
    Link2,
    ExternalLink,
    Shield,
    Fingerprint,
    CheckCircle,
} from "lucide-react";

interface MethodSelectorProps {
    methods: AuthSecret[];
    onSelect: (method: AuthSecret) => void;
    completedMethods: string[];
}

const methodConfig: Record<
    string,
    { label: string; icon: React.ElementType; description: string }
> = {
    [AuthSecret.Password]: {
        label: "رمز عبور",
        icon: KeyRound,
        description: "ورود با رمز عبور",
    },
    [AuthSecret.EmailOtp]: {
        label: "کد ایمیل",
        icon: Mail,
        description: "دریافت کد یکبار مصرف از طریق ایمیل",
    },
    [AuthSecret.PhoneOtp]: {
        label: "کد پیامکی",
        icon: Smartphone,
        description: "دریافت کد یکبار مصرف از طریق پیامک",
    },
    [AuthSecret.MagicLink]: {
        label: "لینک جادویی",
        icon: Link2,
        description: "دریافت لینک ورود از طریق ایمیل",
    },
    [AuthSecret.Oauth]: {
        label: "حساب‌های دیگر",
        icon: ExternalLink,
        description: "ورود با گوگل، اپل یا سایر حساب‌ها",
    },
    [AuthSecret.Totp]: {
        label: "اپلیکیشن احراز هویت",
        icon: Shield,
        description: "کد از اپلیکیشن Google Authenticator یا مشابه",
    },
    [AuthSecret.Webauthn]: {
        label: "کلید امنیتی",
        icon: Fingerprint,
        description: "ورود با اثر انگشت یا کلید USB",
    },
    [AuthSecret.BackupCodes]: {
        label: "کد پشتیبان",
        icon: KeyRound,
        description: "استفاده از کد پشتیبان",
    },
};

export function MethodSelector({
    methods,
    onSelect,
    completedMethods,
}: MethodSelectorProps) {
    if (!methods || methods.length === 0) {
        return (
            <div className="text-muted-foreground text-center">
                روشی برای احراز هویت یافت نشد
            </div>
        );
    }

    return (
        <FieldGroup>
            <div className="space-y-3">
                {methods.map((method) => {
                    const config = methodConfig[method] || {
                        label: method,
                        icon: KeyRound,
                        description: "",
                    };
                    const Icon = config.icon;
                    const isCompleted = completedMethods.includes(method);

                    return (
                        <Field key={method}>
                            <Button
                                type="button"
                                variant="outline"
                                className="h-auto w-full justify-start px-4 py-3"
                                onClick={() => onSelect(method)}
                                disabled={isCompleted}
                            >
                                <div className="flex w-full items-center gap-3">
                                    <div className="bg-muted flex size-10 items-center justify-center rounded-full">
                                        {isCompleted ? (
                                            <CheckCircle className="text-primary size-5" />
                                        ) : (
                                            <Icon className="text-muted-foreground size-5" />
                                        )}
                                    </div>
                                    <div className="flex-1 text-right">
                                        <div className="font-medium">{config.label}</div>
                                        <div className="text-muted-foreground text-xs">
                                            {isCompleted ? "تکمیل شد" : config.description}
                                        </div>
                                    </div>
                                </div>
                            </Button>
                        </Field>
                    );
                })}
            </div>

            {completedMethods.length > 0 && (
                <div className="text-muted-foreground mt-4 text-center text-sm">
                    {completedMethods.length} روش تکمیل شده
                </div>
            )}
        </FieldGroup>
    );
}

