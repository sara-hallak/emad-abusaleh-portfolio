import React, { Suspense } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { PartnersPageContent } from "@/components/partners/PartnersPageContent";

export function generateStaticParams() {
  return [{ lang: "ar" }, { lang: "en" }];
}

export default async function PartnersPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <main className="min-h-screen bg-[#FCFDFE] flex flex-col justify-between">
        <Navbar />
        <div className="flex-1">
          <PartnersPageContent />
          {/* كرت الحجز والاستشارة الموجود في أسفل الصورة تماماً */}
          <ConsultationCTA />
        </div>
        <Footer />
      </main>
    </Suspense>
  );
}