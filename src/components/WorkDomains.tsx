"use client";

import React from "react";
import { motion } from "framer-motion";
import { User, Building2 } from "lucide-react";
import { usePathname } from "next/navigation";
import { getTranslations } from "@/data/translations";

export const WorkDomains: React.FC = () => {
  const pathname = usePathname();
  const currentLang = pathname?.startsWith("/en") ? "en" : "ar";
  const isEn = currentLang === "en";

  const t = getTranslations(currentLang);

  return (
    <section
      id="work-domains"
      className="w-full bg-white py-12 sm:py-16 lg:py-20 overflow-hidden"
      dir={isEn ? "ltr" : "rtl"}
    >
      <div className="max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* عنوان القسم */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-start mb-6 sm:mb-9"
        >
          <h2
            className={`font-bold text-[#014482] leading-tight ${
              isEn
                ? "font-sans text-2xl sm:text-3xl lg:text-[36px]"
                : "font-scheherazade text-3xl sm:text-4xl lg:text-[42px]"
            }`}
          >
            {t.workDomains.title}
          </h2>
        </motion.div>

        {/* شبكة الكرتين */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-7 items-stretch">
          
          {/* الكرت 01: للأفراد والفرق (كحلي داكن) */}
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.75,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            whileHover={{ y: -5 }}
            className={`group relative bg-[#014482] p-5 sm:p-6 lg:p-7 shadow-md hover:shadow-2xl hover:shadow-blue-950/25 transition-all duration-300 flex items-center justify-between gap-4 cursor-default overflow-hidden border border-white/5 rounded-[20px] ${
              isEn ? "rounded-tl-none" : "rounded-tr-none"
            }`}
          >
            {/* لمعة ضوئية خفيفة */}
            <motion.div
              initial={{ x: isEn ? "200%" : "-120%", opacity: 0 }}
              whileInView={{ x: isEn ? "-120%" : "200%", opacity: [0, 0.12, 0] }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, delay: 0.3, ease: "easeInOut" }}
              className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white to-transparent skew-x-12 pointer-events-none"
            />

            {/* النصوص */}
            <div className="flex-1 text-start min-w-0 z-10">
              <h3
                className={`font-bold text-white mb-1.5 leading-snug ${
                  isEn
                    ? "font-sans text-base sm:text-lg lg:text-[20px]"
                    : "font-scheherazade text-xl sm:text-2xl lg:text-[25px]"
                }`}
              >
                {t.workDomains.individualsTitle}
              </h3>
              <p
                className={`text-white/90 leading-relaxed font-normal ${
                  isEn
                    ? "font-sans text-xs sm:text-[13px] leading-[1.6]"
                    : "font-scheherazade text-xs sm:text-[13px] lg:text-[14px]"
                }`}
              >
                {t.workDomains.individualsDesc}
              </p>
            </div>

            {/* مربع الأيقونة */}
            <div className="shrink-0 w-11 h-11 sm:w-13 sm:h-13 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center shadow-xs transition-all duration-300 group-hover:scale-105 group-hover:shadow-md z-10">
              <User className="w-5 h-5 sm:w-6 sm:h-6 text-[#014482]" strokeWidth={2.2} />
            </div>
          </motion.div>

          {/* الكرت 02: للمؤسسات والجهات (أزرق مشرق) */}
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.75,
              delay: 0.15,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            whileHover={{ y: -5 }}
            className={`group relative bg-[#1874C7] p-5 sm:p-6 lg:p-7 shadow-md hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-between gap-4 cursor-default overflow-hidden border border-white/10 rounded-[20px] ${
              isEn ? "rounded-tl-none" : "rounded-tr-none"
            }`}
          >
            {/* لمعة ضوئية خفيفة */}
            <motion.div
              initial={{ x: isEn ? "200%" : "-120%", opacity: 0 }}
              whileInView={{ x: isEn ? "-120%" : "200%", opacity: [0, 0.12, 0] }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, delay: 0.45, ease: "easeInOut" }}
              className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white to-transparent skew-x-12 pointer-events-none"
            />

            {/* النصوص */}
            <div className="flex-1 text-start min-w-0 z-10">
              <h3
                className={`font-bold text-white mb-1.5 leading-snug ${
                  isEn
                    ? "font-sans text-base sm:text-lg lg:text-[20px]"
                    : "font-scheherazade text-xl sm:text-2xl lg:text-[25px]"
                }`}
              >
                {t.workDomains.organizationsTitle}
              </h3>
              <p
                className={`text-white/90 leading-relaxed font-normal ${
                  isEn
                    ? "font-sans text-xs sm:text-[13px] leading-[1.6]"
                    : "font-scheherazade text-xs sm:text-[13px] lg:text-[14px]"
                }`}
              >
                {t.workDomains.organizationsDesc}
              </p>
            </div>

            {/* مربع الأيقونة */}
            <div className="shrink-0 w-11 h-11 sm:w-13 sm:h-13 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center shadow-xs transition-all duration-300 group-hover:scale-105 group-hover:shadow-md z-10">
              <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#1874C7]" strokeWidth={2.2} />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};