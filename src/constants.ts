import {
  Building2,
  Calculator,
  Map,
  FileCheck,
  HardHat,
  Hammer,
  ShieldCheck,
  Briefcase,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import {
  Service,
  Project,
  Testimonial,
  FAQItem,
  NavItem,
  ContactInfo,
} from "./types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Verification", href: "#verification" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const SERVICES: Service[] = [
  {
    id: "design",
    title: "Building Design",
    description:
      "Comprehensive architectural and structural designs tailored to your vision and regulatory standards.",
    icon: Building2,
  },
  {
    id: "estimate",
    title: "Building Estimate",
    description:
      "Accurate cost estimation and material quantity analysis (BOM) to keep your project within budget.",
    icon: Calculator,
  },
  {
    id: "survey",
    title: "Land Survey",
    description:
      "Precision land surveying for boundaries, topography, and legal subdivisions using modern equipment.",
    icon: Map,
  },
  {
    id: "registration",
    title: "Building & Land Registration",
    description:
      "Full assistance with municipal approvals, permits, and legal property registration processes.",
    icon: FileCheck,
  },
  {
    id: "construction",
    title: "Building Construction",
    description:
      "End-to-end construction execution with a focus on structural integrity and premium finishing.",
    icon: HardHat,
  },
  {
    id: "renovation",
    title: "Renovation & Conversion",
    description:
      "Transforming existing spaces with structural modifications and modern aesthetic upgrades.",
    icon: Hammer,
  },
  {
    id: "legitimacy",
    title: "Property Legitimacy",
    description:
      "Thorough verification of property documents and physical inspection to ensure a safe investment.",
    icon: ShieldCheck,
  },
  {
    id: "contractor",
    title: "General Contractor",
    description:
      "Reliable labor and material management for projects of all scales, ensuring timely delivery.",
    icon: Briefcase,
  },
];

export const PROJECTS: Project[] = [
  {
    id: "p1",
    title: "Azure Heights Residence",
    category: "Residential Construction",
    image: "/images/project1.jpg",
    description:
      "A G+1 modern residential villa with sustainable structural design.",
  },
  {
    id: "p2",
    title: "Metro Commercial Complex",
    category: "Commercial Design",
    image: "https://picsum.photos/id/188/800/600",
    description:
      "Structural reinforcement and architectural planning for a 5-story complex.",
  },
  {
    id: "p3",
    title: "Green Valley Survey",
    category: "Land Survey",
    image: "https://picsum.photos/id/10/800/600",
    description:
      "Extensive topographical survey for a 50-acre planned township.",
  },
  {
    id: "p4",
    title: "Heritage Renovation",
    category: "Renovation",
    image: "https://picsum.photos/id/214/800/600",
    description:
      "Restoring a 50-year-old colonial property while maintaining structural safety.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Robert Fox",
    role: "Real Estate Developer",
    content:
      "The level of detail in the structural estimates saved us nearly 15% on material costs. Highly recommended for large scale projects.",
    rating: 5,
  },
  {
    id: "t2",
    name: "Sarah Jenkins",
    role: "Homeowner",
    content:
      "We needed a property verification before buying our first home. The report was thorough and highlighted issues we never would have seen.",
    rating: 5,
  },
  {
    id: "t3",
    name: "Michael Chen",
    role: "Architect",
    content:
      "Professional, punctual, and technically sound. The collaboration on the Azure Heights project was seamless.",
    rating: 4,
  },
];

export const FAQS: FAQItem[] = [
  {
    id: "f1",
    question: "What documents do I need for a building permit?",
    answer:
      "Typically, you need proof of ownership, land survey maps, architectural drawings, and structural stability certificates. We handle the entire compilation and submission process for you.",
  },
  {
    id: "f2",
    question: "How long does a property verification take?",
    answer:
      "A standard verification takes 2-4 business days, depending on the complexity of the property history and municipal records availability.",
  },
  {
    id: "f3",
    question: "Do you provide supervision during construction?",
    answer:
      "Yes, our General Contractor service includes full-time or periodic site supervision to ensure the design is executed exactly as planned.",
  },
  {
    id: "f4",
    question: "Can you work with my existing architect?",
    answer:
      "Absolutely. We often collaborate with external architects to provide structural engineering, estimation, and execution support.",
  },
];

export const CONTACT_INFO: ContactInfo[] = [
  {
    icon: Phone,
    title: "Call Us",
    text: "+234 814 848 3418",
    href: "tel:+2348148483418",
  },
  {
    icon: MessageCircle,
    title: "Chat on WhatsApp",
    text: "+234 814 848 3418",
    href: "https://wa.me/+2348148483418?text=Hello%20there!",
  },
  {
    icon: Mail,
    title: "Email Us",
    text: "contact@easyBuild.com",
    href: "mailto:contact@easyBuild.com",
  },
  {
    icon: MapPin,
    title: "Visit Office",
    text: "53 Ekwema Cres, Ikenegbu, Owerri 460242, Imo State",
    href: "https://www.google.com/maps/place/Chicken+Republic+-+Ikenegbu,+Owerri/@5.4927666,7.0405777,18z/data=!3m1!4b1!4m6!3m5!1s0x104259d4e549a807:0xe6a871d588f98dc4!8m2!3d5.4927666!4d7.041273!16s%2Fg%2F11nxpk92xp?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D",
  },
];
