import React, { Suspense } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import GuidesHero  from "@/components/guides/GuidesHero";
import FeaturedGuideSection from "@/components/guides/FeaturedGuideSection";
import KnowledgeLibrary from "@/components/guides/KnowledgeLibrary";
import { ConsultationCTA } from "@/components/ConsultationCTA";

interface GuidesPageProps {
  params: Promise<{ lang: string }>;
}

async function GuidesPageContent({ params }: GuidesPageProps) {
  const { lang } = await params;

  return (
    <main className="min-h-screen bg-[#F5F6F7] text-slate-900 font-sans" dir={lang === "en" ? "ltr" : "rtl"}>
      {/* شريط التنقل */}
      <Navbar />

      {/* 1. سكشن الهيرو للأدلة والمعرفة */}
      <GuidesHero lang={lang} />

      <FeaturedGuideSection lang={lang} />

      <KnowledgeLibrary lang={lang} />
      <ConsultationCTA />
      {/* التذييل */}
      <Footer />
    </main>
  );
}

export default function GuidesPage({ params }: GuidesPageProps) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#014482] flex items-center justify-center">
          <div className="w-10 h-10 border-3 border-white/20 border-t-white rounded-full animate-spin" />
        </div>
      }
    >
      <GuidesPageContent params={params} />
    </Suspense>
  );
}