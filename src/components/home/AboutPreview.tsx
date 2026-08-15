"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { hospitalConfig } from "@/config/hospital";
import { Button } from "@/components/ui/button";
import { RevealText } from "@/components/animations/RevealText";

export function AboutPreview() {
  const imageRef = useRef(null);
  const isInView = useInView(imageRef, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 overflow-hidden bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1 flex flex-col items-start">
            <RevealText as="span" className="text-sm font-semibold tracking-wider uppercase text-primary mb-4">
              About Us
            </RevealText>
            
            <RevealText as="h2" className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight mb-6">
              Healthcare built around you.
            </RevealText>
            
            <RevealText as="p" delay={0.1} className="text-lg text-muted-foreground leading-relaxed mb-8">
              At {hospitalConfig.name}, we believe that true healing begins with compassion. Our state-of-the-art facilities and experienced specialists are dedicated to providing personalized care that addresses the unique needs of every patient who walks through our doors.
            </RevealText>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button variant="link" className="px-0 text-primary text-base group" asChild>
                <Link href="/about">
                  Discover Our Story
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Image Content with Mask Reveal */}
          <div className="order-1 lg:order-2" ref={imageRef}>
            <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] w-full max-w-md mx-auto lg:ml-auto lg:mr-0 rounded-2xl overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-secondary z-10 origin-bottom"
                initial={{ scaleY: 1 }}
                animate={isInView ? { scaleY: 0 } : { scaleY: 1 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              />
              <motion.div
                className="relative w-full h-full origin-center"
                initial={{ scale: 1.2 }}
                animate={isInView ? { scale: 1 } : { scale: 1.2 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2000&auto=format&fit=crop"
                  alt="Doctor with patient"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
