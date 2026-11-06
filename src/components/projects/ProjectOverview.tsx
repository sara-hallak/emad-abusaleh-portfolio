"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { ProjectItem } from "@/data/projectsData";

interface ProjectOverviewProps {
  project?: ProjectItem | any;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const ProjectOverview: React.FC<ProjectOverviewProps> = ({ project }) => {
  // المحددات المنهجية الأربعة
  const methodologyItems = [
    { label: "نطاق الاستهداف", value: "الفعاليات المحلية والفرق الميدانية" },
    { label: "طبيعة التدخل", value: "تخطيط هيكلي وتوجيه تنفيذي" },
    { label: "النهج المتبع", value: "التخطيط التشاركي والتحليل الاستراتيجي" },
    { label: "نمط المخرجات", value: "أدلة إجرائية ومصفوفات تواصل" },
  ];

  return (
    <section className="w-full py-8 md:py-14 bg-white" dir="rtl">
      <div className="max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* ========================================================
            1. عنوان السكشن الرئيسي (أعلى اليمين)
           ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45 }}
          className="text-right mb-6 md:mb-8"
        >
          <h2 className="font-scheherazade text-3xl sm:text-4xl font-bold text-[#014482]">
            نبذة عن المشروع
          </h2>
        </motion.div>

        {/* ========================================================
            2. البطاقة العلوية الكبرى: السياق الاستراتيجي والتوثيقي
           ======================================================== */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
          whileHover={{ y: -3, transition: { duration: 0.2 } }}
          className="group relative bg-white border border-slate-200/80 hover:border-slate-300 rounded-[22px] p-6 sm:p-8 lg:p-9 text-right shadow-xs hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300 mb-6 overflow-hidden"
        >
          {/* الشريط الأزرق الجانبي المنحني بأقصى اليمين */}
          <div className="absolute top-0 right-0 bottom-0 w-1.5 bg-[#1874C7] rounded-r-2xl transition-all duration-300 group-hover:w-2" />

          <div className="pr-2 sm:pr-3">
            <h3 className="font-scheherazade text-xl sm:text-2xl font-bold text-[#1874C7] mb-3">
              السياق الاستراتيجي والتوثيقي
            </h3>

            {/* الفقرة الأولى */}
            <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed mb-3.5 font-normal">
              تنبع أهمية هذا المشروع من الضرورة الميدانية لبناء نموذج استراتيجي وتشاركي يعيد صياغة أساليب التفاعل مع المجتمعات المحلية. لا تكمن فعالية البرامج التنموية في مجرد صياغة النوايا الحسنة، بل في تطوير وثائق إجرائية دقيقة تنظم حركة الموارد البشرية وتحدد قنوات الاتصال الفعالة.
            </p>

            {/* الفقرة الثانية */}
            <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed mb-6 font-normal">
              تم تركيز الجهد التخطيطي على صياغة مسار عملي يربط بين الأولويات الاستراتيجية وبين الممارسة الميدانية اليومية، مع تعزيز جاهزية فرق العمل للتعامل مع المتغيرات الواقعية دون الحياد عن الأثر المنشود، مع احترام السياقات الثقافية والاجتماعية الفريدة لكل بيئة عمل.
            </p>

            {/* الصندوق الفضي لمخرجات التيسير */}
            <div className="relative bg-[#F5F6F7] rounded-xl p-4 sm:p-5 text-right border-r-[3px] border-r-[#1874C7]">
              <p className="text-xs sm:text-[13px] text-slate-600 font-sans leading-relaxed font-normal">
                اعتمد المشروع نهج التيسير المشترك، حيث جرى تحويل مخرجات جلسات النقاش التحضيرية إلى مؤشرات أداء واضحة تجاوزت الصياغات النظرية التقليدية لصالح آليات عمل قابلة للتطبيق.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ========================================================
            3. الصف السفلي: التحدي الميداني (يمين) + المحددات المنهجية (يسار)
           ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-6 items-stretch">
          
          {/* البطاقة اليمنى (في RTL): التحدي الميداني القائم (lg:col-span-7) */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-30px" }}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="group relative lg:col-span-7 bg-white border border-slate-200/80 hover:border-slate-300 rounded-[22px] p-6 sm:p-8 text-right shadow-xs hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300 flex flex-col justify-between overflow-hidden"
          >
            {/* الشريط الأزرق الجانبي */}
            <div className="absolute top-0 right-0 bottom-0 w-1.5 bg-[#1874C7] rounded-r-2xl transition-all duration-300 group-hover:w-2" />

            <div className="pr-2 sm:pr-3">
              <h3 className="font-scheherazade text-xl sm:text-2xl font-bold text-[#1874C7] mb-3">
                التحدي الميداني القائم
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed mb-6 font-normal">
                تمثل التحدي الرئيس في تشتت الجهود الميدانية وغياب جدول زمني منسق يربط بين المبادرات المنفصلة، إلى جانب صعوبة تحويل الأهداف الاستراتيجية الواسعة إلى أنشطة محددة يتفاعل معها المجتمع المحلي بوضوح، مما كان يهدد بضعف الاستجابة وهدر الطاقات التنفيذية دون تحقيق أثر مستدام.
              </p>

              {/* صندوق نقطة الارتكاز الفضي */}
              <div className="bg-[#F5F6F7] rounded-xl p-3.5 sm:p-4 text-right">
                <span className="text-[11px] font-bold text-[#1874C7] font-sans block mb-1">
                  نقطة الارتكاز:
                </span>
                <p className="text-xs text-slate-600 font-sans leading-relaxed font-normal">
                  الحاجة إلى جسر منهجي مرن ينقل الفكرة من الأروقة النظرية إلى التنفيذ الفعلي المنضبط.
                </p>
              </div>
            </div>
          </motion.div>

          {/* البطاقة اليسرى (في RTL): المحددات المنهجية العامة (lg:col-span-5) */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-30px" }}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="group relative lg:col-span-5 bg-white border border-slate-200/80 hover:border-slate-300 rounded-[22px] p-6 sm:p-8 text-right shadow-xs hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300 flex flex-col justify-between overflow-hidden"
          >
            {/* الشريط الأزرق الجانبي */}
            <div className="absolute top-0 right-0 bottom-0 w-1.5 bg-[#1874C7] rounded-r-2xl transition-all duration-300 group-hover:w-2" />

            <div className="pr-2 sm:pr-3 flex flex-col justify-between h-full">
              <div>
                <h3 className="font-scheherazade text-xl sm:text-2xl font-bold text-[#1874C7] mb-5">
                  المحددات المنهجية العامة
                </h3>

                {/* قائمة المحددات الأربعة */}
                <div className="space-y-3.5">
                  {methodologyItems.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between gap-3 pb-2.5 border-b border-slate-100 last:border-b-0"
                    >
                      <span className="text-xs sm:text-sm text-slate-600 font-sans font-normal order-1">
                        {item.value}
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-[#1874C7] font-sans order-2 shrink-0">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* الملاحظة المنهجية في الأسفل */}
              <div className="pt-4 mt-6 border-t border-slate-100">
                <p className="text-[11px] text-slate-400 font-sans leading-relaxed">
                  تم إعداد هذه المنهجية لضمان انسجام السياسات المؤسسية مع الواقع الميداني وتفادي الفجوات التنفيذية.
                </p>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};