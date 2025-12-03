import { GalleryVerticalEnd } from "lucide-react";

import { LoginFlow } from "@/components/login";
import { FieldDescription } from "@workspace/ui/components/field";

export default function LoginPage() {
    return (
        <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
            <div className="flex w-full max-w-sm flex-col gap-6">
                {/* <a
                    href="#"
                    className="flex items-center gap-2 self-center font-medium"
                >
                    <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
                        <GalleryVerticalEnd className="size-4" />
                    </div>
                    Acme Inc.
                </a> */}
                <LoginFlow />
                <FieldDescription className="px-6 text-center">
                    با ورود، <a href="#">شرایط استفاده</a> و <a href="#">حریم خصوصی</a> را می‌پذیرید.
                </FieldDescription>
            </div>
        </div>
    );
}
