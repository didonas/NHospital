import React from "react";
import Link from "next/link";
import { hospitalConfig } from "@/config/hospital";
import { RevealText } from "@/components/animations/RevealText";
import { FileText, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: `Terms of Service | ${hospitalConfig.name}`,
  description: `Institutional terms of service, appointment booking terms, and online portal conditions at ${hospitalConfig.name}.`
};

export default function TermsPage() {
  return (
    <main className="flex flex-col min-h-screen bg-background">
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/20 text-accent text-xs font-semibold uppercase tracking-wider mb-4 border border-accent/20">
            <FileText className="w-4 h-4" />
            Terms of Service
          </div>
          <RevealText as="h1" className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
            Institutional Terms of Service
          </RevealText>
          <RevealText as="p" delay={0.1} className="text-lg text-secondary-foreground/80 max-w-2xl mx-auto">
            Terms governing the use of the {hospitalConfig.name} digital appointment booking system, educational information, and patient communication portals.
          </RevealText>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl space-y-10 text-muted-foreground leading-relaxed">
          <div>
            <h2 className="text-2xl font-heading font-bold text-foreground mb-3">1. Nature of Website Information</h2>
            <p>
              All health articles, departmental overviews, doctor profiles, and service summaries published on this website are for general public educational and informational purposes only in accordance with National Medical Commission (NMC) regulations. None of the digital content constitutes individual clinical advice or formal medical diagnosis.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-heading font-bold text-foreground mb-3">2. Consultation & Appointments</h2>
            <p>
              Online appointment scheduling facilitates clinical consultation requests. Formal medical evaluation begins upon in-person registration and clinical examination by a qualified Registered Medical Practitioner (RMP). Appointment schedules may be adjusted due to urgent surgical or critical trauma emergencies.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-heading font-bold text-foreground mb-3">3. Medical Emergencies</h2>
            <p>
              This website is not intended for real-time emergency triage. In case of acute medical emergencies, patients or relatives should immediately report to our 24/7 Emergency Care Department or dial our Emergency Line at <span className="font-semibold text-emergency">{hospitalConfig.contact.emergencyPhone}</span>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-heading font-bold text-foreground mb-3">4. Clinical Establishment Compliance</h2>
            <p>
              {hospitalConfig.name} operates under statutory registration number {hospitalConfig.registration.clinicalEstablishmentNo}. All clinical procedures, diagnostic workflows, and emergency care adhere to applicable state and central healthcare laws.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-heading font-bold text-foreground mb-3">5. NMC Ethical Guidelines Adherence</h2>
            <p>
              In accordance with National Medical Commission Guidelines (Notification No. R-13014/01/2024-Ethics):
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-sm mt-2">
              <li>Doctor listings strictly function as an objective patient-information directory in accordance with Clause 9.1.</li>
              <li>No promotional patient testimonials, before-and-after surgical pictures, commercial discounts, or comparative claims (&ldquo;No. 1&rdquo;, &ldquo;Best&rdquo;) are published.</li>
              <li>AI-generated synthetic patient representations or unverified outcome claims are strictly prohibited on all hospital communications.</li>
            </ul>
          </div>

          <div className="pt-8 border-t border-border flex justify-between items-center">
            <Button variant="outline" className="rounded-full" asChild>
              <Link href="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Return to Home
              </Link>
            </Button>
            <Button className="rounded-full" asChild>
              <Link href="/contact">
                Contact Hospital
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
