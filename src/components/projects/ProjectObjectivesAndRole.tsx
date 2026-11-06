"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { ProjectItem } from "@/data/projectsData";

interface ProjectObjectivesAndRoleProps {
  project?: ProjectItem | any;
}

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

export const ProjectObjectivesAndRole: React.FC<ProjectObjectivesAndRoleProps> = ({ project }) => {
  // 1. الأهداف المعتمدة للمشروع (الـ 4 كروت الزرقاء)
  const objectives = [
    {
      number: "01",
      title: "تحديد الأولويات المجتمعية",
      desc: "وضع إطار منهجي لتحديد الأولويات المجتمعية بدقة بالاستناد إلى البيانات الميدانية والاحتياجات الفعلية.",
    },
    {
      number: "02",
      title: "صياغة منظومة الرسائل",
      desc: "صياغة رسائل توعوية موجهة تعزز انخراط مختلف الشرائح والفئات الفاعلة في سياق العمل المجتمعي.",
    },
    {
      number: "03",
      title: "بناء الخطة التنفيذية الزمنية",
      desc: "بناء خطة تنفيذية زمنية واضحة المعالم وقابلة للقياس الميداني ومحددة المسؤوليات بالأدوار.",
    },
    {
      number: "04",
      title: "أدوات المتابعة والتقييم",
      desc: "توفير أدوات متابعة وتقييم دورية لكافة الأنشطة لضمان تصويب المسار وتوثيق النتائج بشكل مستمر.",
    },
  ];

  // 2. محاور دور عماد في المشروع (الـ 3 كروت الفضية)
  const roleCards = [
    {
      number: "01",
      title: "التخطيط الاستراتيجي وتحديد الأولويات",
      desc: "مراجعة السياق الميداني العام، تصنيف التحديات الملحة، وصياغة الأهداف المرحلية القابلة للإنجاز وفق جدول الموارد المتاحة.",
    },
    {
      number: "02",
      title: "تصميم مسار الأنشطة التنفيذية",
      desc: "وضع التسلسل الزمني المنطقي للمبادرة، وبناء جداول المهام والمسؤوليات، وتحديد نقاط التسليم المحورية لكل مرحلة.",
    },
    {
      number: "03",
      title: "تطوير أدوات التواصل والرسائل",
      desc: "إعداد مصفوفة الرسائل الموجهة للفئات المستهدفة وضبط لغة الخطاب الميداني لضمان التفاعل الإيجابي والمشاركة الواسعة.",
    },
  ];

  return (
    <section className="w-full py-8 md:py-14 bg-white" dir="rtl">
      <div className="max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* ========================================================
            الجزء 1: الأهداف المعتمدة للمشروع
           ======================================================== */}
        <div className="mb-14 sm:mb-18">
          {/* عنوان الأهداف */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="text-right mb-6 sm:mb-8"
          >
            <h2 className="font-scheherazade text-3xl sm:text-4xl font-bold text-[#014482]">
              الأهداف المعتمدة للمشروع
            </h2>
          </motion.div>

          {/* الكروت الأربعة الزرقاء */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {objectives.map((item, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group relative bg-gradient-to-br from-[#1874C7] via-[#0E5CA8] to-[#014482] text-white rounded-2xl p-5 sm:p-6 text-right shadow-md shadow-blue-950/10 hover:shadow-xl hover:shadow-blue-900/20 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-default min-h-[175px]"
              >
                {/* لمعة زاوية خفيفة */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-xl pointer-events-none" />

                <div>
                  {/* الرقم في الأعلى */}
                  <div className="flex items-center  mb-3">
                    <span className="text-sm font-sans font-bold text-white/60">
                      {item.number}
                    </span>
                  </div>

                  {/* العنوان */}
                  <h3 className="font-scheherazade text-lg sm:text-[19px] font-bold text-white mb-2 leading-snug">
                    {item.title}
                  </h3>

                  {/* الوصف */}
                  <p className="text-xs sm:text-[12.5px] text-blue-50/90 font-sans leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ========================================================
            الجزء 2: دور عماد في المشروع
           ======================================================== */}
        <div>
          {/* عنوان دور عماد */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="text-right mb-6 sm:mb-8"
          >
            <h2 className="font-scheherazade text-3xl sm:text-4xl font-bold text-[#014482]">
              دور عماد في المشروع
            </h2>
          </motion.div>

          {/* الحاوية الكبرى البيضاء */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white border border-slate-200/80 rounded-[26px] p-6 sm:p-8 lg:p-10 text-right shadow-xs"
          >
            {/* الترويسة والشرح */}
            <div className="mb-8">
              <h3 className="font-scheherazade text-xl sm:text-2xl font-bold text-[#1874C7] mb-2.5">
                القيادة الاستشارية والتنسيق
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed font-normal max-w-5xl">
                تولى عماد قيادة صياغة الإطار العام للمبادرة وهندسة العمليات التخطيطية، من خلال تيسير الحوارات البناءة بين القائمين على المشروع وصياغة المساطر التشغيلية بما يكفل التوازن بين البعد الاستراتيجي والواقع الميداني، دون التدخل في المهام اللوجستية المنوطة بفريق العمل الميداني.
              </p>
            </div>

            {/* الكروت الثلاثة الفضية */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {roleCards.map((card, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="group relative bg-[#F5F6F7] hover:bg-white border border-slate-200/60 hover:border-slate-300 rounded-2xl p-5 sm:p-6 text-right transition-all duration-300 hover:shadow-md hover:shadow-blue-900/5 overflow-hidden flex flex-col justify-between"
                >
                  {/* خط أزرق علوي يظهر عند الهوفر */}
                  <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-[#1874C7] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div>
                    {/* الرقم في الأعلى */}
                    <div className="flex items-center mb-2">
                      <span className="text-sm font-sans font-bold text-[#1874C7]">
                        {card.number}
                      </span>
                    </div>

                    {/* خط فاصل أفقي مطابق للصورة */}
                    <div className="w-full h-[1px] bg-slate-200/70 mb-3 group-hover:bg-blue-100 transition-colors" />

                    {/* العنوان */}
                    <h4 className="font-scheherazade text-base sm:text-lg font-bold text-[#014482] group-hover:text-[#1874C7] mb-2 transition-colors duration-200 leading-snug">
                      {card.title}
                    </h4>

                    {/* الوصف */}
                    <p className="text-xs sm:text-[12.5px] text-slate-600 font-sans leading-relaxed font-normal">
                      {card.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};