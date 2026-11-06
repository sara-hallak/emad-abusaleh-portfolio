import React, { Suspense } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { ProjectsHero } from "@/components/projects/ProjectsHero";
import { ProjectsList } from "@/components/projects/ProjectsList";

export function generateStaticParams() {
  return [{ lang: "ar" }, { lang: "en" }];
}

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <main className="min-h-screen bg-white flex flex-col justify-between">
        <Navbar />
        
        <div className="flex-1">
          {/* هيرو صفحة المشاريع */}
          <ProjectsHero />

          {/* سكشن فلاتر وقائمة المشاريع المتناوبة */}
          <ProjectsList />

          {/* كرت الاستشارة والحجز في الأسفل */}
          <ConsultationCTA />
        </div>

        <Footer />
      </main>
    </Suspense>
  );
}