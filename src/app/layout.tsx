import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Head from "next/head";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "SwiftContacts",
  description:
    "SwiftContacts offers a seamless solution for users to upload contact information in various formats (CSV, XLSX, or XLS). Upon submission, the backend processes this data, extracting details such as names, phone numbers, emails, and genders. It compiles this information into a unified contact file (VCF file) compatible with Android and iOS devices, simplifying contact management.",
  icons: [
    { rel: "icon", url: "/favicon.png" },
    { rel: "icon", sizes: "32x32", url: "/favicon.png" },
    { rel: "icon", sizes: "16x16", url: "/favicon.png" },
    { rel: "apple-touch-icon", sizes: "180x180", url: "/favicon.png" },
    { rel: "manifest", url: "/site.webmanifest" },
  ],
  openGraph: {
    type: "website",
    title: "SwiftContacts",
    description:
      "SwiftContacts offers a seamless solution for users to upload contact information in various formats (CSV, XLSX, or XLS). Upon submission, the backend processes this data, extracting details such as names, phone numbers, emails, and genders. It compiles this information into a unified contact file (VCF file) compatible with Android and iOS devices, simplifying contact management.",
    siteName: "SwiftContacts",
  },
  keywords: [
    "vit",
    "swiftcontacts",
    "contact",
    "contacts",
    "csv",
    "xlsx",
    "xls",
    "vcf",
    "excel",
    "json",
    "contact card",
    "vcf",
    "vcard",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="min-h-screen bg-background antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
