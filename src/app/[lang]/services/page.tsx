import React from "react";
import { Navbar } from "@/components/Navbar";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { Footer } from "@/components/Footer";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { WorkProcess } from "@/components/services/WorkProcess";
import { RelatedProjects } from "@/components/services/RelatedProjects";

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <Navbar />
      <main className="flex-1">
        <ServicesHero />
        <ServicesGrid />
        <WorkProcess />
        <RelatedProjects />
        <ConsultationCTA />
      </main>
      <Footer />
    </div>
  );
}