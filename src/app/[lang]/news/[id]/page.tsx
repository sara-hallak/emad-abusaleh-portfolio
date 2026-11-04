import React, { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import { NEWS_ARTICLES } from "@/data/newsData";

export function generateStaticParams() {
  return NEWS_ARTICLES.flatMap((article) => [
    { lang: "ar", id: article.id },
    { lang: "en", id: article.id },
  ]);
}

// المكون الداخلي لقراءة المقال
async function ArticleContent({
  params,
}: {
  params: Promise<{ lang: string; id: string }>;
}) {
  const { lang, id } = await params;
  const article = NEWS_ARTICLES.find((item) => item.id === id);

  if (!article) {
    notFound();
  }

  return (
    <article className="max-w-[860px] mx-auto px-4 sm:px-6 lg:px-8 text-start">
      {/* زر الرجوع والتصنيف */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
        <Link
          href={`/${lang}#updates`}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-primary-blue hover:text-dark-blue transition-colors"
        >
          <ArrowRight className="w-4 h-4" />
          <span>العودة لجميع المستجدات</span>
        </Link>

        <span className="text-xs font-semibold text-primary-blue bg-light-blue px-3 py-1 rounded-full">
          {article.category}
        </span>
      </div>

      {/* عنوان المقال الرئيسي */}
      <h1 className="font-scheherazade text-3xl sm:text-4xl lg:text-[44px] font-bold text-dark-blue leading-[1.25] mb-4">
        {article.title}
      </h1>

      {/* معلومات النشر */}
      <div className="flex items-center gap-4 sm:gap-6 text-xs text-gray-400 font-sans mb-7">
        <span className="flex items-center gap-1 text-gray-600 font-medium font-scheherazade text-sm">
          <User className="w-4 h-4 text-primary-blue" />
          {article.author}
        </span>
        <span className="flex items-center gap-1">
          <Calendar className="w-3.5 h-3.5" />
          {article.date}
        </span>
        <span className="flex items-center gap-1">
          <Clock className="w-3.5 h-3.5" />
          {article.readTime}
        </span>
      </div>

      {/* الصورة الرئيسية للمقال */}
      <div className="relative w-full aspect-[16/9] rounded-[22px] overflow-hidden bg-slate-100 mb-8 shadow-sm border border-gray-100">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* الاقتباس التمهيدي */}
      <div className="bg-[#F5F8FC] border-r-4 border-primary-blue p-5 sm:p-6 rounded-xl mb-8">
        <p className="font-scheherazade text-lg sm:text-[20px] text-dark-blue leading-relaxed font-semibold">
          {article.excerpt}
        </p>
      </div>

      {/* أبرز النقاط والمخرجات */}
      {article.keyPoints && article.keyPoints.length > 0 && (
        <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl mb-8">
          <h3 className="font-scheherazade text-lg sm:text-xl font-bold text-dark-blue mb-3">
            أبرز محاور اللقاء والنتائج:
          </h3>
          <ul className="space-y-2.5">
            {article.keyPoints.map((point, index) => (
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

      {/* فقرات المقال */}
      <div className="space-y-5 font-scheherazade text-base sm:text-[18px] text-gray-800 leading-[1.85] mb-12">
        {article.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}

// المكون الرئيسي المغلف بـ Suspense
export default function ArticleDetailPage({
  params,
}: {
  params: Promise<{ lang: string; id: string }>;
}) {
  return (
    <main className="min-h-screen bg-white py-10 sm:py-14 lg:py-16">
      <Suspense
        fallback={
          <div className="max-w-[860px] mx-auto p-8 text-center font-scheherazade text-gray-400">
            جاري تحميل المقال...
          </div>
        }
      >
        <ArticleContent params={params} />
      </Suspense>
    </main>
  );
}