"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Calendar, MapPin, Download } from "lucide-react";
import { useAppointment } from "./AppointmentContext";
import { Button } from "@/components/ui/button";
import { hospitalConfig } from "@/config/hospital";
import { useRouter } from "next/navigation";

export function BookingSuccess() {
  const { state, resetBooking } = useAppointment();
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="max-w-md mx-auto text-center"
    >
      <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
        <CheckCircle2 className="w-12 h-12" />
      </div>
      
      <h2 className="text-3xl font-heading font-bold mb-4">Booking Confirmed!</h2>
      <p className="text-muted-foreground mb-8">
        Thank you, {state.patient.name.split(' ')[0]}. Your appointment has been successfully scheduled. We&apos;ve sent a confirmation email to {state.patient.email}.
      </p>

      <div className="bg-card border border-border p-6 rounded-2xl mb-8 text-left space-y-4 shadow-sm">
        <div className="flex gap-4">
          <Calendar className="w-5 h-5 text-primary shrink-0" />
          <div>
            <p className="font-medium">{state.date?.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}</p>
            <p className="text-muted-foreground text-sm">at {state.time}</p>
          </div>
        </div>
        <div className="flex gap-4">
          <MapPin className="w-5 h-5 text-primary shrink-0" />
          <div>
            <p className="font-medium">{hospitalConfig.name}</p>
            <p className="text-muted-foreground text-sm">{hospitalConfig.contact.address}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <Button variant="outline" className="rounded-full h-12 w-full group">
          <Download className="w-4 h-4 mr-2 text-muted-foreground group-hover:text-foreground transition-colors" />
          Download Details
        </Button>
        <Button onClick={() => {
          resetBooking();
          router.push("/");
        }} className="rounded-full h-12 w-full">
          Return to Home
        </Button>
      </div>
    </motion.div>
  );
}
