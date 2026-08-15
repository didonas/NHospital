"use client";

import React from "react";
import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";
import { hospitalConfig } from "@/config/hospital";
import { Button } from "@/components/ui/button";
import { RevealText } from "@/components/animations/RevealText";

export function EmergencyCTA() {
  return (
    <section className="py-20 bg-background border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="bg-secondary text-secondary-foreground rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-emergency/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-2xl relative z-10 text-center md:text-left">
            <RevealText as="h2" className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tight mb-4 text-white">
              Need immediate medical assistance?
            </RevealText>
            <RevealText as="p" delay={0.1} className="text-secondary-foreground/80 text-lg">
              Our emergency and trauma center is fully equipped and available 24/7.
            </RevealText>
          </div>
          
          <motion.div 
            className="relative z-10 shrink-0"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button size="lg" variant="emergency" className="h-16 px-8 rounded-full text-lg shadow-lg shadow-emergency/20 group relative overflow-hidden" asChild>
              <a href={`tel:${hospitalConfig.contact.emergencyPhone.replace(/\D/g, "")}`}>
                <div className="absolute left-6 w-3 h-3 bg-white rounded-full animate-pulse" />
                <span className="ml-6 mr-2">Call Emergency</span>
                <PhoneCall className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
