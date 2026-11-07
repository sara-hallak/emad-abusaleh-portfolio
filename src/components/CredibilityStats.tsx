"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CalendarDays, Users, Landmark, Smile } from "lucide-react";
import { usePathname } from "next/navigation";
import { getTranslations } from "@/data/translations";

// مكون العدّاد الرقمي التفاعلي
function AnimatedCounter({
  target,
  prefix = "",
  suffix = "",
  duration = 2,
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = target;
    const stepTime = 16;
    const totalSteps = (duration * 1000) / stepTime;
    const increment = end / totalSteps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {count.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}

// دالة جلب الأيقونة المناسبة لكل إحصائية
function getStatIcon(id: string) {
  const iconClass = "w-6 h-6 sm:w-7 sm:h-7 text-white stroke-[1.8]";
  switch (id) {
    case "experience":
      return <CalendarDays className={iconClass} />;
    case "beneficiaries":
      return <Users className={iconClass} />;
    case "entities":
      return <Landmark className={iconClass} />;
    case "satisfaction":
    default:
      return <Smile className={iconClass} />;
  }
}

export const CredibilityStats: React.FC = () => {
  const pathname = usePathname();
  const currentLang = pathname?.startsWith("/en") ? "en" : "ar";
  const isEn = currentLang === "en";

  const t = getTranslations(currentLang);
  const statsList = t.credibility.stats;

  return (
    <section
      id="credibility-stats"
      className="w-full bg-white overflow-hidden"
      dir={isEn ? "ltr" : "rtl"}
    >
      {/* الترويسة العلوية */}
      <div className="max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-12 pt-10 sm:pt-14 pb-6 sm:pb-8 text-start">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2
            className={`font-bold text-[#014482] leading-tight mb-1.5 ${
              isEn
                ? "font-sans text-2xl sm:text-3xl lg:text-[36px]"
                : "font-scheherazade text-3xl sm:text-4xl lg:text-[42px]"
            }`}
          >
            {t.credibility.title}
          </h2>
          <p
            className={`text-gray-500 font-normal leading-relaxed max-w-2xl ${
              isEn
                ? "font-sans text-xs sm:text-sm lg:text-[15px]"
                : "font-scheherazade text-xs sm:text-sm lg:text-[16px]"
            }`}
          >
            {t.credibility.desc}
          </p>
        </motion.div>
      </div>

      {/* الشريط الكحلي للإحصائيات */}
      <div className="w-full bg-[#014482] text-white py-10 sm:py-12 lg:py-14 shadow-inner">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-12">
          
          {/* شبكة الإحصائيات مع العداد المتحرك */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-4 sm:gap-x-6 lg:gap-0 items-start text-center">
            {statsList.map((stat, index) => (
              <motion.div
                key={stat.id + currentLang}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                className={`group flex flex-col items-center px-2 sm:px-4 lg:px-6 ${
                  index !== statsList.length - 1 ? "lg:border-e lg:border-white/10" : ""
                }`}
              >
                {/* الأيقونة */}
                <div className="mb-3 sm:mb-4 transition-transform duration-300 group-hover:-translate-y-1.5 group-hover:scale-110">
                  {getStatIcon(stat.id)}
                </div>

                {/* الرقم الكبير مع العداد المتحرك */}
                <div
                  className={`font-bold text-white mb-1.5 leading-snug whitespace-nowrap tracking-tight transition-colors duration-200 group-hover:text-blue-200 ${
                    isEn
                      ? "font-sans text-lg sm:text-xl lg:text-[25px] xl:text-[27px]"
                      : "font-scheherazade text-xl sm:text-2xl lg:text-[30px] xl:text-[32px]"
                  }`}
                >
                  <AnimatedCounter
                    target={stat.target}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    duration={2}
                  />
                </div>

                {/* الوصف المختصر */}
                <p
                  className={`text-[#E5EAF0]/80 font-normal leading-relaxed max-w-[210px] mx-auto transition-opacity duration-200 group-hover:text-white ${
                    isEn
                      ? "font-sans text-[11px] sm:text-xs leading-[1.6]"
                      : "font-scheherazade text-xs sm:text-[13px] lg:text-[14px]"
                  }`}
                >
                  {stat.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};