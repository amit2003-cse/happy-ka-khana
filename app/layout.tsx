import type { Metadata, Viewport } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#1B5E2E",
};

export const metadata: Metadata = {
  title: "Happy Ka Khana — Ghar Jaisa Tiffin, Daily Delivered",
  description:
    "Fresh, hygienic, home-cooked tiffin service in Patna. Monthly & weekly subscriptions starting ₹70/meal. Lunch & dinner delivery.",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "HappyKhana",
  },
  icons: {
    apple: "/icons/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body bg-surface-light text-text-primary">
        {children}
      </body>
    </html>
  );
}
