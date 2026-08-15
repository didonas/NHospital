"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useAppointment } from "./AppointmentContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function PatientDetailsStep() {
  const { state, updatePatient, nextStep } = useAppointment();
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateAndNext = () => {
    const newErrors: Record<string, string> = {};
    if (!state.patient.name) newErrors.name = "Name is required";
    if (!state.patient.phone) newErrors.phone = "Phone is required";
    if (!state.patient.age) newErrors.age = "Age is required";
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      nextStep();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6 max-w-md mx-auto"
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl font-heading font-bold mb-2">Patient Details</h2>
        <p className="text-muted-foreground">Please provide your basic information.</p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Full Name *</label>
          <Input 
            value={state.patient.name} 
            onChange={e => {
              updatePatient({ name: e.target.value });
              if (errors.name) setErrors(prev => ({ ...prev, name: "" }));
            }} 
            placeholder="John Doe"
            className={errors.name ? "border-emergency" : ""}
          />
          {errors.name && <p className="text-emergency text-xs mt-1">{errors.name}</p>}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Phone *</label>
            <Input 
              type="tel"
              value={state.patient.phone} 
              onChange={e => {
                updatePatient({ phone: e.target.value });
                if (errors.phone) setErrors(prev => ({ ...prev, phone: "" }));
              }} 
              placeholder="+1 234 567 8900"
              className={errors.phone ? "border-emergency" : ""}
            />
            {errors.phone && <p className="text-emergency text-xs mt-1">{errors.phone}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email (Optional)</label>
            <Input 
              type="email"
              value={state.patient.email} 
              onChange={e => updatePatient({ email: e.target.value })} 
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Age *</label>
            <Input 
              type="number"
              value={state.patient.age} 
              onChange={e => {
                updatePatient({ age: e.target.value });
                if (errors.age) setErrors(prev => ({ ...prev, age: "" }));
              }} 
              placeholder="35"
              className={errors.age ? "border-emergency" : ""}
            />
            {errors.age && <p className="text-emergency text-xs mt-1">{errors.age}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Gender</label>
            <select 
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              value={state.patient.gender}
              onChange={e => updatePatient({ gender: e.target.value })}
            >
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Reason for visit (Optional)</label>
          <textarea 
            className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            value={state.patient.reason} 
            onChange={e => updatePatient({ reason: e.target.value })} 
            placeholder="Briefly describe your symptoms..."
          />
        </div>
      </div>

      <div className="pt-6">
        <Button onClick={validateAndNext} size="lg" className="w-full rounded-full h-12 text-base">
          Review Booking
        </Button>
      </div>
    </motion.div>
  );
}
