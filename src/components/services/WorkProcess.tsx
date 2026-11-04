    "use client";

import React from "react";
import { motion } from "framer-motion";

interface StepItem {
  number: string;
  title: string;
  description: string;
}

const PROCESS_STEPS: StepItem[] = [
  {
    number: "01",
    title: "فهم الاحتياج",
    description: "نبدأ بفهم القضية أو التحدي، والتعرف على الأهداف والسياق والأشخاص المعنيين.",
  },
  {
    number: "02",
    title: "تحديد الأولويات",
    description: "نحدد الأهداف والأولويات ونطاق العمل بما يتناسب مع الاحتياج والموارد المتاحة.",
  },
  {
    number: "03",
    title: "تصميم طريقة العمل",
    description: "نضع منهجية وخطوات عملية مناسبة لطبيعة المشروع، سواء كان تخطيطاً أو تدريباً أو إعداد دليل أو إرشاداً مهنياً.",
  },
  {
    number: "04",
    title: "تنفيذ المخرجات ومراجعتها",
    description: "نعمل على تقديم مخرجات واضحة ومنظمة، مع مراجعتها بما يخدم أهداف العمل وقابليتها للاستخدام.",
  },
];

export const WorkProcess: React.FC = () => {
  return (
    <section
      id="work-process"
      dir="rtl"
      className="w-full bg-white py-12 sm:py-16 lg:py-20 overflow-hidden"
    >
      <div className="max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* ========================================================
            الترويسة: العنوان والوصف محاذيان لليمين كما في الصورة
           ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-start mb-12 sm:mb-16 max-w-3xl"
        >
          <h2 className="font-scheherazade text-3xl sm:text-4xl lg:text-[42px] font-bold text-dark-blue leading-tight mb-2">
            من فهم الاحتياج إلى نتائج عملية
          </h2>
          <p className="font-scheherazade text-xs sm:text-sm lg:text-[15px] text-gray-500 font-normal leading-relaxed">
            تبدأ كل تجربة بفهم السياق والاحتياج، ثم تحديد الأولويات وتصميم طريقة العمل المناسبة وصولاً إلى مخرجات واضحة وقابلة للاستخدام.
          </p>
        </motion.div>

        {/* ========================================================
            حاوية المراحل الأربعة مع الخط الأفقي المتصل
           ======================================================== */}
        <div className="relative">
          
          {/* الخط الأفقي المتصل الذي يمر خلف الأرقام (في الشاشات الكبيرة) */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="hidden lg:block absolute top-[21px] inset-x-12 h-[2px] bg-blue-100 origin-right -z-0"
          />

          {/* شبكة المراحل الأربعة */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 items-start">
            {PROCESS_STEPS.map((step, index) => (
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
                {/* الرقم المرتكز فوق الخط الأفقي مع خلفية بيضاء تقطع الخط بنعومة */}
                <div className="relative inline-flex items-center justify-center bg-white px-3.5 mb-3 z-10">
                  <span className="font-sans text-2xl sm:text-3xl lg:text-[32px] font-bold text-primary-blue leading-none transition-transform duration-200 group-hover:scale-110">
                    {step.number}
                  </span>
                </div>

                {/* عنوان المرحلة */}
                <h3 className="font-scheherazade text-xl sm:text-2xl font-bold text-dark-blue group-hover:text-primary-blue transition-colors duration-200 leading-snug mb-2">
                  {step.title}
                </h3>

                {/* وصف المرحلة الملموم والمقروء */}
                <p className="font-scheherazade text-xs sm:text-[13px] lg:text-[14px] text-gray-500 leading-relaxed font-normal max-w-[240px]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};