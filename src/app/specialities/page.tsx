import React from "react";
import Link from "next/link";
import { ArrowRight, HeartPulse, Brain, Bone, Stethoscope, Baby, PersonStanding, Ear, Sparkles } from "lucide-react";
import { specialities } from "@/data/specialities";
import { RevealText } from "@/components/animations/RevealText";

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

export default function SpecialitiesPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <RevealText as="h1" className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold tracking-tight mb-6">
              Centres of Excellence
            </RevealText>
            <RevealText as="p" delay={0.1} className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Comprehensive care across a wide range of medical specialities.
            </RevealText>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {specialities.map((spec) => {
              const Icon = IconMap[spec.icon] || Stethoscope;
              return (
                <Link key={spec.id} href={`/specialities/${spec.slug}`} className="block h-full group">
                  <div className="h-full p-8 rounded-3xl border border-border bg-card hover:border-primary/50 hover:shadow-xl transition-all duration-300 flex flex-col group-hover:-translate-y-2">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <Icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300 group-hover:scale-110" />
                    </div>
                    
                    <h3 className="font-heading font-bold text-2xl mb-4">{spec.name}</h3>
                    <p className="text-muted-foreground mb-8 flex-1 leading-relaxed">
                      {spec.shortDescription}
                    </p>
                    
                    <div className="mt-auto flex items-center text-primary font-medium group-hover:tracking-wide transition-all">
                      Learn More
                      <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-2" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
