import React, { Suspense } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";

interface AboutPageProps {
  params: Promise<{ lang: string }>;
}

async function AboutPageContent({ params }: AboutPageProps) {
  const { lang } = await params;

  return (
    <main
      className="min-h-screen bg-white text-slate-900 font-sans"
      dir={lang === "en" ? "ltr" : "rtl"}
    >
      {/* 1. شريط التنقل */}
      <Navbar />

      {/* 2. سكشن عماد الفاخر بالألوان الكاشفة والتدريج الأزرق */}
      <AboutHero lang={lang} imageSrc="/images/emad-portrait.png" />

      {/* 3. التذييل */}
      <Footer />
    </main>
  );
}

export default function AboutPage({ params }: AboutPageProps) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="w-10 h-10 border-3 border-slate-200 border-t-[#1874C7] rounded-full animate-spin" />
        </div>
      }
    >
      <AboutPageContent params={params} />
    </Suspense>
  );
}