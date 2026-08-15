"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarPlus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DoctorProps {
  doctor: {
    slug: string;
    name: string;
    speciality: string;
    qualification: string;
    experience: number;
    image: string;
  };
}

export function DoctorCard({ doctor }: DoctorProps) {
  return (
    <div className="group relative rounded-2xl overflow-hidden bg-card border border-border flex flex-col h-full">
      <div className="relative aspect-[3/4] overflow-hidden w-full">
        {/* Placeholder gradient just in case image doesn't load */}
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-secondary/10 z-10" />
        
        <Image
          src={doctor.image}
          alt={doctor.name}
          fill
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
          <div className="transform transition-transform duration-500 ease-out lg:translate-y-4 lg:group-hover:translate-y-0">
            <span className="inline-block px-3 py-1 bg-primary/90 backdrop-blur text-primary-foreground text-xs font-semibold uppercase tracking-wider rounded-full mb-3">
              {doctor.speciality}
            </span>
            <h3 className="text-2xl font-heading font-bold text-white mb-1">{doctor.name}</h3>
            <p className="text-white/80 text-sm mb-2">{doctor.qualification}</p>
            <p className="text-accent text-sm font-medium">{doctor.experience}+ Years Experience</p>
          </div>
        </div>
      </div>

      <div className="p-6 flex flex-col sm:flex-row gap-3 bg-card relative z-30 lg:-translate-y-2 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 transition-all duration-300">
        <Button variant="outline" className="flex-1 rounded-full group/btn" asChild>
          <Link href={`/doctors/${doctor.slug}`}>
            View Profile
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
          </Link>
        </Button>
        <Button className="flex-1 rounded-full group/btn" asChild>
          <Link href={`/appointment?doctor=${doctor.slug}&speciality=${doctor.speciality.toLowerCase()}`}>
            <CalendarPlus className="mr-2 w-4 h-4" />
            Book
          </Link>
        </Button>
      </div>
      
      {/* Mobile only visible buttons - these hide on lg to allow hover effect */}
      <div className="p-4 flex gap-2 bg-card lg:hidden border-t border-border">
        <Button variant="outline" size="sm" className="flex-1 rounded-full text-xs" asChild>
          <Link href={`/doctors/${doctor.slug}`}>Profile</Link>
        </Button>
        <Button size="sm" className="flex-1 rounded-full text-xs" asChild>
          <Link href={`/appointment?doctor=${doctor.slug}&speciality=${doctor.speciality.toLowerCase()}`}>Book</Link>
        </Button>
      </div>
    </div>
  );
}
