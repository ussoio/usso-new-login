import { vazirmatn } from "@workspace/fonts";

import "@workspace/ui/globals.css";
import { Providers } from "@/components/providers";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fa" dir="rtl" suppressHydrationWarning>
            <body className={`${vazirmatn.variable} font-vazirmatn antialiased`}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
