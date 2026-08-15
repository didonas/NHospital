"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RevealText } from "@/components/animations/RevealText";
import { Button } from "@/components/ui/button";

const mockFacilities = [
  {
    id: "fac-1",
    name: "Advanced Laboratory",
    desc: "Fully automated NABL accredited laboratory providing accurate results.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: "fac-2",
    name: "Digital Imaging",
    desc: "State-of-the-art radiology department with high-resolution MRI and CT.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: "fac-3",
    name: "Patient Rooms",
    desc: "Comfortable, infection-controlled suites designed for recovery.",
    image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=2000&auto=format&fit=crop"
  }
];

export function FacilitiesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Select all images for parallax
    const images = document.querySelectorAll(".facility-parallax-img");
    
    images.forEach((img) => {
      gsap.to(img, {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: img.parentElement,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-secondary text-secondary-foreground overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <RevealText as="h2" className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight text-white mb-6">
              Designed for better care.
            </RevealText>
            <RevealText as="p" delay={0.1} className="text-secondary-foreground/70 text-lg">
              Our hospital is equipped with cutting-edge medical technology and patient-centric infrastructure to ensure the highest standards of healthcare delivery.
            </RevealText>
          </div>
          <RevealText delay={0.2}>
            <Button variant="link" className="text-white hover:text-primary px-0 text-base group" asChild>
              <Link href="/facilities">
                View All Facilities
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </RevealText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Facility 1 - Large Feature */}
          <div className="md:col-span-12 lg:col-span-8 group cursor-pointer">
            <div className="relative aspect-video lg:aspect-[16/10] overflow-hidden rounded-2xl mb-4 bg-primary/5">
              <div className="absolute inset-0 bg-secondary/20 group-hover:bg-transparent transition-colors z-10 duration-500" />
              <div className="w-full h-[115%] -top-[7.5%] relative">
                <Image
                  src={mockFacilities[0].image}
                  alt={mockFacilities[0].name}
                  fill
                  className="object-cover facility-parallax-img transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
              </div>
            </div>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              {mockFacilities[0].name}
            </h3>
            
            <p className="text-secondary-foreground/70 text-lg leading-relaxed mb-8 max-w-3xl">
              Modern diagnostic support designed to help clinicians make faster and more informed decisions. The laboratory experience is built around efficient sample handling, dependable testing workflows, patient safety, and timely reporting.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-8 border-y border-white/10 py-6">
              {[
                "Clinical Biochemistry",
                "Haematology",
                "Pathology Testing",
                "Routine Diagnostic Screening"
              ].map((item) => (
                <div key={item} className="flex items-center text-secondary-foreground/80">
                  <CheckCircle2 className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                  <span className="font-medium text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <p className="text-sm text-secondary-foreground/50 max-w-sm leading-relaxed">
                Designed around accuracy, safe sample handling and efficient diagnostic workflows.
              </p>
              <Button variant="link" className="text-primary hover:text-white px-0 text-base group/btn whitespace-nowrap" asChild>
                <Link href="/facilities">
                  Explore Diagnostic Services
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="md:col-span-12 lg:col-span-4 flex flex-col md:flex-row lg:flex-col gap-6 lg:gap-8">
            
            {/* Facility 2 */}
            <div className="flex-1 group cursor-pointer">
              <div className="relative aspect-[4/3] lg:aspect-square overflow-hidden rounded-2xl mb-4 bg-primary/5">
                <div className="absolute inset-0 bg-secondary/20 group-hover:bg-transparent transition-colors z-10 duration-500" />
                <div className="w-full h-[115%] -top-[7.5%] relative">
                  <Image
                    src={mockFacilities[1].image}
                    alt={mockFacilities[1].name}
                    fill
                    className="object-cover facility-parallax-img transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </div>
              <h3 className="text-xl font-heading font-bold text-white mb-2">{mockFacilities[1].name}</h3>
              <p className="text-secondary-foreground/70 text-sm">{mockFacilities[1].desc}</p>
            </div>
            
            {/* Facility 3 */}
            <div className="flex-1 group cursor-pointer">
              <div className="relative aspect-[4/3] lg:aspect-[4/3] overflow-hidden rounded-2xl mb-4 bg-primary/5">
                <div className="absolute inset-0 bg-secondary/20 group-hover:bg-transparent transition-colors z-10 duration-500" />
                <div className="w-full h-[115%] -top-[7.5%] relative">
                  <Image
                    src={mockFacilities[2].image}
                    alt={mockFacilities[2].name}
                    fill
                    className="object-cover facility-parallax-img transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </div>
              <h3 className="text-xl font-heading font-bold text-white mb-2">{mockFacilities[2].name}</h3>
              <p className="text-secondary-foreground/70 text-sm">{mockFacilities[2].desc}</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
