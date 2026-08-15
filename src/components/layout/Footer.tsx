"use client";

import React from "react";
import Link from "next/link";
import { hospitalConfig } from "@/config/hospital";
import { RevealText } from "@/components/animations/RevealText";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground pt-16 pb-24 lg:pb-12 border-t border-border/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-12">
          
          <div className="lg:col-span-2 flex flex-col space-y-6">
            <RevealText as="h2" className="font-heading font-bold text-4xl md:text-5xl leading-tight">
              {hospitalConfig.shortName} <br/> HOSPITAL
            </RevealText>
            <RevealText as="p" delay={0.1} className="text-secondary-foreground/70 max-w-sm text-lg">
              Exceptional care.<br />
              Every patient.<br />
              Every day.
            </RevealText>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="font-heading font-semibold text-lg text-secondary-foreground/90 mb-2">Hospital</h3>
            <FooterLink href="/about">About Us</FooterLink>
            <FooterLink href="/doctors">Doctors</FooterLink>
            <FooterLink href="/specialities">Specialities</FooterLink>
            <FooterLink href="/facilities">Facilities</FooterLink>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="font-heading font-semibold text-lg text-secondary-foreground/90 mb-2">Patients</h3>
            <FooterLink href="/appointment">Book Appointment</FooterLink>
            <FooterLink href="/contact">Contact</FooterLink>
            <FooterLink href={`tel:${hospitalConfig.contact.emergencyPhone.replace(/\D/g, '')}`} className="text-emergency">
              Emergency
            </FooterLink>
            <FooterLink href={hospitalConfig.contact.googleMapsUrl}>Directions</FooterLink>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="font-heading font-semibold text-lg text-secondary-foreground/90 mb-2">Contact</h3>
            <p className="text-secondary-foreground/70 text-sm hover:text-white transition-colors cursor-pointer">
              {hospitalConfig.contact.phone}
            </p>
            <p className="text-secondary-foreground/70 text-sm hover:text-white transition-colors cursor-pointer">
              {hospitalConfig.contact.email}
            </p>
            <p className="text-secondary-foreground/70 text-sm leading-relaxed mt-2">
              {hospitalConfig.contact.address}
            </p>
            
            <div className="flex space-x-4 pt-4">
              <SocialLink href={hospitalConfig.social.instagram}>Instagram</SocialLink>
              <SocialLink href={hospitalConfig.social.facebook}>Facebook</SocialLink>
              <SocialLink href={hospitalConfig.social.youtube}>YouTube</SocialLink>
            </div>
          </div>
          
        </div>

        <div className="pt-8 border-t border-secondary-foreground/10 flex flex-col md:flex-row items-center justify-between text-xs text-secondary-foreground/50">
          <p>© {currentYear} {hospitalConfig.name}. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <Link href={href} className={`text-sm text-secondary-foreground/70 hover:text-white hover:translate-x-1 transition-all inline-block w-fit ${className}`}>
      {children}
    </Link>
  );
}

function SocialLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-wider text-secondary-foreground/60 hover:text-white transition-colors">
      {children}
    </a>
  );
}
