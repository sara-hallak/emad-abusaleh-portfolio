"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getTranslations } from "@/data/translations";

// قائمة الشركاء الرئيسية
const PARTNERS = [
  {
    id: "giz",
    name: "GIZ",
    logo: (
      <span className="text-[#DE2010] font-black text-2xl tracking-tighter select-none">
        g<span className="tracking-normal">i</span>z
      </span>
    ),
  },
  {
    id: "british-council",
    name: "British Council",
    logo: (
      <div className="flex items-center gap-1.5 select-none">
        <div className="grid grid-cols-2 gap-0.5">
          <div className="w-2 h-2 rounded-full bg-[#200050]" />
          <div className="w-2 h-2 rounded-full bg-[#200050]" />
          <div className="w-2 h-2 rounded-full bg-[#200050]" />
          <div className="w-2 h-2 rounded-full bg-[#200050]" />
        </div>
        <div className="text-[#200050] font-black text-[11px] leading-[1.05] tracking-tight text-start">
          BRITISH
          <br />
          COUNCIL
        </div>
      </div>
    ),
  },
  {
    id: "un-women",
    name: "UN Women",
    logo: (
      <div className="flex items-center gap-1.5 text-[#009EDB] select-none">
        <svg className="w-6 h-6 fill-current shrink-0" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
        </svg>
        <div className="font-extrabold text-[11px] leading-tight text-start">
          UN
          <br />
          WOMEN
        </div>
      </div>
    ),
  },
  {
    id: "lawyers-without-borders",
    name: "Lawyers Without Borders",
    logo: (
      <div className="flex items-center gap-2 select-none">
        <div className="flex flex-col gap-0.5 justify-center">
          <span className="w-5 h-1 rounded-full bg-[#00A859]" />
          <span className="w-5 h-1 rounded-full bg-[#0055A5]" />
          <span className="w-5 h-1 rounded-full bg-[#F39200]" />
        </div>
        <div className="text-gray-900 font-bold text-[10px] sm:text-[11px] leading-[1.1] text-start">
          Lawyers
          <br />
          Without
          <br />
          Borders
        </div>
      </div>
    ),
  },
  {
    id: "undp",
    name: "UNDP",
    logo: (
      <div className="flex items-center gap-1.5 text-[#006EB5] select-none">
        <svg className="w-6 h-6 fill-current shrink-0" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
        </svg>
        <span className="font-black text-sm tracking-wider">UNDP</span>
      </div>
    ),
  },
];

// مضاعفة القائمة لضمان انزلاق لانهائي سلس
const MARQUEE_ITEMS = [...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS];

export const PartnersMarquee: React.FC = () => {
  const pathname = usePathname();
  const currentLang = pathname?.startsWith("/en") ? "en" : "ar";
  const isEn = currentLang === "en";

  const t = getTranslations(currentLang);

  return (
    <section
      className="relative w-full bg-[#014482] text-white py-14 sm:py-18 overflow-hidden select-none"
      dir={isEn ? "ltr" : "rtl"}
    >
      {/* الرسمة الهندسية المائية في زاوية السكشن */}
      <div
        className={`absolute top-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 pointer-events-none opacity-[0.06] ${
          isEn ? "-left-16 sm:left-4" : "-right-16 sm:right-4"
        }`}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full stroke-current" fill="none">
          <circle cx="100" cy="100" r="85" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="100" cy="100" r="60" strokeWidth="1" strokeDasharray="3 3" />
          <circle cx="100" cy="100" r="30" strokeWidth="1" />
          <line x1="100" y1="0" x2="100" y2="200" strokeWidth="0.8" strokeDasharray="4 4" />
          <line x1="0" y1="100" x2="200" y2="100" strokeWidth="0.8" strokeDasharray="4 4" />
          <line x1="20" y1="20" x2="180" y2="180" strokeWidth="0.6" strokeDasharray="2 2" />
        </svg>
      </div>

      <div className="relative z-10">
        {/* الترويسة في المنتصف مع تبديل الخط تلقائياً */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 px-4"
        >
          <h2
            className={`font-bold text-white leading-tight mb-2 ${
              isEn
                ? "font-sans text-2xl sm:text-3xl lg:text-[36px]"
                : "font-scheherazade text-3xl sm:text-4xl lg:text-[42px]"
            }`}
          >
            {t.partners.title}
          </h2>
          <p
            className={`text-white/80 font-normal leading-relaxed ${
              isEn
                ? "font-sans text-xs sm:text-sm lg:text-[15px]"
                : "font-scheherazade text-sm sm:text-base lg:text-[17px]"
            }`}
          >
            {t.partners.desc}
          </p>
        </motion.div>

        {/* شريط الشعارات المتحرك لا نهائياً */}
        <div
          dir="ltr"
          className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]"
        >
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 24,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
            className="flex items-center gap-4 sm:gap-6 w-max py-2"
          >
            {MARQUEE_ITEMS.map((partner, index) => (
              <motion.div
                key={`${partner.id}-${index}`}
                whileHover={{ y: -4, scale: 1.04 }}
                transition={{ duration: 0.2 }}
                className="shrink-0"
              >
                <Link
                  href={`/${currentLang}/partners`}
                  className="bg-white rounded-xl sm:rounded-2xl h-14 sm:h-16 px-5 sm:px-7 flex items-center justify-center shadow-md shadow-blue-950/20 cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-white/10 block"
                  title={`${t.partners.viewPartnership} ${partner.name}`}
                >
                  {partner.logo}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};