"use client";

import { useAuthStore } from "@/stores/auth-store";
import { Button } from "@workspace/ui/components/button";
import { Field, FieldGroup } from "@workspace/ui/components/field";
import { CheckCircle } from "lucide-react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export function LoginComplete() {
    const { loginResponse, reset } = useAuthStore();
    const router = useRouter();

    // Redirect after successful login
    useEffect(() => {
        const timer = setTimeout(() => {
            // Redirect to home or dashboard
            router.push("/");
        }, 2000);

        return () => clearTimeout(timer);
    }, [router]);

    return (
        <FieldGroup>
            <div className="flex flex-col items-center gap-4 py-6 text-center">
                <div className="bg-primary/10 flex size-16 items-center justify-center rounded-full">
                    <CheckCircle className="text-primary size-8" />
                </div>
                <div>
                    <h3 className="font-medium">ورود موفق</h3>
                    <p className="text-muted-foreground mt-2 text-sm">
                        به حساب کاربری خود خوش آمدید.
                        <br />
                        در حال انتقال...
                    </p>
                </div>

                {loginResponse?.amr && loginResponse.amr.length > 0 && (
                    <div className="text-muted-foreground text-xs">
                        روش‌های احراز هویت: {loginResponse.amr.join(", ")}
                    </div>
                )}
            </div>

            <Field>
                <Button
                    type="button"
                    className="w-full"
                    onClick={() => router.push("/")}
                >
                    رفتن به داشبورد
                </Button>
            </Field>
        </FieldGroup>
    );
}

