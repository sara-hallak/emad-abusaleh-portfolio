"use client";

import React, { useState, useEffect } from "react";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";

interface HeroProps {
  onNavigateToContact?: () => void;
  onNavigateToProjects?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onNavigateToContact,
  onNavigateToProjects,
}) => {
  // تأثير الكتابة والحذف التلقائي لعبارة "نستحق وأكثر.."
  const fullText = "نستحق وأكثر..";
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 75 : 130;
    const pauseAfterTyping = 2200;
    const pauseAfterDeleting = 500;

    const timer = setTimeout(() => {
      if (!isDeleting && displayedText.length < fullText.length) {
        setDisplayedText(fullText.slice(0, displayedText.length + 1));
      } else if (!isDeleting && displayedText.length === fullText.length) {
        setTimeout(() => setIsDeleting(true), pauseAfterTyping);
      } else if (isDeleting && displayedText.length > 0) {
        setDisplayedText(fullText.slice(0, displayedText.length - 1));
      } else if (isDeleting && displayedText.length === 0) {
        setTimeout(() => setIsDeleting(false), pauseAfterDeleting);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting]);

  const handleScrollTo = (id: string, callback?: () => void) => {
    if (callback) {
      callback();
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full bg-gradient-to-b from-[#FBFDFF] via-white to-white flex flex-col justify-center overflow-hidden border-b border-gray-100"
    >
      {/* الشبكة الرئيسية: يمين = الصورة الشخصية، يسار = النصوص والأزرار */}
      <div className="max-w-[1560px] w-full mx-auto px-4 sm:px-6 lg:px-2 pt-6 pb-0 lg:py-0 lg:min-h-[580px] lg:max-h-[680px] grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-center relative">
        
        {/* العمود الأيمن (في RTL يظهر يميناً): الصورة الشخصية مع التدرج خلفها فقط */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-5 h-[280px] sm:h-[360px] lg:h-[580px] flex items-end justify-center relative order-2 lg:order-1 self-end"
        >
          <div className="relative w-full h-full flex items-end justify-center overflow-visible">
            {/* التدرج اللوني المتركز خلف الصورة فقط */}
            <div className="absolute bottom-0 w-[260px] h-[260px] sm:w-[340px] sm:h-[340px] lg:w-[460px] lg:h-[460px] bg-[radial-gradient(circle,rgba(24,116,199,0.14)_0%,rgba(240,247,255,0.45)_50%,transparent_75%)] rounded-full blur-2xl -z-10 pointer-events-none" />

            <motion.img
              whileHover={{ scale: 1.015 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              src="/images/emad-portrait.png"
              alt="عماد أبو صالح الفناطسة"
              className="h-full w-auto max-w-full object-contain object-bottom select-none drop-shadow-md"
              loading="eager"
            />
          </div>
        </motion.div>

        {/* العمود الأيسر (في RTL يظهر يساراً): النصوص والأزرار */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start justify-center text-center lg:text-start pt-2 pb-4 lg:py-10 z-10 order-1 lg:order-2 lg:pe-8">
          
          {/* الاسم الرئيسي - على سطر واحد وبحجم أصغر ومتوازن */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-scheherazade text-[30px] sm:text-5xl lg:text-[54px] xl:text-[60px] font-bold text-dark-blue leading-[1.15] tracking-tight whitespace-nowrap mb-1.5 sm:mb-2"
          >
            عماد أبو صالح الفناطسة
          </motion.h1>

          {/* الشعار اللفظي مع أنيميشن الكتابة والحذف - على سطر واحد */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="relative inline-flex flex-col items-center lg:items-start mb-4 sm:mb-5 min-h-[44px] sm:min-h-[56px]"
          >
            <div className="font-scheherazade text-2xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-bold text-primary-blue leading-tight flex items-center whitespace-nowrap">
              <span>{displayedText}</span>
              <span className="inline-block w-[2.5px] h-6 sm:h-9 lg:h-10 bg-primary-blue ms-1.5 animate-pulse rounded-full" />
            </div>

            {/* خط التمييز الناعم أسفل العبارة كما في التصميم */}
            <svg
              className="w-40 sm:w-56 lg:w-64 h-2.5 text-primary-blue/25 mt-0.5"
              viewBox="0 0 300 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 9.5C75 3.5 220 1.5 298 6.5"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
            </svg>
          </motion.div>

          {/* الوصف المهني - على سطر واحد وبحجم متناسب للموبايل واللابتوب */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-scheherazade text-[13px] xs:text-[14px] sm:text-lg lg:text-[21px] xl:text-[23px] text-gray-800 leading-relaxed font-normal whitespace-nowrap mb-6 sm:mb-7"
          >
            خبرة في كسب التأييد/المناصرة، التدريب، إعداد الأدلة والإرشاد المهني.
          </motion.p>

          {/* أزرار التفاعل (CTAs) - بجانب بعضها على سطر واحد */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-row items-center justify-center lg:justify-start gap-3.5 sm:gap-6 whitespace-nowrap"
          >
            {/* زر "تواصل مع عماد" مع أيقونة الرسالة */}
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleScrollTo("contact", onNavigateToContact)}
              className="group inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-primary-blue hover:bg-dark-blue text-white font-semibold text-xs sm:text-base shadow-md shadow-primary-blue/20 hover:shadow-lg hover:shadow-primary-blue/30 transition-all duration-300 cursor-pointer"
            >
              <span>تواصل مع عماد</span>
              <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:scale-110" />
            </motion.button>

            {/* رابط "استكشف الخبرات والمشاريع ←" */}
            <motion.button
              whileHover={{ x: -4 }}
              onClick={() => handleScrollTo("projects", onNavigateToProjects)}
              className="group inline-flex items-center gap-1.5 text-xs sm:text-base lg:text-lg font-semibold text-primary-blue hover:text-dark-blue transition-colors py-1.5 cursor-pointer"
            >
              <span className="relative">
                استكشف الخبرات والمشاريع
                <span className="absolute -bottom-1 inset-x-0 h-[1.5px] bg-dark-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right" />
              </span>
              <span className="text-base sm:text-lg transition-transform duration-300 group-hover:-translate-x-1.5">
                ←
              </span>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* الشريط الجانبي العائم لأيقونات التواصل الاجتماعي (أقصى اليسار) */}
      <motion.aside
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}
        aria-label="حسابات التواصل الاجتماعي"
        className="fixed left-3 lg:left-6 top-1/2 -translate-y-1/2 z-40 hidden sm:flex flex-col items-center"
      >
        <div className="flex flex-col items-center gap-2.5 py-3.5 px-2 rounded-full bg-gradient-to-b from-primary-blue to-dark-blue shadow-xl shadow-blue-950/25 border border-white/20 backdrop-blur-md">
          {/* النقطة الزخرفية العلوية */}
          <span className="w-1.5 h-1.5 rounded-full bg-white/70 mb-0.5" />

          {/* LinkedIn */}
          <SocialIconLink href="https://linkedin.com" label="LinkedIn">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
            </svg>
          </SocialIconLink>

          {/* Instagram */}
          <SocialIconLink href="https://instagram.com" label="Instagram">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
            </svg>
          </SocialIconLink>

          {/* Facebook */}
          <SocialIconLink href="https://facebook.com" label="Facebook">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </SocialIconLink>

          {/* WhatsApp */}
          <SocialIconLink href="https://wa.me/" label="WhatsApp">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.126.556 4.124 1.535 5.86L0 24l6.335-1.652c1.694.922 3.633 1.448 5.696 1.448 6.627 0 12-5.373 12-12s-5.373-12-12-12z" />
            </svg>
          </SocialIconLink>

          {/* النقطة الزخرفية السفلية */}
          <span className="w-1.5 h-1.5 rounded-full bg-white/70 mt-0.5" />
        </div>
      </motion.aside>

      {/* شريط التواصل للموبايل (يظهر تحت القسم في الشاشات الصغيرة) */}
      <div className="sm:hidden px-6 pb-5 pt-2 flex items-center justify-center">
        <div className="inline-flex items-center gap-2.5 py-1.5 px-3.5 rounded-full bg-gradient-to-r from-primary-blue to-dark-blue shadow-md">
          <SocialIconLink href="https://linkedin.com" label="LinkedIn">
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
            </svg>
          </SocialIconLink>
          <SocialIconLink href="https://instagram.com" label="Instagram">
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" />
            </svg>
          </SocialIconLink>
          <SocialIconLink href="https://facebook.com" label="Facebook">
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </SocialIconLink>
          <SocialIconLink href="https://wa.me/" label="WhatsApp">
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771z" />
            </svg>
          </SocialIconLink>
        </div>
      </div>
    </section>
  );
};

/* مكون فرعي لأزرار التواصل الدائرية مع الهوفر والأنيميشن */
function SocialIconLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <motion.a
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.92 }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/15 hover:bg-white text-white hover:text-primary-blue flex items-center justify-center transition-colors duration-200 shadow-xs"
    >
      {children}
    </motion.a>
  );
}