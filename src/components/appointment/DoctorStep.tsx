"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { doctors } from "@/data/doctors";
import { useAppointment } from "./AppointmentContext";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function DoctorStep() {
  const { state, setDoctor, setStep } = useAppointment();
  
  const filteredDoctors = state.speciality 
    ? doctors.filter(d => d.specialitySlug === state.speciality)
    : doctors;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div className="text-center mb-8 flex flex-col items-center">
        <h2 className="text-2xl font-heading font-bold mb-2">Select Doctor</h2>
        <p className="text-muted-foreground mb-4">Choose a specialist for your consultation.</p>
        
        {state.speciality && (
          <Button variant="outline" size="sm" onClick={() => setStep(0)} className="rounded-full h-8 text-xs">
            Change Speciality
          </Button>
        )}
      </div>

      {filteredDoctors.length === 0 ? (
        <div className="text-center p-8 bg-muted rounded-2xl border border-dashed border-border flex flex-col items-center">
          <AlertCircle className="w-10 h-10 text-muted-foreground mb-4" />
          <p className="text-muted-foreground font-medium">No doctors found for this speciality.</p>
          <Button variant="link" onClick={() => setStep(0)} className="mt-2 text-primary">
            Go back and select another
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredDoctors.map((doc) => {
            const isSelected = state.doctor === doc.slug;

            return (
              <button
                key={doc.id}
                onClick={() => setDoctor(doc.slug)}
                className={cn(
                  "relative p-4 rounded-2xl border text-left transition-all duration-300 flex items-center gap-4 group",
                  isSelected 
                    ? "border-primary bg-primary/5 shadow-md" 
                    : "border-border bg-card hover:border-primary/30 hover:bg-muted/50"
                )}
              >
                <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0">
                  <Image src={doc.image} alt={doc.name} fill className="object-cover object-top" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="font-heading font-bold text-base truncate">{doc.name}</h3>
                  <p className="text-muted-foreground text-xs truncate mb-1">{doc.qualification}</p>
                  <p className="text-accent text-xs font-medium">{doc.experience}+ Years Exp.</p>
                </div>
                
                {isSelected && (
                  <motion.div 
                    layoutId="selected-doctor" 
                    className="absolute top-1/2 -translate-y-1/2 right-4 text-primary"
                  >
                    <CheckCircle2 className="w-6 h-6 fill-primary text-white" />
                  </motion.div>
                )}
              </button>
            );
          })}
        </div>
      )}
    </motion.div>
  );
}
