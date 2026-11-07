"use client";

import React from "react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ServiceDetail } from "@/data/servicesDetailData";

interface ServiceRelatedExperienceProps {
  service?: ServiceDetail | any;
  lang?: string;
}

const defaultExperienceAr = {
  id: "civic-engagement",
  field: "المجال: حملات المناصرة والمبادرات المجتمعية",
  title: "التخطيط لمبادرة لتعزيز المشاركة المجتمعية",
  role: "التخطيط الاستراتيجي، وصياغة خطة العمل، وهندسة مسارات الحوارات التشاركية والتنسيق بين الأطراف الفاعلة.",
  impact:
    "تصميم خطة عمل متكاملة تحدد الأولويات والرسائل والأنشطة بما يتناسب مع أهداف المبادرة وإشراك الفاعلين في المجتمع المحلي، مما أثمر عن ميثاق عمل موحد والتزام تشغيلي من كافة المؤسسات.",
  image:
    "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1000&q=80",
  imageCaption: "توثيق ميداني لأوراق العمل",
};

const defaultExperienceEn = {
  id: "civic-engagement",
  field: "Domain: Advocacy Campaigns & Civic Initiatives",
  title: "Planning an Initiative to Enhance Civic Participation",
  role: "Strategic planning, action plan drafting, participatory dialogue facilitation, and multi-stakeholder coordination.",
  impact:
    "Designing an integrated action plan defining priorities, key messaging, and activities aligned with community aspirations, culminating in a ratified charter and operational commitment across partner institutions.",
  image:
    "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1000&q=80",
  imageCaption: "Field Documentation of Action Memos",
};

export const ServiceRelatedExperience: React.FC<ServiceRelatedExperienceProps> = ({
  service,
  lang: propLang,
}) => {
  const params = useParams();
  const pathname = usePathname();
  const currentLang =
    propLang || (params?.lang as string) || (pathname?.startsWith("/en") ? "en" : "ar");
  const isEn = currentLang === "en";

  const defaultExp = isEn ? defaultExperienceEn : defaultExperienceAr;
  const rawExp = service?.relatedExperience || defaultExp;

  const exp = {
    id: rawExp.id || defaultExp.id,
    image: rawExp.image || defaultExp.image,
    field: isEn ? rawExp.fieldEn || rawExp.field || defaultExp.field : rawExp.field || defaultExp.field,
    title: isEn ? rawExp.titleEn || rawExp.title || defaultExp.title : rawExp.title || defaultExp.title,
    role: isEn ? rawExp.roleEn || rawExp.role || defaultExp.role : rawExp.role || defaultExp.role,
    impact: isEn ? rawExp.impactEn || rawExp.impact || defaultExp.impact : rawExp.impact || defaultExp.impact,
    imageCaption: isEn
      ? rawExp.imageCaptionEn || rawExp.imageCaption || defaultExp.imageCaption
      : rawExp.imageCaption || defaultExp.imageCaption,
  };

  return (
    <section
      dir={isEn ? "ltr" : "rtl"}
      className="w-full py-12 md:py-16 bg-white text-start"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* الترويسة */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="text-start mb-6 md:mb-8"
        >
          <h2
            className={`text-2xl md:text-3xl font-bold text-[#014482] ${
              isEn ? "font-sans" : "font-scheherazade"
            }`}
          >
            {isEn ? "Experience Linked to This Service" : "خبرة مرتبطة بالخدمة"}
          </h2>
        </motion.div>

        {/* كرت الخبرة المتميزة */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -3, transition: { duration: 0.25 } }}
          className="group relative bg-white border border-slate-200/80 hover:border-slate-300 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 flex flex-col lg:flex-row items-stretch"
        >
          {/* قسم الصورة */}
          <div className="relative w-full lg:w-[46%] min-h-[250px] sm:min-h-[290px] lg:min-h-[340px] overflow-hidden bg-slate-100 flex-shrink-0">
            <img
              src={exp.image}
              alt={exp.title}
              className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

            {/* بادج التوثيق فوق الصورة */}
            <div className="absolute bottom-3 end-3 z-10">
              <span className="px-3 py-1 rounded bg-[#014482]/90 backdrop-blur-xs text-[11px] text-white font-sans font-medium shadow-xs">
                {exp.imageCaption}
              </span>
            </div>
          </div>

          {/* قسم المحتوى النصي */}
          <div className="flex-1 p-5 sm:p-6 lg:p-7 flex flex-col justify-between text-start">
            <div>
              {/* المجال */}
              <span className="text-[11px] md:text-xs text-slate-400 font-sans block mb-1">
                {exp.field}
              </span>

              {/* عنوان المشروع */}
              <h3
                className={`text-lg sm:text-xl lg:text-[22px] font-bold text-[#014482] mb-3.5 leading-snug group-hover:text-[#1874C7] transition-colors duration-200 ${
                  isEn ? "font-sans" : "font-scheherazade"
                }`}
              >
                {exp.title}
              </h3>

              {/* صندوق دور المستشار الفضي مع شريط جانبي متكيف */}
              <div className="bg-[#F5F6F7] rounded-xl p-3.5 md:p-4 mb-3.5 border-s-[3px] border-s-[#1874C7] text-start">
                <span className="text-[11px] md:text-xs font-bold text-[#014482] font-sans block mb-1">
                  {isEn ? "Role of Emad Abu Saleh:" : "دور عماد أبو صالح الفناطسة:"}
                </span>
                <p className="text-xs md:text-[13px] text-slate-600 leading-relaxed font-sans font-normal">
                  {exp.role}
                </p>
              </div>

              {/* أثر التخطيط والتدخل الميداني */}
              <div className="mb-4">
                <span className="text-[11px] md:text-xs font-bold text-[#014482] font-sans block mb-1">
                  {isEn ? "Planning & Field Impact:" : "أثر التخطيط والتدخل الميداني:"}
                </span>
                <p className="text-xs md:text-[12.5px] text-slate-500 leading-relaxed font-sans font-normal">
                  {exp.impact}
                </p>
              </div>
            </div>

            {/* زر عرض تفاصيل المشروع مع سهم متكيف */}
            <div className="pt-2 flex justify-end">
              <Link
                href={`/${currentLang}/projects/${exp.id}`}
                className="inline-flex items-center gap-1.5 text-xs md:text-sm font-medium text-[#1874C7] hover:text-[#014482] transition-colors group/btn"
              >
                <span>{isEn ? "View Project Details" : "عرض تفاصيل المشروع"}</span>
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    isEn
                      ? "group-hover/btn:translate-x-1"
                      : "group-hover/btn:-translate-x-1"
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

        </motion.div>
      </div>
    </section>
  );
};