import React, { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock, ArrowRight, ArrowLeft, User } from "lucide-react";
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
  const isEn = lang === "en";

  const article = NEWS_ARTICLES.find((item) => item.id === id);

  if (!article) {
    notFound();
  }

  // استخراج النصوص بحسب اللغة
  const title = isEn && article.titleEn ? article.titleEn : article.title;
  const category = isEn && article.categoryEn ? article.categoryEn : article.category;
  const author = isEn && article.authorEn ? article.authorEn : article.author;
  const date = isEn && article.dateEn ? article.dateEn : article.date;
  const readTime = isEn && article.readTimeEn ? article.readTimeEn : article.readTime;
  const excerpt = isEn && article.excerptEn ? article.excerptEn : article.excerpt;
  const keyPoints = (isEn && article.keyPointsEn) || article.keyPoints || [];
  const content = (isEn && article.contentEn) || article.content || [];

  return (
    <article
      dir={isEn ? "ltr" : "rtl"}
      className="max-w-[860px] mx-auto px-4 sm:px-6 lg:px-8 text-start"
    >
      {/* زر الرجوع والتصنيف */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
        <Link
          href={`/${lang}#updates`}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-primary-blue hover:text-dark-blue transition-colors font-sans"
        >
          {isEn ? (
            <ArrowLeft className="w-4 h-4" />
          ) : (
            <ArrowRight className="w-4 h-4" />
          )}
          <span>{isEn ? "Back to all updates" : "العودة لجميع المستجدات"}</span>
        </Link>

        <span
          className={`text-xs font-semibold text-primary-blue bg-light-blue px-3 py-1 rounded-full ${
            isEn ? "font-sans" : "font-scheherazade"
          }`}
        >
          {category}
        </span>
      </div>

      {/* عنوان المقال الرئيسي */}
      <h1
        className={`text-3xl sm:text-4xl lg:text-[44px] font-bold text-dark-blue leading-[1.25] mb-4 ${
          isEn ? "font-sans" : "font-scheherazade"
        }`}
      >
        {title}
      </h1>

      {/* معلومات النشر */}
      <div className="flex items-center gap-4 sm:gap-6 text-xs text-gray-400 font-sans mb-7">
        <span
          className={`flex items-center gap-1 text-gray-600 font-medium ${
            isEn ? "font-sans text-xs sm:text-sm" : "font-scheherazade text-sm"
          }`}
        >
          <User className="w-4 h-4 text-primary-blue" />
          {author}
        </span>
        <span className="flex items-center gap-1">
          <Calendar className="w-3.5 h-3.5" />
          {date}
        </span>
        <span className="flex items-center gap-1">
          <Clock className="w-3.5 h-3.5" />
          {readTime}
        </span>
      </div>

      {/* الصورة الرئيسية للمقال */}
      <div className="relative w-full aspect-[16/9] rounded-[22px] overflow-hidden bg-slate-100 mb-8 shadow-sm border border-gray-100">
        <img
          src={article.image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* الاقتباس التمهيدي (شريط البداية border-s-4 يتكيف تلقائياً مع اللغة) */}
      <div className="bg-[#F5F8FC] border-s-4 border-primary-blue p-5 sm:p-6 rounded-xl mb-8">
        <p
          className={`text-dark-blue leading-relaxed font-semibold ${
            isEn
              ? "font-sans text-base sm:text-lg"
              : "font-scheherazade text-lg sm:text-[20px]"
          }`}
        >
          {excerpt}
        </p>
      </div>

      {/* أبرز النقاط والمخرجات */}
      {keyPoints && keyPoints.length > 0 && (
        <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl mb-8">
          <h3
            className={`text-lg sm:text-xl font-bold text-dark-blue mb-3 ${
              isEn ? "font-sans" : "font-scheherazade"
            }`}
          >
            {isEn ? "Key Highlights & Outcomes:" : "أبرز محاور اللقاء والنتائج:"}
          </h3>
          <ul className="space-y-2.5">
            {keyPoints.map((point: string, index: number) => (
              <li key={index} className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-primary-blue mt-2 shrink-0" />
                <span
                  className={`text-gray-700 leading-normal ${
                    isEn
                      ? "font-sans text-sm sm:text-base"
                      : "font-scheherazade text-base"
                  }`}
                >
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* فقرات المقال */}
      <div
        className={`space-y-5 text-gray-800 mb-12 ${
          isEn
            ? "font-sans text-sm sm:text-base leading-[1.8]"
            : "font-scheherazade text-base sm:text-[18px] leading-[1.85]"
        }`}
      >
        {content.map((paragraph: string, index: number) => (
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
          <div className="max-w-[860px] mx-auto p-8 text-center text-gray-400 font-sans">
            Loading...
          </div>
        }
      >
        <ArticleContent params={params} />
      </Suspense>
    </main>
  );
}