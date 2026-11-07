"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS_DATA, ProjectItem } from "@/data/projectsData";

interface ProjectsListProps {
  lang?: string;
}

export const ProjectsList: React.FC<ProjectsListProps> = ({ lang: propLang }) => {
  const params = useParams();
  const pathname = usePathname();

  // كشف اللغة تلقائياً إما من الخاصية، أو من params، أو من مسار الرابط
  const currentLang =
    propLang || (params?.lang as string) || (pathname?.startsWith("/en") ? "en" : "ar");
  const isEn = currentLang === "en";

  const [activeTab, setActiveTab] = useState<string>("all");
  const [visibleCount, setVisibleCount] = useState<number>(4);

  // إعدادات التبويبات باللغتين مع حساب العدد الحقيقي لكل تصنيف
  const tabs = useMemo(() => {
    return [
      {
        id: "all",
        label: isEn ? "All" : "الكل",
        count: PROJECTS_DATA.length,
      },
      {
        id: "advocacy",
        label: isEn ? "Advocacy Campaigns" : "حملات المناصرة",
        count: PROJECTS_DATA.filter((p) => p.category === "advocacy").length,
      },
      {
        id: "training",
        label: isEn ? "Capacity Building" : "التدريب",
        count: PROJECTS_DATA.filter((p) => p.category === "training").length,
      },
      {
        id: "guides",
        label: isEn ? "Toolkits & Manuals" : "الأدلة",
        count: PROJECTS_DATA.filter((p) => p.category === "guides").length,
      },
      {
        id: "mentoring",
        label: isEn ? "Professional Mentoring" : "الإرشاد المهني",
        count: PROJECTS_DATA.filter((p) => p.category === "mentoring").length,
      },
    ];
  }, [isEn]);

  // فلترة المشاريع بناءً على التبويب المختار
  const filteredProjects = useMemo(() => {
    if (activeTab === "all") return PROJECTS_DATA;
    return PROJECTS_DATA.filter((p) => p.category === activeTab);
  }, [activeTab]);

  // المشاريع المعروضة حالياً
  const displayedProjects = filteredProjects.slice(0, visibleCount);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setVisibleCount(4);
  };

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  return (
    <section
      id="projects-grid"
      dir={isEn ? "ltr" : "rtl"}
      className="w-full py-10 md:py-16 bg-white text-start"
    >
      <div className="max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* ========================================================
            1. الفلاتر العلوية التفاعلية مع شارات الأعداد
           ======================================================== */}
        <div className="flex flex-wrap items-center justify-start gap-2.5 sm:gap-3 mb-10 md:mb-14 pb-4 border-b border-slate-100">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-sans font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#014482] text-white shadow-md shadow-[#014482]/20 font-semibold"
                    : "bg-white text-slate-600 hover:text-[#014482] hover:bg-slate-50 border border-slate-200/80"
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`px-1.5 py-0.5 rounded-md text-[10px] font-sans font-normal ${
                    isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* ========================================================
            2. قائمة الكروت المتناوبة بالأحجام الطبيعية الفخمة
           ======================================================== */}
        <div className="flex flex-col gap-8 md:gap-10">
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project: ProjectItem, index: number) => {
              // التناوب: الزوجي الصورة في جهة، والفردي في الجهة المقابلة
              const isEven = index % 2 === 0;

              // استخراج النصوص بحسب اللغة مع التراجع الآمن
              const title = isEn && (project as any).titleEn ? (project as any).titleEn : project.title;
              const description = isEn && (project as any).descriptionEn ? (project as any).descriptionEn : project.description;
              const role = isEn && (project as any).roleEn ? (project as any).roleEn : project.role;
              const deliverable = isEn && (project as any).deliverableEn ? (project as any).deliverableEn : project.deliverable;
              const categoryLabel = isEn && (project as any).categoryLabelEn ? (project as any).categoryLabelEn : project.categoryLabel;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative bg-white border border-slate-200/80 hover:border-slate-300 rounded-[26px] overflow-hidden shadow-xs hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 flex flex-col lg:flex-row items-stretch lg:min-h-[350px]"
                >
                  {/* خط أزرق علوي عند الهوفر */}
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#1874C7] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                  {/* 1. قسم المحتوى النصي بحجمه الكامل والمريح */}
                  <div
                    className={`flex-1 p-6 sm:p-8 lg:p-10 flex flex-col justify-between text-start ${
                      isEven ? "order-2 lg:order-1" : "order-2 lg:order-2"
                    }`}
                  >
                    <div>
                      {/* الرقم والشارة */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-3.5 py-1 rounded-full bg-blue-50 text-[#1874C7] text-xs font-sans font-medium">
                          {categoryLabel}
                        </span>
                        <span className="text-base sm:text-lg font-normal text-[#1874C7] font-sans">
                          {project.number}
                        </span>
                      </div>

                      {/* عنوان المشروع */}
                      <h3
                        className={`text-xl sm:text-2xl lg:text-[27px] font-bold text-[#014482] mb-3 leading-snug group-hover:text-[#1874C7] transition-colors duration-200 ${
                          isEn ? "font-sans" : "font-scheherazade"
                        }`}
                      >
                        {title}
                      </h3>

                      {/* الوصف الكامل */}
                      <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed mb-6 font-normal">
                        {description}
                      </p>

                      {/* صندوق المعلومات الرمادي (الدور والمخرج) */}
                      <div className="bg-[#F5F6F7] rounded-xl p-3.5 sm:p-4 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-[13px] font-sans text-slate-700 border border-slate-100 mb-6">
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-[#1874C7] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                          <span>
                            <strong className="font-semibold text-[#014482]">
                              {isEn ? "Role:" : "الدور:"}
                            </strong>{" "}
                            {role}
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-[#1874C7] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          <span>
                            <strong className="font-semibold text-[#014482]">
                              {isEn ? "Deliverable:" : "المخرج:"}
                            </strong>{" "}
                            {deliverable}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* زر عرض التفاصيل بمحاذاة نهاية البطاقة */}
                    <div className="pt-2 flex justify-end">
                      <Link
                        href={`/${currentLang}/projects/${project.id}`}
                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#1874C7] hover:text-[#014482] transition-colors group/link"
                      >
                        <span>{isEn ? "View Details" : "عرض التفاصيل"}</span>
                        <svg
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isEn
                              ? "group-hover/link:translate-x-1"
                              : "group-hover/link:-translate-x-1"
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={
                              isEn
                                ? "M14 5l7 7m0 0l-7 7m7-7H3"
                                : "M10 19l-7-7m0 0l7-7m-7 7h18"
                            }
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>

                  {/* 2. قسم الصورة المتناسق */}
                  <div
                    className={`relative w-full lg:w-[48%] min-h-[260px] sm:min-h-[300px] lg:min-h-[350px] overflow-hidden bg-slate-100 flex-shrink-0 ${
                      isEven ? "order-1 lg:order-2" : "order-1 lg:order-1"
                    }`}
                  >
                    <img
                      src={project.image}
                      alt={title}
                      loading="lazy"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out select-none"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#014482]/40 via-black/10 to-transparent pointer-events-none" />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* ========================================================
            3. زر "عرض المزيد من المشاريع"
           ======================================================== */}
        {filteredProjects.length > visibleCount && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center mt-12 sm:mt-16"
          >
            <motion.button
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleShowMore}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-white hover:bg-slate-50 border border-slate-200/90 hover:border-[#1874C7] text-[#014482] hover:text-[#1874C7] font-sans text-xs sm:text-sm font-semibold transition-all duration-200 shadow-xs hover:shadow-md cursor-pointer group"
            >
              <span>
                {isEn ? "Show More Projects" : "عرض المزيد من المشاريع"}
              </span>
              <svg
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-y-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </motion.button>
          </motion.div>
        )}

      </div>
    </section>
  );
};