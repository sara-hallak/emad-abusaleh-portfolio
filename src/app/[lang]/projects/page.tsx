import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { PROJECTS_DATA } from "@/data/projectsData";

export default async function AllProjectsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <main className="min-h-screen bg-white py-12 sm:py-16">
      <div className="max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-12 text-start">
        
        {/* زر العودة */}
        <div className="mb-6">
          <Link
            href={`/${lang}/services`}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-primary-blue hover:text-dark-blue transition-colors"
          >
            <ArrowRight className="w-4 h-4" />
            <span>العودة لصفحة الخدمات</span>
          </Link>
        </div>

        <h1 className="font-scheherazade text-3xl sm:text-4xl lg:text-[46px] font-bold text-dark-blue leading-tight mb-2">
          مستودع الخبرات والمشاريع
        </h1>
        <p className="font-scheherazade text-sm sm:text-base text-gray-500 mb-10 max-w-2xl">
          سجل حافل بالتدخلات الاستراتيجية، برامج التدريب المتخصصة، وتطوير الأدلة التشغيلية التي أحدثت أثراً ملموساً.
        </p>

        {/* شبكة المشاريع */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {PROJECTS_DATA.map((project) => (
            <Link
              key={project.id}
              href={`/${lang}/projects/${project.id}`}
              className="group bg-white rounded-[20px] border border-[#E5EAF0] overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-xl transition-all duration-300 block"
            >
              <div>
                <div className="w-full aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 flex flex-col text-start">
                  <div className="mb-2">
                    <span className="text-xs font-semibold text-primary-blue bg-[#EBF3FB] px-2.5 py-0.5 rounded-full font-scheherazade">
                      {project.tag}
                    </span>
                  </div>
                  <h3 className="font-scheherazade text-xl font-bold text-dark-blue group-hover:text-primary-blue mb-2">
                    {project.title}
                  </h3>
                  <p className="font-scheherazade text-xs text-gray-500 line-clamp-3">
                    {project.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-2 flex items-center justify-start border-t border-gray-50">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-blue">
                  <span>عرض التفاصيل</span>
                  <ArrowLeft className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}