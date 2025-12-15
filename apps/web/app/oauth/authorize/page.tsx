"use client";

import { ConsentScreen } from "@/components/oauth/consent-screen";

interface AuthorizePageProps {
    searchParams: Record<string, string | string[] | undefined>;
}

export default function AuthorizePage({ searchParams }: AuthorizePageProps) {
    const rawState = searchParams.state;
    const state = Array.isArray(rawState) ? rawState[0] : rawState;

    return (
        <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
            <div className="flex w-full max-w-sm flex-col gap-6">
                <ConsentScreen state={state} searchParams={searchParams} />
            </div>
        </div>
    );
}
