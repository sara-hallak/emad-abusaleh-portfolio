"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { usePathname } from "next/navigation";
import { ServiceDetail } from "@/data/servicesDetailData";

interface ServiceDetailHeroProps {
  service?: ServiceDetail | any;
  lang?: string;
}

const DEFAULT_LAW_IMAGE =
  "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80";

const BACKUP_LAW_IMAGE =
  "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80";

export const ServiceDetailHero: React.FC<ServiceDetailHeroProps> = ({
  service,
  lang: propLang,
}) => {
  const pathname = usePathname();
  const currentLang =
    propLang || (pathname?.startsWith("/en") ? "en" : "ar");
  const isEn = currentLang === "en";

  const [imageError, setImageError] = useState(false);

  const rawImage = service?.mainImage || service?.image;
  const imageSrc = imageError
    ? BACKUP_LAW_IMAGE
    : rawImage && !rawImage.startsWith("/images/")
    ? rawImage
    : DEFAULT_LAW_IMAGE;

  // استخراج النصوص تلقائياً من الداتا (سواء كانت متوفرة بالإنجليزية أو بالعربية)
  const eyebrow = isEn
    ? service?.eyebrowEn || service?.eyebrow || "Service Overview"
    : service?.eyebrow || "الخدمة الأولى";

  const title = isEn
    ? service?.titleEn || service?.title || "Advocacy Campaigns & Coalition Building"
    : service?.title || "حملات المدافعة وبناء التحالفات والسياسات العامة";

  const description = isEn
    ? service?.descriptionEn || service?.description
    : service?.description ||
      "تصميم وإدارة استراتيجيات مدافعة متكاملة ترتكز على التحليل القانوني والسياساتي الرصين، وبناء التحالفات المجتمعية والمؤسسية لتحويل المطالب المشروعة إلى سياسات وقوانين نافذة.";

  const imageCaption = isEn
    ? service?.imageCaptionEn || service?.imageCaption || "Strategic consultation and legislative dialogue session"
    : service?.imageCaption ||
      "المستشار عماد الفناطسة خلال جلسة نقاشية حول تعديلات تشريعية مع ممثلي المجتمع المدني";

  return (
    <section
      id="service-hero"
      dir={isEn ? "ltr" : "rtl"}
      className="relative w-full bg-white pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pt-14 lg:pb-18 overflow-hidden text-start"
    >
      <div className="max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* العمود الأول: النصوص وزر التواصل */}
          <div className="lg:col-span-7 flex flex-col text-start">
            
            {/* الشارة مع الخط الأفقي */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-2.5"
            >
              <span className="text-xs sm:text-sm font-semibold text-[#1874C7] font-sans">
                {eyebrow}
              </span>
              <span className="w-8 h-[2px] bg-[#1874C7] rounded-full" />
            </motion.div>

            {/* العنوان الرئيسي للخدمة */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#014482] leading-[1.25] tracking-tight mb-4 ${
                isEn ? "font-sans" : "font-scheherazade"
              }`}
            >
              {title}
            </motion.h1>

            {/* الوصف التفصيلي */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className={`text-base sm:text-lg lg:text-[20px] text-gray-700 leading-[1.85] font-normal mb-8 max-w-2xl ${
                isEn ? "font-sans" : "font-scheherazade"
              }`}
            >
              {description}
            </motion.p>

            {/* زر التواصل */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center justify-start"
            >
              <motion.a
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="mailto:contact@emadabusaleh.com"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-2.5 sm:py-3 rounded-xl bg-[#1874C7] hover:bg-[#014482] text-white font-semibold text-xs sm:text-sm transition-all duration-200 shadow-md shadow-blue-500/20 cursor-pointer font-sans"
              >
                <span>{isEn ? "Contact Emad" : "تواصل مع عماد"}</span>
                <Mail className="w-4 h-4" />
              </motion.a>
            </motion.div>

          </div>

          {/* العمود الثاني: بطاقة الصورة والشريط التوثيقي */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, x: isEn ? 20 : -20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 w-full flex justify-center"
          >
            <div className="group relative w-full max-w-[520px] rounded-[22px] overflow-hidden bg-slate-100 shadow-xl shadow-blue-950/8 border border-gray-100 flex flex-col">
              
              {/* قسم الصورة مع حركة الزوم السينمائية */}
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-slate-900">
                <motion.img
                  src={imageSrc}
                  alt={title}
                  initial={{ scale: 1 }}
                  animate={{
                    scale: [1, 1.08, 1],
                  }}
                  transition={{
                    duration: 16,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                  whileHover={{ scale: 1.12, transition: { duration: 0.6 } }}
                  className="w-full h-full object-cover object-center select-none"
                  loading="eager"
                  onError={() => {
                    if (!imageError) setImageError(true);
                  }}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* الشريط الكحلي أسفل الصورة */}
              <div className="bg-[#014482] text-white px-4 py-3 text-center sm:text-start">
                <p
                  className={`text-xs sm:text-[13px] text-white/95 leading-relaxed font-normal ${
                    isEn ? "font-sans" : "font-scheherazade"
                  }`}
                >
                  {imageCaption}
                </p>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};