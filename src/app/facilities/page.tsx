import React from "react";
import Image from "next/image";
import { RevealText } from "@/components/animations/RevealText";
import { facilities } from "@/data/facilities";

export default function FacilitiesPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <RevealText as="h1" className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold tracking-tight mb-6">
              World-Class Facilities
            </RevealText>
            <RevealText as="p" delay={0.1} className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Designed for healing, equipped with cutting-edge medical technology.
            </RevealText>
          </div>

          <div className="space-y-24">
            {facilities.map((fac, i) => {
              const isEven = i % 2 === 0;
              return (
                <div key={fac.id} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}>
                  <div className="flex-1 w-full">
                    <RevealText as="h2" className="text-3xl md:text-4xl font-heading font-bold mb-4">
                      {fac.name}
                    </RevealText>
                    <RevealText as="p" delay={0.1} className="text-lg text-muted-foreground leading-relaxed">
                      {fac.description}
                    </RevealText>
                  </div>
                  <div className="flex-1 w-full">
                    <div className="relative aspect-video lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-border">
                      <Image 
                        src={fac.image}
                        alt={fac.name}
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
