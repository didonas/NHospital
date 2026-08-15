import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { doctors } from "@/data/doctors";
import { RevealText } from "@/components/animations/RevealText";
import { Button } from "@/components/ui/button";
import { CalendarPlus, MapPin, Globe, Clock, Award, BookOpen } from "lucide-react";

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
              <RevealText as="span" className="inline-block px-4 py-1.5 bg-primary text-primary-foreground text-sm font-bold uppercase tracking-widest rounded-full mb-4">
                {doctor.speciality}
              </RevealText>
              
              <RevealText as="h1" className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-2">
                {doctor.name}
              </RevealText>
              
              <RevealText as="p" delay={0.1} className="text-xl text-secondary-foreground/80 mb-6">
                {doctor.qualification}
              </RevealText>
              
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-8">
                <div className="flex items-center text-secondary-foreground/70 bg-background/10 px-4 py-2 rounded-xl">
                  <Award className="w-5 h-5 mr-2 text-accent" />
                  <span>{doctor.experience}+ Years Experience</span>
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
                    Book Appointment
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
                  Biography
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {doctor.bio}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-heading font-bold mb-4 flex items-center">
                  <Award className="w-6 h-6 mr-3 text-primary" />
                  Areas of Expertise
                </h3>
                <div className="flex flex-wrap gap-3">
                  {doctor.expertise.map((item, idx) => (
                    <span key={idx} className="bg-muted text-foreground px-4 py-2 rounded-full font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-card border border-border rounded-3xl p-8 sticky top-32 shadow-sm">
                <h3 className="text-xl font-heading font-bold mb-6">Consultation Info</h3>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Timings</h4>
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
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
