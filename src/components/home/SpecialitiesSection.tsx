"use client";

import React from "react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, HeartPulse, Brain, Bone, Stethoscope, Baby, PersonStanding, Ear, Sparkles } from "lucide-react";
import { specialities } from "@/data/specialities";
import { RevealText } from "@/components/animations/RevealText";

// Map string icon names to actual Lucide components
const IconMap: Record<string, React.ElementType> = {
  HeartPulse,
  Brain,
  Bone,
  Stethoscope,
  Baby,
  PersonStanding,
  Ear,
  Sparkles
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  }
};

export function SpecialitiesSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16">
          <RevealText as="h2" className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight">
            Expertise across <br className="hidden md:block" /> every stage of care.
          </RevealText>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {specialities.map((spec) => {
            const Icon = IconMap[spec.icon] || Stethoscope;
            return (
              <motion.div key={spec.id} variants={itemVariants} className="h-full">
                <Link href={`/specialities/${spec.slug}`} className="block h-full group">
                  <div className="h-full p-8 rounded-2xl border border-border bg-card hover:border-primary/50 hover:shadow-xl transition-all duration-300 flex flex-col group-hover:-translate-y-2">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300 group-hover:scale-110" />
                    </div>
                    
                    <h3 className="font-heading font-bold text-xl mb-3">{spec.name}</h3>
                    <p className="text-muted-foreground text-sm mb-8 flex-1 leading-relaxed">
                      {spec.shortDescription}
                    </p>
                    
                    <div className="mt-auto flex items-center text-primary font-medium text-sm group-hover:tracking-wide transition-all">
                      Explore 
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-2" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
