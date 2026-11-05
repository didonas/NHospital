"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CalendarPlus, ShieldCheck, ArrowRight, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DoctorProps {
  doctor: {
    slug: string;
    name: string;
    speciality: string;
    qualification: string;
    registrationNumber?: string;
    medicalCouncil?: string;
    experience: number;
    image: string;
  };
}

export function DoctorCard({ doctor }: DoctorProps) {
  return (
    <div className="rounded-3xl overflow-hidden bg-card border border-border/80 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full p-5 md:p-6 justify-between">
      {/* Top Credentials & Department Header */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-border/60">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary font-semibold text-xs uppercase tracking-wider rounded-full">
            {doctor.speciality}
          </span>
          {doctor.registrationNumber && (
            <span className="inline-flex items-center text-[11px] font-mono font-medium text-muted-foreground bg-muted/60 px-2.5 py-1 rounded-full border border-border/50">
              <ShieldCheck className="w-3.5 h-3.5 mr-1 text-primary" />
              {doctor.registrationNumber}
            </span>
          )}
        </div>

        {/* Doctor Identity Block */}
        <div className="flex items-center gap-4 mb-4">
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-primary/20 shrink-0 bg-muted/40">
            <Image
              src={doctor.image}
              alt={doctor.name}
              fill
              className="object-cover object-top"
              sizes="96px"
            />
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="text-lg sm:text-xl font-heading font-bold text-foreground leading-snug mb-1">
              {doctor.name}
            </h3>
            <p className="text-xs sm:text-sm text-foreground/80 font-medium leading-tight mb-1.5">
              {doctor.qualification}
            </p>
            {doctor.medicalCouncil && (
              <p className="text-[11px] text-muted-foreground truncate">
                {doctor.medicalCouncil}
              </p>
            )}
          </div>
        </div>

        {/* Clinical Experience & Statutory Status */}
        <div className="bg-muted/40 rounded-2xl p-3 mb-5 border border-border/40 space-y-1">
          <div className="flex items-center text-xs text-muted-foreground">
            <Award className="w-3.5 h-3.5 mr-1.5 text-primary shrink-0" />
            <span><strong className="text-foreground font-semibold">{doctor.experience}+ Years</strong> Clinical Practice</span>
          </div>
          <div className="text-[11px] text-muted-foreground pl-5">
            Registered Medical Practitioner (RMP)
          </div>
        </div>
      </div>

      {/* Directory Actions */}
      <div className="flex flex-row gap-2.5 pt-2">
        <Button 
          variant="outline" 
          className="flex-1 rounded-full text-xs sm:text-sm h-11 border-border hover:bg-muted font-medium" 
          asChild
        >
          <Link href={`/doctors/${doctor.slug}`}>
            Credentials
            <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
          </Link>
        </Button>
        <Button 
          className="flex-1 rounded-full text-xs sm:text-sm h-11 bg-primary text-primary-foreground hover:bg-primary/90 font-medium" 
          asChild
        >
          <Link href={`/appointment?doctor=${doctor.slug}&speciality=${doctor.speciality.toLowerCase()}`}>
            <CalendarPlus className="mr-1.5 w-3.5 h-3.5 shrink-0" />
            OPD Consult
          </Link>
        </Button>
      </div>
    </div>
  );
}
