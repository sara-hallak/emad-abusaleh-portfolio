"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { ProjectItem } from "@/data/projectsData";

interface ProjectProcessAndEvidenceProps {
  project?: ProjectItem | any;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const ProjectProcessAndEvidence: React.FC<ProjectProcessAndEvidenceProps> = ({ project }) => {
  // مراحل كيف تم العمل (الـ 4 خطوات)
  const processSteps = [
    {
      number: "01",
      title: "التشخيص الأولي وقراءة المشهد الميداني",
      desc: "استكشاف أصحاب المصلحة المباشرين وغير المباشرين، وتحليل التحديات والفرص المحيطة بالمبادرة وصياغة خارطة العلاقات المجتمعية.",
      deliverableBadge: "المخرج الإجرائي المعتمد",
      deliverableName: "المخرج: خارطة الفاعلين",
    },
    {
      number: "02",
      title: "ورش العمل الاستشارية وتحديد الأولويات",
      desc: "عقد جلسات تشاركية مكثفة لفرز التطلعات وصياغة الأهداف الاستراتيجية المشتركة وتوحيد المعايير بين الكتل المجتمعية.",
      deliverableBadge: "المخرج الإجرائي المعتمد",
      deliverableName: "المخرج: ميثاق التوافق",
    },
    {
      number: "03",
      title: "هندسة خطة العمل وأدوات المناصرة",
      desc: "بناء مصفوفة الرسائل الموجهة، وتحديد مسار الأنشطة، وتوزيع مسؤوليات الفرق الميدانية وتصميم آليات التواصل المجتمعي.",
      deliverableBadge: "المخرج الإجرائي المعتمد",
      deliverableName: "المخرج: المصفوفة التنفيذية",
    },
    {
      number: "04",
      title: "المواءمة التنفيذية وإطلاق مسار التنفيذ",
      desc: "تسليم وثيقة العمل الرسمية وتدريب منسقي المبادرة على آليات القياس والمتابعة الدورية لضمان ديمومة النتائج واستقرار العمل.",
      deliverableBadge: "المخرج الإجرائي المعتمد",
      deliverableName: "المخرج: التسليم والتدريب",
    },
  ];

  // كروت المخرجات والأدلة الثلاثة
  const evidenceCards = [
    {
      id: "ev-1",
      title: "وثيقة خطة العمل التنفيذية",
      desc: "الدليل التشغيلي المتكامل الذي يشتمل على جداول الأنشطة، وتوزيع المسؤوليات، ومؤشرات التحقق الميداني، ونماذج إدارة الوقت والموارد المخصصة للمبادرة.",
      image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "ev-2",
      title: "مصفوفة الرسائل وأدوات الخطاب",
      desc: "الدليل التشغيلي المتكامل الذي يشتمل على جداول الأنشطة، وتوزيع المسؤوليات، ومؤشرات التحقق الميداني، ونماذج إدارة الوقت والموارد المخصصة للمبادرة.",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "ev-3",
      title: "دليل إرشادي لمتابعة الأثر الميداني",
      desc: "الدليل التشغيلي المتكامل الذي يشتمل على جداول الأنشطة، وتوزيع المسؤوليات، ومؤشرات التحقق الميداني، ونماذج إدارة الوقت والموارد المخصصة للمبادرة.",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
    },
    {
    id: "evidence-4",
    title: "مؤشرات قياس الأثر والتقارير الختامية",
    desc: "لوحة نتائج رقمية ترصد المخرجات المحققة ومعدلات التوافق والامتثال.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    fileType: "PDF • 1.8 MB",
    downloadUrl: "#",
  },
  ];

  // ميزات شريط التحقق النهائي
  const checkpoints = [
    "خطة تنفيذية مجدولة وموثقة",
    "مصفوفة الرسائل التوعوية الموجهة",
    "أدوات التقييم الميداني الدورية",
    "دليل إرشادي مخصص لمنسقي الفرق",
  ];

  return (
    <section className="w-full py-10 md:py-16 bg-white" dir="rtl">
      <div className="max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* ========================================================
            1. سكشن: كيف تم العمل؟ (Process Steps)
           ======================================================== */}
        <div className="mb-14 sm:mb-20">
          
          {/* عنوان السكشن */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="text-right mb-6 sm:mb-8"
          >
            <h2 className="font-scheherazade text-3xl sm:text-4xl font-bold text-[#014482]">
              كيف تم العمل؟
            </h2>
          </motion.div>

          {/* الخطوات الأربعة الأفقية */}
          <div className="flex flex-col gap-4 sm:gap-5">
            {processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="group relative bg-white border border-slate-200/80 hover:border-slate-300 rounded-2xl p-5 sm:p-6 text-right shadow-2xs hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300 overflow-hidden flex flex-col lg:flex-row lg:items-center justify-between gap-5"
              >
                {/* خط أزرق علوي خفيف عند الهوفر */}
                <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-[#1874C7] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* المحتوى الأيمن: الرقم والعنوان والشرح */}
                <div className="flex items-start gap-4 sm:gap-5 flex-1">
                  {/* الرقم الأزرق الكبير في أقصى اليمين */}
                  <span className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#1874C7] font-sans shrink-0 leading-none pt-1">
                    {step.number}
                  </span>

                  {/* العنوان والشرح */}
                  <div className="flex-1">
                    <h3 className="font-scheherazade text-lg sm:text-xl font-bold text-[#014482] group-hover:text-[#1874C7] mb-1.5 transition-colors duration-200">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-slate-600 font-sans leading-relaxed font-normal">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* الصندوق الفضي على اليسار (المخرج الإجرائي المعتمد) */}
                <div className="bg-[#F5F6F7] rounded-xl p-3 sm:p-3.5 border-r-[3px] border-r-[#1874C7] w-full lg:w-56 shrink-0 text-right">
                  <span className="text-[10px] sm:text-[11px] font-sans font-medium text-[#1874C7] block mb-0.5">
                    {step.deliverableBadge}
                  </span>
                  <span className="text-xs font-sans font-semibold text-slate-700 block">
                    {step.deliverableName}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* ========================================================
            2. سكشن: المخرجات والأدلة (Deliverables & Evidence)
           ======================================================== */}
        <div>
          
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-8">
  {evidenceCards.map((card, idx) => (
    <motion.div
      key={card.id || idx}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ y: -5, transition: { duration: 0.25 } }}
      className="group relative bg-white border border-slate-200/80 hover:border-slate-300 rounded-[20px] p-4 sm:p-5 text-right shadow-2xs hover:shadow-xl hover:shadow-blue-900/10 transition-all duration-300 overflow-hidden flex flex-col justify-between"
    >
      {/* الخط الأزرق العلوي عند الهوفر */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#1874C7] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* المحتوى العلوي: العنوان والشرح والمعاينة */}
      <div>
        {/* العنوان */}
        <h3 className="font-scheherazade text-base sm:text-lg font-bold text-[#1874C7] mb-1.5 leading-snug line-clamp-1">
          {card.title}
        </h3>

        {/* الشرح */}
        <p className="text-xs text-slate-500 font-sans leading-relaxed font-normal mb-3.5 line-clamp-2 min-h-[36px]">
          {card.desc}
        </p>

        {/* مساحة صورة الوثيقة الفعلية */}
        <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 border border-slate-100 shadow-inner mb-4">
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out select-none"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>

      {/* الشريط السفلي: نوع الملف وزر التحميل */}
      <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
        <span className="text-[11px] font-sans font-medium text-slate-400 shrink-0">
          {card.fileType || "PDF معتمد"}
        </span>

        {/* زر تحميل المخرج */}
        <a
          href={card.downloadUrl || "#"}
          download
          onClick={(e) => {
            if (!card.downloadUrl || card.downloadUrl === "#") {
              e.preventDefault();
              alert(`جارٍ تجهيز ملف "${card.title}" للتحميل...`);
            }
          }}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50/80 hover:bg-[#1874C7] text-[#1874C7] hover:text-white text-xs font-sans font-medium transition-all duration-200 group/btn"
          title="تحميل المخرج"
        >
          <svg
            className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-y-0.5 shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          <span>تحميل المخرج</span>
        </a>
      </div>
    </motion.div>
  ))}
</div>

          {/* شريط التحقق النهائي بالأسفل (Checkpoints Strip) */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="w-full bg-[#F8FAFC] border border-slate-200/70 rounded-2xl p-4 sm:p-5 shadow-2xs"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center sm:text-right">
              {checkpoints.map((feat, idx) => (
                <div key={idx} className="flex items-center justify-center sm:justify-start gap-2.5 text-xs font-semibold text-[#014482] font-sans">
                  <svg className="w-4 h-4 text-[#1874C7] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="truncate">{feat}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};