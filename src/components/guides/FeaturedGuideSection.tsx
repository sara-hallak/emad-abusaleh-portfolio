"use client";

import React from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { getTranslations } from "@/data/translations";

interface FeaturedGuideSectionProps {
  lang?: string;
}

export default function FeaturedGuideSection({ lang }: FeaturedGuideSectionProps) {
  const pathname = usePathname();
  const currentLang = lang || (pathname?.startsWith("/en") ? "en" : "ar");
  const isEn = currentLang === "en";

  const t = getTranslations(currentLang);
  const content = t.featuredGuide;

  return (
    <section
      className="relative w-full py-16 lg:py-24 bg-white overflow-hidden text-start"
      dir={isEn ? "ltr" : "rtl"}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* ========================================================
              1. غلاف الوثيقة الرسمي مع التدرج اللوني الفاخر
              ======================================================== */}
          <motion.div
            initial={{ opacity: 0, x: isEn ? -25 : 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`lg:col-span-5 flex justify-center ${isEn ? "lg:order-2 lg:justify-end" : "lg:order-1 lg:justify-start"}`}
          >
            <div 
              className="relative w-full max-w-[370px] sm:max-w-[400px] aspect-[1/1.42] rounded-[22px] p-7 sm:p-8 text-white flex flex-col justify-between shadow-2xl shadow-[#014482]/30 border border-white/20 overflow-hidden select-none transition-transform duration-300 hover:-translate-y-1"
              style={{
                background: "linear-gradient(145deg, #1874C7 0%, #085aa5 30%, #014482 70%, #012b54 100%)",
              }}
            >
              {/* هالة إضاءة داخلية ناعمة */}
              <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-black/25 rounded-full blur-3xl pointer-events-none" />

              {/* إيحاء كعب الوثيقة المطبوعة (ينقلب لليسار في الإنجليزية ولليمين في العربية) */}
              <div
                className={`absolute inset-y-0 w-3.5 bg-gradient-to-l from-black/30 via-black/10 to-transparent pointer-events-none ${
                  isEn ? "left-0 rotate-180" : "right-0"
                }`}
              />
              <div
                className={`absolute inset-y-0 w-[1px] bg-white/15 pointer-events-none ${
                  isEn ? "left-3.5" : "right-3.5"
                }`}
              />

              {/* رأس الغلاف */}
              <div className={`relative z-10 ${isEn ? "ps-2" : "pr-2"}`}>
                <div className="flex items-center justify-between pb-3 border-b border-white/20">
                  <span className="text-[11px] font-sans font-semibold text-blue-100 tracking-wider uppercase drop-shadow-xs">
                    {content.badge}
                  </span>
                  <span className="text-[10px] font-sans text-blue-200/90 font-mono">
                    REF: GDE-2025-01
                  </span>
                </div>

                <p className="text-[11px] font-sans text-blue-100/90 mt-2.5 font-normal">
                  {content.series}
                </p>
              </div>

              {/* قلب الغلاف */}
              <div className={`relative z-10 my-auto py-5 ${isEn ? "ps-2" : "pr-2"}`}>
                <div className="w-10 h-[2.5px] bg-white/80 rounded-full mb-4" />
                <h3
                  className={`font-bold text-white leading-[1.3] mb-3 drop-shadow-sm ${
                    isEn
                      ? "font-sans text-lg sm:text-[21px]"
                      : "font-scheherazade text-2xl sm:text-[27px]"
                  }`}
                >
                  {content.title}
                </h3>
                <p className="font-sans text-xs text-blue-50/90 leading-relaxed font-normal">
                  {content.coverDesc}
                </p>
              </div>

              {/* أسفل الغلاف */}
              <div className={`relative z-10 pt-4 border-t border-white/20 flex items-end justify-between ${isEn ? "ps-2" : "pr-2"}`}>
                <div>
                  <span
                    className={`font-bold text-white block drop-shadow-xs ${
                      isEn ? "font-sans text-xs sm:text-sm" : "font-scheherazade text-sm sm:text-base"
                    }`}
                  >
                    {content.author}
                  </span>
                  <span className="text-[11px] text-blue-100/80 font-sans block mt-0.5">
                    {content.authorRole}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ========================================================
              2. المحتوى والتفاصيل وزر التحميل المباشر
              ======================================================== */}
          <motion.div
            initial={{ opacity: 0, x: isEn ? 25 : -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`lg:col-span-7 ${isEn ? "lg:order-1" : "lg:order-2"}`}
          >
            {/* العنوان الرئيسي */}
            <h2
              className={`font-bold text-[#014482] leading-tight mb-4 ${
                isEn
                  ? "font-sans text-2xl sm:text-3xl lg:text-[36px]"
                  : "font-scheherazade text-2xl sm:text-3xl lg:text-4xl"
              }`}
            >
              {content.title}
            </h2>

            {/* النص التوضيحي */}
            <p className="text-slate-600 font-sans text-sm sm:text-[15px] leading-relaxed font-normal mb-7">
              {content.desc}
            </p>

            {/* صندوق المحاور الإجرائية للدليل */}
            <div className="bg-[#F5F6F7] border border-slate-200/80 rounded-2xl p-5 sm:p-6 mb-7">
              <h4 className="text-xs sm:text-[13px] font-sans font-bold text-[#014482] mb-4">
                {content.keyTopicsTitle}
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                {content.topics.map((topic: string, idx: number) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    {/* علامة التحقق */}
                    <div className="w-5 h-5 rounded-full bg-blue-50 text-[#1874C7] flex items-center justify-center shrink-0 mt-0.5 border border-blue-200/60">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-xs sm:text-[13px] text-slate-700 font-sans leading-relaxed">
                      {topic}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* زر تحميل الوثيقة الإجرائية */}
            <div className="flex items-center">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  alert(content.preparingAlert);
                }}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#1874C7] hover:bg-[#014482] text-white text-xs sm:text-sm font-sans font-medium transition-all duration-200 shadow-sm hover:shadow-md group cursor-pointer"
              >
                <svg
                  className="w-4 h-4 text-white/90 group-hover:translate-y-0.5 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>{content.downloadBtn}</span>
              </a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}