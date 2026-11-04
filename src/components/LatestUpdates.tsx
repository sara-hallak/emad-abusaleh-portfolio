"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { NEWS_ARTICLES, type Article, type Category } from "@/data/newsData";

const CATEGORIES: Category[] = [
  "الكل",
  "حملات ومناصرة",
  "تقارير ودراسات",
  "مقالات وآراء",
];

// ==========================================
// 1. كرت المقال (مع أنيميشن الدخول الشلالي والزووم)
// ==========================================

function NewsCard({
  article,
  index,
  currentLang,
}: {
  article: Article;
  index: number;
  currentLang: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.65,
        delay: (index % 3) * 0.12, // تتابع زمني ناعم بين الكروت
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Link
        href={`/${currentLang}/news/${article.id}`}
        className="group h-full bg-white rounded-[18px] border border-gray-100 overflow-hidden flex flex-col justify-between shadow-[0_2px_12px_rgba(1,68,130,0.04)] hover:shadow-[0_10px_26px_rgba(1,68,130,0.09)] transition-all duration-300 cursor-pointer block"
      >
        <div>
          {/* حاوية الصورة مع حركة زووم سينمائية مستمرة */}
          <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100">
            <motion.img
              src={article.image}
              alt={article.title}
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
            <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/25 via-transparent to-transparent opacity-50 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none" />
          </div>

          {/* نصوص الكرت */}
          <div className="p-5 sm:p-6 flex flex-col text-start">
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-xs font-semibold text-primary-blue">
                {article.category}
              </span>
              <time className="text-xs text-gray-400 font-sans">
                {article.date}
              </time>
            </div>

            <h3 className="font-scheherazade text-xl sm:text-[22px] font-bold text-dark-blue group-hover:text-primary-blue transition-colors duration-200 leading-snug mb-2">
              {article.title}
            </h3>

            <p className="font-scheherazade text-xs sm:text-[13px] text-gray-500 leading-relaxed line-clamp-3 font-normal">
              {article.excerpt}
            </p>
          </div>
        </div>

        {/* زر قراءة الخبر مع سهم يتحرك عند الهوفر */}
        <div className="px-5 pb-5 pt-0 sm:px-6 sm:pb-6 flex items-center justify-end">
          <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-primary-blue group-hover:gap-2.5 transition-all duration-200">
            <span>قراءة الخبر</span>
            <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-x-1" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

// ==========================================
// 2. شريط التصنيفات (مع أنيميشن ظهور هادئ)
// ==========================================

function CategoryNav({
  selectedCategory,
  onSelectCategory,
}: {
  selectedCategory: Category;
  onSelectCategory: (category: Category) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: 0.15, ease: "easeOut" }}
      className="mb-8 sm:mb-10 border-b border-gray-100 flex items-center justify-start"
    >
      <nav
        className="flex items-center gap-5 sm:gap-8 flex-wrap text-sm sm:text-base"
        aria-label="تصنيفات المستجدات"
      >
        {CATEGORIES.map((category) => {
          const isActive = selectedCategory === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => onSelectCategory(category)}
              className={`relative py-2.5 transition-colors cursor-pointer font-scheherazade text-base sm:text-lg focus:outline-none ${
                isActive
                  ? "font-bold text-primary-blue"
                  : "font-normal text-dark-blue hover:text-primary-blue"
              }`}
            >
              <span>{category}</span>
              {isActive && (
                <motion.span
                  layoutId="activeCategoryTabLine"
                  className="absolute bottom-0 right-0 left-0 h-[2.5px] bg-primary-blue rounded-full"
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

  const [selectedCategory, setSelectedCategory] = useState<Category>("الكل");
  const [visibleCount, setVisibleCount] = useState<number>(3);

  const filteredArticles = useMemo(() => {
    if (selectedCategory === "الكل") return NEWS_ARTICLES;
    return NEWS_ARTICLES.filter((art) => art.category === selectedCategory);
  }, [selectedCategory]);

  const displayedArticles = useMemo(() => {
    return filteredArticles.slice(0, visibleCount);
  }, [filteredArticles, visibleCount]);

  const hasMore = visibleCount < filteredArticles.length;

  const handleCategoryChange = (category: Category) => {
    setSelectedCategory(category);
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
    <section id="updates" className="w-full bg-white py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* ترويسة القسم مع أنيميشن الصعود الناعم */}
        <motion.header
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 sm:mb-8 text-start"
        >
          <h2 className="font-scheherazade text-3xl sm:text-4xl lg:text-[42px] font-bold text-dark-blue leading-tight mb-1.5">
            آخر المستجدات
          </h2>
          <p className="font-scheherazade text-xs sm:text-sm lg:text-[15px] text-gray-500 font-normal leading-relaxed">
            تابع أبرز الأخبار والمستجدات والتطورات التي تحظى باهتمامنا.
          </p>
        </motion.header>

        {/* شريط التصنيفات */}
        <CategoryNav
          selectedCategory={selectedCategory}
          onSelectCategory={handleCategoryChange}
        />

        {/* شبكة الكروت بأنيميشن دخول تتابعي راقٍ */}
        {displayedArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 items-stretch">
            {displayedArticles.map((article, index) => (
              <NewsCard
                key={article.id}
                article={article}
                index={index}
                currentLang={currentLang}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 px-4 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
            <p className="text-gray-500 text-sm mb-2">
              لا توجد أخبار مدرجة حالياً في هذا التصنيف.
            </p>
            <button
              type="button"
              onClick={() => handleCategoryChange("الكل")}
              className="text-primary-blue text-xs font-semibold hover:underline cursor-pointer"
            >
              العودة إلى جميع الأخبار
            </button>
          </div>
        )}

        {/* زر عرض المزيد من الأخبار / عرض أقل مع أنيميشن ظهور */}
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
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl border border-primary-blue/60 text-primary-blue bg-white font-semibold text-xs sm:text-sm hover:bg-primary-blue hover:text-white transition-all duration-200 shadow-[0_2px_10px_rgba(24,116,199,0.08)] hover:shadow-md cursor-pointer"
            >
              <span>{hasMore ? "عرض المزيد من الأخبار" : "عرض أقل"}</span>
              <ArrowLeft className={`w-3.5 h-3.5 transition-transform duration-200 ${hasMore ? "" : "rotate-90"}`} />
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};