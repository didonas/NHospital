"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { useAppointment } from "./AppointmentContext";
import { cn } from "@/lib/utils";

export function DateStep() {
  const { state, setDate } = useAppointment();

  // Generate next 14 days
  const availableDates = useMemo(() => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 14; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      // Skip Sundays for demo
      if (d.getDay() !== 0) {
        dates.push(d);
      }
    }
    return dates;
  }, []);

  const isSameDate = (d1: Date, d2: Date | null) => {
    if (!d2) return false;
    return d1.getFullYear() === d2.getFullYear() && 
           d1.getMonth() === d2.getMonth() && 
           d1.getDate() === d2.getDate();
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl font-heading font-bold mb-2">Select Date</h2>
        <p className="text-muted-foreground">Choose a convenient date for your visit.</p>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 max-h-[300px] overflow-y-auto p-1 scrollbar-hide">
        {availableDates.map((date, i) => {
          const isSelected = isSameDate(date, state.date);
          const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
          const dayNumber = date.getDate();
          const monthName = date.toLocaleDateString('en-US', { month: 'short' });

          return (
            <button
              key={i}
              onClick={() => setDate(date)}
              className={cn(
                "flex flex-col items-center justify-center py-4 px-2 rounded-2xl border transition-all duration-200",
                isSelected 
                  ? "border-primary bg-primary text-primary-foreground shadow-md scale-105" 
                  : "border-border bg-card text-foreground hover:border-primary/50"
              )}
            >
              <span className={cn("text-xs uppercase tracking-widest mb-1", isSelected ? "text-primary-foreground/80" : "text-muted-foreground")}>
                {monthName}
              </span>
              <span className="text-2xl font-bold font-heading leading-none mb-1">
                {dayNumber}
              </span>
              <span className={cn("text-xs", isSelected ? "text-primary-foreground/90" : "text-muted-foreground")}>
                {dayName}
              </span>
            </button>
          );
        })}
      </div>
    </motion.div>
  );
}
