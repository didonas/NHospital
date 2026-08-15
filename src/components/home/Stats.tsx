"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { hospitalConfig } from "@/config/hospital";

export function Stats() {
  return (
    <section className="py-16 md:py-24 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center divide-x divide-secondary-foreground/10">
          <StatItem value={hospitalConfig.stats.doctors} label="Specialists" />
          <StatItem value={hospitalConfig.stats.experience} label="Years of Care" />
          <StatItem value={hospitalConfig.stats.patients} label="Patients Treated" />
          <StatItem value={hospitalConfig.stats.emergency} label="Emergency Support" />
        </div>
      </div>
    </section>
  );
}

function StatItem({ value, label }: { value: string; label: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  // Extract number and suffix (like "+" or "K+")
  const match = value.match(/^(\d+)(.*)$/);
  const numberValue = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : value;
  const isNumber = match !== null;

  const [displayValue, setDisplayValue] = useState(isNumber ? 0 : value);

  useEffect(() => {
    if (isInView && isNumber) {
      let startTime: number;
      const duration = 2000; // 2 seconds

      const animate = (time: number) => {
        if (!startTime) startTime = time;
        const progress = Math.min((time - startTime) / duration, 1);
        
        // Easing out cubic
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        
        setDisplayValue(Math.floor(easeProgress * numberValue));

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setDisplayValue(numberValue);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, isNumber, numberValue]);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-accent mb-2 tracking-tight">
          {isNumber ? `${displayValue}${suffix}` : value}
        </div>
        <div className="text-sm md:text-base text-secondary-foreground/80 font-medium tracking-wide uppercase">
          {label}
        </div>
      </motion.div>
    </div>
  );
}
