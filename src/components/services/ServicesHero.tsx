"use client";

import React from "react";
import { motion } from "framer-motion";

const SERVICE_HIGHLIGHTS = [
  { number: "01", title: "حملات كسب التأييد/المناصرة" },
  { number: "02", title: "التدريب وبناء القدرات" },
  { number: "03", title: "إعداد الأدلة والأطر المعرفية" },
  { number: "04", title: "الإرشاد والتوجيه المهني" },
];

export const ServicesHero: React.FC = () => {
  return (
    <section
      id="services-hero"
      dir="rtl"
      className="relative w-full bg-white pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pt-14 lg:pb-20 overflow-hidden"
    >
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">
          
          {/* ========================================================
              العمود الأيمن (في RTL): النصوص والمحاور الأربعة
             ======================================================== */}
          <div className="lg:col-span-6 flex flex-col text-start">
            
            {/* الشارة العلوية */}
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-xs sm:text-sm font-semibold text-primary-blue mb-2 block"
            >
              خدمات عماد أبو صالح الفناطسة
            </motion.span>

            {/* العنوان الرئيسي مع صعود ناعم */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="font-scheherazade text-4xl sm:text-5xl lg:text-[54px] xl:text-[58px] font-bold text-dark-blue leading-[1.2] tracking-tight mb-4"
            >
              من التخطيط إلى التنفيذ
            </motion.h1>

            {/* الفقرة التوضيحية مع مسافة أسطر مريحة ومقروءة */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
              className="font-scheherazade text-base sm:text-lg lg:text-[20px] text-gray-700 leading-[1.85] font-normal mb-7 max-w-xl"
            >
              أقدّم خبرة عملية في التخطيط وقيادة حملات كسب التأييد والمناصرة، والتدريب، وإعداد الأدلة، والإرشاد المهني؛ لمساعدة الأفراد والفرق والمؤسسات على تحويل احتياجاتهم إلى خطوات عملية واضحة.
            </motion.p>

            {/* خط فاصل يرسم نفسه بنعومة من اليمين إلى اليسار */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.75, delay: 0.25, ease: "easeOut" }}
              className="w-full h-px bg-gray-200/80 mb-6 origin-right"
            />

            {/* قائمة الخدمات الأربعة (شبكة 2x2 بهوفر مخملي هادئ) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3.5 gap-x-6">
              {SERVICE_HIGHLIGHTS.map((item, index) => (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.35 + index * 0.09,
                    ease: "easeOut",
                  }}
                  whileHover={{ x: -3 }}
                  className="group flex items-start gap-3 p-1.5 -mx-1.5 rounded-xl hover:bg-slate-50/80 transition-colors duration-200 cursor-default"
                >
                  {/* الرقم باللون الأزرق */}
                  <span className="font-sans text-xs sm:text-sm font-bold text-primary-blue mt-0.5 shrink-0 group-hover:scale-105 transition-transform duration-200">
                    {item.number}
                  </span>

                  {/* اسم الخدمة */}
                  <span className="font-scheherazade text-sm sm:text-base lg:text-[17px] font-bold text-dark-blue group-hover:text-primary-blue transition-colors duration-200 leading-snug">
                    {item.title}
                  </span>
                </motion.div>
              ))}
            </div>

          </div>

          {/* ========================================================
              العمود الأيسر (في RTL): الصورة الكبيرة جداً مع زووم سينمائي
             ======================================================== */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 w-full flex justify-center relative"
          >
            {/* هالة ضوئية محيطية خلف الصورة تعطيها فخامة وبروزاً كبيراً */}
            <div className="absolute -inset-4 bg-primary-blue/5 rounded-[36px] blur-2xl pointer-events-none -z-10" />

            {/* إطار الصورة المكبر والمستقل */}
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] max-w-[620px] rounded-[26px] sm:rounded-[30px] overflow-hidden bg-slate-100 shadow-2xl shadow-blue-950/10 border border-gray-100/80"
            >
              {/* الصورة مع حركة زووم سينمائية مستمرة (Ken Burns) */}
              <motion.img
                src="https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?auto=format&fit=crop&w=1400&q=80"
                alt="ورشة عمل تدريبية وتخطيط ميداني"
                animate={{
                  scale: [1, 1.07],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
                className="w-full h-full object-cover object-center select-none"
                loading="eager"
              />

              {/* تدرج لوني خفيف جداً يمنح الصورة عمقاً جذاباً */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/20 via-transparent to-transparent opacity-50 pointer-events-none" />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};