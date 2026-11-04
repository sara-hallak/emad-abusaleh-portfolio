import React, { Suspense } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactContent } from "@/components/contact/ContactContent";

export function generateStaticParams() {
  return [{ lang: "ar" }, { lang: "en" }];
}

export default async function ContactPage({
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
          <ContactContent />
        </div>
        <Footer />
      </main>
    </Suspense>
  );
}