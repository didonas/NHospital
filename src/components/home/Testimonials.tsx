"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { RevealText } from "@/components/animations/RevealText";

export function Testimonials() {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  return (
    <section className="py-24 md:py-32 bg-muted/50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <RevealText as="h2" className="text-4xl md:text-5xl font-heading font-bold tracking-tight mb-4">
              Patient stories.
            </RevealText>
            <RevealText as="p" delay={0.1} className="text-muted-foreground text-lg">
              Read about the experiences of our patients.
              <span className="block mt-1 text-xs text-muted-foreground/50 italic">
                * Note: These are placeholder demo testimonials for preview purposes.
              </span>
            </RevealText>
          </div>
          
          <RevealText delay={0.2} className="hidden md:block text-sm text-muted-foreground font-medium uppercase tracking-widest">
            Drag to explore →
          </RevealText>
        </div>

        {/* Draggable Carousel */}
        <motion.div 
          ref={carousel} 
          className="cursor-grab active:cursor-grabbing overflow-hidden"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div 
            drag="x" 
            dragConstraints={{ right: 0, left: -width }}
            className="flex gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {testimonials.map((test) => (
              <motion.div 
                key={test.id} 
                className="min-w-[300px] md:min-w-[400px] lg:min-w-[450px] bg-background border border-border p-8 md:p-10 rounded-3xl shadow-sm flex-shrink-0"
              >
                <Quote className="text-primary/20 w-12 h-12 mb-6" />
                <p className="text-lg md:text-xl font-medium leading-relaxed text-foreground mb-8">
                  &quot;{test.content}&quot;
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <div>
                    <h4 className="font-bold font-heading text-foreground">{test.name}</h4>
                    <p className="text-sm text-muted-foreground">{test.role}</p>
                  </div>
                  <div className="flex text-accent">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        
      </div>
    </section>
  );
}
