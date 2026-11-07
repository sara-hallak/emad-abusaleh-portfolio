"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { usePathname, useParams } from "next/navigation";
import { ProjectItem } from "@/data/projectsData";

interface ProjectOverviewProps {
  project?: ProjectItem | any;
  lang?: string;
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

export const ProjectOverview: React.FC<ProjectOverviewProps> = ({
  project,
  lang: propLang,
}) => {
  // كشف اللغة تلقائياً من الرابط أو البروبس
  const pathname = usePathname();
  const params = useParams();
  const currentLang =
    propLang || (params?.lang as string) || (pathname?.startsWith("/en") ? "en" : "ar");
  const isEn = currentLang === "en";

  // المحددات المنهجية الأربعة باللغتين
  const methodologyItems = [
    {
      label: isEn ? "Target Scope" : "نطاق الاستهداف",
      value: isEn ? "Local Stakeholders & Field Teams" : "الفعاليات المحلية والفرق الميدانية",
    },
    {
      label: isEn ? "Intervention Nature" : "طبيعة التدخل",
      value: isEn ? "Structural Planning & Executive Guidance" : "تخطيط هيكلي وتوجيه تنفيذي",
    },
    {
      label: isEn ? "Applied Approach" : "النهج المتبع",
      value: isEn ? "Participatory Planning & Strategic Analysis" : "التخطيط التشاركي والتحليل الاستراتيجي",
    },
    {
      label: isEn ? "Output Format" : "نمط المخرجات",
      value: isEn ? "Procedural Guides & Communication Matrices" : "أدلة إجرائية ومصفوفات تواصل",
    },
  ];

  return (
    <section
      dir={isEn ? "ltr" : "rtl"}
      className="w-full py-8 md:py-14 bg-white text-start"
    >
      <div className="max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* ========================================================
            1. عنوان السكشن الرئيسي
           ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45 }}
          className="text-start mb-6 md:mb-8"
        >
          <h2
            className={`text-3xl sm:text-4xl font-bold text-[#014482] ${
              isEn ? "font-sans" : "font-scheherazade"
            }`}
          >
            {isEn ? "Project Overview" : "نبذة عن المشروع"}
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
          className="group relative bg-white border border-slate-200/80 hover:border-slate-300 rounded-[22px] p-6 sm:p-8 lg:p-9 text-start shadow-xs hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300 mb-6 overflow-hidden"
        >
          {/* الشريط الأزرق الجانبي المنحني المتكيف تلقائياً مع البداية */}
          <div className="absolute top-0 start-0 bottom-0 w-1.5 bg-[#1874C7] rounded-s-2xl transition-all duration-300 group-hover:w-2" />

          <div className="ps-2 sm:ps-3">
            <h3
              className={`text-xl sm:text-2xl font-bold text-[#1874C7] mb-3 ${
                isEn ? "font-sans" : "font-scheherazade"
              }`}
            >
              {isEn ? "Strategic & Documenting Context" : "السياق الاستراتيجي والتوثيقي"}
            </h3>

            {/* الفقرة الأولى */}
            <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed mb-3.5 font-normal">
              {isEn
                ? "The strategic imperative of this project arises from the field necessity of establishing a participatory model that restructures engagement with local communities. Sustainable development outcomes do not stem from goodwill alone, but from formulating rigorous procedural instruments that optimize human resources and establish effective communication channels."
                : "تنبع أهمية هذا المشروع من الضرورة الميدانية لبناء نموذج استراتيجي وتشاركي يعيد صياغة أساليب التفاعل مع المجتمعات المحلية. لا تكمن فعالية البرامج التنموية في مجرد صياغة النوايا الحسنة، بل في تطوير وثائق إجرائية دقيقة تنظم حركة الموارد البشرية وتحدد قنوات الاتصال الفعالة."}
            </p>

            {/* الفقرة الثانية */}
            <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed mb-6 font-normal">
              {isEn
                ? "Planning efforts centered on establishing a practical roadmap bridging high-level strategic priorities with day-to-day frontline practice, enhancing team readiness to navigate operational shifts while safeguarding intended outcomes and respecting localized socio-cultural contexts."
                : "تم تركيز الجهد التخطيطي على صياغة مسار عملي يربط بين الأولويات الاستراتيجية وبين الممارسة الميدانية اليومية، مع تعزيز جاهزية فرق العمل للتعامل مع المتغيرات الواقعية دون الحياد عن الأثر المنشود، مع احترام السياقات الثقافية والاجتماعية الفريدة لكل بيئة عمل."}
            </p>

            {/* الصندوق الفضي لمخرجات التيسير */}
            <div className="relative bg-[#F5F6F7] rounded-xl p-4 sm:p-5 text-start border-s-[3px] border-s-[#1874C7]">
              <p className="text-xs sm:text-[13px] text-slate-600 font-sans leading-relaxed font-normal">
                {isEn
                  ? "The project adopted a collaborative facilitation approach, translating consultative dialogue outcomes into concrete performance benchmarks that moved beyond theoretical rhetoric into actionable delivery mechanisms."
                  : "اعتمد المشروع نهج التيسير المشترك، حيث جرى تحويل مخرجات جلسات النقاش التحضيرية إلى مؤشرات أداء واضحة تجاوزت الصياغات النظرية التقليدية لصالح آليات عمل قابلة للتطبيق."}
              </p>
            </div>
          </div>
        </motion.div>

        {/* ========================================================
            3. الصف السفلي: التحدي الميداني + المحددات المنهجية
           ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-6 items-stretch">
          
          {/* البطاقة الأولى: التحدي الميداني القائم (lg:col-span-7) */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-30px" }}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="group relative lg:col-span-7 bg-white border border-slate-200/80 hover:border-slate-300 rounded-[22px] p-6 sm:p-8 text-start shadow-xs hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300 flex flex-col justify-between overflow-hidden"
          >
            <div className="absolute top-0 start-0 bottom-0 w-1.5 bg-[#1874C7] rounded-s-2xl transition-all duration-300 group-hover:w-2" />

            <div className="ps-2 sm:ps-3">
              <h3
                className={`text-xl sm:text-2xl font-bold text-[#1874C7] mb-3 ${
                  isEn ? "font-sans" : "font-scheherazade"
                }`}
              >
                {isEn ? "Prevailing Field Challenge" : "التحدي الميداني القائم"}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed mb-6 font-normal">
                {isEn
                  ? "The primary challenge lay in fragmented frontline efforts and the absence of a synchronized timeline across isolated initiatives, coupled with the friction of translating broad strategic goals into tangible activities that resonate clearly with local communities, which previously risked diluted community response and wasted delivery capacity."
                  : "تمثل التحدي الرئيس في تشتت الجهود الميدانية وغياب جدول زمني منسق يربط بين المبادرات المنفصلة، إلى جانب صعوبة تحويل الأهداف الاستراتيجية الواسعة إلى أنشطة محددة يتفاعل معها المجتمع المحلي بوضوح، مما كان يهدد بضعف الاستجابة وهدر الطاقات التنفيذية دون تحقيق أثر مستدام."}
              </p>

              {/* صندوق نقطة الارتكاز الفضي */}
              <div className="bg-[#F5F6F7] rounded-xl p-3.5 sm:p-4 text-start">
                <span className="text-[11px] font-bold text-[#1874C7] font-sans block mb-1">
                  {isEn ? "Core Fulcrum:" : "نقطة الارتكاز:"}
                </span>
                <p className="text-xs text-slate-600 font-sans leading-relaxed font-normal">
                  {isEn
                    ? "The imperative need for a flexible methodological bridge translating conceptual vision into disciplined field execution."
                    : "الحاجة إلى جسر منهجي مرن ينقل الفكرة من الأروقة النظرية إلى التنفيذ الفعلي المنضبط."}
                </p>
              </div>
            </div>
          </motion.div>

          {/* البطاقة الثانية: المحددات المنهجية العامة (lg:col-span-5) */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-30px" }}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="group relative lg:col-span-5 bg-white border border-slate-200/80 hover:border-slate-300 rounded-[22px] p-6 sm:p-8 text-start shadow-xs hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300 flex flex-col justify-between overflow-hidden"
          >
            <div className="absolute top-0 start-0 bottom-0 w-1.5 bg-[#1874C7] rounded-s-2xl transition-all duration-300 group-hover:w-2" />

            <div className="ps-2 sm:ps-3 flex flex-col justify-between h-full">
              <div>
                <h3
                  className={`text-xl sm:text-2xl font-bold text-[#1874C7] mb-5 ${
                    isEn ? "font-sans" : "font-scheherazade"
                  }`}
                >
                  {isEn ? "General Methodological Parameters" : "المحددات المنهجية العامة"}
                </h3>

                {/* قائمة المحددات الأربعة بتوزيع منسق */}
                <div className="space-y-3.5">
                  {methodologyItems.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between gap-3 pb-2.5 border-b border-slate-100 last:border-b-0"
                    >
                      <span className="text-xs sm:text-sm font-bold text-[#1874C7] font-sans shrink-0">
                        {item.label}
                      </span>
                      <span className="text-xs sm:text-sm text-slate-600 font-sans font-normal text-end">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* الملاحظة المنهجية في الأسفل */}
              <div className="pt-4 mt-6 border-t border-slate-100">
                <p className="text-[11px] text-slate-400 font-sans leading-relaxed">
                  {isEn
                    ? "This methodology was designed to ensure seamless alignment between institutional policies and field reality, mitigating operational delivery gaps."
                    : "تم إعداد هذه المنهجية لضمان انسجام السياسات المؤسسية مع الواقع الميداني وتفادي الفجوات التنفيذية."}
                </p>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};