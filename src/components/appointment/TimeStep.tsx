"use client";

import React from "react";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { useAppointment } from "./AppointmentContext";
import { cn } from "@/lib/utils";

const SESSIONS = [
  { name: "Morning", slots: ["09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM"] },
  { name: "Afternoon", slots: ["12:00 PM", "12:30 PM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM"] },
  { name: "Evening", slots: ["04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM", "06:00 PM"] },
];

export function TimeStep() {
  const { state, setTime } = useAppointment();

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-8"
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl font-heading font-bold mb-2">Select Time</h2>
        <p className="text-muted-foreground">
          {state.date && `For ${state.date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}`}
        </p>
      </div>

      <div className="space-y-6 max-h-[400px] overflow-y-auto pr-2 scrollbar-hide">
        {SESSIONS.map((session, sIdx) => (
          <div key={sIdx}>
            <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground flex items-center mb-4">
              <Clock className="w-4 h-4 mr-2" /> {session.name}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {session.slots.map((slot, iIdx) => {
                const isSelected = state.time === slot;
                // Randomly disable some slots for realism
                const isDisabled = (sIdx * 10 + iIdx) % 7 === 0;

                return (
                  <button
                    key={iIdx}
                    onClick={() => !isDisabled && setTime(slot)}
                    disabled={isDisabled}
                    className={cn(
                      "py-3 px-4 rounded-xl border text-sm font-medium transition-all duration-200 text-center",
                      isSelected 
                        ? "border-primary bg-primary text-primary-foreground shadow-md scale-105" 
                        : isDisabled 
                          ? "border-border/50 bg-muted/30 text-muted-foreground/40 cursor-not-allowed line-through" 
                          : "border-border bg-card text-foreground hover:border-primary/50 hover:bg-muted/30"
                    )}
                  >
                    {slot}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
