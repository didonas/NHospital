"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { RevealText } from "@/components/animations/RevealText";
import { hospitalConfig } from "@/config/hospital";
import { ArrowRight, Clock, ShieldPlus, Activity } from "lucide-react";
import { cn } from "@/lib/utils";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    if (containerRef.current && imageRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.5,
        }
      });

      // Subtle parallax and scale down on scroll
      tl.to(imageRef.current, {
        y: 150,
        scale: 1.05,
        ease: "none",
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[95vh] flex items-center pt-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          ref={imageRef}
          className="relative w-full h-full origin-top"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* We use a high quality placeholder for demo purposes */}
          <Image
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2906&auto=format&fit=crop"
            alt="Modern Hospital Building"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/20" />
        </motion.div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="max-w-3xl">
          <div className="space-y-2 mb-6">
            <RevealText as="h1" className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-heading font-bold tracking-tight text-foreground leading-[1.05]">
              Advanced Care.
            </RevealText>
            <RevealText as="h1" delay={0.1} className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-heading font-bold tracking-tight text-primary leading-[1.05]">
              Human Compassion.
            </RevealText>
          </div>
          
          <RevealText as="p" delay={0.2} className="text-lg md:text-xl text-foreground/80 max-w-xl mb-10 leading-relaxed">
            {hospitalConfig.description}
          </RevealText>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <Button size="lg" className="h-14 px-8 text-base rounded-full group" asChild>
              <Link href="/appointment">
                Book Appointment
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-base rounded-full group bg-background/50 backdrop-blur-sm" asChild>
              <Link href="/specialities">
                Explore Specialities
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Floating Info Cards */}
      <div className="absolute bottom-8 right-4 md:right-8 lg:right-16 hidden md:flex flex-col gap-4 z-10">
        <FloatingCard 
          icon={<Clock className="text-emergency w-5 h-5" />} 
          title="24/7" 
          subtitle="Emergency Care" 
          delay={0.6}
        />
        <FloatingCard 
          icon={<ShieldPlus className="text-primary w-5 h-5" />} 
          title={hospitalConfig.stats.doctors} 
          subtitle="Experienced Specialists" 
          delay={0.7}
          className="ml-8"
        />
        <FloatingCard 
          icon={<Activity className="text-accent-foreground w-5 h-5" />} 
          title="Advanced" 
          subtitle="Diagnostic Care" 
          delay={0.8}
        />
      </div>
    </section>
  );
}

function FloatingCard({ icon, title, subtitle, delay, className }: { icon: React.ReactNode, title: string, subtitle: string, delay: number, className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20, y: 10 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "bg-background/90 backdrop-blur-md border border-border p-4 rounded-2xl shadow-xl flex items-center gap-4 min-w-[240px]",
        className
      )}
    >
      <div className="bg-muted w-12 h-12 rounded-full flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <p className="font-heading font-bold text-foreground text-lg leading-tight">{title}</p>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
      </div>
    </motion.div>
  );
}
