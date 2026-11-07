"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface KnowledgeLibraryProps {
  lang?: string;
}

interface KnowledgeItem {
  id: string;
  category: "guides" | "policy" | "studies" | "articles";
  badge: string;
  badgeEn: string;
  date: string;
  dateEn: string;
  title: string;
  titleEn: string;
  desc: string;
  descEn: string;
  actionText: string;
  actionTextEn: string;
  href: string;
  image: string;
}

// قائمة المواد المعرفية الموسعة (12 مخرجاً معتمداً) باللغتين
const allKnowledgeItems: KnowledgeItem[] = [
  {
    id: "item-1",
    category: "guides",
    badge: "دليل إجرائي",
    badgeEn: "Procedural Manual",
    date: "18.01.2024",
    dateEn: "Jan 18, 2024",
    title: "مصفوفة بناء التحالفات وتحديد الأولويات التنموية",
    titleEn: "Alliance-Building Matrix & Developmental Priority Mapping",
    desc: "منهجية مفصلة لتوزيع الأدوار وتحديد نقاط التقاطع بين الفاعلين المحليين لضمان استدامة المشاريع وتفادي تضارب المسؤوليات.",
    descEn: "A detailed methodology for role allocation and identifying intersection points among local actors to ensure project sustainability and prevent mandate overlap.",
    actionText: "عرض الدليل",
    actionTextEn: "View Guide",
    href: "/guides/alliances-matrix",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "item-2",
    category: "policy",
    badge: "ورقة سياسات",
    badgeEn: "Policy Paper",
    date: "12.10.2024",
    dateEn: "Oct 12, 2024",
    title: "محددات المشاركة المدنية في السياسات التنموية المحلية",
    titleEn: "Determinants of Civic Engagement in Local Development Policies",
    desc: "تحليل سياساتي يبحث في أطر الحوكمة الرشيدة وفرص إدماج المجتمعات في صياغة البرامج الوطنية وتقييم مخرجاتها الميدانية.",
    descEn: "A policy analysis examining good governance frameworks and avenues for community integration in designing national programs and evaluating field outcomes.",
    actionText: "قراءة ورقة السياسات",
    actionTextEn: "Read Policy Paper",
    href: "/guides/civic-participation",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "item-3",
    category: "studies",
    badge: "دراسة استشارية",
    badgeEn: "Advisory Study",
    date: "05.08.2024",
    dateEn: "Aug 05, 2024",
    title: "أثر التيسير التشاركي في فاعلية التدخلات الميدانية",
    titleEn: "Impact of Participatory Facilitation on Field Intervention Effectiveness",
    desc: "قراءة نقدية لمخرجات جلسات النقاش الحوارية وأثرها في تحويل الشعارات النظرية إلى خطط قابلة للتنفيذ وتخفيف الاحتقان الإجرائي.",
    descEn: "A critical review of dialogue session outcomes and their role in transforming theoretical concepts into actionable plans while easing operational bottlenecks.",
    actionText: "عرض الدراسة",
    actionTextEn: "View Study",
    href: "/guides/participatory-facilitation",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "item-4",
    category: "articles",
    badge: "مقال تحليلي",
    badgeEn: "Analytical Article",
    date: "14.05.2024",
    dateEn: "May 14, 2024",
    title: "بين الخطاب العام والممارسة الميدانية: فجوات التخطيط الاستراتيجي",
    titleEn: "Between Public Discourse and Field Practice: Strategic Planning Gaps",
    desc: "إضاءة مهنية على التحديات الواقعية التي تواجه فرق العمل في الحفاظ على التوازن بين النظرية والتطبيق أثناء إدارة المبادرات.",
    descEn: "A professional spotlight on the practical challenges operational teams face in maintaining balance between theory and implementation during initiative execution.",
    actionText: "قراءة المقال",
    actionTextEn: "Read Article",
    href: "/guides/public-discourse-practice",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "item-5",
    category: "guides",
    badge: "دليل إجرائي",
    badgeEn: "Procedural Manual",
    date: "22.03.2024",
    dateEn: "Mar 22, 2024",
    title: "إعداد وثائق كسب التأييد والمناصرة الموجهة لصناع القرار",
    titleEn: "Drafting Policy Briefs and Advocacy Papers for Decision-Makers",
    desc: "قواعد صياغة المذكرات التوجيهية وتوثيق المطالب المجتمعية بلغة رسمية وموضوعية قادرة على إحداث الأثر الإيجابي لدى القيادات.",
    descEn: "Guidelines for framing policy briefs and documenting community demands in formal, objective language designed to influence leadership effectively.",
    actionText: "عرض الدليل",
    actionTextEn: "View Guide",
    href: "/guides/advocacy-documents",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "item-6",
    category: "policy",
    badge: "ورقة سياسات",
    badgeEn: "Policy Paper",
    date: "11.11.2024",
    dateEn: "Nov 11, 2024",
    title: "حوكمة المبادرات الشبابية في البيئات المحلية: التحديات والممكنات",
    titleEn: "Governance of Youth Initiatives in Local Environments: Challenges and Enablers",
    desc: "دراسة تحليلية للأطر الإدارية والتشغيلية الممكنة للمبادرات المستقلة لضمان الفاعلية والاستمرار في ظل التحولات الاقتصادية.",
    descEn: "An analytical study on viable administrative and operational frameworks for grassroots initiatives to ensure resilience amid socio-economic transitions.",
    actionText: "قراءة ورقة السياسات",
    actionTextEn: "Read Policy Paper",
    href: "/guides/youth-governance",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "item-7",
    category: "guides",
    badge: "دليل إجرائي",
    badgeEn: "Procedural Manual",
    date: "04.02.2024",
    dateEn: "Feb 04, 2024",
    title: "دليل إدارة المخاطر وتطوير خطط الطوارئ للبرامج الميدانية",
    titleEn: "Risk Management Guide and Contingency Planning for Field Programs",
    desc: "أدوات عملية لتوقع الاضطرابات التشغيلية والسياساتية في الميدان وتجهيز سيناريوهات بديلة تحافظ على سير العمل المؤسسي.",
    descEn: "Practical toolsets for anticipating operational and policy turbulence on the ground and establishing alternate scenarios to ensure institutional continuity.",
    actionText: "عرض الدليل",
    actionTextEn: "View Guide",
    href: "/guides/risk-management",
    image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "item-8",
    category: "studies",
    badge: "دراسة استشارية",
    badgeEn: "Advisory Study",
    date: "19.06.2024",
    dateEn: "Jun 19, 2024",
    title: "تحليل كفاءة الإنفاق التنموي في مشاريع الاستجابة السريعة",
    titleEn: "Development Spending Efficiency Analysis in Rapid Response Projects",
    desc: "تقييم تحليلي يعتمد على بيانات ميدانية لقياس العائد التنموي مقابل التكاليف التشغيلية في المبادرات الاجتماعية العاجلة.",
    descEn: "A field data-driven analytical assessment measuring development ROI against operational expenditure in urgent social interventions.",
    actionText: "عرض الدراسة",
    actionTextEn: "View Study",
    href: "/guides/spending-efficiency",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "item-9",
    category: "policy",
    badge: "ورقة سياسات",
    badgeEn: "Policy Paper",
    date: "28.09.2024",
    dateEn: "Sep 28, 2024",
    title: "أدوار الوساطة المجتمعية في حل النزاعات التنموية المحلية",
    titleEn: "Community Mediation Roles in Resolving Local Development Disputes",
    desc: "محددات سياساتية وإجرائية لتفعيل دور الشخصيات التوافقية ومنظمات المجتمع المدني في تسوية الخلافات وضمان تماسك البيئة المستهدفة.",
    descEn: "Policy and procedural parameters for mobilizing consensus figures and CSOs to resolve tensions and maintain community cohesion.",
    actionText: "قراءة ورقة السياسات",
    actionTextEn: "Read Policy Paper",
    href: "/guides/community-mediation",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "item-10",
    category: "articles",
    badge: "مقال تحليلي",
    badgeEn: "Analytical Article",
    date: "17.07.2024",
    dateEn: "Jul 17, 2024",
    title: "صناعة الأثر المستدام: معايير الانتقال من الإغاثة إلى التمكين",
    titleEn: "Crafting Sustainable Impact: Transition Criteria from Relief to Empowerment",
    desc: "رؤية نقدية تعيد تعريف استراتيجيات التدخل التنموي لنقل المجتمعات المحلية من الاعتمادية المؤقتة إلى الاستقلال التشغيلي.",
    descEn: "A critical perspective redefining development intervention strategies to shift local communities from temporary dependency to operational self-reliance.",
    actionText: "قراءة المقال",
    actionTextEn: "Read Article",
    href: "/guides/sustainable-impact",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "item-11",
    category: "guides",
    badge: "دليل إجرائي",
    badgeEn: "Procedural Manual",
    date: "09.12.2024",
    dateEn: "Dec 09, 2024",
    title: "دليل رصد وتقييم الأثر الميداني لمشاريع التنمية المستدامة",
    titleEn: "Field Impact Monitoring and Evaluation (M&E) Guide for Sustainable Projects",
    desc: "نماذج وجداول رقمية معتمدة لقياس مؤشرات الأداء والمخرجات الواقعية مقارنة بالأهداف المرسومة في وثائق المشروع.",
    descEn: "Accredited models and indicator matrices to measure tangible performance and field outcomes against baseline project objectives.",
    actionText: "عرض الدليل",
    actionTextEn: "View Guide",
    href: "/guides/monitoring-evaluation",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "item-12",
    category: "articles",
    badge: "مقال تحليلي",
    badgeEn: "Analytical Article",
    date: "30.08.2024",
    dateEn: "Aug 30, 2024",
    title: "التشبيك المؤسسي وبناء الشراكات بين القطاعين العام والمجتمعي",
    titleEn: "Institutional Networking and Cross-Sector Partnerships (Public & Civil)",
    desc: "تحليل معمق لآليات بناء الثقة وتوحيد الأهداف بين الأجهزة الحكومية والمبادرات الأهلية لتعظيم فاعلية الخدمات المشتركة.",
    descEn: "An in-depth analysis of trust-building mechanisms and goal alignment between government agencies and civic initiatives to optimize joint services.",
    actionText: "قراءة المقال",
    actionTextEn: "Read Article",
    href: "/guides/institutional-networking",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
  },
];

export default function KnowledgeLibrary({ lang = "ar" }: KnowledgeLibraryProps) {
  const isEn = lang === "en";
  const [activeTab, setActiveTab] = useState<string>("guides");
  const [visibleCount, setVisibleCount] = useState<number>(6);

  // تصنيفات التبويبات باللغتين
  const filterTabs = [
    { id: "guides", label: isEn ? "Manuals & Guides" : "الأدلة", count: 8 },
    { id: "policy", label: isEn ? "Policy Papers" : "أوراق السياسات", count: 6 },
    { id: "studies", label: isEn ? "Studies" : "الدراسات", count: 5 },
    { id: "articles", label: isEn ? "Articles" : "المقالات", count: 11 },
  ];

  // تصفية المواد بحسب التبويب النشط
  const filteredItems = allKnowledgeItems.filter((item) => item.category === activeTab);
  const displayItems = filteredItems.length > 0 ? filteredItems : allKnowledgeItems;
  const currentRender = displayItems.slice(0, visibleCount);

  return (
    <section
      dir={isEn ? "ltr" : "rtl"}
      className="relative w-full py-16 lg:py-24 bg-white text-start overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================
            1. ترويسة السكشن
            ======================================================== */}
        <div className="flex flex-col mb-10 text-start">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#014482] leading-tight mb-3 ${
              isEn ? "font-sans" : "font-scheherazade"
            }`}
          >
            {isEn ? "Knowledge Library" : "مكتبة المعرفة"}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm sm:text-base text-slate-500 font-sans leading-relaxed text-start font-normal max-w-3xl"
          >
            {isEn
              ? "Policy papers, specialized studies, and peer-reviewed analytical articles dedicated to developing governance and institutional initiatives."
              : "أوراق السياسات، الدراسات المتخصصة، والمقالات التحليلية المحكّمة الموجهة لتطوير الحوكمة والمبادرات."}
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
                  setVisibleCount(6);
                }}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-[13px] font-sans font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#1874C7] text-white shadow-sm shadow-[#1874C7]/20"
                    : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200/90 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[11px] px-1.5 py-0.5 rounded-full font-sans ${
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
                  {/* مساحة الصورة والبادج والتاريخ بنظام اتجاه تلقائي */}
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100">
                    <img
                      src={item.image}
                      alt={isEn ? item.titleEn : item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600 ease-out select-none"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                    {/* البادج والتاريخ مضبوطان تلقائياً بحسب اتجاه اللغة */}
                    <div className="absolute bottom-3 inset-x-3 flex items-center justify-between pointer-events-none">
                      <span className="bg-[#1874C7] text-white text-[11px] font-sans font-medium px-2.5 py-1 rounded-md shadow-xs">
                        {isEn ? item.badgeEn : item.badge}
                      </span>

                      <span className="text-[11px] font-sans text-white/95 drop-shadow-xs">
                        {isEn ? item.dateEn : item.date}
                      </span>
                    </div>
                  </div>

                  {/* نصوص الكرت */}
                  <div className="p-5 sm:p-6 pb-2 text-start">
                    <h3
                      className={`text-lg sm:text-[20px] font-bold text-[#014482] group-hover:text-[#1874C7] transition-colors leading-snug mb-2.5 line-clamp-2 min-h-[52px] ${
                        isEn ? "font-sans" : "font-scheherazade"
                      }`}
                    >
                      {isEn ? item.titleEn : item.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-sans leading-relaxed font-normal line-clamp-3 min-h-[54px]">
                      {isEn ? item.descEn : item.desc}
                    </p>
                  </div>
                </div>

                {/* رابط الإجراء: متوضع في نهاية الكرت مع سهم يتكيف اتجاهه */}
                <div className="p-5 sm:p-6 pt-3 border-t border-slate-100 flex items-center justify-end">
                  <Link
                    href={`/${lang}${item.href}`}
                    className="inline-flex items-center gap-1.5 text-xs font-sans font-medium text-[#1874C7] group-hover:text-[#014482] transition-colors"
                  >
                    <span>{isEn ? item.actionTextEn : item.actionText}</span>
                    <svg
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        isEn
                          ? "group-hover:translate-x-1.5"
                          : "group-hover:-translate-x-1.5"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={
                          isEn
                            ? "M14 5l7 7m0 0l-7 7m7-7H3"
                            : "M10 19l-7-7m0 0l7-7m-7 7h18"
                        }
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
              {isEn
                ? `Show More Knowledge Resources (${displayItems.length - visibleCount})`
                : `عرض المزيد من المواد المعرفية (${displayItems.length - visibleCount})`}
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
          className="bg-[#F5F6F7] border border-slate-200/80 rounded-2xl p-4 sm:p-5 flex items-center gap-3.5 text-start"
        >
          {/* أيقونة التوثيق والاعتماد */}
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

          {/* نص الحقوق المعتمد باللغتين */}
          <p className="text-xs sm:text-[13px] font-sans leading-relaxed text-slate-600">
            <span className={`font-bold text-[#014482] ${isEn ? "mr-1.5" : "ml-1.5"}`}>
              {isEn
                ? "Usage Rights & Scientific Attribution:"
                : "حقوق الاستخدام والإسناد العلمي:"}
            </span>
            {isEn
              ? "All published guides and policy papers are open for academic citation and institutional capacity building, provided proper credit is attributed to the author and source."
              : "كافة الأدلة وأوراق السياسات المنشورة متاحة للاستشهاد الأكاديمي والتطوير المؤسسي مع ضرورة الإشارة إلى المصدر والكاتب."}
          </p>
        </motion.div>

      </div>
    </section>
  );
}