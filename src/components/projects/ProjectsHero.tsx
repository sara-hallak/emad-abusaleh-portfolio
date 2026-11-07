"use client";

import React from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

interface ProjectsHeroProps {
  lang?: string;
}

export const ProjectsHero: React.FC<ProjectsHeroProps> = ({ lang: propLang }) => {
  // كشف اللغة تلقائياً من الرابط في حال لم يتم تمرير lang
  const pathname = usePathname();
  const currentLang = propLang || (pathname?.startsWith("/en") ? "en" : "ar");
  const isEn = currentLang === "en";

  const scrollToProjects = () => {
    const section = document.getElementById("projects-grid");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // النصوص باللغتين مباشرة داخل المكون
  const content = {
    title: isEn
      ? "Expertise & Projects Transforming Vision into Tangible Impact"
      : "خبرات ومشاريع تحوّل العمل إلى نتائج قابلة للعرض",
    description: isEn
      ? "A dedicated track record across policy advocacy, capacity building, procedural manual authoring, and professional advisory — bridging strategic rigor with impactful frontline delivery alongside institutions and community teams."
      : "مسيرة من العمل في مجالات المناصرة، والتدريب، وإعداد الأدلة، والإرشاد المهني، تجمع بين المعرفة والتطبيق العملي والعمل مع الأفراد والفرق والمؤسسات.",
    exploreBtn: isEn ? "Explore Projects & Experience" : "استكشف المشاريع والخبرات",
  };

  return (
    <section
      dir={isEn ? "ltr" : "rtl"}
      className="w-full bg-white pt-6 pb-12 sm:pt-8 sm:pb-16 text-start"
    >
      <div className="max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* الحاوية الكبرى بحواف مقوسة مطابقة للتصميم */}
        <div className="relative w-full min-h-[460px] sm:min-h-[500px] lg:min-h-[530px] rounded-[26px] overflow-hidden border border-slate-200/80 flex items-center justify-start p-5 sm:p-8 lg:p-14 shadow-lg shadow-slate-900/5">
          
          {/* قسم الصورة مع حركة الزوم وطبقة التدرج الموجهة */}
          <div className="absolute inset-0 overflow-hidden bg-slate-900">
            <motion.img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1800&q=80"
              alt={isEn ? "Team at work" : "فريق عمل"}
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.07, 1] }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              className="w-full h-full object-cover object-center select-none"
              loading="eager"
            />

            {/* طبقة التدرج الخطي الموجهة بحسب اللغة */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: isEn
                  ? "linear-gradient(to right, rgba(1, 68, 130, 0.75) 0%, rgba(1, 68, 130, 0.35) 50%, rgba(1, 68, 130, 0) 100%)"
                  : "linear-gradient(to left, rgba(1, 68, 130, 0.75) 0%, rgba(1, 68, 130, 0.35) 50%, rgba(1, 68, 130, 0) 100%)",
              }}
            />
          </div>

          {/* البطاقة البيضاء العائمة */}
          <motion.div
            initial={{ opacity: 0, x: isEn ? -30 : 30, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
            className="group relative z-10 w-full max-w-[500px] sm:max-w-[530px] bg-white rounded-[22px] p-6 sm:p-9 lg:p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.18)] text-start transition-shadow hover:shadow-[0_25px_70px_-12px_rgba(1,68,130,0.25)] border border-slate-100"
          >
            {/* العنوان الرئيسي */}
            <h1
              className={`text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#014482] leading-[1.25] mb-4 tracking-tight ${
                isEn ? "font-sans" : "font-scheherazade"
              }`}
            >
              {content.title}
            </h1>

            {/* الوصف */}
            <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed mb-6 sm:mb-8 font-normal">
              {content.description}
            </p>

            {/* زر استكشف المشاريع */}
            <motion.button
              whileHover={{ scale: 1.025, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={scrollToProjects}
              className="group/btn inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-[#014482] hover:bg-[#1874C7] text-white font-sans text-xs sm:text-sm font-semibold transition-all duration-200 shadow-md shadow-[#014482]/20 cursor-pointer"
            >
              <span>{content.exploreBtn}</span>
              
              <div className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center text-white transition-transform duration-200 group-hover/btn:translate-y-0.5">
                <svg
                  className="w-3 h-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </div>
            </motion.button>
          </motion.div>

        </div>

      </div>
    </section>
  );
};