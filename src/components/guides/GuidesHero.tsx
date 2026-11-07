"use client";

import React from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { getTranslations } from "@/data/translations";

interface GuidesHeroProps {
  lang?: string;
}

export default function GuidesHero({ lang }: GuidesHeroProps) {
  const pathname = usePathname();
  const currentLang = lang || (pathname?.startsWith("/en") ? "en" : "ar");
  const isEn = currentLang === "en";

  const t = getTranslations(currentLang);
  const heroContent = t.guidesHero;

  return (
    <section
      className="relative w-full min-h-[560px] lg:min-h-[620px] flex items-center overflow-hidden bg-[#014482]"
      dir={isEn ? "ltr" : "rtl"}
    >
      {/* 1. صورة الخلفية مع تأثير تكبير بطيء وناعم */}
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=2000&q=85"
          alt="Professional Knowledge Base"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* 2. الطبقة الزرقاء الملكية الشفافة والعميقة */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: isEn
            ? "linear-gradient(135deg, rgba(1, 68, 130, 0.95) 0%, rgba(1, 68, 130, 0.88) 50%, rgba(24, 116, 199, 0.80) 100%)"
            : "linear-gradient(135deg, rgba(1, 68, 130, 0.94) 0%, rgba(1, 68, 130, 0.88) 50%, rgba(24, 116, 199, 0.82) 100%)",
        }}
      />

      {/* شبكة خفيفة لمنح إحساس تنظيمي ومعرفي */}
      <div 
        className="absolute inset-0 z-10 opacity-5 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" 
      />

      {/* 3. حاوية المحتوى */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full text-start">
        <div className="max-w-3xl">
          
          {/* البادج العلوي */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur-md mb-5 transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-[#1874C7] ring-4 ring-white/20 animate-pulse" />
            <span className="text-xs sm:text-[13px] font-sans font-medium text-white/95 tracking-wide">
              {heroContent.badge}
            </span>
          </motion.div>

          {/* العنوان الرئيسي */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`font-bold text-white leading-[1.25] mb-5 drop-shadow-xs ${
              isEn
                ? "font-sans text-3xl sm:text-4xl lg:text-[50px]"
                : "font-scheherazade text-3xl sm:text-4xl md:text-5xl lg:text-[56px]"
            }`}
          >
            {heroContent.title}
          </motion.h1>

          {/* النص التوضيحي */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={`text-white/85 leading-relaxed font-normal mb-9 max-w-2xl drop-shadow-xs ${
              isEn
                ? "font-sans text-xs sm:text-sm lg:text-[15px]"
                : "font-sans text-sm sm:text-base md:text-lg"
            }`}
          >
            {heroContent.desc}
          </motion.p>

          {/* الشريط السفلي: الكروت الأربعة الزجاجية */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 p-3 sm:p-4 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md shadow-lg shadow-black/5"
          >
            {heroContent.metrics.map((item: any, idx: number) => (
              <div
                key={item.id}
                className={`text-start px-2 sm:px-3 py-1.5 ${
                  idx !== heroContent.metrics.length - 1 ? "sm:border-e sm:border-white/15" : ""
                }`}
              >
                <div
                  className={`font-bold text-white mb-0.5 leading-snug ${
                    isEn
                      ? "font-sans text-base sm:text-lg"
                      : "font-scheherazade text-lg sm:text-xl"
                  }`}
                >
                  {item.val}
                </div>
                <div className="font-sans text-[11px] sm:text-xs text-white/75 font-normal leading-tight">
                  {item.label}
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}