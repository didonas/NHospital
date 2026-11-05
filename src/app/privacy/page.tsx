import React from "react";
import Link from "next/link";
import { hospitalConfig } from "@/config/hospital";
import { RevealText } from "@/components/animations/RevealText";
import { Lock, Shield, FileCheck, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: `Health Data Privacy & Confidentiality | ${hospitalConfig.name}`,
  description: "Privacy policy, patient health data confidentiality, and medical records protection guidelines at Jusst Hospital."
};

export default function PrivacyPage() {
  return (
    <main className="flex flex-col min-h-screen bg-background">
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/20 text-accent text-xs font-semibold uppercase tracking-wider mb-4 border border-accent/20">
            <Lock className="w-4 h-4" />
            Patient Health Information Confidentiality
          </div>
          <RevealText as="h1" className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
            Privacy & Medical Data Protection
          </RevealText>
          <RevealText as="p" delay={0.1} className="text-lg text-secondary-foreground/80 max-w-2xl mx-auto">
            Our comprehensive commitment to safeguarding patient clinical records, electronic health information, and personal confidentiality under Indian healthcare regulations.
          </RevealText>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl space-y-12">
          
          <div>
            <h2 className="text-2xl font-heading font-bold mb-4 flex items-center gap-2">
              <Shield className="w-6 h-6 text-primary" />
              1. Commitment to Medical Confidentiality
            </h2>
            <p className="text-muted-foreground leading-relaxed text-base">
              At {hospitalConfig.name}, medical confidentiality is a core ethical and legal obligation governed by the National Medical Commission (Professional Conduct, Etiquette and Ethics) Regulations and applicable digital data protection legislation. All communications between patients and Registered Medical Practitioners (RMPs) are strictly privileged.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-heading font-bold mb-4 flex items-center gap-2">
              <FileCheck className="w-6 h-6 text-primary" />
              2. Collection & Purpose of Clinical Information
            </h2>
            <p className="text-muted-foreground leading-relaxed text-base mb-4">
              We collect and maintain electronic and physical patient health information solely for legitimate clinical purposes, which include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground text-sm">
              <li>Comprehensive diagnostic evaluation, medical treatment planning, and surgical care.</li>
              <li>Maintaining accurate inpatient and outpatient health records as required by state health authorities.</li>
              <li>Emergency resuscitation and life-saving clinical interventions.</li>
              <li>Coordinating diagnostic laboratory reports, imaging, and prescription dispensing.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-heading font-bold mb-4 flex items-center gap-2">
              <Lock className="w-6 h-6 text-primary" />
              3. Prohibition on Promotional Media & Patient Data Protection
            </h2>
            <p className="text-muted-foreground leading-relaxed text-base mb-3">
              In strict accordance with the National Medical Commission Guidelines (No. R-13014/01/2024-Ethics, Sections 6 and 7):
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground text-sm">
              <li>Patient photographs, clinical images, treatment outcomes, or before-and-after depictions are strictly prohibited from being used for advertising or commercial solicitation, even with patient consent.</li>
              <li>Artificial Intelligence (AI) is never used to generate, modify, or simulate patient testimonials, images, voices, or synthetic medical endorsements.</li>
              <li>Processing, storage, and handling of digital patient health records strictly complies with the <strong>Digital Personal Data Protection Act, 2023</strong> and the <strong>Information Technology Act, 2000</strong>.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-heading font-bold mb-4 flex items-center gap-2">
              <FileCheck className="w-6 h-6 text-primary" />
              4. Patient Access to Health Records
            </h2>
            <p className="text-muted-foreground leading-relaxed text-base">
              Patients have the statutory right to request and receive certified copies of their clinical summary, investigation reports, and discharge documents. Formal requests can be submitted via the Medical Records Department (MRD) or by emailing <span className="font-medium text-foreground">{hospitalConfig.contact.email}</span>.
            </p>
          </div>

          <div className="pt-8 border-t border-border flex justify-between items-center">
            <Button variant="outline" className="rounded-full" asChild>
              <Link href="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </Button>
            <Button className="rounded-full" asChild>
              <Link href="/patient-charter">
                Read Patient Charter
              </Link>
            </Button>
          </div>

        </div>
      </section>
    </main>
  );
}
