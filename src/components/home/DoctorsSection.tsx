"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { doctors } from "@/data/doctors";
import { DoctorCard } from "@/components/doctors/DoctorCard";
import { RevealText } from "@/components/animations/RevealText";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function DoctorsSection() {
  // Show only a few doctors on the homepage
  const featuredDoctors = doctors.slice(0, 3);

  return (
    <section className="py-24 bg-secondary text-secondary-foreground overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <RevealText as="h2" className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight text-white mb-4">
              Meet our specialists.
            </RevealText>
            <RevealText as="p" delay={0.1} className="text-secondary-foreground/70 max-w-xl text-lg">
              Our team of internationally trained medical experts brings years of experience and dedicated focus to patient care.
            </RevealText>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button className="rounded-full group bg-white text-secondary border-none hover:bg-primary hover:text-white transition-colors" asChild>
              <Link href="/doctors">
                View All Doctors
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredDoctors.map((doctor, i) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.15 + 0.2 }}
            >
              <DoctorCard doctor={doctor} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
