import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { doctors } from "@/data/doctors";
import { RevealText } from "@/components/animations/RevealText";
import { Button } from "@/components/ui/button";
import { CalendarPlus, MapPin, Globe, Clock, Award, BookOpen, ShieldCheck, FileText } from "lucide-react";

export function generateStaticParams() {
  return doctors.map((doc) => ({
    slug: doc.slug,
  }));
}

export default async function DoctorProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const doctor = doctors.find((d) => d.slug === resolvedParams.slug);
  
  if (!doctor) {
    notFound();
  }

  return (
    <main className="flex flex-col min-h-screen bg-background">
      {/* Profile Header */}
      <section className="pt-32 pb-16 bg-secondary text-secondary-foreground overflow-hidden rounded-b-[3rem] md:rounded-b-[5rem]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
            
            {/* Image */}
            <div className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 shrink-0 relative rounded-full overflow-hidden border-4 border-background shadow-2xl">
              <Image 
                src={doctor.image} 
                alt={doctor.name} 
                fill 
                className="object-cover object-top"
                priority
              />
            </div>
            
            {/* Details */}
            <div className="text-center md:text-left flex-1">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-4">
                <span className="inline-block px-4 py-1.5 bg-primary text-primary-foreground text-sm font-bold uppercase tracking-widest rounded-full">
                  {doctor.speciality}
                </span>
                <span className="inline-flex items-center px-3 py-1 bg-background/15 border border-white/20 text-white text-xs font-medium rounded-full">
                  <ShieldCheck className="w-3.5 h-3.5 mr-1.5 text-accent" />
                  NMC Registered Medical Practitioner
                </span>
              </div>
              
              <RevealText as="h1" className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-2">
                {doctor.name}
              </RevealText>
              
              <RevealText as="p" delay={0.1} className="text-xl text-secondary-foreground/80 mb-4">
                {doctor.qualification}
              </RevealText>

              <div className="text-xs sm:text-sm text-secondary-foreground/70 font-mono mb-6 bg-background/10 py-1.5 px-3 rounded-lg inline-block">
                Registration No: <span className="font-semibold text-white">{doctor.registrationNumber}</span> ({doctor.medicalCouncil})
              </div>
              
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-8">
                <div className="flex items-center text-secondary-foreground/70 bg-background/10 px-4 py-2 rounded-xl">
                  <Award className="w-5 h-5 mr-2 text-accent" />
                  <span>{doctor.experience}+ Years Clinical Experience</span>
                </div>
                <div className="flex items-center text-secondary-foreground/70 bg-background/10 px-4 py-2 rounded-xl">
                  <Globe className="w-5 h-5 mr-2 text-accent" />
                  <span>{doctor.languages.join(", ")}</span>
                </div>
              </div>
              
              <RevealText delay={0.2}>
                <Button size="lg" className="rounded-full h-14 px-8 text-base w-full sm:w-auto" asChild>
                  <Link href={`/appointment?doctor=${doctor.slug}&speciality=${doctor.specialitySlug}`}>
                    <CalendarPlus className="w-5 h-5 mr-2" />
                    Book Consultation
                  </Link>
                </Button>
              </RevealText>
            </div>

          </div>
        </div>
      </section>

      {/* Profile Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24">
            
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h3 className="text-2xl font-heading font-bold mb-4 flex items-center">
                  <BookOpen className="w-6 h-6 mr-3 text-primary" />
                  Professional Profile & Clinical Background
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {doctor.bio}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-heading font-bold mb-4 flex items-center">
                  <Award className="w-6 h-6 mr-3 text-primary" />
                  Clinical Focus Areas
                </h3>
                <div className="flex flex-wrap gap-3">
                  {doctor.expertise.map((item, idx) => (
                    <span key={idx} className="bg-muted text-foreground px-4 py-2 rounded-full font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-2xl border border-border bg-muted/30">
                <h4 className="font-heading font-bold text-base mb-2 flex items-center">
                  <FileText className="w-4 h-4 mr-2 text-primary" />
                  Advisory on Medical Practice Transparency (NMC Guidelines)
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  In compliance with National Medical Commission (NMC) professional conduct regulations, clinical consultations are scheduled solely based on department availability and medical necessity. Patients are provided with complete treatment information, medication rationale, and informed consent prior to all therapeutic interventions.
                </p>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-card border border-border rounded-3xl p-8 sticky top-32 shadow-sm space-y-8">
                <div>
                  <h3 className="text-xl font-heading font-bold mb-6">Consultation Schedule</h3>
                  
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Clock className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">OPD Timings</h4>
                        <p className="text-muted-foreground text-sm">{doctor.timings}</p>
                        <p className="text-muted-foreground text-sm mt-1">{doctor.consultationDays.join(", ")}</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">Location</h4>
                        <p className="text-muted-foreground text-sm">Main Campus, Department of {doctor.speciality}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-border">
                  <h4 className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-3">
                    Statutory Medical Registration
                  </h4>
                  <div className="space-y-2 text-xs text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Registration No:</span>
                      <span className="font-mono font-medium text-foreground">{doctor.registrationNumber}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Medical Council:</span>
                      <span className="font-medium text-foreground">{doctor.medicalCouncil}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Qualifications:</span>
                      <span className="font-medium text-foreground text-right">{doctor.qualification}</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
