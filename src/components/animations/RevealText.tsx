"use client";

import { motion, useReducedMotion } from "framer-motion";
import React from "react";
import { cn } from "@/lib/utils";

interface RevealTextProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: React.ElementType;
}

export function RevealText({ children, delay = 0, className, as = "div" }: RevealTextProps) {
  const prefersReducedMotion = useReducedMotion();
  
  // Cast 'as' to a valid motion component key
  const MotionComponent = motion[as as keyof typeof motion] as React.ElementType;

  if (prefersReducedMotion) {
    return <MotionComponent className={className}>{children}</MotionComponent>;
  }

  return (
    <div className="overflow-hidden">
      <MotionComponent
        className={cn("origin-bottom", className)}
        initial={{ y: "100%", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1], // Custom easing for premium feel
          delay,
        }}
      >
        {children}
      </MotionComponent>
    </div>
  );
}
