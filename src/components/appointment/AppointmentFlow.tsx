"use client";

import React, { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { useAppointment } from "./AppointmentContext";
import { SpecialityStep } from "./SpecialityStep";
import { DoctorStep } from "./DoctorStep";
import { DateStep } from "./DateStep";
import { TimeStep } from "./TimeStep";
import { PatientDetailsStep } from "./PatientDetailsStep";
import { BookingSummary } from "./BookingSummary";
import { BookingSuccess } from "./BookingSuccess";
import { Button } from "@/components/ui/button";

const steps = [
  "Speciality",
  "Doctor",
  "Date",
  "Time",
  "Details",
  "Summary"
];

export function AppointmentFlow() {
  const { state, prevStep, nextStep, setStep } = useAppointment();
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to top of container when step changes on mobile
  useEffect(() => {
    if (containerRef.current && window.innerWidth < 768) {
      const yOffset = -80; // Account for fixed header
      const y = containerRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }, [state.currentStep]);

  if (state.currentStep === 6) {
    return (
      <div className="py-12 px-4 md:px-8">
        <BookingSuccess />
      </div>
    );
  }

  const renderStep = () => {
    switch (state.currentStep) {
      case 0: return <SpecialityStep />;
      case 1: return <DoctorStep />;
      case 2: return <DateStep />;
      case 3: return <TimeStep />;
      case 4: return <PatientDetailsStep />;
      case 5: return <BookingSummary />;
      default: return null;
    }
  };

  const isNextDisabled = () => {
    switch (state.currentStep) {
      case 0: return !state.speciality;
      case 1: return !state.doctor;
      case 2: return !state.date;
      case 3: return !state.time;
      case 4: 
        return !state.patient.name || !state.patient.phone || !state.patient.age;
      default: return false;
    }
  };

  return (
    <div ref={containerRef} className="bg-background rounded-3xl border border-border overflow-hidden shadow-sm flex flex-col h-full min-h-[600px] max-h-[800px]">
      
      {/* Progress Header */}
      <div className="bg-muted/50 border-b border-border p-4 md:p-6 overflow-x-auto scrollbar-hide">
        <div className="flex items-center justify-between min-w-[500px]">
          {steps.map((label, idx) => {
            const isCompleted = idx < state.currentStep;
            const isCurrent = idx === state.currentStep;
            const isClickable = idx < state.currentStep || (idx === state.currentStep + 1 && !isNextDisabled());

            return (
              <React.Fragment key={label}>
                <button
                  onClick={() => isClickable && setStep(idx)}
                  disabled={!isClickable}
                  className={`flex flex-col items-center gap-2 group ${!isClickable ? 'cursor-not-allowed opacity-50' : ''}`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                    isCompleted ? 'bg-primary text-primary-foreground' :
                    isCurrent ? 'bg-primary border-2 border-primary text-primary-foreground' :
                    'bg-card border-2 border-border text-muted-foreground group-hover:border-primary/50'
                  }`}>
                    {isCompleted ? <Check className="w-4 h-4" /> : idx + 1}
                  </div>
                  <span className={`text-xs font-medium ${isCurrent ? 'text-foreground' : 'text-muted-foreground'}`}>
                    {label}
                  </span>
                </button>
                
                {idx < steps.length - 1 && (
                  <div className={`flex-1 h-[2px] mx-2 transition-colors ${isCompleted ? 'bg-primary' : 'bg-border'}`} />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Step Content */}
      <div className="p-6 md:p-8 flex-1 overflow-y-auto overflow-x-hidden relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={state.currentStep}
            className="h-full"
          >
            {renderStep()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer Navigation */}
      {state.currentStep < 5 && (
        <div className="bg-card border-t border-border p-4 md:p-6 flex items-center justify-between mt-auto z-10 relative">
          <Button
            variant="outline"
            onClick={prevStep}
            disabled={state.currentStep === 0}
            className="rounded-full"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          
          <Button
            onClick={nextStep}
            disabled={isNextDisabled()}
            className="rounded-full px-8"
          >
            Continue
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      )}
    </div>
  );
}
