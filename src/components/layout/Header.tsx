"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { hospitalConfig } from "@/config/hospital";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "./MobileMenu";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Specialities", href: "/specialities" },
  { name: "Doctors", href: "/doctors" },
  { name: "Facilities", href: "/facilities" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-background/80 backdrop-blur-md border-b border-border py-3 shadow-sm"
            : "bg-transparent py-6"
        )}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 z-50">
            <span className="font-heading font-bold text-2xl tracking-tight text-primary">
              {hospitalConfig.shortName}
            </span>
            <span className="font-heading font-medium text-2xl tracking-tight hidden sm:inline-block text-foreground">
              Hospital
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative group text-sm font-medium transition-colors"
              >
                <span
                  className={cn(
                    "relative z-10 transition-colors",
                    pathname === link.href ? "text-primary" : "text-foreground hover:text-primary"
                  )}
                >
                  {link.name}
                </span>
                {pathname === link.href && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <Button className="rounded-full px-6 transition-all hover:scale-105 active:scale-95" asChild>
              <Link href="/appointment">Book Appointment</Link>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden relative z-50 p-2 text-foreground focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <MobileMenu 
            links={navLinks} 
            onClose={() => setMobileMenuOpen(false)} 
          />
        )}
      </AnimatePresence>
    </>
  );
}
