"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  tag: string;
  variant: "blue" | "white" | "gray";
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: "advocacy",
    number: "01",
    title: "التخطيط وقيادة حملات كسب التأييد والمناصرة",
    description:
      "تطوير استراتيجيات المناصرة، وتحديد الأهداف وأصحاب المصلحة، وتحويل القضايا إلى خطط عمل واضحة وقابلة للتنفيذ.",
    tag: "الخدمة الرئيسية",
    variant: "blue",
  },
  {
    id: "training",
    number: "02",
    title: "التدريب",
    description:
      "تصميم وتنفيذ برامج تدريبية تساعد الأفراد والفرق على تطوير مهاراتهم وتحويل المعرفة إلى ممارسة عملية.",
    tag: "برامج عملية",
    variant: "white",
  },
  {
    id: "guides",
    number: "03",
    title: "إعداد الأدلة",
    description:
      "إعداد أدلة وأدوات عملية تنظم المعرفة وتسهّل استخدامها وتطبيقها في سياقات العمل المختلفة.",
    tag: "أدوات مؤسسية",
    variant: "white",
  },
  {
    id: "mentoring",
    number: "04",
    title: "الإرشاد المهني",
    description:
      "مساندة الأفراد في استكشاف خياراتهم المهنية، وتحديد أهدافهم، وبناء خطوات واضحة نحو التطور المهني.",
    tag: "مساندة وتوجيه",
    variant: "gray",
  },
];

export const ServicesGrid: React.FC = () => {
  const pathname = usePathname();
  const currentLang = pathname?.startsWith("/en") ? "en" : "ar";

  return (
    <section
      id="services-list"
      dir="rtl"
      className="w-full bg-white py-12 sm:py-16 lg:py-20 overflow-hidden"
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* الترويسة العلوية */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-start mb-8 sm:mb-11 max-w-2xl"
        >
          <h2 className="font-scheherazade text-3xl sm:text-4xl lg:text-[42px] font-bold text-dark-blue leading-tight mb-2">
            خدمات تحوّل المعرفة الى عمل
          </h2>
          <p className="font-scheherazade text-xs sm:text-sm lg:text-[15px] text-gray-500 font-normal leading-relaxed">
            من التخطيط وقيادة حملات المناصرة إلى التدريب وإعداد الأدلة والإرشاد المهني، تتكامل الخدمات لتلبية احتياجات الأفراد والفرق والمؤسسات.
          </p>
        </motion.div>

        {/* شبكة الكروت الأربعة */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 items-stretch">
          {SERVICES_DATA.map((service, index) => {
            const isBlue = service.variant === "blue";
            const isGray = service.variant === "gray";
            const targetUrl = `/${currentLang}/services/${service.id}`;

            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                whileHover={{ y: -4 }}
                className={`group relative rounded-[20px] flex flex-col justify-between overflow-hidden transition-all duration-300 p-6 sm:p-7 select-none ${
                  isBlue
                    ? "bg-gradient-to-b from-[#1A77CB] via-[#0E5CA5] to-[#023E75] text-white shadow-lg shadow-blue-900/15 hover:shadow-2xl hover:shadow-primary-blue/30"
                    : isGray
                    ? "bg-[#F5F6F7] text-dark-blue border border-[#E5EAF0] shadow-xs hover:shadow-xl hover:border-primary-blue/30"
                    : "bg-white text-dark-blue border border-[#E5EAF0] shadow-xs hover:shadow-xl hover:border-primary-blue/30"
                }`}
              >
                <div>
                  {/* 1. الصف العلوي: الرقم (Normal غير عريض) على اليمين والتصنيف على اليسار */}
                  <div className="flex items-center justify-between pb-3">
                    {/* الرقم بخط نحيف ورشيق */}
                    <span
                      className={`font-sans text-2xl sm:text-3xl font-normal leading-none tracking-normal ${
                        isBlue ? "text-white" : "text-primary-blue"
                      }`}
                    >
                      {service.number}
                    </span>

                    {/* الوسم التمييزي */}
                    <span
                      className={`text-xs font-semibold px-3 py-0.5 rounded-full font-scheherazade ${
                        isBlue
                          ? "bg-white/20 text-white backdrop-blur-xs"
                          : "text-gray-400 font-normal"
                      }`}
                    >
                      {service.tag}
                    </span>
                  </div>

                  {/* خط فاصل علوي رقيق */}
                  <div
                    className={`w-full h-px mb-4 ${
                      isBlue ? "bg-white/15" : "bg-[#E5EAF0]"
                    }`}
                  />

                  {/* 2. عنوان الخدمة */}
                  <h3
                    className={`font-scheherazade text-xl sm:text-2xl lg:text-[26px] font-bold leading-snug mb-2.5 text-start transition-colors duration-200 ${
                      isBlue ? "text-white" : "text-dark-blue group-hover:text-primary-blue"
                    }`}
                  >
                    {service.title}
                  </h3>

                  {/* 3. وصف الخدمة */}
                  <p
                    className={`font-scheherazade text-xs sm:text-sm lg:text-[14px] leading-[1.8] font-normal text-start mb-4 ${
                      isBlue ? "text-white/90" : "text-gray-500"
                    }`}
                  >
                    {service.description}
                  </p>
                </div>

                {/* 4. خط فاصل سفلي ورابط الاستكشاف */}
                <div>
                  <div
                    className={`w-full h-px mb-3.5 ${
                      isBlue ? "bg-white/15" : "bg-[#E5EAF0]"
                    }`}
                  />
                  <div className="flex items-center justify-end">
                    <Link
                      href={targetUrl}
                      className={`inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold transition-all duration-200 group-hover:gap-2.5 ${
                        isBlue
                          ? "text-white hover:text-blue-100"
                          : "text-primary-blue hover:text-dark-blue"
                      }`}
                    >
                      <span>استكشف الخدمة</span>
                      <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-x-1" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
};