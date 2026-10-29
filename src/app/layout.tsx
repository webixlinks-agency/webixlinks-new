import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-main",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: "AuraStack Studio | Premier 3D Web, CMS & CRM Engineering Agency",
  description:
    "High-velocity digital engineering agency specializing in WordPress & Headless CMS, CRM solutions (Salesforce, HubSpot, Zoho), Full-Stack MERN/MEAN apps, enterprise backends (Laravel, Node.js, Python), and Technical SEO.",
  keywords: [
    "WordPress development",
    "Headless CMS",
    "CRM specialist",
    "Salesforce",
    "HubSpot",
    "Zoho",
    "Full-stack development",
    "React.js",
    "Next.js",
    "Angular",
    "MERN stack",
    "MEAN stack",
    "Laravel",
    "Node.js",
    "Python Django FastAPI",
    "Technical SEO",
  ],
  authors: [{ name: "AuraStack Studios" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${jetbrainsMono.variable}`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
