"use client";

import React from "react";
import Link from "next/link";
import { Phone, MessageCircle, MapPin, CalendarDays } from "lucide-react";
import { hospitalConfig } from "@/config/hospital";
import { cn } from "@/lib/utils";

export function MobileActionBar() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-background/90 backdrop-blur-md border-t border-border pb-safe">
      <div className="flex items-center justify-between p-2">
        <ActionItem 
          href={`tel:${hospitalConfig.contact.phone.replace(/\D/g, "")}`}
          icon={<Phone size={20} />} 
          label="Call" 
        />
        <ActionItem 
          href={`https://wa.me/${hospitalConfig.contact.whatsapp.replace(/\D/g, "")}`}
          icon={<MessageCircle size={20} />} 
          label="WhatsApp" 
        />
        <ActionItem 
          href={hospitalConfig.contact.googleMapsUrl}
          icon={<MapPin size={20} />} 
          label="Directions" 
        />
        <Link 
          href="/appointment"
          className="flex-1 flex flex-col items-center justify-center p-2 rounded-xl bg-primary text-primary-foreground ml-1"
        >
          <CalendarDays size={20} className="mb-1" />
          <span className="text-[10px] font-medium tracking-wide uppercase">Book</span>
        </Link>
      </div>
    </div>
  );
}

function ActionItem({ href, icon, label, className }: { href: string; icon: React.ReactNode; label: string; className?: string }) {
  return (
    <a 
      href={href} 
      className={cn("flex-1 flex flex-col items-center justify-center p-2 text-muted-foreground hover:text-foreground transition-colors", className)}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      <div className="mb-1">{icon}</div>
      <span className="text-[10px] font-medium tracking-wide uppercase">{label}</span>
    </a>
  );
}
