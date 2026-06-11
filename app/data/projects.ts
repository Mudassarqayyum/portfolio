export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  longDescription: string[];
  tech: string[];
  details: string[];
  color: string;
  logo: string;
  screenshots: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "medicine365-web",
    title: "Medicine365 Web",
    description: "Full-stack medicine delivery platform with order management system",
    longDescription: [
      "Medicine365 is a comprehensive full-stack MERN (MongoDB, Express.js, React.js, Node.js) application built to streamline medicine delivery and order management. The platform integrates a responsive React frontend with a robust Node.js backend, featuring real-time product catalogues and automated order lifecycle tracking.",
      "The system leverages MongoDB for flexible data modeling, enabling efficient storage of complex product hierarchies, inventory management, and order details. REST APIs facilitate seamless communication between frontend and backend, ensuring smooth data flow and real-time updates across the platform.",
    ],
    tech: ["React.js", "Node.js", "MongoDB", "Express.js", "REST APIs"],
    details: [
      "Built complete MERN stack application",
      "Real-time product catalogue and order tracking",
      "Automated order lifecycle management",
      "MongoDB schemas for structured data",
    ],
    color: "from-blue-500 to-cyan-500",
    logo: "/medicine360.png",
    screenshots: [],
  },
  {
    id: 2,
    slug: "cheezy-now",
    title: "Cheezy Now",
    description: "Cross-platform food delivery app for iOS and Android",
    longDescription: [
      "Cheezy Now is a cross-platform mobile application built with React Native, delivering a consistent user experience across both iOS and Android platforms. The app enables users to browse restaurants, view menus in real-time, and track their food deliveries with live order status updates.",
      "The application features sophisticated state management for handling complex user flows, from restaurant discovery through order placement to delivery tracking. Smooth navigation patterns and responsive UI components ensure users enjoy an intuitive and delightful experience on both mobile platforms.",
    ],
    tech: ["React Native", "REST APIs", "State Management", "iOS", "Android"],
    details: [
      "Cross-platform app deployed on iOS and Android",
      "Real-time restaurant listings and menus",
      "Live order tracking system",
      "Smooth navigation and state management",
    ],
    color: "from-orange-500 to-pink-500",
    logo: "/cheezyNow.png",
    screenshots: [],
  },
  {
    id: 3,
    slug: "pet-accessories-store",
    title: "Pet Accessories Store",
    description: "E-commerce platform with dynamic product listings and checkout",
    longDescription: [
      "Pet Accessories Store is a fully functional e-commerce platform built with React.js and MySQL, designed to provide a seamless shopping experience for pet product enthusiasts. The platform features dynamic product filtering, advanced search capabilities, and a streamlined checkout process integrated with payment systems.",
      "The backend utilizes MySQL for robust relational data management, handling product inventory, user accounts, and transaction records efficiently. Reusable React components create a consistent UI across the application, while REST APIs manage data communication between frontend and backend systems.",
    ],
    tech: ["React.js", "MySQL", "REST APIs", "Payment Integration"],
    details: [
      "Full e-commerce platform with filtering",
      "Reusable React components",
      "Integrated payment systems",
      "Streamlined checkout flow",
    ],
    color: "from-purple-500 to-pink-500",
    logo: "/pet360logo.png",
    screenshots: [],
  },
  {
    id: 4,
    slug: "weather-forecast-app",
    title: "Weather Forecast App",
    description: "Mobile weather app with daily and weekly forecasts",
    longDescription: [
      "Weather Forecast App is a React Native mobile application that provides users with accurate, real-time weather information. The app integrates with third-party weather APIs to deliver daily forecasts and extended weekly predictions, allowing users to plan their activities with confidence.",
      "The application features structured data parsing to handle complex API responses, converting raw weather data into user-friendly displays. Clean interface design prioritizes readability and usability, presenting weather information in an intuitive visual format that works seamlessly on both iOS and Android devices.",
    ],
    tech: ["React Native", "Third-party APIs", "Data Parsing"],
    details: [
      "Real-time weather data integration",
      "Daily and weekly forecast displays",
      "Clean, intuitive interface",
      "Structured API data parsing",
    ],
    color: "from-sky-400 to-blue-500",
    logo: "/weatherlogo.png",
    screenshots: [],
  },
  {
    id: 5,
    slug: "fitness-tracker-app",
    title: "Fitness Tracker App",
    description: "Workout guidance and progress monitoring mobile app",
    longDescription: [
      "Fitness Tracker App is a comprehensive React Native mobile application designed to help users achieve their fitness goals through guided workouts and progress monitoring. The app provides exercise tutorials, tracks workout history, and delivers detailed progress statistics to keep users motivated and accountable.",
      "The platform implements robust state management to handle complex fitness tracking data, including workout sessions, exercise routines, and progress metrics. Persistent data storage ensures users can access their historical workout data and progress analytics, making it easy to track improvements over time.",
    ],
    tech: ["React Native", "State Management", "Data Persistence"],
    details: [
      "Comprehensive fitness tracking system",
      "Workout guidance and exercise tutorials",
      "Progress monitoring and statistics",
      "Persistent data storage and analytics",
    ],
    color: "from-green-500 to-emerald-500",
    logo: "/fitnesslogo.png",
    screenshots: [],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
