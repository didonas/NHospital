import React from "react";
import Link from "next/link";
import { hospitalConfig } from "@/config/hospital";
import { RevealText } from "@/components/animations/RevealText";
import { ShieldCheck, CheckCircle2, UserCheck, AlertCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: `Patient Charter & Rights | ${hospitalConfig.name}`,
  description: "Charter of Patient Rights and Responsibilities at Jusst Hospital in adherence to National Medical Commission (NMC) guidelines and Ministry of Health & Family Welfare regulations."
};

const patientRights = [
  {
    title: "Right to Information & Medical Records",
    description: "Every patient has the right to receive relevant, understandable information regarding their clinical diagnosis, proposed investigations, treatment options, potential risks, and prognosis. Patients are entitled to copies of their medical summary, discharge records, and diagnostic reports upon formal request."
  },
  {
    title: "Right to Know Care Provider Credentials",
    description: "Patients have the right to know the identity, recognized qualifications, and Medical Council Registration Number of the Registered Medical Practitioner (RMP) providing consultation, surgery, or procedural care."
  },
  {
    title: "Right to Informed Consent",
    description: "Informed written consent must be obtained prior to any surgical operation, invasive diagnostic procedure, general anaesthesia, or blood transfusion, following thorough clinical counseling."
  },
  {
    title: "Right to Confidentiality & Human Dignity",
    description: "All patient examinations, clinical consultations, and personal health data are held in strict medical confidence. Care is administered with dignity, privacy, and without discrimination based on gender, religion, caste, or socio-economic background."
  },
  {
    title: "Right to Transparent Billing & Estimates",
    description: "Patients have the right to receive itemized billing, scheduled fee tariffs, and reasonable cost estimates prior to undergoing elective procedures or inpatient admission."
  },
  {
    title: "Right to Second Opinion",
    description: "Patients and their primary caregivers have the full liberty to seek a second clinical opinion from another qualified specialist without fear of prejudice to their ongoing care."
  },
  {
    title: "Right to Emergency Medical Care",
    description: "In acute medical and surgical emergencies, immediate stabilization and life-saving resuscitation care is initiated promptly by our emergency department in accordance with national statutory mandates."
  },
  {
    title: "Right to Redressal of Grievances",
    description: "Patients have the right to lodge complaints and feedback regarding clinical services or hospital administration through our dedicated Patient Grievance Cell."
  }
];

const patientResponsibilities = [
  "Provide complete, accurate medical histories including pre-existing illnesses, past hospitalizations, allergies, and current medications.",
  "Follow the agreed clinical treatment plan, medical prescriptions, and dietary advice given by attending practitioners.",
  "Respect hospital safety protocols, infection control guidelines, visiting hours, and silent zones.",
  "Treat healthcare professionals, nursing personnel, and fellow patients with courtesy and mutual respect.",
  "Ensure timely settlement of financial obligations and hospital billing as per institutional guidelines.",
  "Avoid self-medication, alteration of prescribed dosages, or unadvised discontinuation of medical therapies."
];

export default function PatientCharterPage() {
  return (
    <main className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/20 text-accent text-xs font-semibold uppercase tracking-wider mb-4 border border-accent/20">
              <ShieldCheck className="w-4 h-4" />
              NMC Guidelines Notification No. R-13014/01/2024-Ethics
            </div>
            <RevealText as="h1" className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              Patient Rights & Responsibilities Charter
            </RevealText>
            <RevealText as="p" delay={0.1} className="text-lg md:text-xl text-secondary-foreground/80 leading-relaxed max-w-2xl mx-auto">
              {hospitalConfig.name} is committed to ethical medical practice, patient autonomy, and transparent healthcare delivery in strict accordance with National Medical Commission (NMC) regulations.
            </RevealText>
          </div>
        </div>
      </section>

      {/* Rights Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">Part I</span>
            <h2 className="text-3xl font-heading font-bold text-foreground">
              Charter of Patient Rights
            </h2>
            <p className="text-muted-foreground mt-2">
              Statutory and ethical rights guaranteed to every individual receiving care at our medical establishment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {patientRights.map((right) => (
              <div key={right.title} className="p-6 md:p-8 rounded-3xl bg-card border border-border flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3 text-primary">
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                    <h3 className="font-heading font-bold text-lg text-foreground">{right.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {right.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Responsibilities Section */}
          <div className="mt-20 pt-16 border-t border-border">
            <div className="mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">Part II</span>
              <h2 className="text-3xl font-heading font-bold text-foreground">
                Patient Responsibilities
              </h2>
              <p className="text-muted-foreground mt-2">
                Safe and effective medical outcomes depend on collaborative cooperation between patients, families, and healthcare teams.
              </p>
            </div>

            <div className="bg-muted/30 border border-border rounded-3xl p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {patientResponsibilities.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <UserCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground/80 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Grievance & Helpdesk Box */}
          <div className="mt-16 p-8 rounded-3xl bg-primary text-primary-foreground flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-accent" />
                <h3 className="text-xl font-heading font-bold">Patient Grievance Redressal Cell</h3>
              </div>
              <p className="text-sm text-primary-foreground/80 max-w-xl leading-relaxed">
                If you have queries, require assistance with your medical records, or wish to report a service grievance, contact our hospital helpdesk or grievance officer:
              </p>
              <p className="text-sm font-mono text-accent">
                {hospitalConfig.contact.grievanceEmail} | Helpline: {hospitalConfig.contact.phone}
              </p>
            </div>
            <div className="shrink-0 flex gap-3">
              <Button size="lg" variant="secondary" className="rounded-full font-bold" asChild>
                <Link href="/contact">
                  <Phone className="w-4 h-4 mr-2" />
                  Contact Helpdesk
                </Link>
              </Button>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
