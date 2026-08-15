import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { AboutPreview } from "@/components/home/AboutPreview";
import { Stats } from "@/components/home/Stats";
import { SpecialitiesSection } from "@/components/home/SpecialitiesSection";
import { DoctorsSection } from "@/components/home/DoctorsSection";
import { PatientJourney } from "@/components/home/PatientJourney";
import { FacilitiesSection } from "@/components/home/FacilitiesSection";
import { Testimonials } from "@/components/home/Testimonials";
import { EmergencyCTA } from "@/components/home/EmergencyCTA";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <TrustStrip />
      <AboutPreview />
      <Stats />
      <SpecialitiesSection />
      <DoctorsSection />
      <PatientJourney />
      <FacilitiesSection />
      <Testimonials />
      <EmergencyCTA />
    </main>
  );
}
