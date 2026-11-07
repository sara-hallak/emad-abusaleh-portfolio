"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { usePathname } from "next/navigation";
import { ServiceDetail, TargetAudienceCard } from "@/data/servicesDetailData";

interface TargetAudienceInfo {
  badge?: string;
  badgeEn?: string;
  title?: string;
  titleEn?: string;
  description?: string;
  descriptionEn?: string;
  cards?: TargetAudienceCard[];
}

interface ServiceTargetAudienceProps {
  service?: ServiceDetail | any;
  lang?: string;
}

const defaultAudienceDataAr: TargetAudienceInfo = {
  badge: "توصيف المستفيدين",
  title: "لمن تناسب هذه الخدمة؟",
  description:
    "صُممت هذه الخدمة لتلبية الاحتياجات الدقيقة للكيانات التي تعمل في بيئات معقدة تتطلب حواراً عاماً مدروساً وتأثيراً سياساتياً ومجتمعياً متزناً، وتحتاج للانتقال من مجرد النوايا إلى خطط تنفيذية محكمة.",
  cards: [
    {
      number: "01",
      title: "منظمات المجتمع المدني والمؤسسات غير الربحية",
      description:
        "الساعية لتطوير مسار مبادراتها وصياغة أطر ضغط وتأثير تستند إلى البيانات الموثقة والتأطير القانوني الرصين.",
    },
    {
      number: "02",
      title: "التحالفات والشبكات المجتمعية",
      description:
        "الراغبة في توحيد صوتها وبناء رسائل مشتركة ومؤثرة تضمن التناغم بين الأطراف المتعددة وتمنع تضارب المواقف والجهود.",
    },
    {
      number: "03",
      title: "الفرق التنفيذية ومسؤولو المبادرات",
      description:
        "الذين يحتاجون إلى توجيه عملي لتجاوز التشتت وتحديد الأولويات الواقعية، والتركيز على مكاسب مرحلية مدروسة وقابلة للقياس.",
    },
    {
      number: "04",
      title: "المبادرات المحلية والواعدة",
      description:
        "الباحثة عن تحويل الأفكار والتطلعات الشعبية إلى خطوات إجرائية محددة ذات أثر ميداني واقعي يتفاعل معه صناع القرار.",
    },
  ],
};

const defaultAudienceDataEn: TargetAudienceInfo = {
  badge: "Beneficiary Profiling",
  title: "Who Is This Service For?",
  description:
    "Engineered to address the nuanced demands of entities navigating complex environments that require strategic public dialogue, policy engagement, and disciplined operational roadmaps.",
  cards: [
    {
      number: "01",
      title: "Civil Society & Non-Profit Organizations",
      description:
        "Seeking to sharpen their initiative trajectories and establish evidence-based advocacy campaigns grounded in empirical data and sound legal framing.",
    },
    {
      number: "02",
      title: "Civic Coalitions & Multi-Stakeholder Networks",
      description:
        "Aspiring to harmonize their collective voice, craft impactful unified messaging, and align multiple partners while preventing mandate collisions.",
    },
    {
      number: "03",
      title: "Executive Delivery Teams & Program Directors",
      description:
        "Requiring practical advisory to overcome operational fragmentation, map realistic priorities, and secure measurable milestone wins.",
    },
    {
      number: "04",
      title: "Grassroots & Emerging Community Initiatives",
      description:
        "Aiming to translate grassroots aspirations into concrete procedural steps with measurable field impact that engages decision-makers effectively.",
    },
  ],
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

export const ServiceTargetAudience: React.FC<ServiceTargetAudienceProps> = ({
  service,
  lang: propLang,
}) => {
  const pathname = usePathname();
  const currentLang = propLang || (pathname?.startsWith("/en") ? "en" : "ar");
  const isEn = currentLang === "en";

  const defaultData = isEn ? defaultAudienceDataEn : defaultAudienceDataAr;
  const targetAudience = service?.targetAudience || service?.featuredAudience || {};

  const badge = isEn
    ? targetAudience.badgeEn || service?.targetAudienceEn?.badge || defaultData.badge
    : targetAudience.badge || defaultData.badge;

  const title = isEn
    ? targetAudience.titleEn || service?.targetAudienceEn?.title || defaultData.title
    : targetAudience.title || defaultData.title;

  const description = isEn
    ? targetAudience.descriptionEn || service?.targetAudienceEn?.description || defaultData.description
    : targetAudience.description || defaultData.description;

  const defaultCards = defaultData.cards || [];
  const rawCards =
    (targetAudience.cards && targetAudience.cards.length > 0
      ? targetAudience.cards
      : service?.audienceCards) || defaultCards;

  const cards = rawCards.map((c: any, i: number) => {
    const fallback = defaultCards[i] || defaultCards[0];
    return {
      number: c.number || fallback.number,
      title: isEn ? c.titleEn || fallback.title : c.title || fallback.title,
      description: isEn ? c.descriptionEn || fallback.description : c.description || fallback.description,
    };
  });

  const card01 = cards[0];
  const card02 = cards[1];
  const card03 = cards[2];
  const card04 = cards[3];

  return (
    <section
      dir={isEn ? "ltr" : "rtl"}
      className="w-full py-12 md:py-16 bg-white text-start"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 items-stretch">
          
          {/* 1. الكرت الأزرق المميز (يمتد ليشغل صفين في الشاشات الكبيرة) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.45 }}
            className="lg:col-start-1 lg:row-start-1 lg:row-span-2 bg-gradient-to-br from-[#1874C7] via-[#0E5CA8] to-[#014482] text-white rounded-2xl p-6 md:p-7 flex flex-col justify-start text-start shadow-md shadow-blue-900/10 relative overflow-hidden"
          >
            <span className="text-xs font-normal text-blue-100/80 mb-2 block font-sans">
              {badge}
            </span>

            <h3
              className={`text-2xl lg:text-[28px] font-bold text-white leading-snug mb-3 ${
                isEn ? "font-sans" : "font-scheherazade"
              }`}
            >
              {title}
            </h3>

            <p className="text-xs md:text-sm text-blue-100/90 leading-relaxed font-sans font-normal">
              {description}
            </p>
          </motion.div>

          {/* 2. كرت 01 */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-30px" }}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="group relative lg:col-start-2 lg:row-start-1 bg-white border border-slate-200/80 hover:border-slate-300 rounded-2xl p-5 md:p-6 text-start flex flex-col justify-between hover:shadow-md hover:shadow-blue-500/5 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#1874C7] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div>
              <div className="flex items-center justify-end mb-3">
                <span className="text-sm md:text-base font-normal text-[#1874C7] font-sans">
                  {card01.number}
                </span>
              </div>
              <h4
                className={`text-base md:text-lg font-bold text-[#014482] mb-2 group-hover:text-[#1874C7] transition-colors duration-200 ${
                  isEn ? "font-sans" : "font-scheherazade"
                }`}
              >
                {card01.title}
              </h4>
              <p className="text-xs md:text-[13px] text-slate-600 leading-relaxed font-sans font-normal">
                {card01.description}
              </p>
            </div>
          </motion.div>

          {/* 3. كرت 02 */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-30px" }}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="group relative lg:col-start-3 lg:row-start-1 bg-white border border-slate-200/80 hover:border-slate-300 rounded-2xl p-5 md:p-6 text-start flex flex-col justify-between hover:shadow-md hover:shadow-blue-500/5 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#1874C7] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div>
              <div className="flex items-center justify-end mb-3">
                <span className="text-sm md:text-base font-normal text-[#1874C7] font-sans">
                  {card02.number}
                </span>
              </div>
              <h4
                className={`text-base md:text-lg font-bold text-[#014482] mb-2 group-hover:text-[#1874C7] transition-colors duration-200 ${
                  isEn ? "font-sans" : "font-scheherazade"
                }`}
              >
                {card02.title}
              </h4>
              <p className="text-xs md:text-[13px] text-slate-600 leading-relaxed font-sans font-normal">
                {card02.description}
              </p>
            </div>
          </motion.div>

          {/* 4. كرت 03 */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-30px" }}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="group relative lg:col-start-2 lg:row-start-2 bg-white border border-slate-200/80 hover:border-slate-300 rounded-2xl p-5 md:p-6 text-start flex flex-col justify-between hover:shadow-md hover:shadow-blue-500/5 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#1874C7] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div>
              <div className="flex items-center justify-end mb-3">
                <span className="text-sm md:text-base font-normal text-[#1874C7] font-sans">
                  {card03.number}
                </span>
              </div>
              <h4
                className={`text-base md:text-lg font-bold text-[#014482] mb-2 group-hover:text-[#1874C7] transition-colors duration-200 ${
                  isEn ? "font-sans" : "font-scheherazade"
                }`}
              >
                {card03.title}
              </h4>
              <p className="text-xs md:text-[13px] text-slate-600 leading-relaxed font-sans font-normal">
                {card03.description}
              </p>
            </div>
          </motion.div>

          {/* 5. كرت 04 */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-30px" }}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="group relative lg:col-start-3 lg:row-start-2 bg-white border border-slate-200/80 hover:border-slate-300 rounded-2xl p-5 md:p-6 text-start flex flex-col justify-between hover:shadow-md hover:shadow-blue-500/5 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#1874C7] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div>
              <div className="flex items-center justify-end mb-3">
                <span className="text-sm md:text-base font-normal text-[#1874C7] font-sans">
                  {card04.number}
                </span>
              </div>
              <h4
                className={`text-base md:text-lg font-bold text-[#014482] mb-2 group-hover:text-[#1874C7] transition-colors duration-200 ${
                  isEn ? "font-sans" : "font-scheherazade"
                }`}
              >
                {card04.title}
              </h4>
              <p className="text-xs md:text-[13px] text-slate-600 leading-relaxed font-sans font-normal">
                {card04.description}
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};