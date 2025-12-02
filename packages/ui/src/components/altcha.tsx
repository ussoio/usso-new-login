"use client";

import React, { useEffect, useRef, useState, forwardRef, useImperativeHandle } from "react";
import { cn } from "@workspace/ui/lib/utils";

export interface AltchaStateChangeEvent extends CustomEvent {
    detail: {
        payload?: string | null;
        state?: string;
        [key: string]: unknown;
    };
}

export interface AltchaProps {
    /** Callback for state changes */
    onStateChange?: (event: AltchaStateChangeEvent) => void;
    /** URL for the challenge endpoint */
    challengeUrl?: string;
    /** URL for the verify endpoint */
    verifyUrl?: string;
    /** Additional class name */
    className?: string;
}

export interface AltchaRef {
    /** Current value of the widget */
    readonly value: string | null;
}

/**
 * Altcha widget component for CAPTCHA verification
 * Tailwind-compatible version
 */
const Altcha = forwardRef<AltchaRef, AltchaProps>((props, ref) => {
    const { onStateChange, challengeUrl, verifyUrl, className } = props;
    const widgetRef = useRef<HTMLElement>(null);
    const [value, setValue] = useState<string | null>(null);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    // Dynamically import altcha only on client side to avoid SSR issues
    useEffect(() => {
        if (typeof window !== "undefined") {
            import("altcha").then(() => {
                setIsLoaded(true);
            });
        }
    }, []);

    // Create theme styles using CSS custom properties compatible with Tailwind
    const altchaTheme: React.CSSProperties = {
        "--altcha-max-width": "100%",
        "--altcha-border-width": "1px",
        "--altcha-border-radius": "0.5rem",
        "--altcha-color-base": "hsl(var(--card))",
        "--altcha-color-border": "hsl(var(--border))",
        "--altcha-color-text": "hsl(var(--foreground))",
        "--altcha-color-border-focus": "hsl(var(--primary))",
        "--altcha-color-error-text": "hsl(var(--destructive))",
        "--altcha-color-footer-bg": "hsl(var(--muted))",
    } as React.CSSProperties;

    useImperativeHandle(
        ref,
        () => ({
            get value() {
                return value;
            },
        }),
        [value]
    );

    useEffect(() => {
        const handleStateChange = (ev: Event) => {
            const customEvent = ev as AltchaStateChangeEvent;
            if ("detail" in customEvent) {
                setValue(customEvent.detail.payload || null);
                onStateChange?.(customEvent);
            }
        };

        const current = widgetRef.current;

        if (current && isLoaded) {
            current.addEventListener("statechange", handleStateChange);
            return () => current.removeEventListener("statechange", handleStateChange);
        }
    }, [onStateChange, isLoaded]);

    if (!isLoaded) {
        return <div className={cn("bg-muted h-14 w-full animate-pulse rounded-lg border", className)} />;
    }

    return React.createElement("altcha-widget", {
        ref: widgetRef,
        style: altchaTheme,
        className,
        challengeurl: challengeUrl,
        verifyurl: verifyUrl,
        strings: JSON.stringify({
            ariaLinkLabel: "بازدید از Altcha.org",
            enterCode: "عبارت موجود در تصویر را وارد کنید",
            enterCodeAria: "کدی که می‌شنوید را وارد کنید. برای پخش صدا Space را فشار دهید.",
            error: "احراز هویت ناموفق بود. بعداً دوباره تلاش کنید.",
            expired: "احراز هویت منقضی شد. دوباره تلاش کنید.",
            footer: 'محافظت شده توسط <a href="https://altcha.org/" target="_blank" aria-label="بازدید از Altcha.org">ALTCHA</a>',
            getAudioChallenge: "دریافت چالش صوتی",
            label: "من ربات نیستم",
            loading: "در حال بارگذاری...",
            reload: "بارگذاری مجدد",
            verify: "تایید",
            verificationRequired: "عبارت موجود در تصویر را وارد کنید",
            verified: "تایید شد",
            verifying: "در حال تایید...",
            waitAlert: "در حال تایید... لطفا منتظر بمانید.",
        }),
        hidelogo: true,
        hidefooter: true,
    });
});

Altcha.displayName = "Altcha";

export default Altcha;
