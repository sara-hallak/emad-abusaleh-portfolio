"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { GuideItem } from "@/data/guidesData";

interface GuideDetailHeroProps {
  guide: GuideItem;
  lang?: string;
}

export default function GuideDetailHero({
  guide,
  lang = "ar",
}: GuideDetailHeroProps) {
  const isEn = lang === "en";

  // استخراج النصوص بحسب اللغة المختارة مع التراجع الآمن للمحتوى الافتراضي
  const title =
    isEn && (guide as any).titleEn ? (guide as any).titleEn : guide.title;
  const desc =
    isEn && (guide as any).descEn ? (guide as any).descEn : guide.desc;
  const badge =
    isEn && (guide as any).badgeEn ? (guide as any).badgeEn : guide.badge;
  const date =
    isEn && (guide as any).dateEn ? (guide as any).dateEn : guide.date;
  const pagesCount =
    isEn && (guide as any).pagesCountEn
      ? (guide as any).pagesCountEn
      : guide.pagesCount.replace("صفحة", "Pages");

  return (
    <section
      dir={isEn ? "ltr" : "rtl"}
      className="relative w-full py-7 sm:py-9 lg:py-11 bg-white border-b border-slate-200/80 overflow-hidden text-start"
    >
      {/* هالة ريشية ناعمة في الخلفية تتكيف مع اتجاه الصفحة */}
      <div
        className={`absolute top-5 ${
          isEn ? "left-1/4" : "right-1/4"
        } w-[420px] h-[420px] rounded-full pointer-events-none opacity-35 blur-[120px]`}
        style={{
          background:
            "radial-gradient(circle, rgba(24, 116, 199, 0.16) 0%, rgba(56, 189, 248, 0.08) 50%, transparent 75%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* مسار التنقل (Breadcrumb) بحجم ناعم وتوجيه تلقائي */}
        <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-sans text-slate-400 mb-5">
          <Link
            href={`/${lang}`}
            className="hover:text-[#014482] transition-colors"
          >
            {isEn ? "Home" : "الرئيسية"}
          </Link>
          <span>/</span>
          <Link
            href={`/${lang}/guides`}
            className="hover:text-[#014482] transition-colors"
          >
            {isEn ? "Guides & Knowledge" : "الأدلة والمعرفة"}
          </Link>
          <span>/</span>
          <span className="text-[#1874C7] font-medium truncate max-w-xs sm:max-w-md">
            {title}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-10 items-center">
          {/* ========================================================
              الطرف الأول: التفاصيل والعنوان وأزرار التحميل
              ======================================================== */}
          <motion.div
            initial={{ opacity: 0, x: isEn ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            {/* البادج والتاريخ والصفحات */}
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="px-2.5 py-0.5 rounded-md bg-blue-50 text-[#1874C7] text-[11px] font-sans font-medium border border-blue-100">
                {badge}
              </span>
              <span className="text-[11px] font-sans text-slate-400">
                {date}
              </span>
              <span className="w-1 h-1 rounded-full bg-slate-300" />
              <span className="text-[11px] font-sans text-slate-400">
                {pagesCount}
              </span>
              <span className="w-1 h-1 rounded-full bg-slate-300" />
              <span className="text-[11px] font-sans font-mono text-slate-400">
                {guide.refCode}
              </span>
            </div>

            {/* العنوان الرئيسي بأبعاد متناسقة ومريحة للعين */}
            <h1
              className={`text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#014482] leading-snug mb-3 ${
                isEn ? "font-sans" : "font-scheherazade"
              }`}
            >
              {title}
            </h1>

            {/* الوصف المنهجي */}
            <p className="text-slate-600 font-sans text-xs sm:text-[13px] md:text-sm leading-relaxed font-normal mb-6 max-w-2xl">
              {desc}
            </p>

            {/* أزرار الإجراء بأحجام منسقة */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={guide.downloadUrl}
                download
                onClick={(e) => {
                  if (guide.downloadUrl === "#") {
                    e.preventDefault();
                    alert(
                      isEn
                        ? `Preparing the official PDF file for "${title}"...`
                        : `جارٍ تجهيز ملف "${title}" المعتمد بصيغة PDF...`
                    );
                  }
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 sm:py-3 rounded-xl bg-[#014482] hover:bg-[#1874C7] active:scale-95 text-white font-sans text-xs sm:text-[13px] font-semibold transition-all duration-300 shadow-xs hover:shadow-md group"
              >
                <svg
                  className="w-3.5 h-3.5 text-white group-hover:translate-y-0.5 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                <span>
                  {isEn
                    ? `Download Official Guide (${guide.fileSize})`
                    : `تحميل الدليل المعتمد (${guide.fileSize})`}
                </span>
              </a>

              <Link
                href={`/${lang}/contact`}
                className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-slate-100 hover:bg-slate-200/90 text-slate-700 font-sans text-xs sm:text-[13px] font-medium transition-colors border border-slate-200/60"
              >
                {isEn
                  ? "Request Workshop or Session"
                  : "طلب ورشة أو جلسة تطبيقية"}
              </Link>
            </div>
          </motion.div>

          {/* ========================================================
              الطرف المقابل: غلاف الدليل النظيف ثلاثي الأبعاد
              ======================================================== */}
          <motion.div
            initial={{ opacity: 0, x: isEn ? 20 : -20, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div
              className="relative w-full max-w-[275px] sm:max-w-[305px] aspect-[1/1.42] rounded-[22px] p-5 sm:p-6 text-white flex flex-col justify-between shadow-xl shadow-[#014482]/20 border border-white/20 select-none overflow-hidden transition-transform duration-300 hover:-translate-y-1"
              style={{
                background:
                  "linear-gradient(150deg, #1874C7 0%, #0b5ea8 30%, #014482 70%, #012b54 100%)",
              }}
            >
              {/* لمسة إضاءة علوية زجاجية ناعمة */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/15 pointer-events-none rounded-[22px]" />

              {/* رأس الغلاف */}
              <div className="relative z-10">
                <div className="flex items-center justify-between pb-2 border-b border-white/15">
                  <span className="text-[10px] font-sans font-semibold text-blue-100 uppercase tracking-wide">
                    {isEn
                      ? "Accredited Advisory Document"
                      : "وثيقة استشارية معتمدة"}
                  </span>
                  <span className="text-[9px] font-sans text-blue-200/90 font-mono">
                    {guide.refCode}
                  </span>
                </div>
                <p className="text-[10px] font-sans text-blue-100/75 mt-1.5 font-normal">
                  {isEn
                    ? "Development Advisory Series — Peer-Reviewed Edition"
                    : "سلسلة الأدلة التنموية الاستشارية — إصدار معتمد ومحكّم"}
                </p>
              </div>

              {/* قلب الغلاف */}
              <div className="relative z-10 my-auto py-3">
                <div className="w-6 h-[2px] bg-white/80 rounded-full mb-2.5" />
                <h3
                  className={`text-lg sm:text-[21px] font-bold text-white leading-snug mb-1.5 ${
                    isEn ? "font-sans" : "font-scheherazade"
                  }`}
                >
                  {title}
                </h3>
                <p className="font-sans text-[10px] sm:text-[11px] text-blue-50/80 leading-relaxed font-normal line-clamp-2">
                  {desc}
                </p>
              </div>

              {/* أسفل الغلاف */}
              <div className="relative z-10 pt-2.5 border-t border-white/15 flex items-end justify-between">
                <div>
                  <span
                    className={`text-xs font-bold text-white block ${
                      isEn ? "font-sans" : "font-scheherazade"
                    }`}
                  >
                    {isEn
                      ? "Prepared by: Emad Abu Saleh"
                      : "إعداد: عماد أبو صالح الفناطسة"}
                  </span>
                  <span className="text-[9px] sm:text-[10px] text-blue-100/75 font-sans block mt-0.5">
                    {isEn
                      ? "Strategic Advisor & Documenting Researcher"
                      : "مستشار استراتيجي وباحث توثيقي"}
                  </span>
                </div>
                <span className="text-[9px] font-sans font-mono text-blue-200/70">
                  {pagesCount}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}