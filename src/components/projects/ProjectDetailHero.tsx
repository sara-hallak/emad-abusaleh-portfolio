"use client";

import React from "react";
import { motion } from "framer-motion";
import { ProjectItem } from "@/data/projectsData";

interface ProjectDetailHeroProps {
  project?: ProjectItem | any;
}

export const ProjectDetailHero: React.FC<ProjectDetailHeroProps> = ({ project }) => {
  const title = project?.title || "التخطيط لمبادرة لتعزيز المشاركة المجتمعية";
  const description =
    project?.description ||
    "تصميم خطة عمل متكاملة تحدد الأولويات والرسائل والأنشطة، مع تنظيم خطوات التنفيذ بما يتناسب مع أهداف المبادرة وتطلعات المجتمع المحلي.";
  const image =
    project?.image ||
    "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80";

  const role = project?.role || "التخطيط وتطوير خطة العمل";
  const deliverable = project?.deliverable || "خطة عمل تنفيذية وأدوات إجرائية";
  const field = project?.field || project?.categoryLabel || "المشاركة المجتمعية وبناء المبادرات";

  const leadName = "عماد أبو صالح الفناطسة";
  const targetScope = project?.targetScope || "المجتمع المحلي والفرق الفاعلة";
  const outputType = project?.outputType || "وثيقة خطة إجرائية متكاملة";

  return (
    <section className="w-full pt-6 pb-10 sm:pt-8 sm:pb-12 bg-white" dir="rtl">
      <div className="max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* ========================================================
            1. البانر الأزرق العلوي (The Top Royal Blue Banner)
           ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="w-full bg-gradient-to-r from-[#1874C7] via-[#0E5CA8] to-[#014482] text-white rounded-[22px] p-6 sm:p-8 lg:p-10 mb-6 shadow-md shadow-blue-950/10 text-right"
        >
          <h1 className="font-scheherazade text-2xl sm:text-3xl lg:text-[36px] font-bold text-white leading-tight mb-3 tracking-tight">
            {title}
          </h1>
          <p className="font-sans text-xs sm:text-sm text-blue-50/90 font-normal leading-relaxed max-w-4xl">
            {description}
          </p>
        </motion.div>

        {/* ========================================================
            2. القسم الأوسط: الصورة على اليمين والبطاقة على اليسار
           ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-6 mb-6 items-stretch">
          
          {/* 1. الصورة الكبرى مع الطبقة الزرقاء الفخمة (تقع أولاً لتكون على اليمين في RTL) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 rounded-[22px] overflow-hidden border border-slate-200/80 bg-slate-100 min-h-[280px] sm:min-h-[320px] lg:min-h-[350px] shadow-xs relative"
          >
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover object-center select-none"
              loading="eager"
            />

            {/* الطبقة الزرقاء المائية المدمجة فوق الصورة تماماً كالتصميم */}
            <div className="absolute inset-0 bg-[#0E5CA8]/30 mix-blend-multiply pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#014482]/40 via-transparent to-transparent pointer-events-none" />
          </motion.div>

          {/* 2. بطاقة "بيانات التوثيق المؤسسي" (تقع ثانياً لتكون على اليسار في RTL) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5 bg-white border border-slate-200/80 rounded-[22px] p-6 sm:p-7 flex flex-col justify-between text-right shadow-xs"
          >
            <div>
              <h2 className="font-scheherazade text-xl sm:text-2xl font-bold text-[#014482] mb-6">
                بيانات التوثيق المؤسسي
              </h2>

              {/* قائمة الحقول الثلاثة */}
              <div className="space-y-4">
                {/* الدور المنجز */}
                <div className="flex items-center justify-between gap-4 pb-3 border-b border-slate-100">
                  <span className="text-xs sm:text-sm text-slate-500 font-sans font-normal order-1">
                    {role}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-[#1874C7] font-sans order-2 shrink-0">
                    الدور المنجز
                  </span>
                </div>

                {/* المخرج الرئيس */}
                <div className="flex items-center justify-between gap-4 pb-3 border-b border-slate-100">
                  <span className="text-xs sm:text-sm text-slate-500 font-sans font-normal order-1">
                    {deliverable}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-[#1874C7] font-sans order-2 shrink-0">
                    المخرج الرئيس
                  </span>
                </div>

                {/* المجال التخصصي */}
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs sm:text-sm text-slate-500 font-sans font-normal order-1">
                    {field}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-[#1874C7] font-sans order-2 shrink-0">
                    المجال التخصصي
                  </span>
                </div>
              </div>
            </div>

            {/* الشريط السفلي للبطاقة: المملكة الأردنية يميناً، والتطوير والإشراف يساراً */}
            <div className="pt-5 mt-6 border-t border-slate-100 flex items-center justify-between text-[11px] sm:text-xs text-slate-400 font-sans">
              <span>تطوير وإشراف: {leadName}</span>
              <span>المملكة الأردنية الهاشمية</span>
            </div>
          </motion.div>

        </div>

        {/* ========================================================
            3. الشريط السفلي: الكروت الثلاثة المتناسقة بتصميم وهوفر عصري
           ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          
          {/* كرت 1: القيادة الميدانية والتوجيه (يمين في RTL) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.2 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="group relative bg-white border border-slate-200/80 hover:border-slate-300 rounded-2xl p-5 sm:p-6 flex items-center justify-between text-right shadow-xs hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 overflow-hidden cursor-default"
          >
            {/* خط أزرق علوي يظهر بنعومة عند الهوفر */}
            <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-[#1874C7] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* الأيقونة على أقصى اليسار مع تأثير التحوّل عند الهوفر */}
            <div className="w-12 h-12 rounded-xl bg-blue-50/80 group-hover:bg-[#1874C7] text-[#1874C7] group-hover:text-white flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-105 shadow-2xs">
              <svg className="w-6 h-6 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 3v18M6 6h10l2 2.5-2 2.5H6V6zm12 8H8l-2 2.5 2 2.5h10v-5z" />
              </svg>
            </div>

            {/* النصوص على اليمين */}
            <div className="pl-3">
              <span className="text-[11px] sm:text-xs font-sans font-medium text-[#1874C7] block mb-1">
                القيادة الميدانية والتوجيه
              </span>
              <h3 className="text-sm sm:text-base font-bold text-[#014482] font-scheherazade leading-snug group-hover:text-[#1874C7] transition-colors">
                {leadName}
              </h3>
            </div>
          </motion.div>

          {/* كرت 2: نطاق الاستهداف المباشر (وسط) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.25 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="group relative bg-white border border-slate-200/80 hover:border-slate-300 rounded-2xl p-5 sm:p-6 flex items-center justify-between text-right shadow-xs hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 overflow-hidden cursor-default"
          >
            <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-[#1874C7] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* أيقونة الهدف التنموي بدقة */}
            <div className="w-12 h-12 rounded-xl bg-blue-50/80 group-hover:bg-[#1874C7] text-[#1874C7] group-hover:text-white flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-105 shadow-2xs">
              <svg className="w-6 h-6 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <circle cx="12" cy="12" r="9" strokeWidth={1.75} />
                <circle cx="12" cy="12" r="5" strokeWidth={1.75} />
                <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M19 5l-4 4" />
              </svg>
            </div>

            <div className="pl-3">
              <span className="text-[11px] sm:text-xs font-sans font-medium text-[#1874C7] block mb-1">
                نطاق الاستهداف المباشر
              </span>
              <h3 className="text-sm sm:text-base font-bold text-[#014482] font-scheherazade leading-snug group-hover:text-[#1874C7] transition-colors">
                {targetScope}
              </h3>
            </div>
          </motion.div>

          {/* كرت 3: طبيعة المخرج التشغيلي (يسار في RTL) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.3 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="group relative bg-white border border-slate-200/80 hover:border-slate-300 rounded-2xl p-5 sm:p-6 flex items-center justify-between text-right shadow-xs hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 overflow-hidden cursor-default"
          >
            <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-[#1874C7] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* أيقونة الوثيقة المعتمدة */}
            <div className="w-12 h-12 rounded-xl bg-blue-50/80 group-hover:bg-[#1874C7] text-[#1874C7] group-hover:text-white flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-105 shadow-2xs">
              <svg className="w-6 h-6 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12l2 2 4-4m1 9H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>

            <div className="pl-3">
              <span className="text-[11px] sm:text-xs font-sans font-medium text-[#1874C7] block mb-1">
                طبيعة المخرج التشغيلي
              </span>
              <h3 className="text-sm sm:text-base font-bold text-[#014482] font-scheherazade leading-snug group-hover:text-[#1874C7] transition-colors">
                {outputType}
              </h3>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};