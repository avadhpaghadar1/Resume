/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false,
};

//SEO Related settings
const seo = {
  title: "Avadh Paghadar | Software Engineer & AI Evaluator",
  description:
    "Software Engineer with 2+ years of experience in Laravel, React.js, Node.js, PHP, Python, REST APIs, SaaS platforms, Docker, and automated testing. Experienced in AI coding evaluation and agent benchmarking, including coding-agent task design, rubric-based assessment, Harbor workflows, and reference solution validation.",
  og: {
    title: "Avadh Paghadar | Portfolio",
    type: "website",
    url: "",
  },
};

//Home Page
const greeting = {
  title: "Avadh Paghadar",
  logo_name: "Avadh Paghadar",
  nickname: "",
  subTitle:
    "Software Engineer with 2+ years of professional experience in backend development, REST APIs, SaaS platforms, and automation. Skilled in Python, PHP, JavaScript, Laravel, MySQL, Docker, Git, automated testing, and AI coding-agent evaluation. Experienced with benchmark design, rubric-based assessment, Harbor workflows, and reference solution validation.",
  resumeLink: "./Avadh_Paghadar_AI_Engineering.pdf",
  portfolio_repository: "",
  githubProfile: "https://github.com/avadhpaghadar1/",
  linkedinProfile: "https://www.linkedin.com/in/avadh-paghadar-92a074271/",
};

const socialMediaLinks = [
  {
    name: "Gmail",
    link: "mailto:avadhpaghadar1@gmail.com",
    fontAwesomeIcon: "fa-google",
    iconType: "fab",
    backgroundColor: "#EA4335",
  },
  {
    name: "LinkedIn",
    link: greeting.linkedinProfile,
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0A66C2",
  },
  {
    name: "GitHub",
    link: greeting.githubProfile,
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#24292E",
  },
];

const skills = {
  data: [
    {
      title: "Software Engineering & AI Evaluation",
      fileName: "FullStackImg",
      skills: [
        "⚡ Developing Laravel, React.js, Node.js, Python, PHP, REST API, and SaaS solutions",
        "⚡ Designing coding-agent benchmark tasks with explicit instructions, reference solutions, and acceptance tests",
        "⚡ Evaluating agent actions, tool use, reasoning quality, edge cases, and automated test coverage",
      ],
      softwareSkills: [
        { skillName: "Python", fontAwesomeClassname: "logos-python" },
        { skillName: "PHP", fontAwesomeClassname: "logos-php" },
        { skillName: "Laravel", fontAwesomeClassname: "logos-laravel" },
        { skillName: "JavaScript", fontAwesomeClassname: "logos-javascript" },
        { skillName: "React", fontAwesomeClassname: "logos-react" },
        { skillName: "Node.js", fontAwesomeClassname: "logos-nodejs" },
        { skillName: "Docker", fontAwesomeClassname: "logos-docker-icon" },
        { skillName: "Git", fontAwesomeClassname: "logos-git-icon" },
        { skillName: "MySQL", fontAwesomeClassname: "logos-mysql" },
        { skillName: "MongoDB", fontAwesomeClassname: "logos-mongodb" },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [],
};

const degrees = {
  degrees: [
    {
      title: "Atmiya University, Rajkot",
      subtitle: "M.Sc. (Information Technology)",
      logo_path: "atmiya.png",
      alt_name: "Atmiya University",
      duration: "2024 - 2026",
      descriptions: ["⚡ M.Sc. in Information Technology."],
      website_link: "",
    },
    {
      title: "Darshan University, Rajkot",
      subtitle: "B.Sc. (Information Technology)",
      logo_path: "darshan.png",
      alt_name: "Darshan University",
      duration: "2021 - 2024",
      descriptions: ["⚡ Completed B.Sc. in Information Technology."],
      website_link: "",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Snorkel AI",
      subtitle: "Terminus 2nd Edition - Coding-Agent Benchmarking",
      logo_path: "snorkel.svg",
      alt_name: "Snorkel AI",
      descriptions: [
        "⚡ Cleared Terminus 2nd Edition qualification and prepared coding-agent benchmark tasks.",
      ],
      website_link: "",
      certificate_link: "",
    },
    {
      title: "Hackerrank",
      subtitle: "Software Engineer",
      logo_path: "hackerrank.png",
      alt_name: "Hackerrank",
      descriptions: [
        "⚡ Completed Hackerrank certification for Software Engineer.",
      ],
      website_link: "https://www.hackerrank.com/certificates/4441773a814c",
      certificate_link: "https://www.hackerrank.com/certificates/4441773a814c",
    },
    {
      title: "Hackerrank",
      subtitle: "Frontend Developer (React)",
      logo_path: "hackerrank.png",
      alt_name: "Hackerrank",
      descriptions: [
        "⚡ Completed Hackerrank certification for Frontend Developer (React).",
      ],
      website_link: "https://www.hackerrank.com/certificates/c78db2d63564",
      certificate_link: "https://www.hackerrank.com/certificates/c78db2d63564",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internship",
  description:
    "Hands-on experience delivering web applications, integrations, and performance improvements across full stack roles.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "AI Coding Evaluation & Agent Benchmarking",
          company: "Snorkel AI - Terminus 2nd Edition",
          company_url: "",
          logo_path: "snorkel.svg",
          duration: "2026",
          location: "Remote",
          description:
            "• Prepared coding-agent benchmark tasks with explicit instructions, reference implementations, environment setup, and acceptance checks.\n• Reviewed Harbor evaluation workflows using Docker and Git.\n• Analyzed reference-agent and no-op baseline results for ambiguity, verifier failures, and test coverage gaps.",
          color: "#0F172A",
        },
        {
          title: "Software Engineer",
          company: "CRM Punch",
          company_url: "",
          logo_path: "crmpunch.png",
          duration: "Apr 2025 - Present",
          location: "Ahmedabad, Gujarat, India",
          description:
            "• Developed Laravel, React.js, and Node.js features, REST APIs, and business automation for CRM/SaaS applications supporting 10,000+ active users.\n• Integrated Quickbase, Stripe, and third-party systems with secure validation and authorization workflows.\n• Optimized MySQL queries and backend services, improving API response time by up to 35%.\n• Supported Docker deployments, CI/CD, troubleshooting, and production monitoring.",
          color: "#334155",
        },
        {
          title: "Full Stack Developer (LAMP Stack)",
          company: "Techxperts, Rajkot",
          company_url: "",
          logo_path: "techxperts.png",
          duration: "Apr 2024 - Apr 2025",
          location: "Rajkot, Gujarat, India",
          description:
            "• Built and maintained web applications using Laravel, MySQL, React, and Livewire.\n• Integrated third-party services like Stripe and QuickBase CRM.\n• Improved performance via query optimization, caching, and bug fixes.",
          color: "#1E293B",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Web Developer Intern",
          company: "Agendeas Solution LLP",
          company_url: "",
          logo_path: "agendeas.png",
          duration: "Nov 2023 - Feb 2024",
          location: "Rajkot, Gujarat, India",
          description:
            "• Worked on real-world project development cycles.\n• Integrated REST APIs into React applications for real-time data.\n• Enhanced UI and overall user experience.",
          color: "#475569",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Selected software and AI engineering work across Laravel, React.js, Python, Node.js, MySQL, Docker, and CRM integrations.",
  avatar_image_path: "projects_image.svg",
};

// Projects Page (local data)
// Keep the shape compatible with GithubRepoCard to avoid extra refactors.
const projects = {
  data: [
    {
      id: "proj-1",
      name: "MoveWithCitizen",
      description:
        "Contributed to a U.S. rental property-management application, including business workflows, backend integrations, AWS deployment, Docker, and access-control improvements. (Laravel, React.js, MySQL, Quickbase)",
      url: "",
      languages: [
        { name: "Laravel", iconifyClass: "logos-laravel" },
        { name: "React", iconifyClass: "logos-react" },
        { name: "MySQL", iconifyClass: "logos-mysql" },
      ],
    },
    {
      id: "proj-2",
      name: "E-commerce Platform",
      description:
        "Worked on payment integration, checkout workflows, and backend/frontend optimization for an e-commerce system. (Laravel, React.js, MySQL, Stripe)",
      url: "",
      languages: [
        { name: "React", iconifyClass: "logos-react" },
        { name: "Node.js", iconifyClass: "logos-nodejs" },
        { name: "MongoDB", iconifyClass: "logos-mongodb" },
      ],
    },
    {
      id: "proj-3",
      name: "Document Management System",
      description:
        "Designed and developed document storage, REST APIs, search, role-based authorization, secure access, and automated workflows. (Laravel, MySQL)",
      url: "",
      languages: [
        { name: "Laravel", iconifyClass: "logos-laravel" },
        { name: "MySQL", iconifyClass: "logos-mysql" },
      ],
    },
    {
      id: "proj-4",
      name: "Cirus Defense",
      description:
        "Improved application stability and performance through MySQL query optimization, caching, and Laravel refactoring. (Laravel, MySQL)",
      url: "",
      languages: [
        { name: "Laravel", iconifyClass: "logos-laravel" },
        { name: "MySQL", iconifyClass: "logos-mysql" },
      ],
    },
    {
      id: "proj-5",
      name: "Conmap.co.uk",
      description:
        "Developed and maintained core modules for property listings and management; improved performance and reliability; implemented secure workflows for property managers and tenants. (Laravel, MySQL, React, Livewire)",
      url: "",
      languages: [
        { name: "Laravel", iconifyClass: "logos-laravel" },
        { name: "React", iconifyClass: "logos-react" },
        { name: "MySQL", iconifyClass: "logos-mysql" },
      ],
    },
  ],
};

const publicationsHeader = {
  title: "Publications",
  description: "",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "Profile.png",
    description:
      "Feel free to reach out for Software Engineer, AI coding evaluation, or technical collaboration opportunities.",
  },
  blogSection: {
    title: "",
    subtitle: "",
    link: "",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Ahmedabad, Gujarat, India",
    locality: "Ahmedabad",
    country: "India",
    region: "Gujarat",
    postalCode: "",
    streetAddress: "",
    avatar_image_path: "address_image.svg",
    location_map_link:
      "https://www.google.com/maps/search/?api=1&query=Ahmedabad%2C%20Gujarat",
  },
  phoneSection: {
    title: "Phone",
    subtitle: "+91 84602 17965",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  projects,
  publicationsHeader,
  publications,
  contactPageData,
};
