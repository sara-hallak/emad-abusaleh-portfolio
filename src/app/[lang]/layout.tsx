import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";

const scheherazade = localFont({
  src: [
    {
      path: "../fonts/ScheherazadeNew-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/ScheherazadeNew-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/ScheherazadeNew-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/ScheherazadeNew-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-scheherazade",
  display: "swap",
});

export const metadata: Metadata = {
  title: "عماد أبو صالح",
  description: "الموقع الشخصي",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${scheherazade.variable} font-scheherazade antialiased`}>
        {children}
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return [{ lang: "ar" }, { lang: "en" }];
}