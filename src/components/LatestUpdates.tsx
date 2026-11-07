"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { NEWS_ARTICLES, type Article } from "@/data/newsData";
import { getTranslations } from "@/data/translations";

// ==========================================
// 1. كرت المقال مع أنيميشن الزووم والانقلاب
// ==========================================
function NewsCard({
  article,
  index,
  currentLang,
  readText,
  isEn,
}: {
  article: Article;
  index: number;
  currentLang: string;
  readText: string;
  isEn: boolean;
}) {
  // اختيار النص الإنجليزي إذا كانت اللغة الحالية إنجليزية
  const categoryTitle = isEn ? (article.categoryEn || article.category) : article.category;
  const articleTitle = isEn ? (article.titleEn || article.title) : article.title;
  const articleDate = isEn ? (article.dateEn || article.date) : article.date;
  const articleExcerpt = isEn ? (article.excerptEn || article.excerpt) : article.excerpt;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.65,
        delay: (index % 3) * 0.12,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Link
        href={`/${currentLang}/news/${article.id}`}
        className="group h-full bg-white rounded-[18px] border border-slate-200/90 overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-xl hover:shadow-blue-900/8 transition-all duration-300 cursor-pointer block"
      >
        <div>
          {/* حاوية الصورة مع حركة زووم سينمائية مستمرة */}
          <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100">
            <motion.img
              src={article.image}
              alt={articleTitle}
              animate={{
                scale: [1, 1.08],
              }}
              transition={{
                duration: 7 + (index % 3) * 1.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              className="w-full h-full object-cover object-center select-none"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#014482]/25 via-transparent to-transparent opacity-50 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none" />
          </div>

          {/* نصوص الكرت المترجمة */}
          <div className="p-5 sm:p-6 flex flex-col text-start">
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-xs font-semibold text-[#1874C7] font-sans">
                {categoryTitle}
              </span>
              <time className="text-xs text-slate-400 font-sans">
                {articleDate}
              </time>
            </div>

            <h3
              className={`font-bold text-[#014482] group-hover:text-[#1874C7] transition-colors duration-200 leading-snug mb-2 ${
                isEn
                  ? "font-sans text-base sm:text-lg"
                  : "font-scheherazade text-xl sm:text-[22px]"
              }`}
            >
              {articleTitle}
            </h3>

            <p
              className={`text-slate-500 leading-relaxed line-clamp-3 font-normal ${
                isEn
                  ? "font-sans text-xs sm:text-[13px] leading-[1.6]"
                  : "font-scheherazade text-xs sm:text-[13px]"
              }`}
            >
              {articleExcerpt}
            </p>
          </div>
        </div>

        {/* زر قراءة الخبر مع سهم متكيف مع الاتجاه */}
        <div className="px-5 pb-5 pt-0 sm:px-6 sm:pb-6 flex items-center justify-end">
          <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#1874C7] group-hover:gap-2.5 transition-all duration-200">
            <span className="font-sans">{readText}</span>
            {isEn ? (
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            ) : (
              <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-x-1" />
            )}
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

// ==========================================
// 2. شريط التصنيفات المتكيف
// ==========================================
function CategoryNav({
  categories,
  selectedCategory,
  onSelectCategory,
  isEn,
}: {
  categories: { key: string; label: string }[];
  selectedCategory: string;
  onSelectCategory: (key: string) => void;
  isEn: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: 0.15, ease: "easeOut" }}
      className="mb-8 sm:mb-10 border-b border-slate-100 flex items-center justify-start"
    >
      <nav
        className="flex items-center gap-5 sm:gap-8 flex-wrap text-sm sm:text-base"
        aria-label="Categories"
      >
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.key;
          return (
            <button
              key={cat.key}
              type="button"
              onClick={() => onSelectCategory(cat.key)}
              className={`relative py-2.5 transition-colors cursor-pointer focus:outline-none ${
                isEn
                  ? "font-sans text-xs sm:text-sm"
                  : "font-scheherazade text-base sm:text-lg"
              } ${
                isActive
                  ? "font-bold text-[#1874C7]"
                  : "font-normal text-[#014482] hover:text-[#1874C7]"
              }`}
            >
              <span>{cat.label}</span>
              {isActive && (
                <motion.span
                  layoutId="activeCategoryTabLine"
                  className="absolute bottom-0 right-0 left-0 h-[2.5px] bg-[#1874C7] rounded-full"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </nav>
    </motion.div>
  );
}

// ==========================================
// 3. المكون الرئيسي (LatestUpdates)
// ==========================================
export const LatestUpdates: React.FC = () => {
  const pathname = usePathname();
  const currentLang = pathname?.startsWith("/en") ? "en" : "ar";
  const isEn = currentLang === "en";

  const t = getTranslations(currentLang);

  const categories = [
    { key: "all", label: t.updates.categories.all },
    { key: "advocacy", label: t.updates.categories.advocacy },
    { key: "reports", label: t.updates.categories.reports },
    { key: "articles", label: t.updates.categories.articles },
  ];

  const [selectedKey, setSelectedKey] = useState<string>("all");
  const [visibleCount, setVisibleCount] = useState<number>(3);

  // مطابقة مفاتيح الفئات مع البيانات
  const filteredArticles = useMemo(() => {
    if (selectedKey === "all") return NEWS_ARTICLES;
    const categoryMapping: Record<string, string> = {
      advocacy: "حملات ومناصرة",
      reports: "تقارير ودراسات",
      articles: "مقالات وآراء",
    };
    const targetCategory = categoryMapping[selectedKey];
    return NEWS_ARTICLES.filter((art) => art.category === targetCategory);
  }, [selectedKey]);

  const displayedArticles = useMemo(() => {
    return filteredArticles.slice(0, visibleCount);
  }, [filteredArticles, visibleCount]);

  const hasMore = visibleCount < filteredArticles.length;

  const handleCategoryChange = (key: string) => {
    setSelectedKey(key);
    setVisibleCount(3);
  };

  const handleToggleMore = () => {
    if (hasMore) {
      setVisibleCount(filteredArticles.length);
    } else {
      setVisibleCount(3);
    }
  };

  return (
    <section
      id="updates"
      className="w-full bg-white py-12 sm:py-16 lg:py-20 overflow-hidden"
      dir={isEn ? "ltr" : "rtl"}
    >
      <div className="max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* ترويسة القسم */}
        <motion.header
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 sm:mb-8 text-start"
        >
          <h2
            className={`font-bold text-[#014482] leading-tight mb-1.5 ${
              isEn
                ? "font-sans text-2xl sm:text-3xl lg:text-[36px]"
                : "font-scheherazade text-3xl sm:text-4xl lg:text-[42px]"
            }`}
          >
            {t.updates.title}
          </h2>
          <p
            className={`text-slate-500 font-normal leading-relaxed ${
              isEn
                ? "font-sans text-xs sm:text-sm lg:text-[15px]"
                : "font-scheherazade text-xs sm:text-sm lg:text-[15px]"
            }`}
          >
            {t.updates.desc}
          </p>
        </motion.header>

        {/* شريط التصنيفات */}
        <CategoryNav
          categories={categories}
          selectedCategory={selectedKey}
          onSelectCategory={handleCategoryChange}
          isEn={isEn}
        />

        {/* شبكة الكروت */}
        {displayedArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 items-stretch">
            {displayedArticles.map((article, index) => (
              <NewsCard
                key={article.id}
                article={article}
                index={index}
                currentLang={currentLang}
                readText={t.updates.readArticle}
                isEn={isEn}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 px-4 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
            <p className="text-slate-500 text-xs sm:text-sm mb-2 font-sans">
              {t.updates.noArticles}
            </p>
            <button
              type="button"
              onClick={() => handleCategoryChange("all")}
              className="text-[#1874C7] text-xs font-semibold hover:underline cursor-pointer font-sans"
            >
              {t.updates.backToAll}
            </button>
          </div>
        )}

        {/* زر عرض المزيد من الأخبار */}
        {filteredArticles.length > 3 && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
            className="mt-10 sm:mt-12 text-center"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="button"
              onClick={handleToggleMore}
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl border border-[#1874C7]/60 text-[#1874C7] bg-white font-semibold text-xs sm:text-sm hover:bg-[#1874C7] hover:text-white transition-all duration-200 shadow-2xs hover:shadow-md cursor-pointer font-sans"
            >
              <span>{hasMore ? t.updates.showMore : t.updates.showLess}</span>
              {isEn ? (
                <ArrowRight className="w-3.5 h-3.5" />
              ) : (
                <ArrowLeft className="w-3.5 h-3.5" />
              )}
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};