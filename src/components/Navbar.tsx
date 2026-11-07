"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Mail, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getTranslations } from "@/data/translations";

interface NavbarProps {
  lang?: string;
  activeSection?: string;
  onNavigate?: (sectionId: string) => void;
  onOpenContactModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection = "hero",
  onNavigate,
  onOpenContactModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();
  const currentLang = pathname?.startsWith("/en") ? "en" : "ar";
  const isEn = currentLang === "en";
  const targetLang = isEn ? "ar" : "en";
  const switchLangPath = pathname
    ? pathname.replace(`/${currentLang}`, `/${targetLang}`)
    : `/${targetLang}`;

  const isHome = pathname === `/${currentLang}` || pathname === `/${currentLang}/`;

  // جلب الترجمة بحسب اللغة الحالية
  const t = getTranslations(currentLang);

  // تفعيل الشفافية والظل عند التمرير
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // إغلاق قائمة الموبايل عند تغيير الصفحة
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // قائمة الروابط من ملف الترجمة
  const navLinks = [
    {
      id: "home",
      label: t.nav.home,
      href: `/${currentLang}`,
      isActive: isHome && (!activeSection || activeSection === "hero"),
    },
    {
      id: "about",
      label: t.nav.about,
      href: `/${currentLang}/about`,
      isActive: pathname?.startsWith(`/${currentLang}/about`),
    },
    {
      id: "services",
      label: t.nav.services,
      href: `/${currentLang}/services`,
      isActive: pathname?.startsWith(`/${currentLang}/services`),
    },
    {
      id: "projects",
      label: t.nav.projects,
      href: `/${currentLang}/projects`,
      isActive: pathname?.startsWith(`/${currentLang}/projects`),
    },
    {
      id: "guides",
      label: t.nav.guides,
      href: `/${currentLang}/guides`,
      isActive: pathname?.startsWith(`/${currentLang}/guides`),
    },
  ];

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    }
    setMobileMenuOpen(false);
  };

  const isContactPage = pathname?.startsWith(`/${currentLang}/contact`);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-xs border-b border-slate-100 py-0"
          : "bg-white/95 backdrop-blur-xs border-b border-slate-100/80 py-1"
      }`}
      dir={isEn ? "ltr" : "rtl"}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 h-16 sm:h-[68px] flex items-center justify-between transition-all duration-300">
        
        {/* الشعار / الاسم (ينقلب تلقائياً لليسار في الإنجليزية ولليمين في العربية) */}
        <Link
          href={`/${currentLang}`}
          className="flex items-center gap-2 text-start focus:outline-none rounded-lg p-0.5 cursor-pointer"
          aria-label={`Home - ${t.brand.name}`}
        >
          <span
            className={`font-bold text-[#014482] tracking-tight hover:text-[#1874C7] transition-colors ${
              isEn
                ? "font-sans text-base sm:text-lg lg:text-[20px]"
                : "font-scheherazade text-xl sm:text-2xl lg:text-[25px]"
            }`}
          >
            {t.brand.name}
          </span>
        </Link>

        {/* روابط التنقل لسطح المكتب */}
        <nav
          className="hidden lg:flex items-center gap-5 xl:gap-7"
          aria-label="Main Navigation"
        >
          {navLinks.map((link, index) => {
            const active = link.isActive;
            return (
              <motion.div
                key={link.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.05 * index }}
              >
                <Link
                  href={link.href}
                  onClick={(e) => handleAnchorClick(e, link.href)}
                  className={`relative py-1 cursor-pointer transition-colors duration-200 group block ${
                    isEn
                      ? "font-sans text-xs lg:text-[14px]"
                      : "font-scheherazade text-base xl:text-[17px]"
                  } ${
                    active
                      ? "text-[#1874C7] font-bold"
                      : "text-[#014482]/90 hover:text-[#1874C7] font-medium"
                  }`}
                >
                  {link.label}
                  {/* خط سفلي ناعم للعنصر النشط */}
                  <span
                    className={`absolute -bottom-1 inset-x-0 h-[2px] rounded-full bg-[#1874C7] transition-transform duration-200 origin-center ${
                      active
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100 opacity-60"
                    }`}
                  />
                </Link>
              </motion.div>
            );
          })}
        </nav>

        {/* أزرار سطح المكتب: مبدل اللغة + زر تواصل معنا */}
        <div className="hidden sm:flex items-center gap-3">
          {/* زر تبديل اللغة */}
          <Link
            href={switchLangPath}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-200/80 hover:border-[#1874C7]/40 bg-white hover:bg-blue-50/50 text-[#014482] text-xs font-sans font-semibold tracking-wider transition-all"
            aria-label="Switch Language"
          >
            <Globe className="w-3.5 h-3.5 text-[#1874C7]" />
            <span className={currentLang === "en" ? "text-[#1874C7] font-bold" : "text-gray-400"}>
              EN
            </span>
            <span className="text-gray-300">|</span>
            <span className={currentLang === "ar" ? "text-[#1874C7] font-bold" : "text-gray-400"}>
              AR
            </span>
          </Link>

          {/* زر تواصل معنا */}
          <Link
            href={`/${currentLang}/contact`}
            onClick={() => {
              if (onOpenContactModal) onOpenContactModal();
            }}
            className={`inline-flex items-center justify-center px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all shadow-xs hover:shadow-md cursor-pointer ${
              isContactPage
                ? "bg-[#014482] text-white ring-2 ring-[#1874C7]/40"
                : "bg-[#1874C7] hover:bg-[#014482] text-white"
            }`}
          >
            {t.nav.contact}
          </Link>
        </div>

        {/* أزرار رأس الصفحة على الموبايل */}
        <div className="lg:hidden flex items-center gap-2">
          {/* زر تبديل اللغة المصغر */}
          <Link
            href={switchLangPath}
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full border border-slate-200 text-[#014482] text-xs font-sans font-semibold bg-slate-50/80 active:bg-slate-100"
          >
            <Globe className="w-3 h-3 text-[#1874C7]" />
            <span>{currentLang === "ar" ? "EN" : "AR"}</span>
          </Link>

          {/* زر فتح/إغلاق القائمة */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#014482] hover:bg-slate-50 active:bg-slate-100 rounded-xl focus:outline-none transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#1874C7]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* قائمة الموبايل المنسدلة */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden border-b border-slate-200/80 bg-white/98 backdrop-blur-xl shadow-xl shadow-blue-950/5 rounded-b-3xl"
          >
            <div className="px-5 pt-3 pb-6 flex flex-col gap-1.5">
              
              {/* روابط القائمة */}
              {navLinks.map((link) => {
                const active = link.isActive;
                return (
                  <Link
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleAnchorClick(e, link.href)}
                    className={`w-full flex items-center justify-between py-2.5 px-3.5 rounded-xl transition-all duration-200 ${
                      isEn
                        ? "text-sm font-sans"
                        : "text-[17px] font-scheherazade"
                    } ${
                      active
                        ? "bg-blue-50/90 text-[#1874C7] font-bold"
                        : "text-[#014482] hover:bg-slate-50 active:bg-slate-100 font-medium"
                    }`}
                  >
                    <span>{link.label}</span>
                    {active && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1874C7]" />
                    )}
                  </Link>
                );
              })}

              {/* قسم الإجراء والتواصل بالأسفل */}
              <div className="pt-4 mt-2 border-t border-slate-100 flex flex-col gap-3">
                <Link
                  href={`/${currentLang}/contact`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3 rounded-xl bg-[#014482] hover:bg-[#1874C7] active:scale-[0.99] text-white font-sans font-medium text-xs sm:text-sm text-center transition-all shadow-xs"
                >
                  {t.nav.contact}
                </Link>

                <div className="flex items-center justify-center gap-1.5 text-xs text-slate-400 font-sans pt-1">
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  <span>emad.abusaleh@gmail.com</span>
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};