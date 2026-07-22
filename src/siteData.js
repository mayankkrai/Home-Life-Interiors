export const siteConfig = {
  name: "Home Life Interiors",
  alternateName: "Home Life Interior",
  url: "https://homelifeinterior.in",
  phoneDisplay: "+91 87963 59302",
  phoneE164: "+918796359302",
  whatsappUrl:
    "https://wa.me/918796359302?text=Hi%2C%20I%20want%20to%20book%20an%20interior%20design%20consultation.",
  serviceAreas: [
    "Noida",
    "Greater Noida",
    "Ghaziabad",
    "Indirapuram",
    "Delhi NCR",
  ],
};

export const services = [
  {
    title: "Free quote",
    icon: "01",
    description:
      "Start with a clear conversation about your space, priorities, and interior requirements.",
  },
  {
    title: "False ceiling design",
    icon: "02",
    description:
      "Plan ceiling details that complement the room layout, lighting, and overall design language.",
  },
  {
    title: "Modular solutions",
    icon: "03",
    description:
      "Create practical modular kitchens and storage solutions around the way your household uses each space.",
  },
  {
    title: "Personal designer",
    icon: "04",
    description:
      "Work with a dedicated design point of contact from early planning through execution.",
  },
  {
    title: "Wall design, wallpaper and painting",
    icon: "05",
    description:
      "Choose coordinated wall finishes, retail wallpaper, optional home installation, colour choices, and painting.",
  },
  {
    title: "Terrace gardening",
    icon: "06",
    description:
      "Extend the design approach outdoors with thoughtfully planned terrace-garden spaces.",
  },
  {
    title: "Site measurement",
    icon: "07",
    description:
      "Begin design planning with on-site measurements and an understanding of the existing space.",
  },
  {
    title: "Electrical and plumbing work",
    icon: "08",
    description:
      "Coordinate essential electrical and plumbing requirements as part of the interior execution plan.",
  },
  {
    title: "Easy payments",
    icon: "09",
    description:
      "Discuss project stages and payment planning clearly before execution begins.",
  },
  {
    title: "Budget planning",
    icon: "10",
    description:
      "Align priorities, materials, and scope with an agreed project budget.",
  },
  {
    title: "On-site carpentry",
    icon: "11",
    description:
      "Plan and coordinate carpentry work for fitted furniture and custom interior details.",
  },
  {
    title: "Quality checks",
    icon: "12",
    description:
      "Review execution details throughout the project before the final handover.",
  },
];

export const projects = [
  {
    title: "Modern Luxury Living Room",
    type: "Living Room",
    location: "Noida",
    image: "/assets/interiors/living-room.jpg",
    alt: "Modern living room interior design project in Noida",
  },
  {
    title: "Warm Minimal Bedroom",
    type: "Bedroom",
    location: "Greater Noida",
    image: "/assets/interiors/project-bedroom.jpg",
    alt: "Warm minimal bedroom interior design project in Greater Noida",
  },
  {
    title: "Elegant Modular Kitchen",
    type: "Kitchen",
    location: "Ghaziabad",
    image: "/assets/interiors/project-kitchen.jpg",
    alt: "Elegant modular kitchen interior design project in Ghaziabad",
  },
];

export const processSteps = [
  "Consultation",
  "Site Visit",
  "3D Design",
  "Material Selection",
  "Execution",
  "Handover",
];

export const pageMetadata = {
  "/": {
    path: "/",
    title: "Interior Designers in Noida & Delhi NCR | Home Life Interiors",
    description:
      "Residential interior design, modular kitchens and turnkey execution across Noida, Greater Noida, Ghaziabad, Indirapuram and Delhi NCR.",
  },
  "/services": {
    path: "/services/",
    title: "Interior Design Services in Noida NCR | Home Life Interiors",
    description:
      "Explore residential interior design and turnkey solutions from Home Life Interiors, serving Noida, Greater Noida, Ghaziabad, Indirapuram and Delhi NCR.",
  },
  "/full-home-interiors": {
    path: "/full-home-interiors/",
    title: "Full Home Interior Design in Noida NCR | Home Life Interiors",
    description:
      "Plan complete apartment or villa interiors with design, budgeting, material selection and turnkey execution across Noida, Greater Noida and Ghaziabad.",
  },
  "/modular-kitchens": {
    path: "/modular-kitchens/",
    title: "Modular Kitchen Design in Noida NCR | Home Life Interiors",
    description:
      "Plan a practical modular kitchen around your layout, storage needs and finishes with coordinated design and execution across Noida NCR.",
  },
  "/room-interiors": {
    path: "/room-interiors/",
    title: "Living Room & Bedroom Interiors in Noida NCR | Home Life Interiors",
    description:
      "Plan living room and bedroom interiors with coordinated layouts, storage, lighting, finishes and execution across Noida NCR.",
  },
  "/wallpaper-installation": {
    path: "/wallpaper-installation/",
    title: "Wallpaper Supply & Installation in Noida NCR | Home Life Interiors",
    description:
      "Explore wallpaper for bedrooms, living rooms and feature walls, with retail supply and optional home installation across Noida, Greater Noida and Ghaziabad.",
  },
  "/projects": {
    path: "/projects/",
    title: "Interior Design Projects in Noida NCR | Home Life Interiors",
    description:
      "View living room, bedroom and modular kitchen projects by Home Life Interiors in Noida, Greater Noida and Ghaziabad, designed for modern living.",
  },
  "/about": {
    path: "/about/",
    title: "About Home Life Interiors | Interior Design in Noida NCR",
    description:
      "Learn how Home Life Interiors approaches residential interior design with personalized 3D consultation, turnkey execution, transparent pricing and quality checks.",
  },
  "/contact": {
    path: "/contact/",
    title: "Contact Home Life Interiors | Book a Free Consultation",
    description:
      "Contact Home Life Interiors for a free interior design consultation in Noida, Greater Noida, Ghaziabad, Indirapuram or Delhi NCR. Call +91 87963 59302.",
  },
};

export function normalizePath(pathname = "/") {
  const cleanPath = pathname.split("?")[0].split("#")[0];
  if (cleanPath === "/") return "/";
  return cleanPath.replace(/\/+$/, "") || "/";
}
