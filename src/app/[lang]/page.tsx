import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WorkDomains } from "@/components/WorkDomains";
import { Testimonials } from "@/components/Testimonials";
import { CredibilityStats } from "@/components/CredibilityStats";
import { LatestUpdates } from "@/components/LatestUpdates";
import { PartnersMarquee } from "@/components/PartnersMarquee";
import { GuidesSection } from "@/components/GuidesSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { Footer } from "@/components/Footer";

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Testimonials />
        <WorkDomains />
        <CredibilityStats />
        <LatestUpdates />
        <PartnersMarquee />
        <GuidesSection />
        <ConsultationCTA />
      </main>
      <Footer />
    </div>
  );
}