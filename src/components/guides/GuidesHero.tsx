"use client";

import React from "react";
import { motion } from "framer-motion";

interface GuidesHeroProps {
  lang?: string;
}

export default function GuidesHero({ lang = "ar" }: GuidesHeroProps) {
  const isRtl = lang !== "en";

  // إحصائيات وميزات الشريط السفلي الشفاف
  const heroMetrics = [
    {
      id: "metric-1",
      val: "10+",
      label: "أدلة إجرائية",
    },
    {
      id: "metric-2",
      val: "المؤسسات",
      label: "واعتمادات دولية",
    },
    {
      id: "metric-3",
      val: "دوري مستمر",
      label: "للممارسات والأدلة",
    },
    {
      id: "metric-4",
      val: "منهجية معيارية",
      label: "محكّمة ميدانياً",
    },
  ];

  return (
    <section className="relative w-full min-h-[580px] lg:min-h-[640px] flex items-center overflow-hidden bg-[#014482]">
      {/* 1. صورة الخلفية مع تأثير تكبير بطيء وناعم */}
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=2000&q=85"
          alt="أدلة ومعرفة مهنية"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* 2. الطبقة الزرقاء الملكية الشفافة والعميقة (Figma Overlay) */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(135deg, rgba(1, 68, 130, 0.94) 0%, rgba(1, 68, 130, 0.88) 50%, rgba(24, 116, 199, 0.82) 100%)",
        }}
      />

      {/* شبكة خفيفة لمنح إحساس تنظيمي ومعرفي */}
      <div 
        className="absolute inset-0 z-10 opacity-5 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" 
      />

      {/* 3. حاوية المحتوى */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full text-right">
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
              قاعدة المعرفة والخبرة العملية
            </span>
          </motion.div>

          {/* العنوان الرئيسي */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-scheherazade text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-[1.25] mb-5 drop-shadow-xs"
          >
            أدلة ومعرفة مبنية على الخبرة العملية
          </motion.h1>

          {/* النص التوضيحي */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm sm:text-base md:text-lg text-white/85 font-sans leading-relaxed font-normal mb-10 max-w-2xl drop-shadow-xs"
          >
            تجمع هذه المكتبة خلاصة الأدلة الإجرائية والمعارف المهنية المتخصصة، والأطر المرجعية المستمدة من واقع الممارسة الاستشارية والعمل الميداني، بهدف إثراء المعرفة وتعزيز الممارسة ودعم اتخاذ القرار.
          </motion.p>

          {/* الشريط السفلي: الكروت الأربعة الزجاجية */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 p-3 sm:p-4 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md shadow-lg shadow-black/5"
          >
            {heroMetrics.map((item, idx) => (
              <div
                key={item.id}
                className={`text-right px-2 sm:px-3 py-1.5 ${
                  idx !== heroMetrics.length - 1 ? "sm:border-l sm:border-white/15" : ""
                }`}
              >
                <div className="font-scheherazade text-lg sm:text-xl font-bold text-white mb-0.5 leading-snug">
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