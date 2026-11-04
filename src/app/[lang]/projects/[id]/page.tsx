import React, { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Layers, Target, Clock } from "lucide-react";
import { PROJECTS_DATA } from "@/data/projectsData";

export function generateStaticParams() {
  return PROJECTS_DATA.flatMap((item) => [
    { lang: "ar", id: item.id },
    { lang: "en", id: item.id },
  ]);
}

async function ProjectDetailContent({
  params,
}: {
  params: Promise<{ lang: string; id: string }>;
}) {
  const { lang, id } = await params;
  const project = PROJECTS_DATA.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <article className="max-w-[860px] mx-auto px-4 sm:px-6 lg:px-8 text-start">
      {/* زر الرجوع */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
        <Link
          href={`/${lang}/services#related-projects`}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-primary-blue hover:text-dark-blue transition-colors"
        >
          <ArrowRight className="w-4 h-4" />
          <span>العودة لقسم المشاريع والخبرات</span>
        </Link>

        <span className="text-xs font-semibold text-primary-blue bg-[#EBF3FB] px-3 py-1 rounded-full">
          {project.tag}
        </span>
      </div>

      <h1 className="font-scheherazade text-3xl sm:text-4xl lg:text-[44px] font-bold text-dark-blue leading-tight mb-4">
        {project.title}
      </h1>

      {/* مؤشرات سريعة */}
      <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 font-sans mb-7">
        {project.duration && (
          <span className="flex items-center gap-1 bg-gray-50 px-3 py-1 rounded-lg">
            <Clock className="w-3.5 h-3.5 text-primary-blue" />
            {project.duration}
          </span>
        )}
        {project.beneficiaries && (
          <span className="flex items-center gap-1 bg-gray-50 px-3 py-1 rounded-lg">
            <Target className="w-3.5 h-3.5 text-primary-blue" />
            {project.beneficiaries}
          </span>
        )}
      </div>

      {/* الصورة الكبيرة */}
      <div className="relative w-full aspect-[16/9] rounded-[22px] overflow-hidden bg-slate-100 mb-8 shadow-sm border border-gray-100">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* التمهيد */}
      <div className="bg-[#F5F8FC] border-r-4 border-primary-blue p-5 sm:p-6 rounded-xl mb-8">
        <p className="font-scheherazade text-lg sm:text-[20px] text-dark-blue leading-relaxed font-semibold">
          {project.excerpt}
        </p>
      </div>

      {/* أبرز المخرجات الميدانية */}
      {project.keyOutputs && (
        <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl mb-8">
          <h3 className="font-scheherazade text-lg sm:text-xl font-bold text-dark-blue mb-3">
            أبرز المخرجات والنتائج:
          </h3>
          <ul className="space-y-2.5">
            {project.keyOutputs.map((output, index) => (
              <li key={index} className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-primary-blue mt-2 shrink-0" />
                <span className="font-scheherazade text-base text-gray-700 leading-normal">
                  {output}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* فقرات المحتوى */}
      <div className="space-y-5 font-scheherazade text-base sm:text-[18px] text-gray-800 leading-[1.85] mb-12">
        {project.content.map((p, index) => (
          <p key={index}>{p}</p>
        ))}
      </div>
    </article>
  );
}

export default function ProjectDetailPage({
  params,
}: {
  params: Promise<{ lang: string; id: string }>;
}) {
  return (
    <main className="min-h-screen bg-white py-10 sm:py-14 lg:py-16">
      <Suspense fallback={<div className="max-w-[860px] mx-auto p-8 text-center font-scheherazade text-gray-400">جاري تحميل تفاصيل الخبرة...</div>}>
        <ProjectDetailContent params={params} />
      </Suspense>
    </main>
  );
}