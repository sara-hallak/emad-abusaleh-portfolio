"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { usePathname } from "next/navigation";
import { getTranslations } from "@/data/translations";

export function QuoteIcon({
  className = "w-5 h-5 text-[#1874C7]",
}: {
  className?: string;
}) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
  );
}

export function UserAvatarIcon({
  className = "w-5 h-5 text-slate-400",
}: {
  className?: string;
}) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </svg>
  );
}

export const Testimonials: React.FC = () => {
  const pathname = usePathname();
  const currentLang = pathname?.startsWith("/en") ? "en" : "ar";
  const isEn = currentLang === "en";

  const t = getTranslations(currentLang);
  const items = t.testimonials.items;
  const total = items.length;

  const [activeIndex, setActiveIndex] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  // إزاحة السلايدر بحسب اللغة (في الإنجليزية إزاحة سالبة LTR، وفي العربية موجبة RTL)
  const baseOffset = isMobile
    ? activeIndex * 100
    : (activeIndex - 1) * (100 / 3);

  const trackOffset = isEn ? -baseOffset : baseOffset;

  return (
    <section
      id="testimonials"
      className="w-full bg-white py-14 sm:py-20 lg:py-24 overflow-hidden"
      dir={isEn ? "ltr" : "rtl"}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* الترويسة العلوية */}
        <div className="flex items-center justify-between mb-10 sm:mb-14">
          <h2
            className={`font-bold text-[#014482] leading-tight text-start ${
              isEn
                ? "font-sans text-2xl sm:text-3xl lg:text-[38px]"
                : "font-scheherazade text-3xl sm:text-4xl lg:text-[44px]"
            }`}
          >
            {t.testimonials.title}
          </h2>

          <div className="text-[#1874C7] select-none">
            <QuoteIcon className="w-10 h-10 sm:w-14 sm:h-14 text-[#1874C7] opacity-90" />
          </div>
        </div>

        {/* حاوية الكروت المنزلقة */}
        <div className="relative overflow-hidden pt-8 pb-8 px-1">
          <motion.div
            animate={{
              x: `${trackOffset}%`,
            }}
            transition={{
              duration: 0.65,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex items-stretch"
          >
            {items.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <div
                  key={item.id + currentLang}
                  className="w-full md:w-1/3 shrink-0 px-2.5 sm:px-3.5"
                >
                  <motion.article
                    onClick={() => setActiveIndex(index)}
                    animate={{
                      y: isActive ? -16 : 0,
                      scale: isActive ? 1.02 : 0.95,
                      opacity: isActive ? 1 : 0.72,
                    }}
                    transition={{
                      duration: 0.55,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className={`relative h-full rounded-[22px] border border-slate-200/90 flex flex-col justify-between overflow-hidden cursor-pointer select-none transition-shadow duration-300 ${
                      isActive
                        ? "shadow-2xl shadow-blue-900/10 z-20"
                        : "shadow-sm hover:shadow-md z-10"
                    }`}
                  >
                    {/* أنيميشن رسم البوردر الأزرق عند التفعيل */}
                    {isActive && (
                      <svg
                        key={`border-${item.id}-${activeIndex}-${currentLang}`}
                        className="absolute inset-[1px] w-[calc(100%-2px)] h-[calc(100%-2px)] pointer-events-none z-30 overflow-visible"
                      >
                        <motion.rect
                          width="100%"
                          height="100%"
                          rx="21"
                          ry="21"
                          fill="none"
                          stroke="#1874C7"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          initial={{
                            pathLength: 0,
                            pathOffset: 0,
                            opacity: 1,
                          }}
                          animate={{
                            pathLength: [0, 1, 1, 1],
                            opacity: [1, 1, 1, 0],
                          }}
                          transition={{
                            duration: 2,
                            times: [0, 0.55, 0.94, 1],
                            ease: "linear",
                          }}
                        />
                      </svg>
                    )}

                    {/* القسم العلوي الأبيض */}
                    <div className="bg-white p-6 sm:p-8 flex flex-col flex-1 justify-between text-start">
                      <div className="flex mb-3">
                        <QuoteIcon className="w-5 h-5 text-[#1874C7]" />
                      </div>

                      <p
                        className={`text-[#014482] leading-[1.8] font-medium my-auto px-1 sm:px-2 ${
                          isEn
                            ? "font-sans text-xs sm:text-[14px]"
                            : "font-scheherazade text-[15px] sm:text-[17px]"
                        }`}
                      >
                        {item.quote}
                      </p>
                    </div>

                    {/* القسم السفلي */}
                    <footer className="bg-[#F5F7FA] px-6 py-4 border-t border-slate-100 flex items-center gap-3.5 text-start">
                      <div className="w-10 h-10 rounded-full bg-slate-200/80 border-2 border-white shadow-2xs flex items-center justify-center shrink-0 overflow-hidden">
                        <UserAvatarIcon className="w-5 h-5 text-slate-400" />
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span
                          className={`font-bold text-[#014482] leading-snug truncate ${
                            isEn
                              ? "font-sans text-xs sm:text-sm"
                              : "font-scheherazade text-sm sm:text-base"
                          }`}
                        >
                          {item.name}
                        </span>
                        <span
                          className={`text-slate-400 truncate ${
                            isEn
                              ? "font-sans text-[10px] sm:text-[11px]"
                              : "font-scheherazade text-[11px] sm:text-xs"
                          }`}
                        >
                          {item.role}
                        </span>
                      </div>
                    </footer>
                  </motion.article>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* شريط التنقل السفلي المتكيف مع الاتجاهين */}
        <nav
          aria-label="Testimonials Navigation"
          className="flex items-center justify-center gap-3 mt-6 sm:mt-10"
        >
          <button
            onClick={isEn ? handlePrev : handlePrev}
            aria-label="Previous"
            className="text-[#1874C7]/60 hover:text-[#1874C7] transition-colors p-1 cursor-pointer"
          >
            {isEn ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
          </button>

          <div className="flex items-center gap-1.5 px-2">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`rounded-full transition-all duration-300 cursor-pointer ${
                  i === activeIndex
                    ? "w-2.5 h-2.5 bg-[#1874C7] shadow-xs"
                    : "w-1.5 h-1.5 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={isEn ? handleNext : handleNext}
            aria-label="Next"
            className="text-[#1874C7]/60 hover:text-[#1874C7] transition-colors p-1 cursor-pointer"
          >
            {isEn ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
          </button>
        </nav>
      </div>
    </section>
  );
};