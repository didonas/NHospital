"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, type Variants } from "framer-motion";
import { hospitalConfig } from "@/config/hospital";
import { Button } from "@/components/ui/button";

interface MobileMenuProps {
  links: { name: string; href: string }[];
  onClose: () => void;
}

const menuVariants: Variants = {
  closed: {
    y: "-100%",
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
      when: "afterChildren",
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  },
  open: {
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
      when: "beforeChildren",
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  closed: { y: 20, opacity: 0 },
  open: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

export function MobileMenu({ links, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  useEffect(() => {
    // Lock body scroll
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-40 bg-background flex flex-col pt-24 px-6 pb-6"
      initial="closed"
      animate="open"
      exit="closed"
      variants={menuVariants}
    >
      <nav className="flex-1 flex flex-col space-y-6 overflow-y-auto">
        {links.map((link, index) => {
          const number = String(index + 1).padStart(2, '0');
          const isActive = pathname === link.href;
          
          return (
            <motion.div key={link.name} variants={itemVariants}>
              <Link
                href={link.href}
                onClick={onClose}
                className="group flex items-baseline space-x-4"
              >
                <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
                  {number}
                </span>
                <span 
                  className={`text-4xl font-heading font-bold transition-colors ${
                    isActive ? "text-primary" : "text-foreground group-hover:text-primary"
                  }`}
                >
                  {link.name}
                </span>
              </Link>
            </motion.div>
          );
        })}
      </nav>

      <motion.div 
        className="mt-auto pt-8 border-t border-border flex flex-col space-y-6"
        variants={itemVariants}
      >
        <Button className="w-full h-14 text-lg rounded-xl" asChild onClick={onClose}>
          <Link href="/appointment">Book Appointment</Link>
        </Button>
        
        <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
          <p className="font-medium text-foreground">Contact</p>
          <a href={`tel:${hospitalConfig.contact.phone.replace(/\D/g,'')}`} className="hover:text-primary transition-colors">
            {hospitalConfig.contact.phone}
          </a>
          <a href={`mailto:${hospitalConfig.contact.email}`} className="hover:text-primary transition-colors">
            {hospitalConfig.contact.email}
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}
