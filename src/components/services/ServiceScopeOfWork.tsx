"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { ServiceDetail } from "@/data/servicesDetailData";

interface ServiceScopeOfWorkProps {
  service: ServiceDetail;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const ServiceScopeOfWork: React.FC<ServiceScopeOfWorkProps> = ({ service }) => {
  const stages = service.scopeOfWork || [];

  return (
    <section className="w-full py-12 md:py-16 bg-white" dir="rtl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="text-right mb-8 md:mb-10"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#014482] font-scheherazade mb-2.5">
            ما الذي يشمله العمل؟
          </h2>
          <p className="text-xs md:text-sm text-slate-600 max-w-2xl leading-relaxed font-sans">
            خطة تدخل مرحلية تعتمد التسلسل المنطقي من قراءة الواقع وحتى المتابعة التقييمية.
          </p>
        </motion.div>

        {/* 5 Stages Stack */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
          className="flex flex-col gap-3.5 md:gap-4"
        >
          {stages.map((stage, index) => {
            // التناوب: الأول أبيض، الثاني فضي (#F5F6F7)، الثالث أبيض...
            const isSilver = index % 2 === 1;

            return (
              <motion.div
                key={stage.id}
                variants={cardVariants}
                whileHover={{ y: -2, transition: { duration: 0.2 } }}
                className={`group relative rounded-xl md:rounded-2xl p-4 sm:p-5 md:py-4 md:px-6 transition-all duration-300 overflow-hidden border ${
                  isSilver
                    ? "bg-[#F5F6F7] border-transparent"
                    : "bg-white border-slate-200/70 shadow-xs"
                } hover:shadow-md hover:shadow-blue-500/5`}
              >
                {/* الشريط الأزرق الجانبي المنحني بأقصى اليمين */}
                <div className="absolute top-0 right-0 bottom-0 w-1 md:w-1.5 bg-[#1874C7] rounded-r-xl md:rounded-r-2xl" />

                <div className="flex flex-col sm:flex-row sm:items-center gap-3.5 sm:gap-6 pr-2.5 md:pr-3">
                  
                  {/* 1. أولاً: رقم المرحلة والبادج (في البداية دائماً على اليمين في الديسكتوب وبالأعلى في الموبايل) */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: 0.05 }}
                    className="flex-shrink-0 flex items-center sm:flex-col sm:items-center justify-between sm:justify-center gap-2 sm:gap-1.5 w-full sm:w-28 sm:border-l sm:border-slate-300/60 pb-2.5 sm:pb-0 sm:pl-5 border-b sm:border-b-0 border-slate-200/70"
                  >
                    <span className="inline-block px-3 py-1 rounded bg-[#1874C7] text-white text-[11px] md:text-xs font-sans font-medium tracking-wide shadow-2xs">
                      {stage.stageNumber}
                    </span>
                    <span className="text-[11px] md:text-xs text-[#1874C7] font-medium text-center">
                      {stage.badgeTitle}
                    </span>
                  </motion.div>

                  {/* 2. ثانياً: العنوان والشرح (يأتي بعد رقم المرحلة مع حركة انزلاق ناعمة) */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.12 }}
                    className="flex-1 text-right"
                  >
                    <h3 className="text-base md:text-lg font-bold text-[#014482] font-scheherazade mb-1 group-hover:text-[#1874C7] transition-colors duration-200">
                      {stage.title}
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-sans font-normal">
                      {stage.description}
                    </p>
                  </motion.div>

                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};