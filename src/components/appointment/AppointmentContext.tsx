"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

interface PatientDetails {
  name: string;
  phone: string;
  email: string;
  age: string;
  gender: string;
  reason: string;
}

interface AppointmentState {
  speciality: string | null;
  doctor: string | null;
  date: Date | null;
  time: string | null;
  patient: PatientDetails;
  currentStep: number;
}

interface AppointmentContextType {
  state: AppointmentState;
  setSpeciality: (val: string | null) => void;
  setDoctor: (val: string | null) => void;
  setDate: (val: Date | null) => void;
  setTime: (val: string | null) => void;
  updatePatient: (details: Partial<PatientDetails>) => void;
  nextStep: () => void;
  prevStep: () => void;
  setStep: (step: number) => void;
  resetBooking: () => void;
}

const initialState: AppointmentState = {
  speciality: null,
  doctor: null,
  date: null,
  time: null,
  patient: {
    name: "",
    phone: "",
    email: "",
    age: "",
    gender: "",
    reason: "",
  },
  currentStep: 0,
};

const AppointmentContext = createContext<AppointmentContextType | undefined>(undefined);

export function AppointmentProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AppointmentState>(initialState);
  const searchParams = useSearchParams();

  // Initialize from URL params if present
  useEffect(() => {
    const pSpeciality = searchParams.get("speciality");
    const pDoctor = searchParams.get("doctor");
    if (pSpeciality || pDoctor) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setState(prev => {
        const newState = { ...prev };
        if (pSpeciality) {
          newState.speciality = pSpeciality;
          newState.currentStep = 1; // move past speciality
        }
        if (pDoctor) {
          newState.doctor = pDoctor;
          newState.currentStep = 2; // move past doctor
        }
        return newState;
      });
    }
  }, [searchParams]);

  const setSpeciality = (speciality: string | null) => setState(prev => ({ ...prev, speciality, doctor: null }));
  const setDoctor = (doctor: string | null) => setState(prev => ({ ...prev, doctor }));
  const setDate = (date: Date | null) => setState(prev => ({ ...prev, date, time: null }));
  const setTime = (time: string | null) => setState(prev => ({ ...prev, time }));
  
  const updatePatient = (details: Partial<PatientDetails>) => 
    setState(prev => ({ ...prev, patient: { ...prev.patient, ...details } }));
    
  const nextStep = () => setState(prev => ({ ...prev, currentStep: Math.min(prev.currentStep + 1, 6) }));
  const prevStep = () => setState(prev => ({ ...prev, currentStep: Math.max(prev.currentStep - 1, 0) }));
  const setStep = (step: number) => setState(prev => ({ ...prev, currentStep: step }));
  
  const resetBooking = () => setState(initialState);

  return (
    <AppointmentContext.Provider value={{
      state,
      setSpeciality,
      setDoctor,
      setDate,
      setTime,
      updatePatient,
      nextStep,
      prevStep,
      setStep,
      resetBooking
    }}>
      {children}
    </AppointmentContext.Provider>
  );
}

export function useAppointment() {
  const context = useContext(AppointmentContext);
  if (context === undefined) {
    throw new Error("useAppointment must be used within an AppointmentProvider");
  }
  return context;
}
