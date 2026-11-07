"use client";

import React, { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { usePathname } from "next/navigation";
import { ServiceDetail } from "@/data/servicesDetailData";

interface ServiceDeliverablesProps {
  service?: ServiceDetail | any;
  lang?: string;
}

const realDocImages = [
  "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80",
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const ServiceDeliverables: React.FC<ServiceDeliverablesProps> = ({
  service,
  lang: propLang,
}) => {
  const pathname = usePathname();
  const currentLang = propLang || (pathname?.startsWith("/en") ? "en" : "ar");
  const isEn = currentLang === "en";

  const deliverables = (isEn && service?.deliverablesEn) || service?.deliverables || [];
  const [downloadingId, setDownloadingId] = useState<string | null>(null);

  const handleDownload = (e: React.MouseEvent, item: any) => {
    e.stopPropagation();
    setDownloadingId(item.id);

    if (item.fileUrl) {
      window.open(item.fileUrl, "_blank");
    }

    setTimeout(() => {
      setDownloadingId(null);
    }, 1200);
  };

  return (
    <section
      dir={isEn ? "ltr" : "rtl"}
      className="w-full py-14 md:py-20 bg-white text-start"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* الترويسة */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="text-start mb-10 md:mb-12"
        >
          <h2
            className={`text-2xl md:text-3xl lg:text-4xl font-bold text-[#014482] mb-2.5 ${
              isEn ? "font-sans" : "font-scheherazade"
            }`}
          >
            {isEn ? "Expected Deliverables" : "المخرجات المحتملة"}
          </h2>
          <p className="text-xs md:text-sm text-slate-500 max-w-2xl leading-relaxed font-sans">
            {isEn
              ? "Tangible operational outputs designed through a phased intervention model, tailored to institutional needs."
              : "خطة تدخل مرحلية تعتمد التسلسل المنطقي من قراءة الواقع وحتى المتابعة التقييمية."}
          </p>
        </motion.div>

        {/* شبكة الكروت الأربعة */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 mb-10"
        >
          {deliverables.map((item: any, idx: number) => {
            const isDownloading = downloadingId === item.id;
            const imgSrc =
              item.image && !item.image.includes("/images/guides/")
                ? item.image
                : realDocImages[idx % realDocImages.length];

            const title = isEn && item.titleEn ? item.titleEn : item.title;
            const description = isEn && item.descriptionEn ? item.descriptionEn : item.description;
            const badge =
              isEn && item.badgeEn
                ? item.badgeEn
                : item.badge || (isEn ? "Working Document" : "وثيقة عمل");
            const format = isEn && item.formatEn ? item.formatEn : item.format;
            const tag = isEn && item.tagEn ? item.tagEn : item.tag;

            return (
              <motion.div
                key={item.id || idx}
                variants={cardVariants}
                whileHover={{ y: -5, transition: { duration: 0.25 } }}
                onClick={(e) => handleDownload(e, item)}
                className="group relative bg-white border border-slate-200/80 hover:border-[#1874C7]/50 rounded-2xl p-5 text-start flex flex-col justify-between hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 cursor-pointer overflow-hidden"
              >
                {/* خط أزرق علوي عند الهوفر */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#1874C7] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* العنوان */}
                  <h3
                    className={`text-lg font-bold text-[#014482] mb-2 leading-snug group-hover:text-[#1874C7] transition-colors duration-200 ${
                      isEn ? "font-sans" : "font-scheherazade"
                    }`}
                  >
                    {title}
                  </h3>

                  {/* الشرح */}
                  <p className="text-xs text-slate-500 leading-relaxed font-sans font-normal mb-4 line-clamp-3">
                    {description}
                  </p>

                  {/* صورة الوثيقة */}
                  <div className="relative w-full h-36 rounded-xl overflow-hidden bg-slate-100 border border-slate-200/60 mb-4 shadow-inner">
                    <img
                      src={imgSrc}
                      alt={title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />
                    
                    {/* شارة الوثيقة المتكيفة مع الزاوية */}
                    <div className="absolute bottom-2.5 end-2.5">
                      <span className="px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-[10px] text-white font-sans font-medium">
                        {badge}
                      </span>
                    </div>
                  </div>
                </div>

                {/* تذييل الكرت: الصيغة والحالة */}
                <div className="pt-3.5 border-t border-slate-100">
                  <div className="flex flex-col gap-1 text-[11px] font-sans text-start mb-3">
                    <span className="text-slate-500 font-normal leading-tight">
                      {format}
                    </span>
                    <span className="text-[#1874C7] font-medium leading-tight">
                      {tag}
                    </span>
                  </div>

                  {/* زر التنزيل */}
                  <button
                    type="button"
                    onClick={(e) => handleDownload(e, item)}
                    className="w-full py-2 px-3 rounded-lg bg-[#F8FAFC] group-hover:bg-[#1874C7] text-slate-700 group-hover:text-white border border-slate-200/70 group-hover:border-[#1874C7] flex items-center justify-center gap-2 text-xs font-sans font-medium transition-all duration-200 shadow-2xs"
                  >
                    {isDownloading ? (
                      <>
                        <svg className="w-3.5 h-3.5 animate-spin" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                        </svg>
                        <span>{isEn ? "Downloading..." : "جاري التحميل..."}</span>
                      </>
                    ) : (
                      <>
                        <svg
                          className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                          />
                        </svg>
                        <span>{isEn ? "Download Output" : "تحميل المخرج"}</span>
                      </>
                    )}
                  </button>
                </div>

              </motion.div>
            );
          })}
        </motion.div>

        {/* البانر الأزرق للملاحظة المهنية */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="w-full bg-[#1874C7] text-white rounded-xl py-3 px-5 text-center shadow-xs"
        >
          <p className="text-xs sm:text-[13px] font-normal leading-relaxed font-sans text-blue-50/95">
            <span className={`font-semibold text-white ${isEn ? "mr-1.5" : "ml-1.5"}`}>
              {isEn ? "Professional Note:" : "ملاحظة مهنية:"}
            </span>
            {isEn
              ? "Final deliverables and operational specifications are customized according to each initiative's unique context and organizational needs following the initial scoping session."
              : "تُحدد المخرجات النهائية وتفاصيلها التنفيذية وفق سياق كل مبادرة واحتياجات المؤسسة الفعلية بعد الجلسة الاستكشافية الأولى."}
          </p>
        </motion.div>

      </div>
    </section>
  );
};