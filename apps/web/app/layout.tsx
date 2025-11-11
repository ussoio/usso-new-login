import { Vazirmatn } from "next/font/google";

import "@workspace/ui/globals.css";
import { Providers } from "@/components/providers";

const fontVazirmatn = Vazirmatn({
    subsets: ["latin"],
    variable: "--font-vazirmatn",
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fa" dir="rtl" suppressHydrationWarning>
            <body className={`${fontVazirmatn.variable} font-vazirmatn antialiased`}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
