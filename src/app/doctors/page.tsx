import React from "react";
import { doctors } from "@/data/doctors";
import { DoctorCard } from "@/components/doctors/DoctorCard";
import { RevealText } from "@/components/animations/RevealText";
import { ShieldCheck, Info } from "lucide-react";

export default function DoctorsPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
              <ShieldCheck className="w-4 h-4" />
              NMC-Compliant Medical Practitioner Directory
            </div>
            <RevealText as="h1" className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold tracking-tight mb-6">
              Our Medical Specialists
            </RevealText>
            <RevealText as="p" delay={0.1} className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Objective directory of Registered Medical Practitioners (RMPs). View statutory council registrations, recognized qualifications, departments, and OPD consultation schedules.
            </RevealText>
          </div>

          {/* NMC Regulatory Notice */}
          <div className="max-w-3xl mx-auto mb-16 p-4 md:p-5 rounded-2xl bg-muted/40 border border-border flex items-start gap-3.5 text-xs sm:text-sm text-muted-foreground">
            <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <p>
              In accordance with National Medical Commission (NMC) Guidelines (Clause 9.1), doctor profiles are provided as an objective patient-information directory containing names, NMC-recognized qualifications, clinical specialties, State Medical Council registrations, and outpatient OPD availability.
            </p>
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
