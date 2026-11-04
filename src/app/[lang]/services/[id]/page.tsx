import React, { Suspense } from "react";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { ServiceDetailHero } from "@/components/services/ServiceDetailHero";
import { ServiceTargetAudience } from "@/components/services/ServiceTargetAudience";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { Footer } from "@/components/Footer";
import { SERVICES_DETAIL_DATA } from "@/data/servicesDetailData";
import { ServiceScopeOfWork } from "@/components/services/ServiceScopeOfWork";
import { ServiceDeliverables } from "@/components/services/ServiceDeliverables";
import { ServiceRelatedExperience } from "@/components/services/ServiceRelatedExperience";

export function generateStaticParams() {
  const ids = ["advocacy", "training", "guides", "mentoring"];
  return ids.flatMap((id) => [
    { lang: "ar", id },
    { lang: "en", id },
  ]);
}

async function ServicePageContent({
  params,
}: {
  params: Promise<{ lang: string; id: string }>;
}) {
  const { id } = await params;
  const service = SERVICES_DETAIL_DATA[id];

  if (!service) {
    notFound();
  }

  return (
    <>
      {/* 1. السكشن الأول: هيرو الخدمة */}
      <ServiceDetailHero service={service} />
      
      {/* 2. السكشن الثاني: لمن تناسب هذه الخدمة؟ */}
      <ServiceTargetAudience service={service} />

      <ServiceScopeOfWork service={service} />

      <ServiceDeliverables service={service} />
      
      <ServiceRelatedExperience service={service} />

      {/* قسم التواصل */}
      <ConsultationCTA />
    </>
  );
}

export default function ServiceDetailPage({
  params,
}: {
  params: Promise<{ lang: string; id: string }>;
}) {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <Navbar />
      <main className="flex-1">
        <Suspense fallback={<div className="text-center p-12 font-scheherazade text-gray-400">جاري تحميل الخدمة...</div>}>
          <ServicePageContent params={params} />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}