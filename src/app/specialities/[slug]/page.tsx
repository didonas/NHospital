import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { specialities } from "@/data/specialities";
import { doctors } from "@/data/doctors";
import { RevealText } from "@/components/animations/RevealText";
import { Button } from "@/components/ui/button";
import { CalendarPlus } from "lucide-react";

export function generateStaticParams() {
  return specialities.map((spec) => ({
    slug: spec.slug,
  }));
}

export default async function SpecialityDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const speciality = specialities.find((s) => s.slug === resolvedParams.slug);
  
  if (!speciality) {
    notFound();
  }

  const relatedDoctors = doctors.filter(d => d.specialitySlug === speciality.slug);

  return (
    <main className="flex flex-col min-h-screen">
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={speciality.image}
            alt={speciality.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/40" />
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <RevealText as="h1" className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold tracking-tight text-white mb-6">
              {speciality.name}
            </RevealText>
            <RevealText as="p" delay={0.1} className="text-lg md:text-xl text-secondary-foreground/80 leading-relaxed mb-10">
              {speciality.shortDescription}
            </RevealText>
            <RevealText delay={0.2}>
              <Button size="lg" className="h-14 px-8 text-base rounded-full" asChild>
                <Link href={`/appointment?speciality=${speciality.slug}`}>
                  <CalendarPlus className="mr-2 w-5 h-5" />
                  Book Appointment
                </Link>
              </Button>
            </RevealText>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24">
            
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-heading font-bold mb-6">Overview</h2>
              <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
                <p>{speciality.longDescription}</p>
                {/* Demo extra content */}
                <p className="mt-4">
                  Our team of highly skilled specialists is dedicated to providing personalized care using the latest medical advancements. From preventative screening to complex surgical procedures, we ensure the best possible outcomes for our patients.
                </p>
                <h3 className="text-2xl font-heading font-bold mt-10 mb-4 text-foreground">Treatments & Services</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  {['Advanced Diagnostics', 'Minimally Invasive Surgery', 'Rehabilitation', 'Preventative Care', 'Chronic Disease Management', 'Emergency Care'].map((item, i) => (
                    <li key={i} className="flex items-center text-foreground">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-secondary text-secondary-foreground rounded-3xl p-8 sticky top-32">
                <h3 className="text-2xl font-heading font-bold mb-6">Our Specialists</h3>
                <div className="space-y-6">
                  {relatedDoctors.length > 0 ? (
                    relatedDoctors.map(doctor => (
                      <div key={doctor.id} className="flex items-center gap-4">
                        <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0">
                          <Image src={doctor.image} alt={doctor.name} fill className="object-cover object-top" />
                        </div>
                        <div>
                          <Link href={`/doctors/${doctor.slug}`} className="font-heading font-bold text-lg hover:text-primary transition-colors">
                            {doctor.name}
                          </Link>
                          <p className="text-secondary-foreground/70 text-sm">{doctor.qualification}</p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-secondary-foreground/70">No specialists found for this department currently.</p>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
