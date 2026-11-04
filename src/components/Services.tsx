"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ==========================================
// 1. أيقونة الكرت 1 (كصورة من جهازك)
// ضع صورتك داخل مجلد public/images/ واستبدل المسار هنا
// ==========================================
export function CardOneImage({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <img
      src="/images/CardOneImage.png" // ضع مسار صورتك هنا (مثال: /images/icon.png أو .svg)
      alt="أيقونة الخدمة"
      className={`${className} object-contain`}
      onError={(e) => {
        // أيقونة احتياطية في حال لم تكن الصورة مضافة بعد لتجنب اختفاء المكان
        (e.currentTarget as HTMLImageElement).style.display = "none";
      }}
    />
  );
}

// ==========================================
// بقية الأيقونات الخدمية
// ==========================================
function ServiceIcon({
  type,
  className = "w-6 h-6",
}: {
  type: ServiceItem["icon"];
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

// ==========================================
// بيانات الخدمات
// ==========================================
interface ServiceItem {
  id: string;
  number: string;
  title: string;
  featuredTitle?: string;
  shortDesc: string;
  fullDesc: string;
  icon: "megaphone" | "training" | "guides" | "mentoring";
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: "advocacy",
    number: "01",
    title: "التخطيط وقيادة حملات كسب التأييد / المناصرة",
    featuredTitle: "التخطيط وقيادة حملات\nكسب التأييد / المناصرة",
    shortDesc: "تصميم الخطط وبناء الرسائل والتحالفات",
    fullDesc:
      "تصميم الخطط، بناء الرسائل الموجهة، وتوجيه مسارات العمل الميدانية والتحالفية لتحقيق أهداف المناصرة وكسب التأييد.",
    icon: "megaphone",
  },
  {
    id: "training",
    number: "02",
    title: "التدريب وبناء القدرات",
    shortDesc: "برامج تطبيقية مخصصة للفرق والمنظمات",
    fullDesc:
      "تصميم وتنفيذ برامج تدريبية تطبيقية مخصصة لتطوير مهارات الفرق وتمكين المنظمات من تحقيق أثر مستدام وملموس.",
    icon: "training",
  },
  {
    id: "guides",
    number: "03",
    title: "إعداد الأدلة والمناهج",
    shortDesc: "تطوير أدلة إجرائية ومواد معرفية محكمة",
    fullDesc:
      "تطوير أدلة إجرائية وتدريبية ومواد معرفية محكمة تجمع بين المنهجية العلمية وسهولة التطبيق العملي في الميدان.",
    icon: "guides",
  },
  {
    id: "mentoring",
    number: "04",
    title: "الإرشاد المهني والاستشاري",
    shortDesc: "مرافقة توجيهية لقيادات العمل الأهلي والمدني",
    fullDesc:
      "تقديم جلسات إرشاد مهني ومرافقة استشارية وتوجيهية لقيادات وكوادر العمل الأهلي والمدني لتعزيز الفعالية المؤسسية.",
    icon: "mentoring",
  },
];

interface ServicesProps {
  onSelectService?: (serviceId: string) => void;
}

// ==========================================
// المكون الرئيسي للخدمات
// ==========================================
export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [activeId, setActiveId] = useState<string>("advocacy");

  const activeService =
    SERVICES_DATA.find((s) => s.id === activeId) || SERVICES_DATA[0];
  const sideServices = SERVICES_DATA.filter((s) => s.id !== activeId);

  return (
    <section
      id="services"
      className="w-full bg-white py-10 sm:py-14 lg:py-16 overflow-hidden"
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
          <h2 className="font-scheherazade text-3xl sm:text-4xl lg:text-[40px] font-bold text-dark-blue leading-tight mb-1">
            خبرة تتحول إلى عمل قابل للتنفيذ
          </h2>
          <p className="font-scheherazade text-xs sm:text-sm lg:text-[16px] text-primary-blue/80 font-normal">
            تكامل بين التخطيط الاستراتيجي، بناء القدرات، إعداد الأدلة التخصصية، والإرشاد المؤسسي.
          </p>
        </motion.div>

        {/* شبكة المحتوى: البطاقة الزرقاء + القائمة الجانبية */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-7 items-stretch">
          
          {/* العمود الأيمن: البطاقة الزرقاء الرئيسية */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-7 flex"
          >
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="group/card relative w-full rounded-[20px] bg-gradient-to-b from-[#1874C7] via-[#0E5CA5] to-[#014482] text-white p-6 sm:p-7 lg:p-8 shadow-md hover:shadow-xl hover:shadow-primary-blue/20 transition-all duration-300 flex flex-col justify-between overflow-hidden min-h-[270px] sm:min-h-[300px]"
            >
              {/* هالة ضوئية خفيفة جداً داخل البطاقة */}
              <div className="absolute -top-16 -left-16 w-52 h-52 bg-white/5 group-hover/card:bg-white/10 rounded-full blur-2xl transition-colors duration-500 pointer-events-none" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="flex flex-col h-full justify-between z-10"
                >
                  {/* الصف العلوي: الرقم والأيقونة (صورة للكرت الأول أو SVG للبقية) */}
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
                    <h3 className="font-scheherazade text-xl sm:text-2xl lg:text-[27px] font-bold text-white leading-snug mb-2 whitespace-pre-line">
                      {activeService.featuredTitle || activeService.title}
                    </h3>
                    <p className="font-scheherazade text-xs sm:text-sm lg:text-[15px] text-white/85 leading-relaxed max-w-[500px] font-normal">
                      {activeService.fullDesc}
                    </p>
                  </div>

                  {/* رابط الاستكشاف */}
                  <div className="mt-5 flex justify-end">
                    <button
                      onClick={() => onSelectService?.(activeService.id)}
                      className="group/btn inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-semibold text-white/90 hover:text-white py-1 px-2.5 rounded-lg hover:bg-white/10 transition-all cursor-pointer"
                    >
                      <span className="relative">
                        استكشف تفاصيل الخدمة
                        <span className="absolute -bottom-0.5 inset-x-0 h-[1.5px] bg-white scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-200 origin-right" />
                      </span>
                      <span className="text-sm transition-transform duration-200 group-hover/btn:-translate-x-1">
                        ←
                      </span>
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </motion.div>

          {/* العمود الأيسر: الخط العمودي الفاصل + قائمة الخدمات الجانبية */}
          <div className="lg:col-span-5 flex items-stretch">
            {/* الخط الفاصل الرأسي الهادئ */}
            <div className="hidden lg:block w-[2px] bg-gray-100 rounded-full my-2 me-4 xl:me-6 shrink-0" />

            {/* قائمة الخدمات الثلاث بهوفر مخملي هادئ وبدون خطوط بارزة */}
            <div className="w-full flex flex-col justify-between divide-y divide-gray-100/80">
              {sideServices.map((service, index) => (
                <motion.button
                  key={service.id}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: 0.1 + index * 0.08,
                    ease: "easeOut",
                  }}
                  onClick={() => setActiveId(service.id)}
                  className="group w-full py-3.5 sm:py-4 px-3.5 flex items-center justify-between gap-3 text-start transition-colors duration-200 hover:bg-[#F8FAFC] rounded-xl cursor-pointer"
                >
                  {/* تفاصيل الخدمة */}
                  <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                    <span className="font-sans text-lg sm:text-xl font-bold text-primary-blue group-hover:text-dark-blue transition-colors leading-none shrink-0 w-7 sm:w-8">
                      {service.number}
                    </span>

                    <div className="text-dark-blue/80 group-hover:text-primary-blue transition-colors shrink-0">
                      <ServiceIcon
                        type={service.icon}
                        className="w-5 h-5 sm:w-6 sm:h-6"
                      />
                    </div>

                    <div className="min-w-0 pe-1">
                      <h4 className="font-scheherazade text-base sm:text-[18px] font-bold text-dark-blue group-hover:text-primary-blue transition-colors leading-snug truncate">
                        {service.title}
                      </h4>
                      <p className="font-scheherazade text-xs sm:text-[12px] text-gray-500 leading-normal truncate">
                        {service.shortDesc}
                      </p>
                    </div>
                  </div>

                  <span className="text-gray-300 group-hover:text-primary-blue text-xs sm:text-sm transition-transform duration-200 group-hover:-translate-x-1 shrink-0">
                    ←
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