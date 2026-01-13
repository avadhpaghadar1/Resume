/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false,
};

//SEO Related settings
const seo = {
  title: "Avadh Paghadar | Portfolio",
  description:
    "Full Stack Developer with experience building scalable web applications using Laravel, React.js, Node.js, and MySQL, including integrations like QuickBase and Stripe.",
  og: {
    title: "Avadh Paghadar | Portfolio",
    type: "website",
    url: "",
  },
};

//Home Page
const greeting = {
  title: "Avadh Paghadar",
  logo_name: "AvadhPaghadar",
  nickname: "",
  subTitle:
    "Aspiring and dedicated Software Engineer with a strong foundation in Laravel, React.js, and MySQL, along with practical experience building scalable web applications and integrating third-party platforms like QuickBase and Stripe.",
  resumeLink: "/resume.pdf",
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
      title: "Software Engineering",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building scalable web applications using Laravel, React.js, Node.js, and MySQL",
        "⚡ Integrating third-party services like QuickBase CRM, Stripe, and email providers",
        "⚡ Delivering secure, user-friendly solutions end-to-end (planning → deployment)",
      ],
      softwareSkills: [
        { skillName: "HTML5", fontAwesomeClassname: "logos-html-5" },
        { skillName: "CSS3", fontAwesomeClassname: "logos-css-3" },
        { skillName: "JavaScript", fontAwesomeClassname: "logos-javascript" },
        { skillName: "Laravel", fontAwesomeClassname: "logos-laravel" },
        {
          skillName: "CodeIgniter",
          fontAwesomeClassname: "simple-icons:codeigniter",
        },
        { skillName: "React", fontAwesomeClassname: "logos-react" },
        { skillName: "Node.js", fontAwesomeClassname: "logos-nodejs" },
        {
          skillName: "Express.js",
          fontAwesomeClassname: "simple-icons:express",
        },
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
      logo_path: "",
      alt_name: "Atmiya University",
      duration: "Jul 2024 - Present",
      descriptions: ["⚡ Pursuing M.Sc. in Information Technology."],
      website_link: "",
    },
    {
      title: "Darshan University, Rajkot",
      subtitle: "B.Sc. (Information Technology)",
      logo_path: "",
      alt_name: "Darshan University",
      duration: "Jul 2021 - Mar 2024",
      descriptions: ["⚡ Completed B.Sc. in Information Technology."],
      website_link: "",
    },
  ],
};

const certifications = {
  certifications: [],
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
          title: "Software Engineer",
          company: "CRM Punch",
          company_url: "",
          logo_path: "crmpunch.png",
          duration: "Aug 2025 - Present",
          location: "Rajkot, Gujarat, India",
          description:
            "• Building and maintaining scalable web applications.\n• Collaborating on requirement analysis and solution design.\n• Ensuring code quality, security, and performance.",
          color: "#0F172A",
        },
        {
          title: "Full Stack Developer",
          company: "Freelancer",
          company_url: "",
          logo_path: "freelancer.svg",
          duration: "Apr 2025 - Aug 2025",
          location: "India",
          description:
            "• Provided freelance web development services delivering secure, scalable solutions.\n• Worked closely with clients on custom requirements and timelines.\n• Handled the full lifecycle from planning to deployment.",
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
    "Projects from my resume across Laravel, React.js, Node.js, MySQL, MongoDB, and CRM integrations.",
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
        "Rental property management system for the U.S. market. Manages utility services, tenant move-ins/outs, and property listings. (Laravel, React, QuickBase CRM)",
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
        "Full-featured e-commerce website with inventory, cart, and order modules; focused on scalability, UX, and secure transactions. (React.js, Node.js, MongoDB)",
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
        "Document storage and tracking system with expiry alerts and role-based access; improved organizational efficiency and compliance. (Laravel, MySQL)",
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
        "Performance improvements via query optimization, caching, and refactoring; fixed critical bugs to improve stability and scalability. (Laravel, MySQL)",
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
    profile_image_path: "Profile.jpeg",
    description:
      "Feel free to reach out for Software Engineer opportunities, freelance work, or collaboration.",
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
    subtitle: "+91 8460217965",
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
