"use client";

import React from "react";
import { motion } from "framer-motion";
import { HeartPulse, Brain, Bone, Stethoscope, Baby, PersonStanding, Ear, Sparkles, CheckCircle2 } from "lucide-react";
import { specialities } from "@/data/specialities";
import { useAppointment } from "./AppointmentContext";
import { cn } from "@/lib/utils";

const IconMap: Record<string, React.ElementType> = {
  HeartPulse, Brain, Bone, Stethoscope, Baby, PersonStanding, Ear, Sparkles
};

export function SpecialityStep() {
  const { state, setSpeciality } = useAppointment();

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl font-heading font-bold mb-2">Select Speciality</h2>
        <p className="text-muted-foreground">Choose the department you need to consult.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {specialities.map((spec) => {
          const Icon = IconMap[spec.icon] || Stethoscope;
          const isSelected = state.speciality === spec.slug;

          return (
            <button
              key={spec.id}
              onClick={() => setSpeciality(spec.slug)}
              className={cn(
                "relative p-6 rounded-2xl border text-left transition-all duration-300 flex flex-col items-center justify-center gap-4 group",
                isSelected 
                  ? "border-primary bg-primary/5 shadow-md" 
                  : "border-border bg-card hover:border-primary/30 hover:bg-muted/50"
              )}
            >
              <div className={cn(
                "w-12 h-12 rounded-full flex items-center justify-center transition-colors",
                isSelected ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary group-hover:bg-primary/20"
              )}>
                <Icon className="w-6 h-6" />
              </div>
              <span className="font-medium text-center text-sm">{spec.name}</span>
              
              {isSelected && (
                <motion.div 
                  layoutId="selected-speciality" 
                  className="absolute top-3 right-3 text-primary"
                >
                  <CheckCircle2 className="w-5 h-5 fill-primary text-white" />
                </motion.div>
              )}
            </button>
          );
        })}
      </div>
    </motion.div>
  );
}
