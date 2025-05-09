import type { Metadata } from "next";
import { DM_Sans} from "next/font/google";
import "./globals.css";
import { TRPCReactProvider } from "@/trpc/client";
import { Toaster } from "sonner";
import { NuqsAdapter } from 'nuqs/adapters/next/app'


const dmSans = DM_Sans({
  subsets: ["latin"],

})


export const metadata: Metadata = {
  title: "funroad",
  description: "sell digital commodities with ease.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${dmSans.className} antialiased`}
      >
        <NuqsAdapter>
        <Toaster />
        <TRPCReactProvider>
        {children}
        </TRPCReactProvider>
        </NuqsAdapter>
      </body>
    </html>
  );
}
