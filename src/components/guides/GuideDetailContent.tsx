"use client";

import React from "react";
import { motion } from "framer-motion";
import { GuideItem } from "@/data/guidesData";

interface GuideDetailContentProps {
  guide: GuideItem;
  lang?: string;
}

export default function GuideDetailContent({ guide }: GuideDetailContentProps) {
  return (
    <div className="w-full bg-white py-12 lg:py-16 text-right">
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
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#1874C7]" />
            <h2 className="font-scheherazade text-xl sm:text-2xl font-bold text-[#014482]">
              الملخص التنفيذي والإطار المنهجي
            </h2>
          </div>
          <p className="font-sans text-xs sm:text-sm md:text-[15px] leading-[2.1] text-slate-600 font-normal">
            {guide.executiveSummary}
          </p>
        </motion.div>

        {/* ========================================================
            2. المحاور الإجرائية الرئيسية (Pillars)
            ======================================================== */}
        <div>
          <div className="mb-5 sm:mb-6">
            <span className="text-[11px] sm:text-xs font-sans font-medium text-[#1874C7] block mb-1">
              المحتويات والتفاصيل
            </span>
            <h3 className="font-scheherazade text-2xl sm:text-3xl font-bold text-[#014482]">
              المحاور الإجرائية للدليل
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {guide.pillars.map((pillar, idx) => (
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

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-blue-50 text-[#1874C7] flex items-center justify-center font-scheherazade font-bold text-base shrink-0 mt-0.5 border border-blue-100">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="font-scheherazade text-lg sm:text-xl font-bold text-[#014482] mb-1.5 leading-snug">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-slate-500 font-sans leading-relaxed font-normal">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ========================================================
            3. الفئات المستهدفة والنماذج المرفقة (2 أعمدة)
            ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          
          {/* الفئات المستهدفة */}
          <div className="bg-[#F8FAFC] border border-slate-200/90 rounded-[22px] p-6 sm:p-7 shadow-xs">
            <h3 className="font-scheherazade text-xl sm:text-2xl font-bold text-[#014482] mb-4">
              الفئات والجهات المستهدفة
            </h3>
            <div className="space-y-3">
              {guide.targetAudience.map((audience, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-blue-50 text-[#1874C7] flex items-center justify-center shrink-0 border border-blue-200">
                    <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-xs sm:text-[13px] font-sans text-slate-700">
                    {audience}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* النماذج والمصفوفات المرفقة */}
          <div className="bg-[#F8FAFC] border border-slate-200/90 rounded-[22px] p-6 sm:p-7 shadow-xs">
            <h3 className="font-scheherazade text-xl sm:text-2xl font-bold text-[#014482] mb-4">
              المصفوفات والنماذج المرفقة بالدليل
            </h3>
            <div className="space-y-3">
              {guide.sampleOutputs.map((output, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-white border border-slate-200/80 flex items-center justify-between gap-3 shadow-2xs">
                  <div>
                    <h5 className="font-sans text-xs sm:text-[13px] font-semibold text-[#014482] mb-0.5">
                      {output.title}
                    </h5>
                    <p className="text-[11px] font-sans text-slate-500">
                      {output.desc}
                    </p>
                  </div>
                  <span className="px-2 py-0.5 rounded-md bg-blue-50 border border-blue-100 text-[10px] font-sans font-semibold text-[#1874C7] shrink-0">
                    {output.format}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}