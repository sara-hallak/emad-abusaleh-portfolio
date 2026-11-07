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

export function generateStaticParams() {
  return [{ lang: "ar" }, { lang: "en" }];
}

// توليد العنوان والوصف بحسب لغة الرابط
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const isEn = lang === "en";

  return {
    title: isEn
      ? "Emad Abu Saleh | Strategic Advisory & Field Programs"
      : "المستشار عماد أبو صالح الفناطسة | التخطيط والمناصرة والسياسات العامة",
    description: isEn
      ? "Official portfolio of Emad Abu Saleh Al-Fanatseh: Strategic planning, advocacy campaigns, institutional training, and procedural manual authoring."
      : "الموقع الرسمي للمستشار عماد أبو صالح الفناطسة: التخطيط الاستراتيجي، قيادة حملات المناصرة، التدريب، وإعداد الأدلة الإجرائية.",
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isEn = lang === "en";

  return (
    <html lang={lang} dir={isEn ? "ltr" : "rtl"}>
      <body
        className={`${scheherazade.variable} ${
          isEn ? "font-sans" : "font-scheherazade"
        } antialiased bg-white text-slate-800`}
      >
        {children}
      </body>
    </html>
  );
}