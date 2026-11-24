export interface CourseItem {
  id: string;
  title: string;
  description: string;
  level: string;
  schedule: string;
  image: string;
  iconName: "MessageSquare" | "Trophy" | "Users" | "Smile";
  badgeBg: string;
  badgeText: string;
  highlights: string[];
}

export interface JourneyStep {
  number: string;
  title: string;
  description: string;
  accent: "blue" | "orange";
}

export interface TeacherProfile {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  isDemo: true;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  course: string;
  rating: number;
  avatar: string;
}

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Courses", href: "#courses" },
  { label: "Teachers", href: "#teachers" },
  { label: "Contact", href: "#contact" },
] as const;

export const COURSES: CourseItem[] = [
  {
    id: "general-english",
    title: "General English",
    description: "Build strong English skills for everyday communication.",
    level: "Beginner to Advanced (A1–C1)",
    schedule: "3x per week • Morning & Evening",
    image: "/images/course-general.jpg",
    iconName: "MessageSquare",
    badgeBg: "bg-[#EEF1FF]",
    badgeText: "text-[#526BFF]",
    highlights: [
      "Structured grammar, vocabulary, and listening",
      "Interactive real-life conversation practice",
      "Small groups with regular progress check-ins",
    ],
  },
  {
    id: "ielts-preparation",
    title: "IELTS Preparation",
    description: "Prepare confidently for your IELTS exam.",
    level: "Target Band 6.5–8.5",
    schedule: "3x per week • Intensive & Weekend",
    image: "/images/course-ielts.jpg",
    iconName: "Trophy",
    badgeBg: "bg-[#EEF1FF]",
    badgeText: "text-[#526BFF]",
    highlights: [
      "Full mock tests under real exam timing",
      "Writing Task 1 & 2 feedback from specialists",
      "Speaking interviews with score-boosting strategies",
    ],
  },
  {
    id: "speaking-club",
    title: "Speaking Club",
    description: "Practice speaking and be confident.",
    level: "Pre-Intermediate+ (A2–C1)",
    schedule: "2x per week • Evening & Saturday",
    image: "/images/course-speaking.jpg",
    iconName: "Users",
    badgeBg: "bg-[#EEF1FF]",
    badgeText: "text-[#526BFF]",
    highlights: [
      "Debates, role-plays, and real-world topics",
      "Pronunciation and natural fluency coaching",
      "Supportive, zero-fear speaking environment",
    ],
  },
  {
    id: "english-for-kids",
    title: "English for Kids",
    description: "Make learning fun and enjoyable.",
    level: "Ages 6–12",
    schedule: "2–3x per week • After-School",
    image: "/images/course-kids.jpg",
    iconName: "Smile",
    badgeBg: "bg-[#FFF1EB]",
    badgeText: "text-[#FF7547]",
    highlights: [
      "Games, storytelling, and visual activities",
      "Phonics, reading confidence, and early speaking",
      "Friendly instructors trained for young learners",
    ],
  },
];

export const JOURNEY_STEPS: JourneyStep[] = [
  {
    number: "01",
    title: "Discover",
    description: "Find your level",
    accent: "blue",
  },
  {
    number: "02",
    title: "Learn",
    description: "Build skills",
    accent: "orange",
  },
  {
    number: "03",
    title: "Practice",
    description: "Speak confidently",
    accent: "orange",
  },
  {
    number: "04",
    title: "Achieve",
    description: "Reach your goals",
    accent: "orange",
  },
];

// Fictional demo teacher profiles (replace with verified academy staff details)
export const TEACHERS: TeacherProfile[] = [
  {
    id: "sarah-mitchell",
    name: "Sarah Mitchell",
    role: "General English",
    bio: "Focuses on practical communication and confidence-building for adult and teen learners.",
    image: "/images/teacher-sarah.jpg",
    isDemo: true,
  },
  {
    id: "david-wilson",
    name: "David Wilson",
    role: "IELTS Expert",
    bio: "Specializes in academic writing structure, reading speed, and high-band speaking.",
    image: "/images/teacher-david.jpg",
    isDemo: true,
  },
  {
    id: "emily-carter",
    name: "Emily Carter",
    role: "Speaking Coach",
    bio: "Leads interactive speaking clubs designed to turn passive vocabulary into fluent speech.",
    image: "/images/teacher-emily.jpg",
    isDemo: true,
  },
];

// Sample metrics (replace with verified academy figures)
export const IMPACT_STATS: StatItem[] = [
  { value: 1200, suffix: "+", label: "Students" },
  { value: 15, suffix: "+", label: "Teachers" },
  { value: 8, suffix: "+", label: "Programs" },
  { value: 95, suffix: "%", label: "Satisfaction" },
];

// Sample testimonials (replace with verified student reviews)
export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "maria-s",
    quote:
      "Lingora changed my life. Now I speak English confidently and work internationally!",
    author: "Maria S.",
    course: "IELTS & Speaking Club",
    rating: 5,
    avatar: "/images/testimonial-maria.jpg",
  },
  {
    id: "amir-k",
    quote:
      "The small-group speaking sessions helped me overcome hesitation and reach my target IELTS band.",
    author: "Amir K.",
    course: "IELTS Preparation",
    rating: 5,
    avatar: "/images/teacher-david.jpg",
  },
  {
    id: "elena-r",
    quote:
      "Every lesson feels practical and engaging. My daughter looks forward to her English class every week.",
    author: "Elena R.",
    course: "English for Kids",
    rating: 5,
    avatar: "/images/teacher-sarah.jpg",
  },
];

export const SUGGESTED_CHAT_QUESTIONS = [
  "What English courses do you offer?",
  "How can I join IELTS classes?",
  "Do you offer English for kids?",
  "How can I register?",
  "How can I contact the academy?",
] as const;

export const LEARNING_TIMES = [
  "Morning (09:00 – 12:00)",
  "Afternoon (14:00 – 17:00)",
  "Evening (18:00 – 20:30)",
  "Weekend Intensive",
] as const;
