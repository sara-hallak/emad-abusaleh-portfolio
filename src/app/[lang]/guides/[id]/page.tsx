import React, { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Clock, User, FileText } from "lucide-react";
import { GUIDES_DATA } from "@/data/guidesData";

export function generateStaticParams() {
  return GUIDES_DATA.flatMap((guide) => [
    { lang: "ar", id: guide.id },
    { lang: "en", id: guide.id },
  ]);
}

async function GuideContent({
  params,
}: {
  params: Promise<{ lang: string; id: string }>;
}) {
  const { lang, id } = await params;
  const guide = GUIDES_DATA.find((g) => g.id === id);

  if (!guide) {
    notFound();
  }

  return (
    <article className="max-w-[860px] mx-auto px-4 sm:px-6 lg:px-8 text-start">
      {/* شريط الرجوع */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
        <Link
          href={`/${lang}#guides`}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-primary-blue hover:text-dark-blue transition-colors"
        >
          <ArrowRight className="w-4 h-4" />
          <span>العودة لقسم الأدلة والمعرفة</span>
        </Link>

        <span className="text-xs font-semibold text-primary-blue bg-light-blue px-3 py-1 rounded-full">
          {guide.category} • {guide.subType}
        </span>
      </div>

      {/* عنوان الدليل */}
      <h1 className="font-scheherazade text-3xl sm:text-4xl lg:text-[44px] font-bold text-dark-blue leading-[1.25] mb-4">
        {guide.title}
      </h1>

      {/* بيانات النشر */}
      <div className="flex items-center gap-4 sm:gap-6 text-xs text-gray-400 font-sans mb-7">
        <span className="flex items-center gap-1 text-gray-600 font-medium font-scheherazade text-sm">
          <User className="w-4 h-4 text-primary-blue" />
          {guide.author}
        </span>
        <span className="flex items-center gap-1">
          <Clock className="w-3.5 h-3.5" />
          وقت القراءة: {guide.readTime}
        </span>
        <span className="flex items-center gap-1 font-scheherazade text-primary-blue font-semibold">
          <FileText className="w-3.5 h-3.5" />
          {guide.tagOrDate}
        </span>
      </div>

      {/* صورة الغلاف */}
      <div className="relative w-full aspect-[16/9] rounded-[22px] overflow-hidden bg-slate-100 mb-8 shadow-sm border border-gray-100">
        <img
          src={guide.image}
          alt={guide.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* ملخص الدليل */}
      <div className="bg-[#F5F8FC] border-r-4 border-primary-blue p-5 sm:p-6 rounded-xl mb-8">
        <p className="font-scheherazade text-lg sm:text-[20px] text-dark-blue leading-relaxed font-semibold">
          {guide.excerpt}
        </p>
      </div>

      {/* أبرز المخرجات والمحاور */}
      {guide.keyPoints && (
        <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl mb-8">
          <h3 className="font-scheherazade text-lg sm:text-xl font-bold text-dark-blue mb-3">
            أبرز محاور وتطبيقات هذه المادة:
          </h3>
          <ul className="space-y-2.5">
            {guide.keyPoints.map((point, index) => (
              <li key={index} className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-primary-blue mt-2 shrink-0" />
                <span className="font-scheherazade text-base text-gray-700 leading-normal">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* محتوى الدليل */}
      <div className="space-y-5 font-scheherazade text-base sm:text-[18px] text-gray-800 leading-[1.85] mb-12">
        {guide.content.map((p, index) => (
          <p key={index}>{p}</p>
        ))}
      </div>
    </article>
  );
}

export default function GuideDetailPage({
  params,
}: {
  params: Promise<{ lang: string; id: string }>;
}) {
  return (
    <main className="min-h-screen bg-white py-10 sm:py-14 lg:py-16">
      <Suspense
        fallback={
          <div className="max-w-[860px] mx-auto p-8 text-center font-scheherazade text-gray-400">
            جاري تحميل الدليل المعرفي...
          </div>
        }
      >
        <GuideContent params={params} />
      </Suspense>
    </main>
  );
}