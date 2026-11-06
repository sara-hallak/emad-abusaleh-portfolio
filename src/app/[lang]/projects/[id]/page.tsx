import React, { Suspense } from "react";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { ProjectDetailHero } from "@/components/projects/ProjectDetailHero";
import { getProjectById, getAllProjectIds } from "@/data/projectsData";
import { ProjectOverview } from "@/components/projects/ProjectOverview";
import { ProjectObjectivesAndRole } from "@/components/projects/ProjectObjectivesAndRole";
import { ProjectProcessAndEvidence } from "@/components/projects/ProjectProcessAndEvidence";

export function generateStaticParams() {
  const ids = getAllProjectIds();
  return ids.flatMap((id) => [
    { lang: "ar", id },
    { lang: "en", id },
  ]);
}

// 1. المكون الداخلي الذي يتعامل مع params بأمان داخل حدود Suspense
async function ProjectDetailContent({
  params,
}: {
  params: Promise<{ lang: string; id: string }>;
}) {
  const { lang, id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white flex flex-col justify-between" dir="rtl">
      <Navbar />

      <div className="flex-1">
        {/* السكشن الأول للهيرو مطابق للصورة تماماً */}
        <ProjectDetailHero project={project} />

         <ProjectOverview project={project} />

         <ProjectObjectivesAndRole project={project} />

          <ProjectProcessAndEvidence project={project} />
      </div>

      <ConsultationCTA />
      <Footer />
    </main>
  );
}

// 2. تصدير الصفحة محاطة بـ Suspense لحل خطأ Instant Navigation في Next.js
export default function ProjectDetailPage({
  params,
}: {
  params: Promise<{ lang: string; id: string }>;
}) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <ProjectDetailContent params={params} />
    </Suspense>
  );
}