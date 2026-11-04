"use client";

import React, { useState } from "react";
import { motion, type Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const ContactContent: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const emailAddress = "emad.abusaleh@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const questions = [
    {
      step: "01 — الغاية",
      title: "ما الاحتياج؟",
      desc: "وصف موجز للتحدي أو الغاية الأساسية والمخرجات المنشودة من التعاون الاستراتيجي.",
    },
    {
      step: "02 — الهوية",
      title: "من الجهة؟",
      desc: "طبيعة المؤسسة، أو الائتلاف، أو المبادرة، وسياق عمل الفريق المعني بالمشروع.",
    },
    {
      step: "03 — المسار",
      title: "ما نوع المشروع؟",
      desc: "تخطيط استراتيجي، ميسرة حوار، توثيق معرفي مؤسسي، أو برنامج تدريبي متخصص.",
    },
    {
      step: "04 — الأفق",
      title: "ما الموعد المتوقع؟",
      desc: "الإطار الزمني المقترح لبدء العمل، والمدى الزمني التقديري لتحقيق الأهداف المحددة.",
    },
  ];

  return (
    <section className="w-full py-12 md:py-16 bg-white" dir="rtl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* ========================================================
            1. الهيدر العلوي: العنوان وبطاقة التوثيق والاستشارات
           ======================================================== */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10 md:mb-14">
          
          {/* العنوان والشرح على اليمين */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-right max-w-2xl"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#014482] font-scheherazade leading-tight mb-3">
              هل لديك مشروع أو احتياج؟
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans font-normal">
              يسعدني الترحيب بمبادرات التعاون والمشاريع الاستشارية والتدريبية، ومناقشة احتياجات مؤسستك أو فريقك بمسؤولية ومهنية تامة.
            </p>
          </motion.div>

          {/* كرت التوثيق والاستشارات 2025 على اليسار */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="bg-white border border-slate-100 rounded-2xl p-4 sm:p-5 border-r-2 border-r-[#1874C7] shadow-xs text-right max-w-sm"
          >
            <h3 className="text-base sm:text-lg font-bold text-[#1874C7] font-scheherazade mb-1">
              توثيق واستشارات 2025
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed font-sans font-normal">
              مساحة مخصصة للحوارات المؤسسية والمشاريع التنموية والبحثية الكبرى.
            </p>
          </motion.div>

        </div>

        {/* ========================================================
            2. الشبكة الرئيسية: الكرت الأزرق + قسم "ماذا ترسل؟"
           ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch mb-10">
          
          {/* كرت البريد الرسمي المباشر المتدرج (lg:col-span-5) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="lg:col-span-5 bg-gradient-to-br from-[#1874C7] via-[#0D5BA8] to-[#014482] text-white rounded-2xl p-6 sm:p-7 shadow-lg shadow-blue-900/10 relative overflow-hidden flex flex-col justify-between"
          >
            {/* لمعة خفيفة بالخلفية */}
            <div className="absolute top-0 right-0 w-44 h-44 bg-white/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              {/* الرأس: الأيقونة وشارة البريد */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-md flex items-center justify-center text-white">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>

                <span className="text-xs font-sans font-medium text-white/90 bg-white/15 px-3 py-1 rounded-full backdrop-blur-md border border-white/20">
                  البريد الرسمي المباشر
                </span>
              </div>

              {/* عنوان حقل البريد */}
              <span className="text-xs text-blue-100/80 block mb-2 font-sans">
                البريد الرسمي المباشر
              </span>

              {/* صندوق البريد الإلكتروني مع زر النسخ */}
              <div className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 flex items-center justify-between text-white backdrop-blur-xs mb-3">
                <span className="font-mono text-xs sm:text-sm font-medium tracking-wide">
                  {emailAddress}
                </span>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  title="نسخ البريد الإلكتروني"
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-white/25 text-white transition-colors cursor-pointer"
                >
                  {copied ? (
                    <svg className="w-4 h-4 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4 text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  )}
                </button>
              </div>

              {/* النص التوضيحي للخصوصية والرد المباشر */}
              <p className="text-xs text-blue-100/85 leading-relaxed font-sans mb-8">
                تصل جميع الرسائل مباشرة ودون وسطاء، وتُراجع بعناية شخصية لضمان الاستجابة الدقيقة خلال أوقات العمل الرسمية.
              </p>
            </div>

            {/* زر إرسال البريد الإلكتروني الأبيض */}
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              href={`mailto:${emailAddress}`}
              className="w-full py-3 px-4 rounded-xl bg-white hover:bg-blue-50 text-[#014482] font-semibold text-center text-sm font-sans transition-all duration-200 shadow-md cursor-pointer block"
            >
              إرسال بريد إلكتروني
            </motion.a>
          </motion.div>

          {/* قسم "ماذا ترسل؟" والأسئلة الأربعة (lg:col-span-7) */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-4">
            
            {/* الصندوق الفضي العلوي */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#F5F6F7] rounded-2xl p-5 text-right border border-slate-100"
            >
              <h2 className="text-xl font-bold text-[#014482] font-scheherazade mb-1.5">
                ماذا ترسل؟
              </h2>
              <p className="text-xs md:text-[13px] text-slate-500 font-sans leading-relaxed">
                إليك بضعة عناصر موجزة تساعد في توضيح فكرة الطلب والتحضير لنقاش مثمر:
              </p>
            </motion.div>

            {/* شبكة الأسئلة الأربعة (2x2) مع بوردر ناعم ومخفف */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1"
            >
              {questions.map((q, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -2, transition: { duration: 0.2 } }}
                  className="bg-white border border-slate-100 hover:border-slate-200/80 rounded-xl p-4 sm:p-4.5 text-right border-r-2 border-r-[#1874C7] shadow-2xs hover:shadow-md hover:shadow-blue-500/5 transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[11px] font-sans font-medium text-[#1874C7] block mb-1">
                      {q.step}
                    </span>
                    <h3 className="text-base font-bold text-[#014482] font-scheherazade mb-1.5 leading-snug">
                      {q.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-sans leading-relaxed font-normal">
                      {q.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </div>

        </div>

        {/* ========================================================
            3. الشريط السفلي: التوثيق المهني ورابط LinkedIn
           ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="w-full bg-[#F5F6F7] border border-slate-100 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-right shadow-2xs"
        >
          {/* بيانات التوثيق على اليمين */}
          <div className="flex items-center gap-3.5 w-full sm:w-auto">
            <div className="w-10 h-10 rounded-xl bg-[#1874C7] flex items-center justify-center text-white flex-shrink-0 shadow-xs">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>

            <div>
              <h4 className="text-sm font-bold text-[#014482] font-scheherazade">
                الحضور والتوثيق المهني الرسمي
              </h4>
              <p className="text-[11px] text-slate-500 font-sans">
                شبكة العلاقات المهنية وتحديثات السيرة الاستشارية المعتمدة
              </p>
            </div>
          </div>

          {/* زر لينكدإن على اليسار */}
          <a
            href="https://www.linkedin.com/in/emad-abusaleh"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-100 hover:border-slate-200 text-[#014482] font-sans text-xs font-semibold flex items-center justify-center gap-2 transition-all duration-200 shadow-2xs group cursor-pointer"
          >
            <svg className="w-4 h-4 text-[#1874C7] group-hover:scale-105 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            <span>الملف المهني على LinkedIn</span>
          </a>

        </motion.div>

      </div>
    </section>
  );
};