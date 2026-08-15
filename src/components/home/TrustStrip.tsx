"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const trustItems = [
  "24/7 Emergency",
  "Experienced Specialists",
  "Modern Diagnostics",
  "Patient-Centered Care"
];

export function TrustStrip() {
  return (
    <div className="bg-primary text-primary-foreground py-6 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:justify-between"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {trustItems.map((item) => (
            <motion.div 
              key={item} 
              className="flex items-center space-x-2"
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
              }}
            >
              <CheckCircle2 className="w-5 h-5 text-accent opacity-90" />
              <span className="font-medium text-sm md:text-base tracking-wide">{item}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
