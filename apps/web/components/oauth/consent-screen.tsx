"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getConsent, postConsent } from "@/lib/usso-oauth";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@workspace/ui/components/card";
import { Button } from "@workspace/ui/components/button";
import { Field, FieldGroup, FieldLabel, FieldDescription } from "@workspace/ui/components/field";

interface ConsentScreenProps {
    state?: string;
    searchParams: Record<string, string | string[] | undefined>;
}

interface ConsentInfo {
    client_name?: string;
    client_id?: string;
    scopes?: string[];
    user_display_name?: string;
}

export function ConsentScreen({ state, searchParams }: ConsentScreenProps) {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState<"allow" | "deny" | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [info, setInfo] = useState<ConsentInfo | null>(null);

    useEffect(() => {
        let isMounted = true;

        async function fetchConsentInfo() {
            if (!state) {
                setLoading(false);
                setError("state برای ادامه فلو OAuth2/OIDC لازم است.");
                return;
            }

            setLoading(true);
            setError(null);

            try {
                const response = await getConsent({ consent: false, state });
                if (!isMounted) return;

                const data = response.data as any;
                const consentInfo: ConsentInfo = {
                    client_name: data?.client?.name ?? data?.client_name ?? data?.client_id,
                    client_id: data?.client?.client_id ?? data?.client_id,
                    scopes: data?.scopes ?? data?.scope ?? [],
                    user_display_name: data?.user?.display_name ?? data?.user_display_name,
                };

                setInfo(consentInfo);
            } catch (err: any) {
                if (!isMounted) return;

                const status = err?.response?.status as number | undefined;
                if (status === 401 || status === 403) {
                    const currentUrl = window.location.pathname + window.location.search;
                    const authUrl = `/auth?return_to=${encodeURIComponent(currentUrl)}`;
                    window.location.href = authUrl;
                    return;
                }

                setError("در دریافت اطلاعات مجوز دسترسی خطایی رخ داد. لطفاً دوباره تلاش کنید.");
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        }

        fetchConsentInfo();

        return () => {
            isMounted = false;
        };
    }, [state]);

    const handleConsent = async (consent: boolean) => {
        if (!state) {
            setError("state یافت نشد؛ امکان ادامه فلو وجود ندارد.");
            return;
        }

        setSubmitting(consent ? "allow" : "deny");
        setError(null);

        try {
            const response = await postConsent({ consent, state });
            const data = response.data as any;

            const redirectUrl: string | undefined =
                data?.redirect_uri ?? data?.redirect_url ?? data?.location ?? data?.url;

            if (redirectUrl) {
                window.location.href = redirectUrl;
            } else {
                router.push("/");
            }
        } catch (err: any) {
            const status = err?.response?.status as number | undefined;
            if (status === 401 || status === 403) {
                const currentUrl = window.location.pathname + window.location.search;
                const authUrl = `/auth?return_to=${encodeURIComponent(currentUrl)}`;
                window.location.href = authUrl;
                return;
            }

            setError("در ثبت نتیجه مجوز دسترسی خطایی رخ داد. لطفاً دوباره تلاش کنید.");
        } finally {
            setSubmitting(null);
        }
    };

    const clientName = info?.client_name ?? searchParams.client_id ?? "این اپلیکیشن";
    const scopes =
        info?.scopes ??
        (typeof searchParams.scope === "string" ? searchParams.scope.split(" ") : Array.isArray(searchParams.scope) ? searchParams.scope : []);

    return (
        <Card>
            <CardHeader className="text-center">
                <CardTitle className="text-xl">مجوز دسترسی به حساب کاربری</CardTitle>
                <CardDescription>
                    {clientName} می‌خواهد به حساب کاربری شما در USSO دسترسی داشته باشد.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <FieldGroup>
                    {loading ? (
                        <FieldDescription>در حال دریافت اطلاعات مجوز دسترسی...</FieldDescription>
                    ) : (
                        <>
                            <Field>
                                <FieldLabel>کاربر</FieldLabel>
                                <FieldDescription>
                                    {info?.user_display_name ?? "شما در حال ورود به حساب کاربری خود هستید."}
                                </FieldDescription>
                            </Field>

                            <Field>
                                <FieldLabel>دسترسی‌های درخواستی</FieldLabel>
                                {scopes && scopes.length > 0 ? (
                                    <ul className="list-inside list-disc text-sm text-muted-foreground">
                                        {scopes.map((scope) => (
                                            <li key={scope}>{scope}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    <FieldDescription>هیچ scope خاصی درخواست نشده است.</FieldDescription>
                                )}
                            </Field>
                        </>
                    )}

                    {error && <FieldDescription className="text-destructive">{error}</FieldDescription>}

                    <Field>
                        <div className="flex gap-3">
                            <Button
                                type="button"
                                className="flex-1"
                                disabled={loading || submitting === "deny"}
                                onClick={() => handleConsent(true)}
                            >
                                {submitting === "allow" ? "در حال تأیید..." : "تأیید و ادامه"}
                            </Button>
                            <Button
                                type="button"
                                variant="outline"
                                className="flex-1"
                                disabled={loading || submitting === "allow"}
                                onClick={() => handleConsent(false)}
                            >
                                {submitting === "deny" ? "در حال رد..." : "رد کردن"}
                            </Button>
                        </div>
                    </Field>
                </FieldGroup>
            </CardContent>
        </Card>
    );
}


