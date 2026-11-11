"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { getTranslations } from "@/data/translations";

// أيقونة الكرت الأول (صورة محلية مع حماية ضد الخطأ)
export function CardOneImage({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <img
      src="/images/CardOneImage.png"
      alt="Service Icon"
      className={`${className} object-contain`}
      onError={(e) => {
        (e.currentTarget as HTMLImageElement).style.display = "none";
      }}
    />
  );
}

// باقي الأيقونات الخدمية
function ServiceIcon({
  type,
  className = "w-6 h-6",
}: {
  type: string;
  className?: string;
}) {
  switch (type) {
    case "megaphone":
      return <CardOneImage className={className} />;

    case "training":
      return (
        <svg
          className={className}
          viewBox="0 0 36 36"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="18" cy="7.5" r="3.2" />
          <path d="M12.5 16.5C12.5 13.7 15 12 18 12C21 12 23.5 13.7 23.5 16.5" />
          <path d="M6 17H30" />
          <circle cx="10" cy="23.5" r="2.5" />
          <path d="M6 30.5C6 28.3 7.8 27 10 27C12.2 27 14 28.3 14 30.5" />
          <circle cx="18" cy="23.5" r="2.5" />
          <path d="M14 30.5C14 28.3 15.8 27 18 27C20.2 27 22 28.3 22 30.5" />
          <circle cx="26" cy="23.5" r="2.5" />
          <path d="M22 30.5C22 28.3 23.8 27 26 27C28.2 27 30 28.3 30 30.5" />
        </svg>
      );

    case "guides":
      return (
        <svg
          className={className}
          viewBox="0 0 36 36"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 5H11C9.3 5 8 6.3 8 8V28C8 29.7 9.3 31 11 31H25C26.7 31 28 29.7 28 28V11L22 5Z" />
          <path d="M21 5V11H28" />
          <path d="M13 17H23" />
          <path d="M13 21.5H23" />
          <path d="M13 26H19" />
        </svg>
      );

    case "mentoring":
    default:
      return (
        <svg
          className={className}
          viewBox="0 0 36 36"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="13.5" cy="12" r="4.2" />
          <path d="M6 27.5C6 23.4 9.4 20.5 13.5 20.5C17.6 20.5 21 23.4 21 27.5" />
          <circle cx="24" cy="13.5" r="3.5" />
          <path d="M21.5 20.8C22.3 20.6 23.1 20.5 24 20.5C27.5 20.5 30.5 23 30.5 26.5" />
        </svg>
      );
  }
}

interface ServicesProps {
  onSelectService?: (serviceId: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const pathname = usePathname();
  const currentLang = pathname?.startsWith("/en") ? "en" : "ar";
  const isEn = currentLang === "en";

  const t = getTranslations(currentLang);
  const servicesList = t.services.items;

  const [activeId, setActiveId] = useState<string>("advocacy");

  const activeService =
    servicesList.find((s) => s.id === activeId) || servicesList[0];
  const sideServices = servicesList.filter((s) => s.id !== activeId);

  return (
    <section
      id="services"
      className="w-full bg-white py-10 sm:py-14 lg:py-16 overflow-hidden text-start"
      dir={isEn ? "ltr" : "rtl"}
    >
      <div className="max-w-[1260px] w-full mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* ترويسة القسم */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-start mb-6 sm:mb-8"
        >
          <h2
            className={`font-bold text-[#014482] leading-tight mb-1 ${
              isEn
                ? "font-sans text-2xl sm:text-3xl lg:text-[34px]"
                : "font-scheherazade text-3xl sm:text-4xl lg:text-[40px]"
            }`}
          >
            {t.services.sectionTitle}
          </h2>
          <p
            className={`font-normal text-[#1874C7]/80 ${
              isEn
                ? "font-sans text-xs sm:text-sm lg:text-[15px]"
                : "font-scheherazade text-xs sm:text-sm lg:text-[16px]"
            }`}
          >
            {t.services.sectionDesc}
          </p>
        </motion.div>

        {/* شبكة المحتوى: البطاقة الزرقاء + القائمة الجانبية */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-7 items-stretch">
          
          {/* البطاقة الزرقاء الرئيسية */}
          <motion.div
            initial={{ opacity: 0, x: isEn ? -25 : 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-7 flex"
          >
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="group/card relative w-full rounded-[20px] bg-gradient-to-b from-[#1874C7] via-[#0E5CA5] to-[#014482] text-white p-6 sm:p-7 lg:p-8 shadow-md hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 flex flex-col justify-between overflow-hidden min-h-[270px] sm:min-h-[300px]"
            >
              {/* هالة ضوئية خفيفة */}
              <div className="absolute -top-16 -left-16 w-52 h-52 bg-white/5 group-hover/card:bg-white/10 rounded-full blur-2xl transition-colors duration-500 pointer-events-none" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.id + currentLang}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="flex flex-col h-full justify-between z-10"
                >
                  {/* الصف العلوي: الرقم والأيقونة */}
                  <div className="flex items-start justify-between gap-4 mb-4 sm:mb-5">
                    <span className="font-sans text-3xl sm:text-4xl lg:text-[46px] font-extrabold tracking-tight leading-none text-white select-none">
                      {activeService.number}
                    </span>

                    <div className="transition-transform duration-300 group-hover/card:scale-105">
                      <ServiceIcon
                        type={activeService.icon}
                        className="w-12 h-12 sm:w-14 sm:h-14"
                      />
                    </div>
                  </div>

                  {/* عنوان الخدمة ووصفها */}
                  <div className="my-auto text-start">
                    <h3
                      className={`font-bold text-white leading-snug mb-2 ${
                        isEn
                          ? "font-sans text-lg sm:text-xl lg:text-[23px]"
                          : "font-scheherazade text-xl sm:text-2xl lg:text-[27px] whitespace-pre-line"
                      }`}
                    >
                      {activeService.title}
                    </h3>
                    <p
                      className={`text-white/85 leading-relaxed font-normal max-w-[500px] ${
                        isEn
                          ? "font-sans text-xs sm:text-sm lg:text-[14px]"
                          : "font-scheherazade text-xs sm:text-sm lg:text-[15px]"
                      }`}
                    >
                      {activeService.fullDesc}
                    </p>
                  </div>

                  {/* رابط الاستكشاف الذي ينقلك للصفحة الداخلية للخدمة */}
                  <div className="mt-5 flex justify-end">
                    <Link
                      href={`/${currentLang}/services/${activeService.id}`}
                      className="group/btn inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-semibold text-white/90 hover:text-white py-1.5 px-3 rounded-lg hover:bg-white/10 transition-all cursor-pointer"
                    >
                      <span className="relative font-sans">
                        {t.services.exploreBtn}
                        <span
                          className={`absolute -bottom-0.5 inset-x-0 h-[1.5px] bg-white scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-200 ${
                            isEn ? "origin-left" : "origin-right"
                          }`}
                        />
                      </span>
                      <span
                        className={`text-sm transition-transform duration-200 ${
                          isEn
                            ? "group-hover/btn:translate-x-1"
                            : "group-hover/btn:-translate-x-1"
                        }`}
                      >
                        {isEn ? "→" : "←"}
                      </span>
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </motion.div>

          {/* القائمة الجانبية للخدمات */}
          <div className="lg:col-span-5 flex items-stretch">
            {/* الخط الفاصل الرأسي */}
            <div
              className={`hidden lg:block w-[2px] bg-gray-100 rounded-full my-2 shrink-0 ${
                isEn ? "ms-4 xl:ms-6 me-1" : "me-4 xl:me-6 ms-1"
              }`}
            />

            <div className="w-full flex flex-col justify-between divide-y divide-gray-100/80">
              {sideServices.map((service, index) => (
                <motion.button
                  key={service.id + currentLang}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: 0.1 + index * 0.08,
                    ease: "easeOut",
                  }}
                  onClick={() => {
                    setActiveId(service.id);
                    onSelectService?.(service.id);
                  }}
                  className="group w-full py-3.5 sm:py-4 px-3.5 flex items-center justify-between gap-3 text-start transition-colors duration-200 hover:bg-[#F8FAFC] rounded-xl cursor-pointer"
                >
                  <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                    <span className="font-sans text-lg sm:text-xl font-bold text-[#1874C7] group-hover:text-[#014482] transition-colors leading-none shrink-0 w-7 sm:w-8">
                      {service.number}
                    </span>

                    <div className="text-[#014482]/80 group-hover:text-[#1874C7] transition-colors shrink-0">
                      <ServiceIcon
                        type={service.icon}
                        className="w-5 h-5 sm:w-6 sm:h-6"
                      />
                    </div>

                    <div className="min-w-0 pe-1">
                      <h4
                        className={`font-bold text-[#014482] group-hover:text-[#1874C7] transition-colors leading-snug truncate ${
                          isEn
                            ? "font-sans text-xs sm:text-[14px]"
                            : "font-scheherazade text-base sm:text-[18px]"
                        }`}
                      >
                        {service.title}
                      </h4>
                      <p
                        className={`text-gray-500 leading-normal truncate ${
                          isEn
                            ? "font-sans text-[11px] sm:text-xs"
                            : "font-scheherazade text-xs sm:text-[12px]"
                        }`}
                      >
                        {service.shortDesc}
                      </p>
                    </div>
                  </div>

                  <span
                    className={`text-gray-300 group-hover:text-[#1874C7] text-xs sm:text-sm transition-transform duration-200 shrink-0 ${
                      isEn
                        ? "group-hover:translate-x-1"
                        : "group-hover:-translate-x-1"
                    }`}
                  >
                    {isEn ? "→" : "←"}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};