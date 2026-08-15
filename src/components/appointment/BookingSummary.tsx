"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, User, Stethoscope, Phone, Mail } from "lucide-react";
import { useAppointment } from "./AppointmentContext";
import { Button } from "@/components/ui/button";
import { doctors } from "@/data/doctors";
import { specialities } from "@/data/specialities";
import { hospitalConfig } from "@/config/hospital";

export function BookingSummary() {
  const { state, nextStep, setStep } = useAppointment();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const doctor = doctors.find(d => d.slug === state.doctor);
  const speciality = specialities.find(s => s.slug === state.speciality);

  const handleConfirm = () => {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      nextStep();
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6 max-w-lg mx-auto"
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl font-heading font-bold mb-2">Review Appointment</h2>
        <p className="text-muted-foreground">Please confirm your appointment details.</p>
      </div>

      <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
        
        {/* Header */}
        <div className="bg-muted p-6 border-b border-border">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <Calendar className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-1">Date & Time</p>
              <h3 className="font-heading font-bold text-lg">
                {state.date?.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' })}
              </h3>
              <p className="text-primary font-medium">{state.time}</p>
            </div>
            <Button variant="ghost" size="sm" onClick={() => setStep(2)} className="ml-auto text-xs">Edit</Button>
          </div>
        </div>

        {/* Doctor & Speciality */}
        <div className="p-6 border-b border-border">
          <div className="flex items-start gap-4 mb-2">
            <Stethoscope className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-muted-foreground mb-1">Consultation with</p>
              <p className="font-heading font-bold text-foreground">{doctor?.name}</p>
              <p className="text-sm text-muted-foreground">{speciality?.name}</p>
            </div>
            <Button variant="ghost" size="sm" onClick={() => setStep(0)} className="ml-auto text-xs mt-1">Edit</Button>
          </div>
        </div>

        {/* Patient Details */}
        <div className="p-6">
          <div className="flex items-start gap-4">
            <User className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-sm text-muted-foreground mb-1">Patient Details</p>
              <p className="font-medium text-foreground">{state.patient.name}</p>
              
              <div className="grid grid-cols-2 gap-4 mt-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="w-4 h-4" /> {state.patient.phone}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground truncate">
                  <Mail className="w-4 h-4 shrink-0" /> <span className="truncate">{state.patient.email}</span>
                </div>
              </div>
            </div>
            <Button variant="ghost" size="sm" onClick={() => setStep(4)} className="ml-auto text-xs mt-1">Edit</Button>
          </div>
        </div>

      </div>

      <div className="pt-4 text-center text-sm text-muted-foreground">
        By confirming, you agree to {hospitalConfig.name}&apos;s terms of service and privacy policy.
      </div>

      <div className="pt-2">
        <Button 
          onClick={handleConfirm} 
          disabled={isSubmitting}
          size="lg" 
          className="w-full rounded-full h-14 text-base"
        >
          {isSubmitting ? "Confirming..." : "Confirm Appointment"}
        </Button>
      </div>
    </motion.div>
  );
}
