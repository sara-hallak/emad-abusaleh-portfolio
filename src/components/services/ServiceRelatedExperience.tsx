"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ServiceDetail } from "@/data/servicesDetailData";

interface ServiceRelatedExperienceProps {
  service?: ServiceDetail | any;
}

const defaultExperience = {
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

export const ServiceRelatedExperience: React.FC<ServiceRelatedExperienceProps> = ({ service }) => {
  const params = useParams();
  const lang = (params?.lang as string) || "ar";

  const exp = service?.relatedExperience || defaultExperience;

  return (
    <section className="w-full py-12 md:py-16 bg-white" dir="rtl">
      {/* توحيد العرض مع باقي أقسام الصفحة بدقة */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="text-right mb-6 md:mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#014482] font-scheherazade">
            خبرة مرتبطة بالخدمة
          </h2>
        </motion.div>

        {/* Feature Card: الصورة على اليمين والنص على اليسار */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -3, transition: { duration: 0.25 } }}
          className="group relative bg-white border border-slate-200/80 hover:border-slate-300 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 flex flex-col lg:flex-row items-stretch"
        >
          {/* 1. قسم الصورة (على اليمين أولاً في اتجاه RTL) */}
          <div className="relative w-full lg:w-[46%] min-h-[250px] sm:min-h-[290px] lg:min-h-[340px] overflow-hidden bg-slate-100 flex-shrink-0">
            <img
              src={exp.image}
              alt={exp.title}
              className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
              loading="lazy"
            />
            {/* تدرج هادئ للتباين */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

            {/* بادج التوثيق فوق الصورة */}
            <div className="absolute bottom-3 right-3 z-10">
              <span className="px-3 py-1 rounded bg-[#014482]/90 backdrop-blur-xs text-[11px] text-white font-sans font-medium shadow-xs">
                {exp.imageCaption}
              </span>
            </div>
          </div>

          {/* 2. قسم المحتوى النصي (على اليسار في اتجاه RTL) */}
          <div className="flex-1 p-5 sm:p-6 lg:p-7 flex flex-col justify-between text-right">
            <div>
              {/* المجال */}
              <span className="text-[11px] md:text-xs text-slate-400 font-sans block mb-1">
                {exp.field}
              </span>

              {/* عنوان المشروع */}
              <h3 className="text-lg sm:text-xl lg:text-[22px] font-bold text-[#014482] font-scheherazade mb-3.5 leading-snug group-hover:text-[#1874C7] transition-colors duration-200">
                {exp.title}
              </h3>

              {/* صندوق دور المستشار الفضي مع خط أزرق جانبي */}
              <div className="bg-[#F5F6F7] rounded-xl p-3.5 md:p-4 mb-3.5 border-r-[3px] border-r-[#1874C7] text-right">
                <span className="text-[11px] md:text-xs font-bold text-[#014482] font-sans block mb-1">
                  دور عماد أبو صالح الفناطسة:
                </span>
                <p className="text-xs md:text-[13px] text-slate-600 leading-relaxed font-sans font-normal">
                  {exp.role}
                </p>
              </div>

              {/* أثر التخطيط والتدخل الميداني */}
              <div className="mb-4">
                <span className="text-[11px] md:text-xs font-bold text-[#014482] font-sans block mb-1">
                  أثر التخطيط والتدخل الميداني:
                </span>
                <p className="text-xs md:text-[12.5px] text-slate-500 leading-relaxed font-sans font-normal">
                  {exp.impact}
                </p>
              </div>
            </div>

            {/* زر عرض تفاصيل المشروع */}
            <div className="pt-2 flex justify-end">
  <Link
    href={`/${lang}/projects/${exp.id}`}
    className="inline-flex items-center gap-1.5 text-xs md:text-sm font-medium text-[#1874C7] hover:text-[#014482] transition-colors group/btn"
  >
    <span>عرض تفاصيل المشروع</span>
    <svg
      className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:-translate-x-1"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
    </svg>
  </Link>
</div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};