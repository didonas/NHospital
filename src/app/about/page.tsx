import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { hospitalConfig } from "@/config/hospital";
import { RevealText } from "@/components/animations/RevealText";
import { Button } from "@/components/ui/button";

const values = [
  "Patient-First Approach",
  "Clinical Excellence",
  "Compassionate Care",
  "Continuous Innovation",
  "Ethical Practices",
  "Holistic Healing"
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
                  Founded with a vision to redefine healthcare delivery, {hospitalConfig.name} has grown from a humble clinic to a multi-speciality medical institution. We believe that world-class healthcare should be accessible, transparent, and driven by empathy.
                </RevealText>
                <RevealText as="p" delay={0.2}>
                  Over the past {hospitalConfig.stats.experience} years, we have touched the lives of {hospitalConfig.stats.patients} patients. Our journey has been guided by a single, unwavering philosophy: placing the patient at the heart of everything we do.
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
                Why Patients Trust Us
              </RevealText>
              <RevealText as="p" delay={0.1} className="text-lg text-muted-foreground mb-8">
                Trust is built over time through consistent, high-quality care. Our multidisciplinary team of experts utilizes state-of-the-art technology to ensure accurate diagnoses and effective treatments.
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
