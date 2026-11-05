import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { hospitalConfig } from "@/config/hospital";
import { RevealText } from "@/components/animations/RevealText";
import { Button } from "@/components/ui/button";

const values = [
  "Adherence to NMC Ethical Code",
  "Patient Autonomy & Informed Consent",
  "Evidence-Based Clinical Protocols",
  "Strict Health Data Confidentiality",
  "Non-Discriminatory Patient Care",
  "Accessible 24/7 Emergency Care"
];

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <RevealText as="h1" className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold tracking-tight mb-6">
              About {hospitalConfig.shortName} Hospital
            </RevealText>
            <RevealText as="p" delay={0.1} className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {hospitalConfig.tagline}
            </RevealText>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div>
              <RevealText as="h2" className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 text-white">
                Our Story
              </RevealText>
              <div className="space-y-4 text-secondary-foreground/80 text-lg leading-relaxed">
                <RevealText as="p" delay={0.1}>
                  Founded with a vision to provide structured healthcare delivery, {hospitalConfig.name} operates as a multi-speciality medical institution. We believe that quality, ethical healthcare should be accessible, transparent, and driven by clinical empathy.
                </RevealText>
                <RevealText as="p" delay={0.2}>
                  Over the past {hospitalConfig.stats.experience} years, our establishment has expanded to {hospitalConfig.stats.departments} dedicated clinical departments. Our practice is guided by an unwavering commitment: adhering to established clinical guidelines and placing patient safety at the center of medical care.
                </RevealText>
              </div>
            </div>
            
            <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-primary/10">
              <Image 
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2906&auto=format&fit=crop"
                alt="Hospital exterior"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
            
            <div className="order-2 md:order-1 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl bg-primary/10">
              <Image 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2906&auto=format&fit=crop"
                alt="Medical professionals discussing"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div className="order-1 md:order-2">
              <RevealText as="h2" className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Our Institutional Care Principles
              </RevealText>
              <RevealText as="p" delay={0.1} className="text-lg text-muted-foreground mb-8">
                Clinical care is delivered in accordance with established national healthcare guidelines. Our multidisciplinary team of medical practitioners utilizes modern diagnostic facilities to support timely clinical evaluation and treatment.
              </RevealText>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {values.map((value, idx) => (
                  <RevealText as="li" key={value} delay={0.2 + (idx * 0.1)} className="flex items-center space-x-3 text-foreground font-medium">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span>{value}</span>
                  </RevealText>
                ))}
              </ul>
            </div>
            
          </div>
        </div>
      </section>

      {/* Clinical Governance & Regulatory Compliance Section */}
      <section className="py-16 md:py-20 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">
                Statutory Framework
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                Clinical Governance & Regulatory Compliance
              </h2>
              <p className="text-muted-foreground mt-3 max-w-2xl mx-auto text-base">
                {hospitalConfig.name} operates in strict compliance with the Clinical Establishments Act and the National Medical Commission (NMC) professional conduct regulations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card border border-border p-6 rounded-2xl">
                <h3 className="font-heading font-bold text-lg mb-2 text-foreground">
                  Registration & Licensure
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Registered under Clinical Establishment Authority ({hospitalConfig.registration.clinicalEstablishmentNo}) and overseen by the {hospitalConfig.registration.supervisingAuthority}.
                </p>
              </div>

              <div className="bg-card border border-border p-6 rounded-2xl">
                <h3 className="font-heading font-bold text-lg mb-2 text-foreground">
                  Certified Practitioners Only
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Every doctor practising at {hospitalConfig.name} is a verified Registered Medical Practitioner (RMP) holding credentials approved by the National Medical Commission and respective State Councils.
                </p>
              </div>

              <div className="bg-card border border-border p-6 rounded-2xl">
                <h3 className="font-heading font-bold text-lg mb-2 text-foreground">
                  Patient Grievance Redressal
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  In compliance with statutory requirements, we maintain an active Patient Grievance Cell reachable at <span className="font-medium text-foreground">{hospitalConfig.contact.grievanceEmail}</span> for prompt resolution.
                </p>
              </div>

              <div className="bg-card border border-border p-6 rounded-2xl">
                <h3 className="font-heading font-bold text-lg mb-2 text-foreground">
                  Infection Control & Patient Safety
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Hospital infection surveillance, biomedical waste segregation, and surgical safety protocols follow national health authority benchmarks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <RevealText as="h2" className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Ready to experience better healthcare?
          </RevealText>
          <RevealText as="p" delay={0.1} className="text-primary-foreground/80 text-lg mb-10">
            Book a consultation with our specialists today and take the first step towards your well-being.
          </RevealText>
          <RevealText delay={0.2} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="rounded-full font-bold" asChild>
              <Link href="/appointment">
                Book Appointment
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full bg-transparent border-primary-foreground/30 hover:bg-primary-foreground/10 text-white" asChild>
              <Link href="/contact">
                Contact Us
              </Link>
            </Button>
          </RevealText>
        </div>
      </section>

    </main>
  );
}
