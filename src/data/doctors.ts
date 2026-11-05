export interface Doctor {
  id: string;
  slug: string;
  name: string;
  speciality: string;
  specialitySlug: string;
  qualification: string;
  registrationNumber: string;
  medicalCouncil: string;
  experience: number;
  languages: string[];
  image: string;
  consultationDays: string[];
  timings: string;
  bio: string;
  expertise: string[];
}

export const doctors: Doctor[] = [
  {
    id: "dr-arun-kumar",
    slug: "dr-arun-kumar",
    name: "Dr. Arun Kumar",
    speciality: "Cardiology",
    specialitySlug: "cardiology",
    qualification: "MBBS, MD (General Medicine), DM (Cardiology)",
    registrationNumber: "TNMC 52184",
    medicalCouncil: "Tamil Nadu Medical Council",
    experience: 18,
    languages: ["English", "Tamil", "Hindi"],
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop",
    consultationDays: ["Monday", "Wednesday", "Friday"],
    timings: "09:00 AM - 01:00 PM",
    bio: "Dr. Arun Kumar is a Registered Medical Practitioner with specialized qualifications in Cardiology. He has over 18 years of clinical hospital experience focusing on adult interventional cardiology, heart failure protocols, and clinical non-invasive diagnostic investigations.",
    expertise: ["Interventional Cardiology", "Heart Failure Management", "Echocardiography", "Preventive Cardiology"]
  },
  {
    id: "dr-saranya-devi",
    slug: "dr-saranya-devi",
    name: "Dr. Saranya Devi",
    speciality: "Neurology",
    specialitySlug: "neurology",
    qualification: "MBBS, MD (General Medicine), DM (Neurology)",
    registrationNumber: "TNMC 64920",
    medicalCouncil: "Tamil Nadu Medical Council",
    experience: 14,
    languages: ["English", "Tamil", "Malayalam"],
    image: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?q=80&w=800&auto=format&fit=crop",
    consultationDays: ["Tuesday", "Thursday", "Saturday"],
    timings: "10:00 AM - 04:00 PM",
    bio: "Dr. Saranya Devi is a certified Neurologist with specialized post-graduate training in clinical neurosciences. Her practice covers acute stroke protocols, epilepsy management, headache disorders, and peripheral neuromuscular evaluations.",
    expertise: ["Acute Stroke Protocol", "Clinical Epilepsy", "Neuromuscular Disorders", "Neuro-electrophysiology"]
  },
  {
    id: "dr-vijay-raj",
    slug: "dr-vijay-raj",
    name: "Dr. Vijay Raj",
    speciality: "Orthopaedics",
    specialitySlug: "orthopaedics",
    qualification: "MBBS, MS (Orthopaedics), DNB (Orthopaedics)",
    registrationNumber: "TNMC 45112",
    medicalCouncil: "Tamil Nadu Medical Council",
    experience: 22,
    languages: ["English", "Tamil"],
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop",
    consultationDays: ["Monday", "Tuesday", "Thursday"],
    timings: "09:00 AM - 02:00 PM",
    bio: "Dr. Vijay Raj is an experienced Orthopaedic surgeon trained in musculoskeletal trauma and joint reconstruction. He provides structured clinical evaluations and surgical care for degenerative joint diseases and sports-related musculoskeletal injuries.",
    expertise: ["Joint Reconstruction", "Musculoskeletal Trauma", "Sports Medicine", "Arthroscopic Evaluation"]
  },
  {
    id: "dr-meena-iyer",
    slug: "dr-meena-iyer",
    name: "Dr. Meena Iyer",
    speciality: "Paediatrics",
    specialitySlug: "paediatrics",
    qualification: "MBBS, MD (Paediatrics), DCH",
    registrationNumber: "TNMC 71205",
    medicalCouncil: "Tamil Nadu Medical Council",
    experience: 12,
    languages: ["English", "Tamil", "Hindi"],
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop",
    consultationDays: ["Monday", "Wednesday", "Friday", "Saturday"],
    timings: "10:00 AM - 05:00 PM",
    bio: "Dr. Meena Iyer is a qualified Paediatrician with extensive training in general child health, neonatal care, and developmental assessments. She oversees pediatric outpatient consultations, routine growth tracking, and universal childhood immunization programs.",
    expertise: ["Child Development", "Neonatal Health", "Immunization Protocols", "Paediatric Infections"]
  },
  {
    id: "dr-karthik-rajan",
    slug: "dr-karthik-rajan",
    name: "Dr. Karthik Rajan",
    speciality: "General Medicine",
    specialitySlug: "general-medicine",
    qualification: "MBBS, MD (General Medicine)",
    registrationNumber: "TNMC 58319",
    medicalCouncil: "Tamil Nadu Medical Council",
    experience: 15,
    languages: ["English", "Tamil"],
    image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?q=80&w=800&auto=format&fit=crop",
    consultationDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    timings: "08:00 AM - 04:00 PM",
    bio: "Dr. Karthik Rajan is a physician in Internal Medicine with comprehensive clinical practice in adult health, metabolic disorders, type 2 diabetes management, hypertension, and long-term preventive healthcare programs.",
    expertise: ["Diabetes Management", "Hypertension", "Preventive Health Screening", "Infectious Diseases"]
  },
  {
    id: "dr-anitha-mohan",
    slug: "dr-anitha-mohan",
    name: "Dr. Anitha Mohan",
    speciality: "Gynaecology",
    specialitySlug: "gynaecology",
    qualification: "MBBS, MS (Obstetrics & Gynaecology), DGO",
    registrationNumber: "TNMC 49830",
    medicalCouncil: "Tamil Nadu Medical Council",
    experience: 20,
    languages: ["English", "Tamil", "Telugu"],
    image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=800&auto=format&fit=crop",
    consultationDays: ["Tuesday", "Wednesday", "Friday", "Saturday"],
    timings: "10:00 AM - 02:00 PM",
    bio: "Dr. Anitha Mohan is an experienced specialist in Obstetrics and Gynaecology. She manages comprehensive maternal care, antenatal care protocols, high-risk obstetric monitoring, and standard gynaecological procedures.",
    expertise: ["Antenatal Care", "High-Risk Pregnancy", "Gynaecological Surgery", "Women's Health Screening"]
  }
];
