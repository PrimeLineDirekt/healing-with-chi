// ============================================
// Healing With Chi - Site Content
// All content as typed objects for easy updates
// ============================================

export const SITE_CONFIG = {
  name: "Healing With Chi",
  tagline: "Reflective Coaching and Healing",
  description:
    "Holistic coaching, bodywork, and energy healing in Mazunte, Mexico. Book your free 30-minute session with Chi.",
  url: "https://healingwithchi.com",
  locale: "en_US",
  whatsapp: {
    number: "+31618555674",
    displayNumber: "+31 6 18 555 674",
    message: "Hi Chi, I'd like to book a free 30-minute session.",
    link: "https://wa.me/31618555674?text=Hi%20Chi%2C%20I'd%20like%20to%20book%20a%20free%2030-minute%20session.",
  },
  email: "chihongyo@gmail.com",
  address: {
    street: "Calle Rinconcito, Cabanas El Agujon",
    postalCode: "70946",
    city: "Mazunte",
    state: "Oaxaca",
    country: "Mexico",
  },
  social: {
    instagram: "",
    facebook: "",
  },
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Coaching", href: "/coaching" },
  { label: "Bodywork", href: "/bodywork" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

// ============================================
// Services
// ============================================

export interface Service {
  id: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  href: string;
  icon: string;
}

export const SERVICES: Service[] = [
  {
    id: "coaching",
    title: "Holistic Coaching",
    subtitle: "4 Pillars Approach",
    shortDescription:
      "Guided self-discovery through behavior, nutrition, physical movement, and recovery. I will not help you - I will guide you to help yourself.",
    href: "/coaching",
    icon: "compass",
  },
  {
    id: "bodywork",
    title: "Bodywork & Massage",
    subtitle: "East Meets West",
    shortDescription:
      "Shiatsu, Reiki, Sports Massage, and Thai Massage. Integrating Eastern energy work with Western techniques for deep, lasting relief.",
    href: "/bodywork",
    icon: "hands",
  },
  {
    id: "healing",
    title: "Energy Healing",
    subtitle: "Opening Channels",
    shortDescription:
      "Process-oriented energy work that opens blocked channels and restores natural flow. Not an instant cure - a guided journey of transformation.",
    href: "/bodywork#energy-healing",
    icon: "energy",
  },
];

// ============================================
// Coaching Detail
// ============================================

export interface Pillar {
  title: string;
  description: string;
  icon: string;
}

export const COACHING_PILLARS: Pillar[] = [
  {
    title: "Behavior",
    description:
      "Understanding your patterns, triggers, and responses. We explore what drives your actions and how to create conscious change.",
    icon: "brain",
  },
  {
    title: "Nutrition",
    description:
      "What you feed your body directly affects your mind. We look at how food, substances, and habits shape your physical and emotional state.",
    icon: "leaf",
  },
  {
    title: "Physical Movement",
    description:
      "Your body stores emotion. Through movement, breathwork, and awareness, you learn to release what is stuck and reconnect with yourself.",
    icon: "movement",
  },
  {
    title: "Recovery",
    description:
      "Rest is not weakness. Recovery is where transformation happens. We create space for healing, integration, and sustainable growth.",
    icon: "moon",
  },
];

export const COACHING_CONTENT = {
  headline: "Holistic Coaching",
  subheadline: "I will not help you. I will guide you.",
  intro:
    "My coaching is based on the psycho-bio-social-environment model. This means I look at you as a whole person - not just the problem you bring to the table. Through four interconnected pillars, I guide you to understand yourself deeply enough to create lasting change.",
  approach:
    "Whether you are dealing with trauma, depression, addiction, or simply feeling lost - the path forward starts with honest self-reflection. I create a safe space where you can explore without judgment.",
  quote: {
    text: "The most precious gift we can offer anyone is our attention. When mindfulness embraces those we love, they will bloom like flowers.",
    author: "Thich Nhat Hanh",
  },
  cta: {
    headline: "Start with a Free Session",
    text: "30 minutes. No pressure. No cost. Just an honest conversation about where you are and where you want to be.",
  },
  focusAreas: [
    "Trauma recovery",
    "Depression",
    "Addiction",
    "Self-discovery",
    "Life transitions",
    "Stress management",
  ],
} as const;

// ============================================
// Bodywork Detail
// ============================================

export interface Modality {
  id: string;
  title: string;
  origin: string;
  description: string;
  details: string[];
}

export const BODYWORK_MODALITIES: Modality[] = [
  {
    id: "shiatsu",
    title: "Shiatsu",
    origin: "Japan",
    description:
      "Japanese finger pressure technique working along the body's meridian lines. Shiatsu addresses energy blockages by applying rhythmic pressure to specific points, promoting the natural flow of chi throughout the body.",
    details: [
      "Meridian-based pressure therapy",
      "Restores energy balance",
      "Addresses chronic tension patterns",
      "Deeply relaxing yet energizing",
    ],
  },
  {
    id: "reiki",
    title: "Reiki",
    origin: "Japan",
    description:
      "Universal energy healing that works with the body's subtle energy field. Through gentle hand placement, Reiki helps dissolve emotional blockages, reduce stress, and activate the body's natural healing response.",
    details: [
      "Non-invasive energy work",
      "Emotional blockage release",
      "Deep relaxation and stress relief",
      "Supports natural healing",
    ],
  },
  {
    id: "sports-massage",
    title: "Sports Massage",
    origin: "Western",
    description:
      "Targeted, muscle-focused bodywork using Western massage techniques. Ideal for physical tension, recovery from activity, and addressing specific areas of pain or tightness.",
    details: [
      "Deep tissue techniques",
      "Injury prevention and recovery",
      "Targeted muscle release",
      "Improved flexibility and range",
    ],
  },
  {
    id: "thai-massage",
    title: "Thai Massage",
    origin: "Thailand",
    description:
      "Traditional floor-based bodywork combining acupressure, assisted stretching, and herbal compression. Chi holds three certificates in Thai massage, bringing authentic technique and deep knowledge to every session.",
    details: [
      "Floor-based assisted stretching",
      "Herbal compression therapy",
      "Energy line work",
      "Full body integration",
    ],
  },
];

export const BODYWORK_CONTENT = {
  headline: "Bodywork & Healing",
  subheadline: "Where East Meets West",
  intro:
    "I integrate Eastern energy work with Western massage techniques. Every body is different, so every session is tailored to what you need - whether that's deep tissue release, energy rebalancing, or both.",
  energyHealing: {
    title: "Energy Healing",
    description:
      "Energy healing is about opening channels that have become blocked through stress, trauma, or habitual tension. It's a process - not an instant cure. Through the interaction between giver and receiver, we create space for your natural energy to flow freely again.",
  },
} as const;

// ============================================
// About
// ============================================

export const ABOUT_CONTENT = {
  headline: "About Chi",
  subheadline: "From Trauma to Healing",
  previewText:
    "Born in Asia, adopted into a Dutch family, Chi's journey through bullying, disconnection, depression, and addiction led him to discover his purpose: guiding others through their own darkness.",
  story: [
    {
      title: "The Beginning",
      text: "I was adopted into a Dutch family as a young child. Growing up Asian in the Netherlands meant standing out - and standing out meant being a target. I was bullied throughout my childhood, and at home, my parents struggled to provide the emotional connection I desperately needed.",
    },
    {
      title: "The Darkness",
      text: "By my mid-twenties, depression had taken hold. I had suicidal thoughts. In my thirties, I turned to cocaine and alcohol to numb the pain. Addiction became my way of surviving - until it almost killed me.",
    },
    {
      title: "The Turn",
      text: "Recovery didn't happen overnight. It was a slow, painful process of facing everything I had been running from. But somewhere in that darkness, I found something unexpected: a deep understanding of human suffering and an equally deep desire to help others find their way out.",
    },
    {
      title: "The Purpose",
      text: "I promised myself that if I made it through, I would dedicate my life to guiding others. Not as someone who has all the answers - but as someone who has been in the depths and found a way back. Every modality I've learned, every technique I practice, comes from this place of lived experience and gratitude.",
    },
  ],
  methodology: {
    title: "My Approach",
    text: "I combine years of self-education in holistic healing modalities with the raw understanding that only comes from personal experience. My coaching and bodywork are not separate things - they're two expressions of the same philosophy: true healing requires addressing body, mind, and spirit together.",
  },
  credentials: [
    "Certified Holistic Coach",
    "Thai Massage (3 certificates)",
    "Shiatsu Practitioner",
    "Reiki Practitioner",
    "Sports Massage Therapist",
  ],
} as const;

// ============================================
// Testimonials
// ============================================

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  context: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Jeannette van Horen",
    text: "Chi is very attentive and asks the right questions. I felt safe from the very first moment. His coaching style is warm yet direct - exactly what I needed.",
    context: "Coaching",
  },
  {
    id: "t2",
    name: "Manuel Lio",
    text: "Through the breathing sessions with Chi, my energy was restored and I found clarity I hadn't felt in years. I'm now able to work through challenges independently.",
    context: "Breathing & Energy Work",
  },
  {
    id: "t3",
    name: "Goldios Radka Xoasx",
    text: "As a massage therapist myself, I can say Chi is incredibly knowledgeable and intuitive. I trust him completely with my body. His touch tells you he truly understands the craft.",
    context: "Professional Massage Therapist",
  },
  {
    id: "t4",
    name: "Oceanna Kersting",
    text: "The atmosphere Chi creates is so safe and personal. Every session feels like it's designed just for me. I always leave feeling renewed and lighter.",
    context: "Regular Client",
  },
  {
    id: "t5",
    name: "Deeresh Strohmenger",
    text: "From my very first visit, I felt at home. Chi is precise in his work and creates an incredibly relaxing experience. I was deeply relaxed within minutes.",
    context: "First-time Visitor",
  },
  {
    id: "t6",
    name: "Shireen Noort",
    text: "Chi uses holistic techniques with a nice, natural touch. He's a great reflection partner - he sees things you don't see yourself and brings them to light gently.",
    context: "Holistic Sessions",
  },
];

// ============================================
// Hero
// ============================================

export const HERO_CONTENT = {
  headline: "Healing With Chi",
  subheadline: "Reflective Coaching and Healing in Mazunte, Mexico",
  ctaPrimary: {
    text: "Book Your Free Session",
    subtext: "30 minutes. No pressure. No cost.",
  },
  ctaSecondary: {
    text: "Explore Services",
    href: "#services",
  },
} as const;

// ============================================
// CTA Section
// ============================================

export const CTA_CONTENT = {
  headline: "Your Free 30-Minute Session",
  text: "Whether you're dealing with physical tension, emotional blockages, or simply seeking clarity - let's start with an honest conversation. No obligations, no sales pitch. Just a genuine connection.",
  button: "Book Your Free Session",
  subtext: "30 minutes. No pressure. No cost.",
} as const;

// ============================================
// Contact
// ============================================

export const CONTACT_CONTENT = {
  headline: "Get In Touch",
  subheadline: "Ready to begin your journey?",
  intro:
    "Reach out via WhatsApp for the fastest response, or send me a message through the form below. I typically respond within 24 hours.",
  formFields: ["name", "email", "subject", "message"] as const,
} as const;

// ============================================
// SEO Metadata per Page
// ============================================

export const PAGE_SEO = {
  home: {
    title: "Healing With Chi - Holistic Coaching & Healing Massage in Mazunte",
    description:
      "Holistic coaching, bodywork, and energy healing in Mazunte, Mexico. Shiatsu, Reiki, Thai Massage, and life coaching. Book your free 30-minute session.",
    h1: "Healing With Chi",
  },
  coaching: {
    title: "Holistic Life Coaching - 4 Pillars Approach | Healing With Chi",
    description:
      "Holistic life coaching in Mazunte, Mexico. Address trauma, depression, and addiction through behavior, nutrition, movement, and recovery. Free 30-min intro session.",
    h1: "Holistic Coaching",
  },
  bodywork: {
    title: "Bodywork & Healing Massage - Shiatsu, Reiki, Thai | Healing With Chi",
    description:
      "Professional bodywork and healing massage in Mazunte. Shiatsu, Reiki, Sports Massage, and certified Thai Massage. East meets West approach.",
    h1: "Bodywork & Healing",
  },
  about: {
    title: "About Chi - From Trauma to Healing | Healing With Chi",
    description:
      "Chi's personal journey from adoption, bullying, depression, and addiction to becoming a holistic healer and coach in Mazunte, Mexico.",
    h1: "About Chi",
  },
  contact: {
    title: "Contact & Book a Session | Healing With Chi",
    description:
      "Contact Chi for holistic coaching, bodywork, or energy healing in Mazunte, Mexico. Book your free 30-minute session via WhatsApp or contact form.",
    h1: "Get In Touch",
  },
  privacy: {
    title: "Privacy Policy | Healing With Chi",
    description: "Privacy policy for Healing With Chi website.",
    h1: "Privacy Policy",
  },
} as const;
