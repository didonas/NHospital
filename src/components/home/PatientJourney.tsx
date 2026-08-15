"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RevealText } from "@/components/animations/RevealText";

const journeySteps = [
  {
    num: "01",
    title: "Choose a Specialist",
    desc: "Browse our extensive roster of internationally trained medical professionals."
  },
  {
    num: "02",
    title: "Book Your Appointment",
    desc: "Select a convenient time slot using our seamless booking system."
  },
  {
    num: "03",
    title: "Visit the Hospital",
    desc: "Experience our modern, welcoming facilities designed for your comfort."
  },
  {
    num: "04",
    title: "Receive Personalised Care",
    desc: "Get an expert diagnosis and a tailored treatment plan."
  }
];

export function PatientJourney() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const fillLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const section = sectionRef.current;
    if (!section) return;

    const rawPrimary = getComputedStyle(document.documentElement)
      .getPropertyValue("--primary")
      .trim();

    const primaryColor =
      rawPrimary && /^[\d.-]/.test(rawPrimary)
        ? `hsl(${rawPrimary})`
        : rawPrimary;

    const ctx = gsap.context(() => {
      if (fillLineRef.current && lineRef.current) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top center+=100",
            end: "bottom center",
            scrub: 1,
          }
        });

        tl.to(fillLineRef.current, {
          height: "100%",
          ease: "none"
        });
      }

      const steps = section.querySelectorAll<HTMLElement>(".journey-step");

      steps.forEach((step) => {
        gsap.to(step, {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: step,
            start: "top center+=150",
            end: "center center",
            scrub: 1,
          }
        });
        
        const circle = step.querySelector<HTMLElement>(".step-circle");
        if (circle) {
          gsap.to(circle, {
            backgroundColor: primaryColor,
            borderColor: primaryColor,
            color: "#ffffff",
            scrollTrigger: {
              trigger: step,
              start: "top center+=150",
              end: "center center",
              scrub: 0.5,
            }
          });
        }
      });
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-background relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-20 text-center">
          <RevealText as="h2" className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight">
            Your care journey.
          </RevealText>
        </div>

        <div className="max-w-3xl mx-auto relative">
          
          {/* Connecting Line Background */}
          <div 
            ref={lineRef} 
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-border -translate-x-1/2 rounded-full" 
          />
          
          {/* Filling Line */}
          <div 
            ref={fillLineRef} 
            className="absolute left-6 md:left-1/2 top-0 h-0 w-1 bg-primary -translate-x-1/2 rounded-full z-10 shadow-[0_0_10px_rgba(var(--primary),0.5)]" 
          />

          <div className="space-y-24">
            {journeySteps.map((step, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={step.num} 
                  className={`journey-step relative flex items-center w-full opacity-30 ${isEven ? 'md:flex-row-reverse' : ''} ${!isEven ? 'translate-x-10 md:translate-x-0' : 'translate-x-10 md:-translate-x-10'}`}
                >
                  
                  {/* Step Content */}
                  <div className={`w-full pl-16 md:pl-0 md:w-1/2 ${isEven ? 'md:pl-16' : 'md:pr-16 text-left md:text-right'}`}>
                    <div className="mb-2 text-primary font-bold tracking-widest text-sm uppercase">Step {step.num}</div>
                    <h3 className="text-2xl md:text-3xl font-heading font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground text-lg">{step.desc}</p>
                  </div>
                  
                  {/* Step Circle */}
                  <div className={`absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-background border-4 border-border flex items-center justify-center z-20 step-circle transition-colors duration-300 font-bold font-heading text-muted-foreground`}>
                    {step.num}
                  </div>
                  
                </div>
              );
            })}
          </div>
          
        </div>
      </div>
    </section>
  );
}
