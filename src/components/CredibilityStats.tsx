"use client";

import React from "react";
import { motion } from "framer-motion";
import { CalendarDays, Users, Landmark, Smile } from "lucide-react";

interface StatItem {
  id: string;
  number: string;
  description: string;
  icon: React.ReactNode;
}

const statsData: StatItem[] = [
  {
    id: "experience",
    number: "+18 سنة خبرة",
    description: "خبرة مهنية متراكمة في مجالات العمل المختلفة",
    icon: <CalendarDays className="w-6 h-6 sm:w-7 sm:h-7 text-white stroke-[1.8]" />,
  },
  {
    id: "beneficiaries",
    number: "+ 15,000 مهني",
    description: "من برامج التدريب وبناء القدرات والمحتوى المهني",
    icon: <Users className="w-6 h-6 sm:w-7 sm:h-7 text-white stroke-[1.8]" />,
  },
  {
    id: "entities",
    number: "+ 140 جهة",
    description: "تعاونات وخبرات مرتبطة بالعمل المؤسسي وبناء الهوية",
    icon: <Landmark className="w-6 h-6 sm:w-7 sm:h-7 text-white stroke-[1.8]" />,
  },
  {
    id: "satisfaction",
    number: "98% رضا ونتائج",
    description: "نماذج من المشاريع والتجارب المهنية الموثوقة",
    icon: <Smile className="w-6 h-6 sm:w-7 sm:h-7 text-white stroke-[1.8]" />,
  },
];

export const CredibilityStats: React.FC = () => {
  return (
    <section id="credibility-stats" className="w-full bg-white overflow-hidden">
      {/* الترويسة العلوية محاذاة لليمين كما في الصورة */}
      <div className="max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-12 pt-10 sm:pt-14 pb-6 sm:pb-8 text-start">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-scheherazade text-3xl sm:text-4xl lg:text-[42px] font-bold text-dark-blue leading-tight mb-1.5">
            لماذا أستطيع مساعدتك؟
          </h2>
          <p className="font-scheherazade text-xs sm:text-sm lg:text-[16px] text-gray-500 font-normal leading-relaxed">
            لا أطمح لإضافة رقم جديد إلى قائمة الإنجازات التالية؛ بل ترسيخ قيمة نوعية حقيقية لكل شراكة ومشروع.
          </p>
        </motion.div>
      </div>

      {/* الشريط الكحلي للإحصائيات */}
      <div className="w-full bg-dark-blue text-white py-10 sm:py-12 lg:py-14 shadow-inner">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-12">
          
          {/* شبكة الإحصائيات: 2x2 في الموبايل و 4 أعمدة في الديسكتوب */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-4 sm:gap-x-6 lg:gap-0 items-start text-center">
            {statsData.map((stat, index) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                className={`group flex flex-col items-center px-2 sm:px-4 lg:px-6 ${
                  index !== statsData.length - 1 ? "lg:border-l lg:border-white/10" : ""
                }`}
              >
                {/* الأيقونة البيضاء مع حركة هوفر طافية */}
                <div className="mb-3 sm:mb-4 transition-transform duration-300 group-hover:-translate-y-1.5 group-hover:scale-110">
                  {stat.icon}
                </div>

                {/* الرقم الكبير */}
                <div className="font-scheherazade text-xl sm:text-2xl lg:text-[30px] xl:text-[32px] font-bold text-white mb-1.5 leading-snug whitespace-nowrap tracking-tight transition-colors duration-200 group-hover:text-blue-100">
                  {stat.number}
                </div>

                {/* الوصف المختصر */}
                <p className="font-scheherazade text-xs sm:text-[13px] lg:text-[14px] text-[#E5EAF0]/80 font-normal leading-relaxed max-w-[210px] mx-auto transition-opacity duration-200 group-hover:text-white">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};