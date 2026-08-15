import React from "react";
import { hospitalConfig } from "@/config/hospital";
import { RevealText } from "@/components/animations/RevealText";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <RevealText as="h1" className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold tracking-tight mb-6">
              Get in touch
            </RevealText>
            <RevealText as="p" delay={0.1} className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              We&apos;re here to help you with your healthcare needs.
            </RevealText>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            
            {/* Contact Info */}
            <div className="space-y-12">
              <div className="space-y-8">
                <ContactItem 
                  icon={<Phone className="w-6 h-6 text-primary" />}
                  title="Phone"
                  content={
                    <>
                      <p>Main: {hospitalConfig.contact.phone}</p>
                      <p className="text-emergency font-medium">Emergency: {hospitalConfig.contact.emergencyPhone}</p>
                    </>
                  }
                />
                
                <ContactItem 
                  icon={<Mail className="w-6 h-6 text-primary" />}
                  title="Email"
                  content={<p>{hospitalConfig.contact.email}</p>}
                />

                <ContactItem 
                  icon={<MapPin className="w-6 h-6 text-primary" />}
                  title="Location"
                  content={<p>{hospitalConfig.contact.address}</p>}
                />

                <ContactItem 
                  icon={<Clock className="w-6 h-6 text-primary" />}
                  title="Working Hours"
                  content={<p>{hospitalConfig.contact.workingHours}</p>}
                />
              </div>
              
              <div>
                <Button size="lg" className="rounded-full w-full sm:w-auto" asChild>
                  <a href={hospitalConfig.contact.googleMapsUrl} target="_blank" rel="noopener noreferrer">
                    Get Directions
                  </a>
                </Button>
              </div>
            </div>

            {/* Simulated Map / Placeholder */}
            <div className="relative aspect-square md:aspect-video lg:aspect-square bg-muted rounded-3xl overflow-hidden border border-border flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
                <p className="text-muted-foreground font-medium">Premium Map Integration Area</p>
                <p className="text-sm text-muted-foreground/70 mt-2">Link to Google Maps via config: <br/> {hospitalConfig.contact.googleMapsUrl}</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}

function ContactItem({ icon, title, content }: { icon: React.ReactNode, title: string, content: React.ReactNode }) {
  return (
    <div className="flex gap-6">
      <div className="w-12 h-12 shrink-0 bg-primary/10 rounded-full flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h3 className="font-heading font-bold text-xl mb-2">{title}</h3>
        <div className="text-muted-foreground leading-relaxed">
          {content}
        </div>
      </div>
    </div>
  );
}
