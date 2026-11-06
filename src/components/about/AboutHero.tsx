"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

interface AboutHeroProps {
  lang?: string;
  imageSrc?: string;
}

// مكون العدّاد الرقمي التفاعلي
function AnimatedCounter({
  target,
  prefix = "",
  suffix = "",
  duration = 2,
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = target;
    const stepTime = 16;
    const totalSteps = (duration * 1000) / stepTime;
    const increment = end / totalSteps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {count.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}

export default function AboutHero({
  lang = "ar",
  imageSrc = "/images/emad-portrait.jpg",
}: AboutHeroProps) {
  const credentials = [
    {
      target: 18,
      prefix: "+",
      label: "عاماً من الخبرة الاستشارية والتنموية",
      detail: "خبرة مهنية",
    },
    {
      target: 140,
      prefix: "+",
      label: "منظمة ومؤسسة دولية ومحلية شريكة",
      detail: "شراكات مؤسسية",
    },
    {
      target: 900,
      prefix: "+",
      label: "نشاط وتدخل استراتيجي وميداني",
      detail: "إنجازات ميدانية",
    },
    {
      target: 2023,
      prefix: "",
      label: "عضوية نقابة المحامين الأردنيين",
      detail: "اعتماد مهني",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      dir="rtl"
      className="relative isolate overflow-hidden bg-white text-right"
    >
      {/* 1. تدرج الخلفية الريشي المنساب */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute left-1/2 top-10 h-[520px] w-[520px] sm:w-[750px] -translate-x-1/2 rounded-full opacity-55 blur-[130px]"
          style={{
            background:
              "radial-gradient(circle, rgba(24, 116, 199, 0.16) 0%, rgba(56, 189, 248, 0.06) 45%, transparent 75%)",
          }}
        />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-[#1874C7]/20 to-transparent" />
      </div>

      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">

        {/* ========================================================
            2. الاسم والتوصيف مع أنيميشن ناعم
            ======================================================= */}
        <div className="pt-10 sm:pt-14 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <h1 className="font-scheherazade text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold text-[#014482] leading-tight mb-2 drop-shadow-2xs">
              عماد أبو صالح الفناطسة
            </h1>

            <p className="font-sans text-xs sm:text-sm md:text-base text-[#1874C7] font-semibold max-w-xl leading-relaxed">
              مستشار استراتيجي وباحث قانوني في السياسات التنموية وبناء التحالفات
            </p>
          </motion.div>
        </div>

        {/* ========================================================
            3. صورة عماد: حركة المستطيل المائل وزووم وهوفر تفاعلي
            ======================================================= */}
        <div className="relative mx-auto mt-7 sm:mt-9 w-full max-w-[290px] sm:max-w-[320px] group">
          
          {/* المستطيل المائل الخلفي بتدريج الأزرق الملكي */}
          <motion.div
            initial={{ opacity: 0, rotate: -8, scale: 0.9 }}
            animate={{ opacity: 1, rotate: -4, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="absolute -inset-1.5 rounded-[28px] pointer-events-none transition-transform duration-500 ease-out group-hover:rotate-[-6deg] group-hover:scale-105 shadow-[0_15px_40px_-10px_rgba(24,116,199,0.35)]"
            style={{
              background:
                "linear-gradient(135deg, #1874C7 0%, #085da8 45%, #014482 85%, #012b54 100%)",
            }}
          />

          {/* هالة توهج خلفية ناعمة */}
          <div 
            className="absolute -inset-4 rounded-[36px] pointer-events-none opacity-60 blur-xl group-hover:opacity-90 transition-opacity duration-500"
            style={{
              background:
                "radial-gradient(circle, rgba(24, 116, 199, 0.4) 0%, rgba(1, 68, 130, 0.2) 60%, transparent 80%)",
            }}
          />

          {/* حاوية الصورة الأساسية */}
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-[4/5] overflow-hidden rounded-[26px] bg-[#014482] p-1.5  shadow-[0_16px_45px_-12px_rgba(1,68,130,0.28)] transition-all duration-500 group-hover:-translate-y-1.5"
            style={{
              background: "linear-gradient(160deg, #1874C7 0%, #014482 70%, #012547 100%)",
            }}
          >
            {/* لمعة إضاءة زجاجية علوية */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/20 pointer-events-none rounded-[24px] z-10" />

            <img
              src={imageSrc}
              alt="عماد أبو صالح الفناطسة"
              className="h-full w-full object-cover object-top rounded-[20px] select-none transition-transform duration-700 ease-out group-hover:scale-110 relative z-0"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src =
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=85";
              }}
            />
          </motion.div>

          {/* كبسولة التوصيف أسفل الصورة */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="absolute -bottom-3.5 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-full border border-slate-200/90 bg-white/95 backdrop-blur-md px-4 sm:px-5 py-1.5 shadow-md shadow-blue-900/10 group-hover:-translate-y-1 group-hover:border-[#1874C7]/50 transition-all duration-300"
          >
            <span className="text-[11px] sm:text-xs font-sans font-semibold text-[#014482]">
              مستشار استراتيجي وباحث قانوني
            </span>
          </motion.div>
        </div>

        {/* ========================================================
            4. النبذة التوضيحية وزر الإجراء
            ======================================================= */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mx-auto mt-10 sm:mt-11 max-w-[680px] text-center"
        >
          <h2 className="mb-2.5 font-scheherazade text-xl sm:text-2xl font-bold text-[#014482]">
            الخبرة في خدمة الرؤية والأثر التنموي
          </h2>

          <p className="font-sans text-xs sm:text-sm leading-[2] text-slate-600 font-normal mb-6">
            خبير سياساتي وتنموي بخبرة تزيد عن 18 عاماً في هندسة المبادرات وتيسير
            الحوار التوافقي والتمكين المؤسسي. حاصل على بكالوريوس في العلاقات
            الدولية والدراسات الاستراتيجية، وبكالوريوس في القانون وباحث
            ماجستير في القانون، وعضو في نقابة المحامين الأردنيين. قاد وأشرف
            على أكثر من 900 تدخل استشاري وتدريبي بالتعاون مع كبرى الهيئات
            الدولية والوطنية، مكرساً مسيرته لربط الرؤى السياساتية بالأثر
            المجتمعي المستدام.
          </p>

          <Link
            href={`/${lang}/contact`}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#014482] hover:bg-[#1874C7] active:scale-95 px-7 py-2.5 sm:py-3 font-sans text-xs sm:text-[13px] font-semibold text-white shadow-xs hover:shadow-md hover:shadow-blue-900/15 transition-all duration-300 hover:-translate-y-0.5 group/btn"
          >
            <span>طلب استشارة أو تواصل مباشر</span>
            <span className="transition-transform duration-300 group-hover/btn:-translate-x-1">
              ←
            </span>
          </Link>
        </motion.div>

        {/* ========================================================
            5. مؤشرات الخبرة مع هوفر الكروت
            ======================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 sm:mt-14 border-t border-slate-200/80 pt-8 sm:pt-10 pb-12 text-center"
        >
          <div className="mb-6">
            <span className="text-[11px] sm:text-xs font-sans font-medium text-[#1874C7] block mb-0.5">
              مؤشرات الاعتماد
            </span>
            <h3 className="font-scheherazade text-xl sm:text-2xl font-bold text-[#014482]">
              ركائز الخبرة والإنجاز الميداني
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
            {credentials.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group relative bg-white border border-slate-200/90 hover:border-slate-300 rounded-2xl p-4 sm:p-5 text-center shadow-2xs hover:shadow-md hover:shadow-blue-900/5 transition-all duration-300 overflow-hidden flex flex-col items-center justify-center"
              >
                {/* الخط الأزرق العلوي عند الهوفر */}
                <div className="absolute top-0 inset-x-0 h-[2.5px] bg-[#1874C7] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <span className="mb-2 px-2.5 py-0.5 rounded-md bg-blue-50 text-[#1874C7] text-[10px] sm:text-[11px] font-sans font-medium">
                  {item.detail}
                </span>

                <span className="font-scheherazade text-3xl sm:text-4xl font-bold leading-none text-[#1874C7] group-hover:text-[#014482] transition-colors duration-300 mb-1.5">
                  <AnimatedCounter
                    target={item.target}
                    prefix={item.prefix}
                    duration={1.8}
                  />
                </span>

                <span className="max-w-[155px] font-sans text-[11px] sm:text-xs leading-relaxed text-slate-500 font-normal">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}