"use client";

import { useAuthStore } from "@/stores/auth-store";
import { useRequestMagicLink } from "@/hooks/use-login";
import { Button } from "@workspace/ui/components/button";
import { Field, FieldGroup, FieldDescription } from "@workspace/ui/components/field";
import { Loader2, ArrowRight, Mail, CheckCircle } from "lucide-react";
import { useState } from "react";

interface MagicLinkFormProps {
    onBack: () => void;
}

export function MagicLinkForm({ onBack }: MagicLinkFormProps) {
    const { identifier, identifierType, error } = useAuthStore();
    const requestMagicLinkMutation = useRequestMagicLink();
    const [sent, setSent] = useState(false);

    const handleSendMagicLink = async () => {
        if (!identifier) return;

        await requestMagicLinkMutation.mutateAsync({
            identifier,
            type: identifierType || undefined,
        });

        setSent(true);
    };

    const isLoading = requestMagicLinkMutation.isPending;

    if (sent) {
        return (
            <FieldGroup>
                <div className="flex flex-col items-center gap-4 py-6 text-center">
                    <div className="bg-primary/10 flex size-16 items-center justify-center rounded-full">
                        <CheckCircle className="text-primary size-8" />
                    </div>
                    <div>
                        <h3 className="font-medium">لینک ورود ارسال شد</h3>
                        <p className="text-muted-foreground mt-2 text-sm">
                            لینک ورود به {identifier} ارسال شد.
                            <br />
                            لطفاً ایمیل خود را بررسی کنید.
                        </p>
                    </div>
                </div>

                <Field>
                    <Button
                        type="button"
                        variant="outline"
                        className="w-full"
                        onClick={() => setSent(false)}
                    >
                        <Mail className="ml-2 size-4" />
                        ارسال مجدد
                    </Button>
                </Field>

                <Field>
                    <Button
                        type="button"
                        variant="ghost"
                        className="w-full"
                        onClick={onBack}
                    >
                        <ArrowRight className="ml-2 size-4" />
                        انتخاب روش دیگر
                    </Button>
                </Field>
            </FieldGroup>
        );
    }

    return (
        <FieldGroup>
            <div className="flex flex-col items-center gap-4 py-6 text-center">
                <div className="bg-muted flex size-16 items-center justify-center rounded-full">
                    <Mail className="text-muted-foreground size-8" />
                </div>
                <div>
                    <h3 className="font-medium">ورود با لینک جادویی</h3>
                    <p className="text-muted-foreground mt-2 text-sm">
                        یک لینک ورود به {identifier} ارسال می‌شود.
                        <br />
                        با کلیک روی لینک، وارد حساب خود شوید.
                    </p>
                </div>
            </div>

            {error && (
                <FieldDescription className="text-destructive text-center">
                    {error}
                </FieldDescription>
            )}

            <Field>
                <Button
                    type="button"
                    className="w-full"
                    onClick={handleSendMagicLink}
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <>
                            <Loader2 className="ml-2 size-4 animate-spin" />
                            در حال ارسال...
                        </>
                    ) : (
                        <>
                            <Mail className="ml-2 size-4" />
                            ارسال لینک ورود
                        </>
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
    );
}

