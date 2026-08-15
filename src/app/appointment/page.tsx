import React, { Suspense } from "react";
import Image from "next/image";
import { AppointmentProvider } from "@/components/appointment/AppointmentContext";
import { AppointmentFlow } from "@/components/appointment/AppointmentFlow";
import { RevealText } from "@/components/animations/RevealText";

export default function AppointmentPage() {
  return (
    <main className="flex flex-col min-h-screen">
      
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-secondary text-secondary-foreground overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2000&auto=format&fit=crop"
            alt="Hospital Reception"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 to-secondary" />
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <RevealText as="h1" className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold tracking-tight mb-6 text-white">
              Book an Appointment
            </RevealText>
            <RevealText as="p" delay={0.1} className="text-lg md:text-xl text-secondary-foreground/80 leading-relaxed">
              Schedule your visit with our specialists in just a few simple steps.
            </RevealText>
          </div>
        </div>
      </section>

      <section className="py-16 -mt-16 relative z-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <Suspense fallback={<div className="h-[600px] bg-background rounded-3xl border border-border flex items-center justify-center">Loading booking system...</div>}>
              <AppointmentProvider>
                <AppointmentFlow />
              </AppointmentProvider>
            </Suspense>
          </div>
        </div>
      </section>
      
    </main>
  );
}
