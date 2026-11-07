"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getTranslations } from "@/data/translations";

function LinkedinIcon({ className = "w-4 h-4 fill-current" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

function WhatsAppIcon({ className = "w-4 h-4 fill-current" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.126.556 4.124 1.535 5.86L0 24l6.335-1.652c1.694.922 3.633 1.448 5.696 1.448 6.627 0 12-5.373 12-12s-5.373-12-12-12z" />
    </svg>
  );
}

function InstagramIcon({ className = "w-4 h-4 fill-current" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

function FacebookIcon({ className = "w-4 h-4 fill-current" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export const Footer: React.FC = () => {
  const pathname = usePathname();
  const currentLang = pathname?.startsWith("/en") ? "en" : "ar";
  const isEn = currentLang === "en";

  const t = getTranslations(currentLang);

  const quickLinks = [
    { label: t.footer.links.home, href: `/${currentLang}` },
    { label: t.footer.links.services, href: `/${currentLang}/services` },
    { label: t.footer.links.projects, href: `/${currentLang}/projects` },
    { label: t.footer.links.guides, href: `/${currentLang}/guides` },
    { label: t.footer.links.about, href: `/${currentLang}/about` },
    { label: t.footer.links.contact, href: `/${currentLang}/contact` },
  ];

  return (
    <footer
      className="w-full bg-[#014482] text-white pt-14 pb-8 overflow-hidden select-none"
      dir={isEn ? "ltr" : "rtl"}
    >
      <div className="max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* الأعمدة الثلاثة الرئيسية */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-8 items-start text-start pb-12">
          
          {/* العمود 1: الهوية والتعريف */}
          <div className="md:col-span-5 lg:col-span-5 flex flex-col">
            <Link href={`/${currentLang}`}>
              <h2
                className={`font-bold text-white mb-2 leading-tight hover:text-[#1874C7] transition-colors cursor-pointer ${
                  isEn
                    ? "font-sans text-xl sm:text-2xl lg:text-[26px]"
                    : "font-scheherazade text-3xl sm:text-4xl lg:text-[42px]"
                }`}
              >
                {t.brand.name}
              </h2>
            </Link>
            
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#1874C7] shrink-0" />
              <span
                className={`font-bold text-blue-100 ${
                  isEn ? "font-sans text-xs sm:text-sm" : "font-scheherazade text-base sm:text-lg"
                }`}
              >
                {t.footer.tagline}
              </span>
            </div>

            <p
              className={`text-[#B0C9E2] leading-relaxed max-w-sm font-normal ${
                isEn ? "font-sans text-xs leading-[1.6]" : "font-scheherazade text-xs sm:text-sm"
              }`}
            >
              {t.footer.bio}
            </p>
          </div>

          {/* العمود 2: روابط سريعة */}
          <div className={`md:col-span-3 lg:col-span-3 flex flex-col ${isEn ? "md:ps-6" : "md:ps-4"}`}>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-6 h-[2px] bg-[#1874C7] rounded-full" />
              <h3
                className={`font-bold text-white ${
                  isEn ? "font-sans text-base sm:text-lg" : "font-scheherazade text-xl"
                }`}
              >
                {t.footer.quickLinksTitle}
              </h3>
            </div>

            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={`group inline-flex items-center gap-2 text-[#B0C9E2] hover:text-white transition-colors cursor-pointer text-start ${
                      isEn ? "font-sans text-xs sm:text-sm" : "font-scheherazade text-sm sm:text-[15px]"
                    }`}
                  >
                    {isEn ? (
                      <ChevronRight className="w-3.5 h-3.5 text-[#1874C7] shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
                    ) : (
                      <ChevronLeft className="w-3.5 h-3.5 text-[#1874C7] shrink-0 transition-transform duration-200 group-hover:-translate-x-1" />
                    )}
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* العمود 3: بيانات التواصل والمنصات */}
          <div className="md:col-span-4 lg:col-span-4 flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-6 h-[2px] bg-[#1874C7] rounded-full" />
              <h3
                className={`font-bold text-white ${
                  isEn ? "font-sans text-base sm:text-lg" : "font-scheherazade text-xl"
                }`}
              >
                {t.footer.contactTitle}
              </h3>
            </div>

            {/* البريد الإلكتروني */}
            <a
              href="mailto:emad.abusaleh@gmail.com"
              className="group flex items-center justify-start gap-3 mb-3 text-start"
            >
              <div className="w-9 h-9 rounded-lg bg-white/10 group-hover:bg-[#1874C7] flex items-center justify-center transition-colors shrink-0">
                <Mail className="w-4 h-4 text-white" />
              </div>
              <span className="font-sans text-xs sm:text-sm text-[#B0C9E2] group-hover:text-white transition-colors">
                emad.abusaleh@gmail.com
              </span>
            </a>

            {/* رقم الهاتف */}
            <a
              href="tel:+962799047357"
              className="group flex items-center justify-start gap-3 mb-5 text-start"
            >
              <div className="w-9 h-9 rounded-lg bg-white/10 group-hover:bg-[#1874C7] flex items-center justify-center transition-colors shrink-0">
                <Phone className="w-4 h-4 text-white" />
              </div>
              <span className="font-sans text-xs sm:text-sm text-[#B0C9E2] group-hover:text-white transition-colors" dir="ltr">
                +962799047357
              </span>
            </a>

            {/* عنوان المنصات */}
            <span
              className={`text-[#8EAECF] mb-2.5 block text-start ${
                isEn ? "font-sans text-[11px]" : "font-scheherazade text-xs"
              }`}
            >
              {t.footer.channelsTitle}
            </span>

            {/* أزرار المنصات */}
            <div className="flex items-center gap-2">
              <SocialSquareLink href="https://www.linkedin.com/in/emad-abusaleh" label="LinkedIn">
                <LinkedinIcon className="w-3.5 h-3.5 fill-current" />
              </SocialSquareLink>

              <SocialSquareLink href="https://wa.me/962799047357" label="WhatsApp">
                <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
              </SocialSquareLink>

              <SocialSquareLink href="https://www.instagram.com/emadabusaleh/" label="Instagram">
                <InstagramIcon className="w-3.5 h-3.5 fill-current" />
              </SocialSquareLink>

              <SocialSquareLink href="https://www.facebook.com/E.AbuSaleh" label="Facebook">
                <FacebookIcon className="w-3.5 h-3.5 fill-current" />
              </SocialSquareLink>

              <SocialSquareLink href="mailto:emad.abusaleh@gmail.com" label="Email">
                <Mail className="w-3.5 h-3.5" />
              </SocialSquareLink>

              <SocialSquareLink href="tel:+962799047357" label="Phone">
                <Phone className="w-3.5 h-3.5" />
              </SocialSquareLink>
            </div>
          </div>

        </div>

        {/* الشريط السفلي وحقوق النشر */}
        <div className="pt-6 border-t border-white/10 text-center">
          <p
            className={`text-[#8EAECF] ${
              isEn ? "font-sans text-xs" : "font-scheherazade text-xs sm:text-sm"
            }`}
          >
            {t.footer.copyright}
          </p>
        </div>

      </div>
    </footer>
  );
};

function SocialSquareLink({
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
      whileHover={{ scale: 1.12, y: -2 }}
      whileTap={{ scale: 0.92 }}
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      aria-label={label}
      title={label}
      className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white text-white hover:text-[#014482] flex items-center justify-center transition-all duration-200 shadow-2xs cursor-pointer"
    >
      {children}
    </motion.a>
  );
}