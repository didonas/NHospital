import React from "react";
import { doctors } from "@/data/doctors";
import { DoctorCard } from "@/components/doctors/DoctorCard";
import { RevealText } from "@/components/animations/RevealText";

export default function DoctorsPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <RevealText as="h1" className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold tracking-tight mb-6">
              Our Specialists
            </RevealText>
            <RevealText as="p" delay={0.1} className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Meet our team of internationally trained medical experts dedicated to your care.
            </RevealText>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {doctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
