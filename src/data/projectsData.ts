export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "Full-Stack" | "Java & Backend" | "AI & ML" | "E-Commerce";
  description: string;
  details: string[];
  tech: string[];
  github: string;
  demo?: string;
  liveStatus: string;
  featured: boolean;
  image: string;
  gradient: string;
  iconName: "ai" | "security" | "ecommerce" | "crm" | "microservices" | "social" | "hotel" | "office" | "education" | "store";
}

export const projectsData: Project[] = [
  {
    id: "vehicle-rental-ai",
    title: "AI Vehicle Rental Pricing",
    subtitle: "Dynamic Pricing Optimization with GNN & RL",
    category: "AI & ML",
    description:
      "An intelligent vehicle rental dynamic pricing engine that models rental stations as a graph and uses Reinforcement Learning to optimize real-time pricing according to demand, location, and fleet availability.",
    details: [
      "Graph Neural Network (GNN) modeling spatial relationships between vehicle rental hubs.",
      "Reinforcement Learning agent continuously adjusting rates based on real-time demand curves.",
      "Spring Boot backend coordinating API requests and ML model inference pipelines.",
      "Interactive React dashboard with analytics, station heatmaps, and price history."
    ],
    tech: ["Python", "PyTorch", "Graph Neural Networks", "Reinforcement Learning", "Spring Boot", "React", "MongoDB"],
    github: "https://github.com/AkashRafeal/Vehicle-Rental-Ai",
    liveStatus: "Research & ML System",
    featured: true,
    image: "/projects/vehicle-rental-ai.jpg",
    gradient: "from-amber-600/25 via-orange-600/15 to-transparent",
    iconName: "ai",
  },
  {
    id: "security-service",
    title: "Security Service Web Platform",
    subtitle: "Modern Protection & Surveillance Booking Portal",
    category: "Full-Stack",
    description:
      "Production web application for commercial and private security services featuring interactive quote calculators, service tiers, client consultation booking, and modern dark aesthetics.",
    details: [
      "Server-side rendered (SSR) pages built with Next.js and optimized for high Lighthouse SEO scores.",
      "Interactive multi-tier service quotation estimator with real-time price calculations.",
      "Fully responsive dark glassmorphism user interface deployed live on Vercel.",
      "Inquiry and consultation submission workflows with form validation."
    ],
    tech: ["Next.js", "React", "Tailwind CSS", "JavaScript", "Vercel"],
    github: "https://github.com/AkashRafeal/Security-Service-Next.js",
    demo: "https://security-service-next-js.vercel.app",
    liveStatus: "Live Demo Available",
    featured: true,
    image: "/projects/security-service.jpg",
    gradient: "from-blue-600/25 via-cyan-600/15 to-transparent",
    iconName: "security",
  },
  {
    id: "saree-shop",
    title: "Saree Shop E-Commerce Store",
    subtitle: "Traditional Ethnic Wear Platform & Spring Boot API",
    category: "E-Commerce",
    description:
      "Full-stack ethnic fashion e-commerce storefront with high-performance product browsing, multi-attribute filtering, cart state management, and Spring Boot REST API integration.",
    details: [
      "Next.js and TypeScript frontend deployed live on Vercel with smooth shopping UX.",
      "Spring Boot backend REST API managing product inventory, categories, orders, and pricing.",
      "Multi-faceted catalog filtering (fabric, price range, occasion, color) with search.",
      "Optimized MySQL database schema with indexes for rapid catalog querying."
    ],
    tech: ["TypeScript", "React", "Next.js", "Spring Boot", "MySQL", "Tailwind CSS"],
    github: "https://github.com/AkashRafeal/Saree-Shop",
    demo: "https://saree-shop-psi.vercel.app",
    liveStatus: "Live Demo Available",
    featured: true,
    image: "/projects/saree-shop.jpg",
    gradient: "from-rose-600/25 via-orange-600/15 to-transparent",
    iconName: "ecommerce",
  },
  {
    id: "basic-crm",
    title: "Enterprise Basic CRM",
    subtitle: "Sales Pipeline & Customer Management System",
    category: "Full-Stack",
    description:
      "Customer Relationship Management web system designed to track leads, manage customer contact profiles, monitor sales deal stages, and maintain interaction logs.",
    details: [
      "Visual sales pipeline tracking lead statuses from first contact to deal closure.",
      "Client management directory with interaction notes, contact info, and activity history.",
      "JWT-authenticated secure REST APIs built using Spring Boot and connected to MySQL.",
      "Intuitive, clean TypeScript & React UI with quick search and status filtering."
    ],
    tech: ["TypeScript", "React", "Spring Boot", "MySQL", "REST APIs", "JWT"],
    github: "https://github.com/AkashRafeal/Basic-CRM",
    liveStatus: "Full-Stack App",
    featured: true,
    image: "/projects/basic-crm.jpg",
    gradient: "from-purple-600/25 via-indigo-600/15 to-transparent",
    iconName: "crm",
  },
  {
    id: "ecommerce-microservices",
    title: "E-Commerce Microservices",
    subtitle: "Scalable Distributed Backend Architecture",
    category: "Java & Backend",
    description:
      "Enterprise e-commerce backend built with Spring Cloud and decoupled microservices covering user authentication, catalog management, order processing, and payment orchestration.",
    details: [
      "Centralized Spring Cloud Gateway routing incoming requests with rate limiting and security.",
      "Service registry and discovery for dynamic load distribution and zero downtime updates.",
      "Decoupled databases per service ensuring domain isolation and scalability.",
      "Containerized service setup with Docker and resilience circuit breaker patterns."
    ],
    tech: ["Java", "Spring Boot", "Spring Cloud", "Microservices", "Docker", "MySQL"],
    github: "https://github.com/AkashRafeal/ecommerce-microservices",
    liveStatus: "Distributed System",
    featured: true,
    image: "/projects/ecommerce-microservices.jpg",
    gradient: "from-emerald-600/25 via-teal-600/15 to-transparent",
    iconName: "microservices",
  },
  {
    id: "social-media-platform",
    title: "Social Media Platform",
    subtitle: "Community Networking & Content Feed Engine",
    category: "Full-Stack",
    description:
      "Interactive social networking platform with user authentication, multimedia post feeds, real-time comment threads, likes, and profile management.",
    details: [
      "Secure user registration and stateless JWT authentication with encrypted passwords.",
      "Chronological dynamic feed showing user publications, media, and captions.",
      "Engaging interactions including like counts, nested comment chains, and follow graphs.",
      "Spring Boot REST API with Spring Data JPA and relational MySQL database."
    ],
    tech: ["Java", "Spring Boot", "React", "MySQL", "REST APIs", "Tailwind CSS"],
    github: "https://github.com/AkashRafeal/SocialMediaPlatform",
    liveStatus: "Full-Stack App",
    featured: false,
    image: "/projects/social-media-platform.jpg",
    gradient: "from-sky-600/25 via-blue-600/15 to-transparent",
    iconName: "social",
  },
  {
    id: "hotel-reservation",
    title: "Hotel Reservation System",
    subtitle: "Room Booking & Hospitality Management Engine",
    category: "Java & Backend",
    description:
      "Hospitality management application handling hotel room reservations, room category availability calendars, guest records, check-in/out workflows, and automated invoice billing.",
    details: [
      "Room booking engine ensuring zero double bookings via database transaction locking.",
      "Automated bill generation factoring in nightly rates, room tiers, and taxes.",
      "Guest directory storing booking history, contact details, and special requests.",
      "Clean MVC architecture using Spring Boot REST controllers, services, and repositories."
    ],
    tech: ["Java", "Spring Boot", "MySQL", "Hibernate", "REST APIs"],
    github: "https://github.com/AkashRafeal/HotelReservationSystem",
    liveStatus: "Backend Service",
    featured: false,
    image: "/projects/hotel-reservation.jpg",
    gradient: "from-amber-600/25 via-yellow-600/15 to-transparent",
    iconName: "hotel",
  },
  {
    id: "office-admin",
    title: "Office Administration System",
    subtitle: "Employee & Department Operations Portal",
    category: "Full-Stack",
    description:
      "Enterprise management portal for corporate operations handling employee records, department structures, daily attendance logging, and leave approval workflows.",
    details: [
      "Employee records with department assignment, designation, and salary grading.",
      "Leave management system with submission, tracking, and manager approval/rejection.",
      "Attendance verification and monthly summary reports generation.",
      "Modular Spring Boot API backend paired with responsive React user interface."
    ],
    tech: ["Spring Boot", "React", "MySQL", "TypeScript", "REST APIs"],
    github: "https://github.com/AkashRafeal",
    liveStatus: "Enterprise Portal",
    featured: false,
    image: "/projects/office-admin.jpg",
    gradient: "from-blue-600/25 via-indigo-600/15 to-transparent",
    iconName: "office",
  },
  {
    id: "student-grade-tracker",
    title: "Student Academic Grade Tracker",
    subtitle: "Course Grading & CGPA Analytics System",
    category: "Java & Backend",
    description:
      "Core Java academic management tool designed for computing course GPA, overall CGPA, generating statistical grade distributions, and producing student report cards.",
    details: [
      "Algorithmic GPA/CGPA computation supporting weighted credit points and scale grades.",
      "Statistical analytics identifying class averages, medians, and performance percentiles.",
      "Modular Object-Oriented architecture adhering to SOLID design principles.",
      "Persistent data storage with relational database queries and schema validation."
    ],
    tech: ["Java", "Object-Oriented Programming", "MySQL", "Data Structures"],
    github: "https://github.com/AkashRafeal/StudentGradeTracker",
    liveStatus: "Core Java App",
    featured: false,
    image: "/projects/student-grade-tracker.jpg",
    gradient: "from-teal-600/25 via-emerald-600/15 to-transparent",
    iconName: "education",
  },
  {
    id: "electromart-ecommerce",
    title: "ElectroMart E-Commerce Store",
    subtitle: "Consumer Electronics Storefront (Internship Project)",
    category: "E-Commerce",
    description:
      "Commercial e-commerce web platform developed during web developer internship at Getin Technologies, featuring electronics catalog, cart checkout, and payment gateways.",
    details: [
      "Built and launched during web development internship at Getin Technologies.",
      "Configured WooCommerce catalog with variable products, SKU management, and filters.",
      "Engineered responsive, high-converting product landing pages using Elementor.",
      "Integrated payment gateway workflows and automated order notification emails."
    ],
    tech: ["WordPress", "WooCommerce", "Elementor", "PHP", "MySQL"],
    github: "https://github.com/AkashRafeal",
    liveStatus: "Internship Project",
    featured: false,
    image: "/projects/electromart-ecommerce.jpg",
    gradient: "from-orange-600/25 via-red-600/15 to-transparent",
    iconName: "store",
  },
];
