"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { PROJECTS_DATA, type ProjectItem } from "@/data/projectsData";

function ProjectCard({
  project,
  index,
  currentLang,
}: {
  project: ProjectItem;
  index: number;
  currentLang: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Link
        href={`/${currentLang}/projects/${project.id}`}
        className="group h-full bg-white rounded-[20px] border border-[#E5EAF0] overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-xl transition-all duration-300 block select-none"
      >
        <div>
          {/* الصورة مع زووم هادئ عند الهوفر */}
          <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-center transform scale-100 group-hover:scale-104 transition-transform duration-500 ease-out"
              loading="lazy"
            />
          </div>

          {/* محتوى الكرت */}
          <div className="p-5 sm:p-6 flex flex-col text-start">
            {/* الشارة الزرقاء الفاتحة كما في الصورة */}
            <div className="mb-3">
              <span className="inline-block text-xs font-semibold text-primary-blue bg-[#EBF3FB] px-3 py-1 rounded-full font-scheherazade">
                {project.tag}
              </span>
            </div>

            {/* العنوان الرئيسي */}
            <h3 className="font-scheherazade text-xl sm:text-[22px] font-bold text-dark-blue group-hover:text-primary-blue transition-colors duration-200 leading-snug mb-2">
              {project.title}
            </h3>

            {/* الوصف */}
            <p className="font-scheherazade text-xs sm:text-[13px] text-gray-500 leading-relaxed line-clamp-3 font-normal">
              {project.excerpt}
            </p>
          </div>
        </div>

        {/* رابط عرض التفاصيل مع السهم */}
        <div className="px-5 pb-5 pt-0 sm:px-6 sm:pb-6 flex items-center justify-end border-t border-gray-50 mt-2">
          <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-primary-blue group-hover:gap-2.5 transition-all duration-200 mt-3">
            <span>عرض التفاصيل</span>
            <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-x-1" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

export const RelatedProjects: React.FC = () => {
  const pathname = usePathname();
  const currentLang = pathname?.startsWith("/en") ? "en" : "ar";

  return (
    <section
      id="related-projects"
      dir="rtl"
      className="w-full bg-white py-12 sm:py-16 lg:py-20 overflow-hidden"
    >
      <div className="max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* الترويسة محاذاة لليمين مطابقة تماماً للصورة */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-start mb-8 sm:mb-11 max-w-3xl"
        >
          <h2 className="font-scheherazade text-3xl sm:text-4xl lg:text-[44px] font-bold text-dark-blue leading-tight mb-2">
            مشاريع وخبرات مرتبطة بالخدمات
          </h2>
          <p className="font-scheherazade text-xs sm:text-sm lg:text-[15px] text-gray-500 font-normal leading-relaxed">
            تتجلى الخبرة في العمل على مبادرات متنوعة، من التخطيط وقيادة حملات المناصرة إلى التدريب وإعداد الأدلة.
          </p>
        </motion.div>

        {/* شبكة الكروت الثلاثة */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 items-stretch">
          {PROJECTS_DATA.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              currentLang={currentLang}
            />
          ))}
        </div>

        {/* زر "استكشف جميع الخبرات والمشاريع ←" المطابق للصورة */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 sm:mt-14 text-center"
        >
          <Link
            href={`/${currentLang}/projects`}
            className="inline-flex items-center justify-center gap-2 px-7 py-2.5 rounded-xl border border-primary-blue/60 text-primary-blue bg-white font-semibold text-xs sm:text-sm hover:bg-primary-blue hover:text-white transition-all duration-200 shadow-2xs hover:shadow-md cursor-pointer"
          >
            <span>استكشف جميع الخبرات والمشاريع</span>
            <ArrowLeft className="w-3.5 h-3.5" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
};