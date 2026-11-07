"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  tag: string;
  tagEn: string;
  variant: "blue" | "white" | "gray";
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: "advocacy",
    number: "01",
    title: "التخطيط وقيادة حملات كسب التأييد والمناصرة",
    titleEn: "Advocacy Strategy & Campaign Leadership",
    description:
      "تطوير استراتيجيات المناصرة، وتحديد الأهداف وأصحاب المصلحة، وتحويل القضايا إلى خطط عمل واضحة وقابلة للتنفيذ.",
    descriptionEn:
      "Developing evidence-based advocacy strategies, mapping stakeholders, and transforming civic causes into clear, actionable delivery plans.",
    tag: "الخدمة الرئيسية",
    tagEn: "Flagship Service",
    variant: "blue",
  },
  {
    id: "training",
    number: "02",
    title: "التدريب",
    titleEn: "Capacity Building & Training",
    description:
      "تصميم وتنفيذ برامج تدريبية تساعد الأفراد والفرق على تطوير مهاراتهم وتحويل المعرفة إلى ممارسة عملية.",
    descriptionEn:
      "Designing and executing interactive training curricula empowering teams to hone practical competencies and apply knowledge in the field.",
    tag: "برامج عملية",
    tagEn: "Applied Programs",
    variant: "white",
  },
  {
    id: "guides",
    number: "03",
    title: "إعداد الأدلة",
    titleEn: "Manuals & Operational Toolkits",
    description:
      "إعداد أدلة وأدوات عملية تنظم المعرفة وتسهّل استخدامها وتطبيقها في سياقات العمل المختلفة.",
    descriptionEn:
      "Authoring institutional guides and standardized toolkits that streamline knowledge and facilitate application across diverse operational settings.",
    tag: "أدوات مؤسسية",
    tagEn: "Institutional Toolkits",
    variant: "white",
  },
  {
    id: "mentoring",
    number: "04",
    title: "الإرشاد المهني",
    titleEn: "Professional Mentoring & Advisory",
    description:
      "مساندة الأفراد في استكشاف خياراتهم المهنية، وتحديد أهدافهم، وبناء خطوات واضحة نحو التطور المهني.",
    descriptionEn:
      "Supporting individuals in exploring strategic career trajectories, setting measurable goals, and formulating structured milestones for leadership growth.",
    tag: "مساندة وتوجيه",
    tagEn: "Advisory & Mentoring",
    variant: "gray",
  },
];

export const ServicesGrid: React.FC = () => {
  const pathname = usePathname();
  const currentLang = pathname?.startsWith("/en") ? "en" : "ar";
  const isEn = currentLang === "en";

  return (
    <section
      id="services-list"
      dir={isEn ? "ltr" : "rtl"}
      className="w-full bg-white py-12 sm:py-16 lg:py-20 overflow-hidden text-start"
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
          <h2
            className={`text-3xl sm:text-4xl lg:text-[42px] font-bold text-dark-blue leading-tight mb-2 ${
              isEn ? "font-sans" : "font-scheherazade"
            }`}
          >
            {isEn ? "Services Turning Knowledge into Action" : "خدمات تحوّل المعرفة الى عمل"}
          </h2>
          <p
            className={`text-xs sm:text-sm lg:text-[15px] text-gray-500 font-normal leading-relaxed ${
              isEn ? "font-sans" : "font-scheherazade"
            }`}
          >
            {isEn
              ? "From strategic planning and advocacy campaigns to capacity building, procedural manual authoring, and professional advisory — delivering integrated solutions tailored to institutions and teams."
              : "من التخطيط وقيادة حملات المناصرة إلى التدريب وإعداد الأدلة والإرشاد المهني، تتكامل الخدمات لتلبية احتياجات الأفراد والفرق والمؤسسات."}
          </p>
        </motion.div>

        {/* شبكة الكروت الأربعة */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 items-stretch">
          {SERVICES_DATA.map((service, index) => {
            const isBlue = service.variant === "blue";
            const isGray = service.variant === "gray";
            const targetUrl = `/${currentLang}/services/${service.id}`;

            const title = isEn ? service.titleEn : service.title;
            const description = isEn ? service.descriptionEn : service.description;
            const tag = isEn ? service.tagEn : service.tag;

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
                  {/* الصف العلوي: الرقم والوسم */}
                  <div className="flex items-center justify-between pb-3">
                    <span
                      className={`font-sans text-2xl sm:text-3xl font-normal leading-none tracking-normal ${
                        isBlue ? "text-white" : "text-primary-blue"
                      }`}
                    >
                      {service.number}
                    </span>

                    <span
                      className={`text-xs font-semibold px-3 py-0.5 rounded-full ${
                        isEn ? "font-sans" : "font-scheherazade"
                      } ${
                        isBlue
                          ? "bg-white/20 text-white backdrop-blur-xs"
                          : "text-gray-400 font-normal"
                      }`}
                    >
                      {tag}
                    </span>
                  </div>

                  {/* خط فاصل علوي رقيق */}
                  <div
                    className={`w-full h-px mb-4 ${
                      isBlue ? "bg-white/15" : "bg-[#E5EAF0]"
                    }`}
                  />

                  {/* عنوان الخدمة */}
                  <h3
                    className={`text-xl sm:text-2xl lg:text-[26px] font-bold leading-snug mb-2.5 text-start transition-colors duration-200 ${
                      isEn ? "font-sans" : "font-scheherazade"
                    } ${
                      isBlue ? "text-white" : "text-dark-blue group-hover:text-primary-blue"
                    }`}
                  >
                    {title}
                  </h3>

                  {/* وصف الخدمة */}
                  <p
                    className={`text-xs sm:text-sm lg:text-[14px] leading-[1.8] font-normal text-start mb-4 ${
                      isEn ? "font-sans" : "font-scheherazade"
                    } ${
                      isBlue ? "text-white/90" : "text-gray-500"
                    }`}
                  >
                    {description}
                  </p>
                </div>

                {/* خط فاصل سفلي ورابط الاستكشاف */}
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
                      <span>{isEn ? "Explore Service" : "استكشف الخدمة"}</span>
                      {isEn ? (
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                      ) : (
                        <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-x-1" />
                      )}
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