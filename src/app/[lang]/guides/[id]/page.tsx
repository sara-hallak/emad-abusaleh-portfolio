import React, { Suspense } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getGuideById } from "@/data/guidesData";
import GuideDetailHero from "@/components/guides/GuideDetailHero";
import GuideDetailContent from "@/components/guides/GuideDetailContent";

interface GuideDetailPageProps {
  params: Promise<{ lang: string; id: string }>;
}

async function GuidePageContent({ params }: GuideDetailPageProps) {
  const { lang, id } = await params;
  const guide = getGuideById(id);

  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans" dir={lang === "en" ? "ltr" : "rtl"}>
      {/* 1. شريط التنقل */}
      <Navbar />

      {/* 2. سكشن الهيرو وغلاف الوثيقة */}
      <GuideDetailHero guide={guide} lang={lang} />

      {/* 3. المحاور الإجرائية والفئات المستهدفة والنماذج */}
      <GuideDetailContent guide={guide} lang={lang} />

      {/* 4. التذييل */}
      <Footer />
    </main>
  );
}

export default function GuideDetailPage({ params }: GuideDetailPageProps) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="w-10 h-10 border-3 border-slate-200 border-t-[#014482] rounded-full animate-spin" />
        </div>
      }
    >
      <GuidePageContent params={params} />
    </Suspense>
  );
}