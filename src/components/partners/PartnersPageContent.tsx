"use client";

import React from "react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { motion, type Variants } from "framer-motion";

interface PartnersPageContentProps {
  lang?: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const PartnersPageContent: React.FC<PartnersPageContentProps> = ({
  lang: propLang,
}) => {
  const params = useParams();
  const pathname = usePathname();
  const currentLang =
    propLang || (params?.lang as string) || (pathname?.startsWith("/en") ? "en" : "ar");
  const isEn = currentLang === "en";

  // قائمة الهيئات الحكومية (القسم الأول: القطاع العام)
  const governmentPartners = [
    {
      id: "gov-1",
      name: isEn ? "Ministry of Planning & Int. Cooperation" : "وزارة التخطيط والتعاون",
      sub: isEn ? "Hashemite Kingdom of Jordan" : "المملكة الأردنية الهاشمية",
      logo: (
        <div className="flex flex-col items-center justify-center">
          <div className="w-8 h-8 rounded-full border-2 border-[#014482] flex items-center justify-center p-1 bg-slate-50">
            <svg viewBox="0 0 24 24" className="w-full h-full text-[#014482]" fill="currentColor">
              <path d="M12 2L4 6v6c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V6l-8-4zm0 4a3 3 0 110 6 3 3 0 010-6zm4 11.5c-1.2-.8-2.6-1.3-4-1.3s-2.8.5-4 1.3V15c0-1.3 2.7-2 4-2s4 .7 4 2v2.5z" />
            </svg>
          </div>
          <span className="text-[9px] font-sans font-bold text-[#014482] mt-0.5 tracking-tighter">MOPIC</span>
        </div>
      ),
    },
    {
      id: "gov-2",
      name: isEn ? "Ministry of Social Development" : "وزارة التنمية الاجتماعية",
      sub: isEn ? "Hashemite Kingdom of Jordan" : "المملكة الأردنية الهاشمية",
      logo: (
        <div className="flex items-center justify-center w-9 h-9 rounded-full bg-blue-50 text-[#1874C7]">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
      ),
    },
    {
      id: "gov-3",
      name: isEn ? "Higher Council for Youth" : "المجلس الأعلى للشباب",
      sub: isEn ? "Hashemite Kingdom of Jordan" : "المملكة الأردنية الهاشمية",
      logo: (
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 rounded-full bg-[#1874C7] text-white flex items-center justify-center shadow-2xs">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 2l2.4 7.4h7.6l-6.2 4.5 2.4 7.4-6.2-4.5-6.2 4.5 2.4-7.4-6.2-4.5h7.6z" />
            </svg>
          </div>
          <span className="text-[9px] font-sans font-semibold text-[#1874C7] mt-0.5">YOUTH</span>
        </div>
      ),
    },
    {
      id: "gov-4",
      name: isEn ? "Vocational Training Corporation" : "مؤسسة التدريب المهني",
      sub: isEn ? "Hashemite Kingdom of Jordan" : "المملكة الأردنية الهاشمية",
      logo: (
        <div className="flex items-center gap-1 text-[#014482]">
          <span className="px-1.5 py-0.5 rounded bg-slate-100 font-black text-xs font-sans">VTC</span>
          <svg className="w-4 h-4 text-[#1874C7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
      ),
    },
    {
      id: "gov-5",
      name: isEn ? "Telecommunications Regulatory Comm." : "هيئة تنظيم الاتصالات",
      sub: isEn ? "Hashemite Kingdom of Jordan" : "المملكة الأردنية الهاشمية",
      logo: (
        <div className="flex flex-col items-center text-[#1874C7]">
          <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
          </svg>
          <span className="text-[9px] font-sans font-bold text-slate-600">TRC</span>
        </div>
      ),
    },
    {
      id: "gov-6",
      name: isEn ? "Greater Amman Municipality" : "أمانة عمان الكبرى",
      sub: isEn ? "Hashemite Kingdom of Jordan" : "المملكة الأردنية الهاشمية",
      logo: (
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 rounded-lg bg-[#014482] text-white flex items-center justify-center font-bold text-xs font-sans">
            GAM
          </div>
          <span className="text-[8px] font-sans text-slate-500 mt-0.5">Amman</span>
        </div>
      ),
    },
    {
      id: "gov-7",
      name: isEn ? "National Center for Curriculum Dev." : "مركز تطوير المناهج",
      sub: isEn ? "Hashemite Kingdom of Jordan" : "المملكة الأردنية الهاشمية",
      logo: (
        <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#1874C7] flex items-center justify-center">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>
      ),
    },
    {
      id: "gov-8",
      name: isEn ? "King Abdullah II Fund for Development" : "صندوق الملك عبد الله",
      sub: isEn ? "Hashemite Kingdom of Jordan" : "المملكة الأردنية الهاشمية",
      logo: (
        <div className="flex items-center gap-1">
          <span className="text-xs font-black text-[#014482] font-sans">KAFD</span>
          <div className="w-2 h-2 rounded-full bg-[#1874C7]" />
        </div>
      ),
    },
  ];

  // قائمة شركات ومجموعات الأعمال (القسم الثاني: قطاع الأعمال)
  const privatePartners = [
    {
      id: "corp-1",
      name: isEn ? "Orange Telecom Group" : "مجموعة الاتصالات",
      sub: isEn ? "Telecommunications & Technology" : "الاتصالات وتكنولوجيا المعلومات",
      logo: (
        <div className="flex items-center gap-1.5">
          <div className="w-6 h-6 rounded bg-[#FF7900] flex items-center justify-center text-white font-bold text-[10px] font-sans">
            O
          </div>
          <span className="font-bold text-xs text-[#014482] font-sans">Telecom</span>
        </div>
      ),
    },
    {
      id: "corp-2",
      name: isEn ? "Zain Jordan" : "شركة زين الأردن",
      sub: isEn ? "Business & Network Solutions" : "شبكات وحلول الأعمال",
      logo: (
        <div className="flex items-center justify-center">
          <span className="text-[#00857C] font-black text-xl tracking-tighter font-sans">
            ZaiN
          </span>
        </div>
      ),
    },
    {
      id: "corp-3",
      name: isEn ? "Cairo Amman Bank" : "بنك القاهرة عمان",
      sub: isEn ? "Banking & Financial Services" : "الخدمات المصرفية والمالية",
      logo: (
        <div className="flex items-center gap-1.5 text-[#004B87]">
          <div className="flex flex-col items-center">
            <span className="font-extrabold text-[10px] font-sans leading-none">CAB</span>
            <div className="w-6 h-0.5 bg-[#D52B1E] mt-0.5" />
          </div>
          <span className="text-[11px] font-bold font-sans">Bank</span>
        </div>
      ),
    },
    {
      id: "corp-4",
      name: isEn ? "Hikma Pharmaceuticals" : "مجموعة الحكمة للأدوية",
      sub: isEn ? "Pharmaceuticals & Healthcare" : "الصناعات الدوائية والرعاية الصحية",
      logo: (
        <div className="flex items-center gap-1 text-[#006A9A]">
          <span className="font-black text-sm font-sans tracking-tight">hikma.</span>
        </div>
      ),
    },
    {
      id: "corp-5",
      name: isEn ? "Arab Potash Company" : "شركة البوتاس العربية",
      sub: isEn ? "Mining & Extraction Industries" : "التعدين والصناعات الاستخراجية",
      logo: (
        <div className="flex flex-col items-center">
          <div className="w-6 h-6 border border-[#014482] rounded flex items-center justify-center text-[#1874C7] font-bold text-[9px] font-sans">
            APC
          </div>
          <span className="text-[8px] font-sans text-slate-500 mt-0.5">Potash</span>
        </div>
      ),
    },
    {
      id: "corp-6",
      name: isEn ? "Jordan Phosphate Mines Co." : "شركة مناجم الفوسفات",
      sub: isEn ? "National Mining & Resources" : "الموارد الوطنية والتعدين",
      logo: (
        <div className="flex items-center gap-1 text-[#014482]">
          <span className="font-black text-xs font-sans tracking-wide">JPMC</span>
          <div className="w-1.5 h-1.5 rounded-full bg-[#1874C7]" />
        </div>
      ),
    },
    {
      id: "corp-7",
      name: isEn ? "Contemporary Advisory Solutions" : "الشركة المعاصرة للحلول الاستشارية",
      sub: isEn ? "Institutional & Management Advisory" : "الاستشارات المؤسسية والإدارية",
      logo: (
        <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-[#014482]">
          <svg className="w-5 h-5 text-[#1874C7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        </div>
      ),
    },
    {
      id: "corp-8",
      name: isEn ? "Development & Investment Foundation" : "مؤسسة التنمية والاستثمار",
      sub: isEn ? "Investment Funds & Portfolios" : "صناديق التمويل والمبادرات",
      logo: (
        <div className="flex items-center gap-1 text-[#1874C7]">
          <span className="font-bold text-xs font-sans tracking-tighter">INVEST</span>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full bg-[#FCFDFE] py-8 sm:py-12 text-start" dir={isEn ? "ltr" : "rtl"}>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* ========================================================
            1. الهيدر العلوي: البطاقة الرئيسية وبطاقات الملخص
           ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-6 mb-12 sm:mb-16 items-stretch">
          
          {/* البطاقة الرئيسية */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8 bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 md:p-10 text-start flex flex-col justify-between"
          >
            <div>
              {/* شجرة المسار والبادج العلوي */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4 text-xs font-sans">
                <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 font-medium text-[11px]">
                  {isEn
                    ? "Institutional Endorsement & Professional Credibility"
                    : "أطر الإسناد المؤسسية والمصداقية المهنية"}
                </span>
                <div className="text-slate-400 text-xs">
                  <Link href={`/${currentLang}`} className="hover:text-[#1874C7] transition-colors">
                    {isEn ? "Home" : "الرئيسية"}
                  </Link>
                  <span className="mx-1.5">/</span>
                  <span className="text-[#1874C7]">
                    {isEn ? "Partner Organizations" : "الجهات والمؤسسات الشريكة"}
                  </span>
                  <span className="mx-1.5">|</span>
                  <span className="text-slate-500">
                    {isEn ? "Institutional Registry" : "سجل التوثيق المؤسسي"}
                  </span>
                </div>
              </div>

              {/* العنوان الرئيسي */}
              <h1
                className={`text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#014482] leading-tight mb-4 ${
                  isEn ? "font-sans" : "font-scheherazade"
                }`}
              >
                {isEn ? "Partner Organizations & Institutions" : "الجهات والمؤسسات الشريكة"}
              </h1>

              {/* الشرح */}
              <p className="text-sm md:text-base text-slate-600 font-sans leading-relaxed max-w-2xl">
                {isEn
                  ? "Longstanding advisory and documenting partnerships with national government entities and leading private enterprises, fostering policy development, institutional capacity building, and sustainable social impact."
                  : "شراكات استشارية وتوثيقية ممتدة مع الهيئات الحكومية الوطنية وشركات القطاع الخاص، لتطوير السياسات وبناء القدرات المؤسسية وتوليد الأثر المجتمعي."}
              </p>
            </div>

            {/* الشريط السفلي المعتمد */}
            <div className="pt-6 mt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs font-sans text-slate-500">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#1874C7]" />
                <span className="font-medium text-[#014482]">
                  {isEn
                    ? "Accredited Institutional Partnerships Registry"
                    : "توثيق الشراكات المؤسسية المعتمدة"}
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-400">
                <svg className="w-4 h-4 text-[#1874C7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span>
                  {isEn
                    ? "Hashemite Kingdom of Jordan — Official Verified Registry"
                    : "المملكة الأردنية الهاشمية — سجل رسمي معتمد"}
                </span>
              </div>
            </div>
          </motion.div>

          {/* البطاقتين التلخيصيتين */}
          <div className="lg:col-span-4 flex flex-col gap-4 justify-between">
            {/* كرت ملخص القطاع العام */}
            <motion.div
              initial={{ opacity: 0, x: isEn ? 15 : -15 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              transition={{ duration: 0.45 }}
              className="group relative bg-white border border-slate-200/80 rounded-2xl p-4 sm:p-5 text-start flex flex-col justify-between flex-1 overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-[#1874C7] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-sans font-medium text-[#1874C7]">
                    {isEn ? "Public Sector Registry" : "سجل القطاع العام"}
                  </span>
                  <div className="w-6 h-6 rounded-md bg-blue-50 flex items-center justify-center text-[#1874C7]">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                    </svg>
                  </div>
                </div>

                <h3
                  className={`text-base sm:text-lg font-bold text-[#014482] mb-1 ${
                    isEn ? "font-sans" : "font-scheherazade"
                  }`}
                >
                  {isEn ? "Government Ministries & Authorities" : "الهيئات والوزارات الحكومية"}
                </h3>
                <p className="text-xs text-slate-500 font-sans leading-relaxed mb-3">
                  {isEn
                    ? "Official ministries, statutory authorities, and public agencies in Jordan."
                    : "المؤسسات والوزارات والهيئات الرسمية في المملكة الأردنية الهاشمية."}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-sans">
                <span className="text-slate-400">
                  {isEn ? "Total Public Bodies" : "إجمالي الهيئات الرسمية"}
                </span>
                <span className="px-2 py-0.5 rounded bg-blue-50 text-[#1874C7] font-medium">
                  {isEn ? "8 Accredited Entities" : "8 جهات معتمدة"}
                </span>
              </div>
            </motion.div>

            {/* كرت ملخص قطاع الأعمال */}
            <motion.div
              initial={{ opacity: 0, x: isEn ? 15 : -15 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="group relative bg-white border border-slate-200/80 rounded-2xl p-4 sm:p-5 text-start flex flex-col justify-between flex-1 overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-[#1874C7] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-sans font-medium text-[#1874C7]">
                    {isEn ? "Private Sector Registry" : "سجل قطاع الأعمال"}
                  </span>
                  <div className="w-6 h-6 rounded-md bg-blue-50 flex items-center justify-center text-[#1874C7]">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                </div>

                <h3
                  className={`text-base sm:text-lg font-bold text-[#014482] mb-1 ${
                    isEn ? "font-sans" : "font-scheherazade"
                  }`}
                >
                  {isEn ? "Corporate & Enterprise Groups" : "شركات ومجموعات الأعمال"}
                </h3>
                <p className="text-xs text-slate-500 font-sans leading-relaxed mb-3">
                  {isEn
                    ? "Leading private corporations and investment development institutions."
                    : "الشركات والمؤسسات التنموية والاستثمارية في القطاع الخاص."}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-sans">
                <span className="text-slate-400">
                  {isEn ? "Leading Corporations" : "الشركات والمجموعات الرائدة"}
                </span>
                <span className="px-2 py-0.5 rounded bg-blue-50 text-[#1874C7] font-medium">
                  {isEn ? "8 Enterprises" : "8 شركات"}
                </span>
              </div>
            </motion.div>
          </div>

        </div>

        {/* ========================================================
            2. القسم الأول: سجل القطاع العام
           ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-6 mb-12 sm:mb-16 items-start">
          
          {/* بطاقة تعريف القسم الأول */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="group relative lg:col-span-3 bg-white border border-slate-200/80 rounded-2xl p-5 md:p-6 text-start flex flex-col justify-between h-full overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-[#1874C7]" />

            <div>
              <span className="text-[11px] font-sans font-medium text-[#1874C7] block mb-1">
                {isEn ? "— Public Sector Registry" : "— سجل القطاع العام"}
              </span>
              <h2
                className={`text-xl md:text-2xl font-bold text-[#014482] mb-2 ${
                  isEn ? "font-sans" : "font-scheherazade"
                }`}
              >
                {isEn ? "Public & Statutory Bodies" : "المنظمات الدولية"}
              </h2>
              <p className="text-xs text-slate-500 font-sans leading-relaxed mb-6">
                {isEn
                  ? "Official ministries, statutory commissions, and agencies in the Hashemite Kingdom of Jordan."
                  : "المؤسسات والوزارات والهيئات الرسمية في المملكة الأردنية الهاشمية."}
              </p>

              <div className="flex items-center gap-2 text-xs text-slate-600 font-sans mb-4">
                <svg className="w-4 h-4 text-[#1874C7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>
                  {isEn
                    ? "Verified Advisory Mandates & Accreditations"
                    : "اعتمادات وتكليفات استشارية موثقة"}
                </span>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-sans">
              <span className="text-slate-400">
                {isEn ? "Total Entities" : "إجمالي الهيئات الرسمية"}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-[#1874C7] font-semibold text-[11px]">
                {isEn ? "8 Entities" : "8 جهات معتمدة"}
              </span>
            </div>
          </motion.div>

          {/* شبكة الـ 8 جهات */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-9 grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-4"
          >
            {governmentPartners.map((item) => (
              <motion.div
                key={item.id}
                variants={cardVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group relative rounded-2xl p-4 sm:p-5 flex flex-col items-center text-center justify-between transition-all duration-300 min-h-[148px] bg-white border border-slate-200/80 hover:border-slate-300 overflow-hidden cursor-default"
              >
                <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-[#1874C7] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-108 duration-300">
                  {item.logo}
                </div>

                <div className="w-12 h-[1px] bg-slate-100 my-2 group-hover:bg-blue-100 transition-colors" />

                <div>
                  <h3
                    className={`text-xs sm:text-[13px] font-bold text-[#1874C7] mb-0.5 leading-snug group-hover:text-[#014482] transition-colors ${
                      isEn ? "font-sans" : "font-scheherazade"
                    }`}
                  >
                    {item.name}
                  </h3>
                  <span className="text-[10px] text-slate-400 font-sans block">
                    {item.sub}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>

        {/* ========================================================
            3. الفاصل التوثيقي بالمنتصف
           ======================================================== */}
        <div className="w-full flex items-center justify-center my-10 sm:my-14">
          <div className="flex-1 h-px bg-slate-200/70" />
          <span className="px-4 py-1 rounded-full bg-slate-100 text-slate-500 font-sans text-xs flex items-center gap-1.5 mx-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1874C7]" />
            {isEn
              ? "Official Institutional Partnerships Documentation"
              : "توثيق الشراكات المؤسسية المعتمدة"}
          </span>
          <div className="flex-1 h-px bg-slate-200/70" />
        </div>

        {/* ========================================================
            4. القسم الثاني: سجل قطاع الأعمال
           ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-6 mb-12 sm:mb-16 items-start">
          
          {/* بطاقة تعريف القسم الثاني */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="group relative lg:col-span-3 bg-white border border-slate-200/80 rounded-2xl p-5 md:p-6 text-start flex flex-col justify-between h-full overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-[#1874C7]" />

            <div>
              <span className="text-[11px] font-sans font-medium text-[#1874C7] block mb-1">
                {isEn ? "— Business Sector Registry" : "— سجل قطاع الأعمال"}
              </span>
              <h2
                className={`text-xl md:text-2xl font-bold text-[#014482] mb-2 ${
                  isEn ? "font-sans" : "font-scheherazade"
                }`}
              >
                {isEn ? "Private Sector Enterprises" : "المنظمات المحلية"}
              </h2>
              <p className="text-xs text-slate-500 font-sans leading-relaxed mb-6">
                {isEn
                  ? "Development, technology, and investment corporations across the private sector."
                  : "الشركات والمؤسسات التنموية والاستثمارية في القطاع الخاص."}
              </p>

              <div className="flex items-center gap-2 text-xs text-slate-600 font-sans mb-4">
                <svg className="w-4 h-4 text-[#1874C7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>
                  {isEn
                    ? "Governance, Policy Structuring & Advisory"
                    : "استشارات الحوكمة والتطوير وبناء السياسات"}
                </span>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-sans">
              <span className="text-slate-400">
                {isEn ? "Total Enterprises" : "الشركات والمجموعات الرائدة"}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-[#1874C7] font-semibold text-[11px]">
                {isEn ? "8 Enterprises" : "8 شركات"}
              </span>
            </div>
          </motion.div>

          {/* شبكة الـ 8 شركات */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-9 grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-4"
          >
            {privatePartners.map((item) => (
              <motion.div
                key={item.id}
                variants={cardVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group relative rounded-2xl p-4 sm:p-5 flex flex-col items-center text-center justify-between transition-all duration-300 min-h-[148px] bg-white border border-slate-200/80 hover:border-slate-300 overflow-hidden cursor-default"
              >
                <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-[#1874C7] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-108 duration-300">
                  {item.logo}
                </div>

                <div className="w-12 h-[1px] bg-slate-100 my-2 group-hover:bg-blue-100 transition-colors" />

                <div>
                  <h3
                    className={`text-xs sm:text-[13px] font-bold text-[#1874C7] mb-0.5 leading-snug group-hover:text-[#014482] transition-colors ${
                      isEn ? "font-sans" : "font-scheherazade"
                    }`}
                  >
                    {item.name}
                  </h3>
                  <span className="text-[10px] text-slate-400 font-sans block">
                    {item.sub}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>

      </div>
    </div>
  );
};