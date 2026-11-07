"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { usePathname } from "next/navigation";
import { ServiceDetail } from "@/data/servicesDetailData";

interface ServiceScopeOfWorkProps {
  service: ServiceDetail | any;
  lang?: string;
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

export const ServiceScopeOfWork: React.FC<ServiceScopeOfWorkProps> = ({
  service,
  lang: propLang,
}) => {
  const pathname = usePathname();
  const currentLang = propLang || (pathname?.startsWith("/en") ? "en" : "ar");
  const isEn = currentLang === "en";

  const stages = (isEn && service?.scopeOfWorkEn) || service?.scopeOfWork || [];

  return (
    <section
      dir={isEn ? "ltr" : "rtl"}
      className="w-full py-12 md:py-16 bg-white text-start"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* الترويسة */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="text-start mb-8 md:mb-10"
        >
          <h2
            className={`text-2xl md:text-3xl lg:text-4xl font-bold text-[#014482] mb-2.5 ${
              isEn ? "font-sans" : "font-scheherazade"
            }`}
          >
            {isEn ? "Scope of Work & Intervention Stages" : "ما الذي يشمله العمل؟"}
          </h2>
          <p className="text-xs md:text-sm text-slate-600 max-w-2xl leading-relaxed font-sans">
            {isEn
              ? "A phased operational roadmap following a logical progression from baseline field diagnostics to ongoing evaluation."
              : "خطة تدخل مرحلية تعتمد التسلسل المنطقي من قراءة الواقع وحتى المتابعة التقييمية."}
          </p>
        </motion.div>

        {/* قائمة المراحل الخمس المتتابعة */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
          className="flex flex-col gap-3.5 md:gap-4"
        >
          {stages.map((stage: any, index: number) => {
            const isSilver = index % 2 === 1;

            const stageNumber = isEn && stage.stageNumberEn ? stage.stageNumberEn : stage.stageNumber;
            const badgeTitle = isEn && stage.badgeTitleEn ? stage.badgeTitleEn : stage.badgeTitle;
            const title = isEn && stage.titleEn ? stage.titleEn : stage.title;
            const description = isEn && stage.descriptionEn ? stage.descriptionEn : stage.description;

            return (
              <motion.div
                key={stage.id || index}
                variants={cardVariants}
                whileHover={{ y: -2, transition: { duration: 0.2 } }}
                className={`group relative rounded-xl md:rounded-2xl p-4 sm:p-5 md:py-4 md:px-6 transition-all duration-300 overflow-hidden border ${
                  isSilver
                    ? "bg-[#F5F6F7] border-transparent"
                    : "bg-white border-slate-200/70 shadow-xs"
                } hover:shadow-md hover:shadow-blue-500/5`}
              >
                {/* الشريط الأزرق الجانبي المنحني المتكيف مع البداية */}
                <div className="absolute top-0 start-0 bottom-0 w-1 md:w-1.5 bg-[#1874C7] rounded-s-xl md:rounded-s-2xl" />

                <div className="flex flex-col sm:flex-row sm:items-center gap-3.5 sm:gap-6 ps-2.5 md:ps-3">
                  
                  {/* أولاً: رقم المرحلة والبادج مع فاصل عمودي متكيف */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: 0.05 }}
                    className="flex-shrink-0 flex items-center sm:flex-col sm:items-center justify-between sm:justify-center gap-2 sm:gap-1.5 w-full sm:w-28 sm:border-e sm:border-slate-300/60 pb-2.5 sm:pb-0 sm:pe-5 border-b sm:border-b-0 border-slate-200/70"
                  >
                    <span className="inline-block px-3 py-1 rounded bg-[#1874C7] text-white text-[11px] md:text-xs font-sans font-medium tracking-wide shadow-2xs">
                      {stageNumber}
                    </span>
                    <span className="text-[11px] md:text-xs text-[#1874C7] font-medium text-center font-sans">
                      {badgeTitle}
                    </span>
                  </motion.div>

                  {/* ثانياً: العنوان والشرح */}
                  <motion.div
                    initial={{ opacity: 0, x: isEn ? 10 : -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.12 }}
                    className="flex-1 text-start"
                  >
                    <h3
                      className={`text-base md:text-lg font-bold text-[#014482] mb-1 group-hover:text-[#1874C7] transition-colors duration-200 ${
                        isEn ? "font-sans" : "font-scheherazade"
                      }`}
                    >
                      {title}
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-sans font-normal">
                      {description}
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