"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface KnowledgeLibraryProps {
  lang?: string;
}

// قائمة المواد المعرفية الموسعة (12 مخرجاً معتمداً)
const allKnowledgeItems = [
  {
    id: "item-1",
    category: "guides",
    badge: "دليل إجرائي",
    date: "18.01.2024",
    title: "مصفوفة بناء التحالفات وتحديد الأولويات التنموية",
    desc: "منهجية مفصلة لتوزيع الأدوار وتحديد نقاط التقاطع بين الفاعلين المحليين لضمان استدامة المشاريع وتفادي تضارب المسؤوليات.",
    actionText: "عرض الدليل",
    href: "/guides/alliances-matrix",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "item-2",
    category: "policy",
    badge: "ورقة سياسات",
    date: "12.10.2024",
    title: "محددات المشاركة المدنية في السياسات التنموية المحلية",
    desc: "تحليل سياساتي يبحث في أطر الحوكمة الرشيدة وفرص إدماج المجتمعات في صياغة البرامج الوطنية وتقييم مخرجاتها الميدانية.",
    actionText: "قراءة ورقة السياسات",
    href: "/guides/civic-participation",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "item-3",
    category: "studies",
    badge: "دراسة استشارية",
    date: "05.08.2024",
    title: "أثر التيسير التشاركي في فاعلية التدخلات الميدانية",
    desc: "قراءة نقدية لمخرجات جلسات النقاش الحوارية وأثرها في تحويل الشعارات النظرية إلى خطط قابلة للتنفيذ وتخفيف الاحتقان الإجرائي.",
    actionText: "عرض الدراسة",
    href: "/guides/participatory-facilitation",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "item-4",
    category: "articles",
    badge: "مقال تحليلي",
    date: "14.05.2024",
    title: "بين الخطاب العام والممارسة الميدانية: فجوات التخطيط الاستراتيجي",
    desc: "إضاءة مهنية على التحديات الواقعية التي تواجه فرق العمل في الحفاظ على التوازن بين النظرية والتطبيق أثناء إدارة المبادرات.",
    actionText: "قراءة المقال",
    href: "/guides/public-discourse-practice",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "item-5",
    category: "guides",
    badge: "دليل إجرائي",
    date: "22.03.2024",
    title: "إعداد وثائق كسب التأييد والمناصرة الموجهة لصناع القرار",
    desc: "قواعد صياغة المذكرات التوجيهية وتوثيق المطالب المجتمعية بلغة رسمية وموضوعية قادرة على إحداث الأثر الإيجابي لدى القيادات.",
    actionText: "عرض الدليل",
    href: "/guides/advocacy-documents",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "item-6",
    category: "policy",
    badge: "ورقة سياسات",
    date: "11.11.2024",
    title: "حوكمة المبادرات الشبابية في البيئات المحلية: التحديات والممكنات",
    desc: "دراسة تحليلية للأطر الإدارية والتشغيلية الممكنة للمبادرات المستقلة لضمان الفاعلية والاستمرار في ظل التحولات الاقتصادية.",
    actionText: "قراءة ورقة السياسات",
    href: "/guides/youth-governance",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "item-7",
    category: "guides",
    badge: "دليل إجرائي",
    date: "04.02.2024",
    title: "دليل إدارة المخاطر وتطوير خطط الطوارئ للبرامج الميدانية",
    desc: "أدوات عملية لتوقع الاضطرابات التشغيلية والسياساتية في الميدان وتجهيز سيناريوهات بديلة تحافظ على سير العمل المؤسسي.",
    actionText: "عرض الدليل",
    href: "/guides/risk-management",
    image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "item-8",
    category: "studies",
    badge: "دراسة استشارية",
    date: "19.06.2024",
    title: "تحليل كفاءة الإنفاق التنموي في مشاريع الاستجابة السريعة",
    desc: "تقييم تحليلي يعتمد على بيانات ميدانية لقياس العائد التنموي مقابل التكاليف التشغيلية في المبادرات الاجتماعية العاجلة.",
    actionText: "عرض الدراسة",
    href: "/guides/spending-efficiency",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "item-9",
    category: "policy",
    badge: "ورقة سياسات",
    date: "28.09.2024",
    title: "أدوار الوساطة المجتمعية في حل النزاعات التنموية المحلية",
    desc: "محددات سياساتية وإجرائية لتفعيل دور الشخصيات التوافقية ومنظمات المجتمع المدني في تسوية الخلافات وضمان تماسك البيئة المستهدفة.",
    actionText: "قراءة ورقة السياسات",
    href: "/guides/community-mediation",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "item-10",
    category: "articles",
    badge: "مقال تحليلي",
    date: "17.07.2024",
    title: "صناعة الأثر المستدام: معايير الانتقال من الإغاثة إلى التمكين",
    desc: "رؤية نقدية تعيد تعريف استراتيجيات التدخل التنموي لنقل المجتمعات المحلية من الاعتمادية المؤقتة إلى الاستقلال التشغيلي.",
    actionText: "قراءة المقال",
    href: "/guides/sustainable-impact",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "item-11",
    category: "guides",
    badge: "دليل إجرائي",
    date: "09.12.2024",
    title: "دليل رصد وتقييم الأثر الميداني لمشاريع التنمية المستدامة",
    desc: "نماذج وجداول رقمية معتمدة لقياس مؤشرات الأداء والمخرجات الواقعية مقارنة بالأهداف المرسومة في وثائق المشروع.",
    actionText: "عرض الدليل",
    href: "/guides/monitoring-evaluation",
    image: "https://images.unsplash.com/photo-1551836022-4a4980fdb60b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "item-12",
    category: "articles",
    badge: "مقال تحليلي",
    date: "30.08.2024",
    title: "التشبيك المؤسسي وبناء الشراكات بين القطاعين العام والمجتمعي",
    desc: "تحليل معمق لآليات بناء الثقة وتوحيد الأهداف بين الأجهزة الحكومية والمبادرات الأهلية لتعظيم فاعلية الخدمات المشتركة.",
    actionText: "قراءة المقال",
    href: "/guides/institutional-networking",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
  },
];

// تصنيفات التبويبات مع أعدادها
const filterTabs = [
  { id: "guides", label: "الأدلة", count: 8 },
  { id: "policy", label: "أوراق السياسات", count: 6 },
  { id: "studies", label: "الدراسات", count: 5 },
  { id: "articles", label: "المقالات", count: 11 },
];

export default function KnowledgeLibrary({ lang = "ar" }: KnowledgeLibraryProps) {
  const [activeTab, setActiveTab] = useState<string>("guides");
  const [visibleCount, setVisibleCount] = useState<number>(6);

  // تصفية المواد بحسب التبويب النشط
  const filteredItems = allKnowledgeItems.filter((item) => item.category === activeTab);
  
  // إذا كانت الفئة الحالية بها عناصر أقل، نعرض كل عناصر الفئة، وإلا نعرض القائمة المختارة
  const displayItems = filteredItems.length > 0 ? filteredItems : allKnowledgeItems;
  const currentRender = displayItems.slice(0, visibleCount);

  return (
    <section className="relative w-full py-16 lg:py-24 bg-white text-right overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================
            1. ترويسة السكشن
            ======================================================== */}
        <div className="flex flex-col mb-10 text-right">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-scheherazade text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#014482] leading-tight mb-3"
          >
            مكتبة المعرفة
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm sm:text-base text-slate-500 font-sans leading-relaxed  text-right font-normal"
          >
            أوراق السياسات، الدراسات المتخصصة، والمقالات التحليلية المحكّمة الموجهة لتطوير الحوكمة والمبادرات.
          </motion.p>
        </div>

        {/* ========================================================
            2. تبويبات الفلترة (Tabs)
            ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-wrap items-center justify-start gap-2.5 sm:gap-3 mb-10"
        >
          {filterTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setVisibleCount(6); // إعادة الضبط لـ 6 عند التبديل
                }}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-[13px] font-sans font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#1874C7] text-white shadow-sm shadow-[#1874C7]/20"
                    : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200/90 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[11px] px-1.5 py-0.2 rounded-full font-sans ${
                    isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* ========================================================
            3. شبكة الكروت (3 أعمدة متناسقة بحجم واتجاه مضبوط)
            ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 mb-10">
          <AnimatePresence mode="popLayout">
            {currentRender.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group relative bg-white border border-slate-200/80 hover:border-slate-300 rounded-[20px] overflow-hidden shadow-2xs hover:shadow-xl hover:shadow-[#014482]/8 transition-all duration-300 flex flex-col justify-between"
              >
                {/* خط أزرق علوي عند الهوفر */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#1874C7] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                <div>
                  {/* مساحة الصورة والبادج على اليمين والتاريخ على اليسار */}
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600 ease-out select-none"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />

                    {/* البادج والتاريخ مضبوطان بالاتجاه الصحيح */}
                    <div className="absolute bottom-3 inset-x-3 flex items-center justify-between pointer-events-none">
                      {/* البادج التصنيفي: على اليمين في RTL */}
                      <span className="bg-[#1874C7] text-white text-[11px] font-sans font-medium px-2.5 py-1 rounded-md shadow-xs">
                        {item.badge}
                      </span>

                      {/* تاريخ النشر: على اليسار في RTL */}
                      <span className="text-[11px] font-sans text-white/90 drop-shadow-xs">
                        {item.date}
                      </span>
                    </div>
                  </div>

                  {/* نصوص الكرت */}
                  <div className="p-5 sm:p-6 pb-2 text-right">
                    <h3 className="font-scheherazade text-lg sm:text-[20px] font-bold text-[#014482] group-hover:text-[#1874C7] transition-colors leading-snug mb-2.5 line-clamp-2 min-h-[52px]">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-sans leading-relaxed font-normal line-clamp-3 min-h-[54px]">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* رابط الإجراء: متوضع على اليسار تماماً (flex justify-end في RTL) */}
                <div className="p-5 sm:p-6 pt-3 border-t border-slate-100 flex items-center justify-end">
                  <Link
                    href={`/${lang}${item.href}`}
                    className="inline-flex items-center gap-1.5 text-xs font-sans font-medium text-[#1874C7] group-hover:text-[#014482] transition-colors"
                  >
                    <span>{item.actionText}</span>
                    <svg
                      className="w-3.5 h-3.5 group-hover:-translate-x-1.5 transition-transform duration-200"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 19l-7-7m0 0l7-7m-7 7h18"
                      />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* زر عرض المزيد من المواد المعرفية عند الحاجة */}
        {visibleCount < displayItems.length && (
          <div className="flex justify-center mb-12">
            <button
              onClick={() => setVisibleCount((prev) => prev + 6)}
              className="px-6 py-2.5 rounded-xl border border-slate-200 text-slate-700 hover:text-[#014482] hover:border-slate-300 bg-white hover:bg-slate-50 text-xs sm:text-sm font-sans font-medium transition-colors shadow-2xs cursor-pointer"
            >
              عرض المزيد من المواد المعرفية ({displayItems.length - visibleCount})
            </button>
          </div>
        )}

        {/* ========================================================
            4. شريط حقوق الاستخدام والإسناد العلمي في الأسفل
            ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[#F5F6F7] border border-slate-200/80 rounded-2xl p-4 sm:p-5 flex items-center gap-3.5 text-right"
        >
          {/* أيقونة التوثيق والاعتماد على اليمين */}
          <div className="w-9 h-9 rounded-xl bg-[#014482] text-white flex items-center justify-center shrink-0">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.75}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          </div>

          {/* نص الحقوق المعتمد */}
          <p className="text-xs sm:text-[13px] font-sans leading-relaxed text-slate-600">
            <span className="font-bold text-[#014482] ml-1">حقوق الاستخدام والإسناد العلمي:</span>
            كافة الأدلة وأوراق السياسات المنشورة متاحة للاستشهاد الأكاديمي والتطوير المؤسسي مع ضرورة الإشارة إلى المصدر والكاتب.
          </p>
        </motion.div>

      </div>
    </section>
  );
}