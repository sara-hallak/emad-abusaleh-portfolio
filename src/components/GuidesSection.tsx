"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { GUIDES_DATA, type GuideItem } from "@/data/guidesData";

function GuideCard({
  guide,
  index,
  currentLang,
}: {
  guide: GuideItem;
  index: number;
  currentLang: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.65,
        delay: index * 0.12,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Link
        href={`/${currentLang}/guides/${guide.id}`}
        className="group h-full bg-white rounded-[20px] border border-gray-100 overflow-hidden flex flex-col justify-between shadow-[0_2px_12px_rgba(1,68,130,0.04)] hover:shadow-[0_10px_26px_rgba(1,68,130,0.09)] transition-all duration-300 block"
      >
        <div>
          {/* الصورة مع زووم سينمائي مستمر */}
          <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100">
            <motion.img
              src={guide.image}
              alt={guide.title}
              animate={{ scale: [1, 1.07] }}
              transition={{
                duration: 7.5 + index * 1.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              className="w-full h-full object-cover object-center select-none"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/20 via-transparent to-transparent opacity-40 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" />
          </div>

          {/* محتوى الكرت */}
          <div className="p-5 sm:p-6 flex flex-col text-start">
            {/* سطر التصنيف والنوع الفرعي */}
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-xs font-semibold text-primary-blue">
                {guide.category}
              </span>
              <span className="text-xs text-gray-400 font-sans">
                {guide.subType}
              </span>
            </div>

            {/* العنوان الرئيسي للدليل */}
            <h3 className="font-scheherazade text-xl sm:text-[22px] font-bold text-dark-blue group-hover:text-primary-blue transition-colors duration-200 leading-snug mb-2">
              {guide.title}
            </h3>

            {/* الوصف المختصر */}
            <p className="font-scheherazade text-xs sm:text-[13px] text-gray-500 leading-relaxed line-clamp-3 font-normal">
              {guide.excerpt}
            </p>
          </div>
        </div>

        {/* التذييل السفلي: اقرأ المزيد وبجانبها الوسم */}
        <div className="px-5 pb-5 pt-2 sm:px-6 sm:pb-6 flex items-center justify-between border-t border-gray-50">
          <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-primary-blue group-hover:gap-2.5 transition-all duration-200">
            <span>اقرأ المزيد</span>
            <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-x-1" />
          </span>

          <span className="text-[11px] text-gray-400 font-sans">
            {guide.tagOrDate}
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

export const GuidesSection: React.FC = () => {
  const pathname = usePathname();
  const currentLang = pathname?.startsWith("/en") ? "en" : "ar";

  return (
    <section id="guides" className="w-full bg-white py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* الترويسة محاذاة لليمين مطابقة تماماً للصورة */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-start mb-8 sm:mb-11"
        >
          <h2 className="font-scheherazade text-3xl sm:text-4xl lg:text-[44px] font-bold text-dark-blue leading-tight mb-1.5">
            معرفة عملية قابلة للاستخدام
          </h2>
          <p className="font-scheherazade text-xs sm:text-sm lg:text-[15px] text-gray-500 font-normal leading-relaxed">
            أدلة ومواد معرفية تساعد على تطوير العمل، وتحويل المعرفة إلى خطوات عملية.
          </p>
        </motion.div>

        {/* شبكة الكروت الثلاثة */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 items-stretch">
          {GUIDES_DATA.map((guide, index) => (
            <GuideCard
              key={guide.id}
              guide={guide}
              index={index}
              currentLang={currentLang}
            />
          ))}
        </div>

        {/* زر "استكشف جميع الأدلة والمعرفة ←" مطابق للصورة */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 sm:mt-14 text-center"
        >
          <Link
            href={`/${currentLang}/guides`}
            className="inline-flex items-center justify-center gap-2 px-7 py-2.5 rounded-xl border border-primary-blue/60 text-primary-blue bg-white font-semibold text-xs sm:text-sm hover:bg-primary-blue hover:text-white transition-all duration-200 shadow-2xs hover:shadow-md cursor-pointer"
          >
            <span>استكشف جميع الأدلة والمعرفة</span>
            <ArrowLeft className="w-3.5 h-3.5" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
};