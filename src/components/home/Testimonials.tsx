"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, FileText, Lock, CheckCircle2, HeartHandshake, PhoneCall, ArrowRight } from "lucide-react";
import { RevealText } from "@/components/animations/RevealText";
import { hospitalConfig } from "@/config/hospital";
import { Button } from "@/components/ui/button";

const charterPoints = [
  {
    icon: ShieldCheck,
    title: "Registered Medical Practitioners",
    description: "All attending consultants hold qualifications recognized by the National Medical Commission (NMC) and maintain active state council registrations."
  },
  {
    icon: FileText,
    title: "Informed Consent & Transparency",
    description: "Patients receive full, understandable clinical information regarding diagnosis, treatment plans, alternative choices, and transparent cost estimates."
  },
  {
    icon: Lock,
    title: "Patient Health Data Privacy",
    description: "Strict confidentiality of all patient consultations, diagnostic records, and medical histories adheres to national digital health standards."
  },
  {
    icon: CheckCircle2,
    title: "Evidence-Based Clinical Protocols",
    description: "Care pathways, prescription rationales, and laboratory investigations follow established evidence-based clinical practice guidelines."
  },
  {
    icon: HeartHandshake,
    title: "Patient Rights & Dignity",
    description: "Non-discriminatory, dignified treatment for all individuals with respect for patient autonomy, second opinion rights, and cultural sensitivities."
  },
  {
    icon: PhoneCall,
    title: "Patient Grievance & Support Cell",
    description: "Direct access to our hospital grievance redressal officer and helpdesk for prompt, transparent resolution of any patient concerns."
  }
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-muted/40 border-t border-border/40 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
              <ShieldCheck className="w-4 h-4" />
              NMC Regulatory & Ethical Governance
            </div>
            <RevealText as="h2" className="text-4xl md:text-5xl font-heading font-bold tracking-tight mb-4">
              Patient Care Standards & Charter
            </RevealText>
            <RevealText as="p" delay={0.1} className="text-muted-foreground text-lg leading-relaxed">
              At {hospitalConfig.name}, medical practice is rooted in transparency, patient safety, and full compliance with the National Medical Commission (NMC) Code of Medical Ethics.
            </RevealText>
          </div>
          
          <div className="shrink-0">
            <Button variant="outline" className="rounded-full bg-background border-border hover:bg-muted" asChild>
              <Link href="/patient-charter">
                View Full Patient Charter
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Governance & Charter Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {charterPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border/80 rounded-3xl p-7 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-3 text-foreground">
                    {point.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {point.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border/40 flex items-center text-xs text-primary font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 mr-1.5" />
                  <span>Standard of Practice</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Ethical Transparency Banner */}
        <div className="mt-12 p-6 md:p-8 rounded-3xl bg-secondary text-secondary-foreground flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h4 className="font-heading font-bold text-lg md:text-xl text-white mb-2">
              Commitment to Ethical Public Communication
            </h4>
            <p className="text-sm text-secondary-foreground/80 leading-relaxed">
              In accordance with NMC statutory guidelines, {hospitalConfig.name} does not publish commercial testimonials, solicit patients through incentives, or make unverified clinical claims. Healthcare decisions should always be grounded in clinical evaluations with a Registered Medical Practitioner.
            </p>
          </div>
          <div className="shrink-0">
            <Button className="rounded-full bg-white text-secondary hover:bg-white/90 font-semibold" asChild>
              <Link href="/contact">
                Contact Patient Helpdesk
              </Link>
            </Button>
          </div>
        </div>
        
      </div>
    </section>
  );
}
