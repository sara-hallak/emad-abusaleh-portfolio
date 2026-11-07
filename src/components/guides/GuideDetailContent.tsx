"use client";

import React from "react";
import { motion } from "framer-motion";
import { GuideItem } from "@/data/guidesData";

interface GuideDetailContentProps {
  guide: GuideItem;
  lang?: string;
}

export default function GuideDetailContent({
  guide,
  lang = "ar",
}: GuideDetailContentProps) {
  const isEn = lang === "en";

  // استخراج المحتوى بحسب اللغة المختارة مع التراجع الآمن للمحتوى الافتراضي
  const executiveSummary =
    isEn && (guide as any).executiveSummaryEn
      ? (guide as any).executiveSummaryEn
      : guide.executiveSummary;

  const targetAudienceList =
    isEn && (guide as any).targetAudienceEn
      ? (guide as any).targetAudienceEn
      : guide.targetAudience;

  return (
    <div
      dir={isEn ? "ltr" : "rtl"}
      className="w-full bg-white py-12 lg:py-16 text-start"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        
        {/* ========================================================
            1. الملخص التنفيذي للدليل
            ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[#F8FAFC] border border-slate-200/90 rounded-[22px] p-6 sm:p-8 shadow-xs"
        >
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#1874C7]" />
            <h2
              className={`text-xl sm:text-2xl font-bold text-[#014482] ${
                isEn ? "font-sans" : "font-scheherazade"
              }`}
            >
              {isEn
                ? "Executive Summary & Methodological Framework"
                : "الملخص التنفيذي والإطار المنهجي"}
            </h2>
          </div>
          <p className="font-sans text-xs sm:text-sm md:text-[15px] leading-[2.1] text-slate-600 font-normal">
            {executiveSummary}
          </p>
        </motion.div>

        {/* ========================================================
            2. المحاور الإجرائية الرئيسية (Pillars)
            ======================================================== */}
        <div>
          <div className="mb-5 sm:mb-6">
            <span className="text-[11px] sm:text-xs font-sans font-medium text-[#1874C7] block mb-1">
              {isEn ? "Contents & Operational Structure" : "المحتويات والتفاصيل"}
            </span>
            <h3
              className={`text-2xl sm:text-3xl font-bold text-[#014482] ${
                isEn ? "font-sans" : "font-scheherazade"
              }`}
            >
              {isEn ? "Procedural Pillars of the Guide" : "المحاور الإجرائية للدليل"}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {guide.pillars.map((pillar, idx) => {
              const title =
                isEn && (pillar as any).titleEn
                  ? (pillar as any).titleEn
                  : pillar.title;
              const desc =
                isEn && (pillar as any).descEn
                  ? (pillar as any).descEn
                  : pillar.desc;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="group relative bg-white border border-slate-200/90 hover:border-slate-300 rounded-[20px] p-5 sm:p-6 shadow-2xs hover:shadow-md transition-all duration-300 overflow-hidden"
                >
                  {/* خط أزرق علوي عند الهوفر */}
                  <div className="absolute top-0 inset-x-0 h-[2.5px] bg-[#1874C7] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="flex items-start gap-3.5">
                    <div
                      className={`w-7 h-7 rounded-lg bg-blue-50 text-[#1874C7] flex items-center justify-center font-bold text-sm shrink-0 mt-0.5 border border-blue-100 ${
                        isEn ? "font-sans" : "font-scheherazade text-base"
                      }`}
                    >
                      {idx + 1}
                    </div>
                    <div>
                      <h4
                        className={`text-lg sm:text-xl font-bold text-[#014482] mb-1.5 leading-snug ${
                          isEn ? "font-sans" : "font-scheherazade"
                        }`}
                      >
                        {title}
                      </h4>
                      <p className="text-xs text-slate-500 font-sans leading-relaxed font-normal">
                        {desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ========================================================
            3. الفئات المستهدفة والنماذج المرفقة (2 أعمدة)
            ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          
          {/* الفئات والجهات المستهدفة */}
          <div className="bg-[#F8FAFC] border border-slate-200/90 rounded-[22px] p-6 sm:p-7 shadow-xs">
            <h3
              className={`text-xl sm:text-2xl font-bold text-[#014482] mb-4 ${
                isEn ? "font-sans" : "font-scheherazade"
              }`}
            >
              {isEn ? "Target Audiences & Stakeholders" : "الفئات والجهات المستهدفة"}
            </h3>
            <div className="space-y-3">
              {targetAudienceList.map((audience: string, idx: number) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-blue-50 text-[#1874C7] flex items-center justify-center shrink-0 border border-blue-200">
                    <svg
                      className="w-2.5 h-2.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-xs sm:text-[13px] font-sans text-slate-700">
                    {audience}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* المصفوفات والنماذج المرفقة */}
          <div className="bg-[#F8FAFC] border border-slate-200/90 rounded-[22px] p-6 sm:p-7 shadow-xs">
            <h3
              className={`text-xl sm:text-2xl font-bold text-[#014482] mb-4 ${
                isEn ? "font-sans" : "font-scheherazade"
              }`}
            >
              {isEn
                ? "Attached Matrices & Practical Models"
                : "المصفوفات والنماذج المرفقة بالدليل"}
            </h3>
            <div className="space-y-3">
              {guide.sampleOutputs.map((output, idx) => {
                const title =
                  isEn && (output as any).titleEn
                    ? (output as any).titleEn
                    : output.title;
                const desc =
                  isEn && (output as any).descEn
                    ? (output as any).descEn
                    : output.desc;
                const format =
                  isEn && (output as any).formatEn
                    ? (output as any).formatEn
                    : output.format;

                return (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white border border-slate-200/80 flex items-center justify-between gap-3 shadow-2xs"
                  >
                    <div>
                      <h5 className="font-sans text-xs sm:text-[13px] font-semibold text-[#014482] mb-0.5">
                        {title}
                      </h5>
                      <p className="text-[11px] font-sans text-slate-500">
                        {desc}
                      </p>
                    </div>
                    <span className="px-2 py-0.5 rounded-md bg-blue-50 border border-blue-100 text-[10px] font-sans font-semibold text-[#1874C7] shrink-0">
                      {format}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}