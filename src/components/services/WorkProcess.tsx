"use client";

import React from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

interface StepItem {
  number: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
}

const PROCESS_STEPS: StepItem[] = [
  {
    number: "01",
    title: "فهم الاحتياج",
    titleEn: "Understanding Needs",
    description: "نبدأ بفهم القضية أو التحدي، والتعرف على الأهداف والسياق والأشخاص المعنيين.",
    descriptionEn: "Beginning with an in-depth diagnosis of the challenge, clarifying objectives, stakeholder dynamics, and operational context.",
  },
  {
    number: "02",
    title: "تحديد الأولويات",
    titleEn: "Setting Priorities",
    description: "نحدد الأهداف والأولويات ونطاق العمل بما يتناسب مع الاحتياج والموارد المتاحة.",
    descriptionEn: "Defining measurable milestones, strategic priorities, and work scope calibrated to available resources and capabilities.",
  },
  {
    number: "03",
    title: "تصميم طريقة العمل",
    titleEn: "Designing the Methodology",
    description: "نضع منهجية وخطوات عملية مناسبة لطبيعة المشروع، سواء كان تخطيطاً أو تدريباً أو إعداد دليل أو إرشاداً مهنياً.",
    descriptionEn: "Structuring customized operational roadmaps tailored to the intervention — whether strategic planning, training, manuals, or mentoring.",
  },
  {
    number: "04",
    title: "تنفيذ المخرجات ومراجعتها",
    titleEn: "Delivery & Expert Review",
    description: "نعمل على تقديم مخرجات واضحة ومنظمة، مع مراجعتها بما يخدم أهداف العمل وقابليتها للاستخدام.",
    descriptionEn: "Delivering structured, rigorous outputs and arbitrating them to ensure practical field usability and goal alignment.",
  },
];

export const WorkProcess: React.FC = () => {
  const pathname = usePathname();
  const currentLang = pathname?.startsWith("/en") ? "en" : "ar";
  const isEn = currentLang === "en";

  return (
    <section
      id="work-process"
      dir={isEn ? "ltr" : "rtl"}
      className="w-full bg-white py-12 sm:py-16 lg:py-20 overflow-hidden text-start"
    >
      <div className="max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* ========================================================
            الترويسة: العنوان والوصف محاذيان لجهة البداية
           ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-start mb-12 sm:mb-16 max-w-3xl"
        >
          <h2
            className={`text-3xl sm:text-4xl lg:text-[42px] font-bold text-dark-blue leading-tight mb-2 ${
              isEn ? "font-sans" : "font-scheherazade"
            }`}
          >
            {isEn
              ? "From Needs Assessment to Practical Outcomes"
              : "من فهم الاحتياج إلى نتائج عملية"}
          </h2>
          <p
            className={`text-xs sm:text-sm lg:text-[15px] text-gray-500 font-normal leading-relaxed ${
              isEn ? "font-sans" : "font-scheherazade"
            }`}
          >
            {isEn
              ? "Every engagement starts with understanding context and needs, aligning strategic priorities, and designing custom methodologies that deliver clear, ready-to-deploy outcomes."
              : "تبدأ كل تجربة بفهم السياق والاحتياج، ثم تحديد الأولويات وتصميم طريقة العمل المناسبة وصولاً إلى مخرجات واضحة وقابلة للاستخدام."}
          </p>
        </motion.div>

        {/* ========================================================
            حاوية المراحل الأربعة مع الخط الأفقي المتصل
           ======================================================== */}
        <div className="relative">
          
          {/* الخط الأفقي المتصل الذي يمر خلف الأرقام مع اتجاه رسم مناسب للغة */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className={`hidden lg:block absolute top-[21px] inset-x-12 h-[2px] bg-blue-100 -z-0 ${
              isEn ? "origin-left" : "origin-right"
            }`}
          />

          {/* شبكة المراحل الأربعة */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 items-start">
            {PROCESS_STEPS.map((step, index) => {
              const title = isEn ? step.titleEn : step.title;
              const description = isEn ? step.descriptionEn : step.description;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.12,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  }}
                  whileHover={{ y: -4 }}
                  className="group flex flex-col items-center lg:items-start text-center lg:text-start transition-transform duration-200 cursor-default"
                >
                  {/* الرقم المرتكز فوق الخط الأفقي مع خلفية بيضاء */}
                  <div className="relative inline-flex items-center justify-center bg-white px-3.5 mb-3 z-10">
                    <span className="font-sans text-2xl sm:text-3xl lg:text-[32px] font-bold text-primary-blue leading-none transition-transform duration-200 group-hover:scale-110">
                      {step.number}
                    </span>
                  </div>

                  {/* عنوان المرحلة */}
                  <h3
                    className={`text-xl sm:text-2xl font-bold text-dark-blue group-hover:text-primary-blue transition-colors duration-200 leading-snug mb-2 ${
                      isEn ? "font-sans" : "font-scheherazade"
                    }`}
                  >
                    {title}
                  </h3>

                  {/* وصف المرحلة */}
                  <p
                    className={`text-xs sm:text-[13px] lg:text-[14px] text-gray-500 leading-relaxed font-normal max-w-[240px] ${
                      isEn ? "font-sans" : "font-scheherazade"
                    }`}
                  >
                    {description}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};