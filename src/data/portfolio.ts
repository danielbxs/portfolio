import { Award, FolderKanban, Play, TestTubeDiagonal, Code } from "lucide-react";

// Nav

// Hero
export const sectionLinks = ["Home", "Skills", "Projects", "Contact"];
export const socials = { github: "https://github.com/danielbxs", linkedin: "https://linkedin.com/in/danielbxs", resume: "" };
export const iconLabels = { github: "GitHub Profile", linkedin: "LinkedIn Profile", resume: "Resume" };

// Skills
export const skillGroups = [
  {
    title: "Testing Techniques",
    icon: TestTubeDiagonal,
    skills: [
      "Automated Testing",
      "Manual Testing",
      "API Testing",
      "Test Case Design",
      "Defect Reporting",
      "Regression Testing",
      "Smoke Testing",
      "User Acceptance Testing",
      "Mobile Testing",
    ],
  },
  { title: "Automation", icon: Play, skills: ["Playwright", "Cypress", "Postman", "Newman", "Github Actions", "CI/CD"] },
  { title: "Programming Languages & Frameworks", icon: Code, skills: ["JavaScript", "TypeScript", "React", "NodeJS", "SQL", "k6"] },
  { title: "Test Management Tools", icon: FolderKanban, skills: ["Jira", "Zephyr", "Git & Github"] },
];
export const certifications = [
  { name: "ISTQB Certified Tester - Foundation Level v4.0", issuer: "ISTQB", date: "Issued 2026", icon: Award },
  { name: "Meta Front-End Developer Certification", issuer: "Meta", date: "Issued 2025", icon: Award },
  { name: "AT*SQA API Testing Micro-credential", issuer: "AT*SQA", date: "Issued 2026", icon: Award },
];
// Projects

export const projects = [
  {
    title: "Playwright Automation Framework (Saucedemo)",
    description: "A Playwright + TypeScript testing framework validating authentication, inventory, cart, and checkout flows.",
    tags: ["Automation", "Playwright", "TypeScript", "axe-core", "CI/CD"],
    image: "https://res.cloudinary.com/vrqntmnc/image/upload/f_auto,q_auto/playwright",
    repo: "https://github.com/danielbxs/saucedemo-playwright-framework",
  },
  {
    title: "Restful-Booker API Test Automation Framework",
    description: "API test automation framework for the Restful-Booker API using Postman, Newman, and GitHub Actions.",
    tags: ["API Testing", "Postman", "Newman", "CI/CD"],
    image: "https://res.cloudinary.com/vrqntmnc/image/upload/f_auto,q_auto/api-testing",
    repo: "https://github.com/danielbxs/rb-api-test-suite",
  },
  {
    title: "OrangeHRM Open Source Demo Manual QA",
    description:
      "End-to-end manual QA testing for OrangeHRM Demo, including test plan, test cases, coverage mapping, defect reporting, and execution reporting.",
    tags: ["Manual Testing", "Jira", "Zephyr"],
    image: "https://res.cloudinary.com/vrqntmnc/image/upload/f_auto,q_auto/manual",
    repo: "https://github.com/danielbxs/orangehrm-manual-qa",
  },
];

// Contact
export type FormValues = { name: string; email: string; subject: string };
export const nameRules = {
  required: "Name is required.",
  minLength: { value: 2, message: "Name must be at least 2 characters long" },
  maxLength: { value: 50, message: "Name must be 50 characters or less" },
  pattern: { value: /^[\p{L}\s]+$/u, message: "Name may contain letters only." },
};
export const emailRules = {
  required: "Email is required.",
  minLength: { value: 6, message: "Email must be at least 6 characters long" },
  maxLength: { value: 50, message: "Email must be 50 characters or less" },
  pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Please enter a valid email address" },
};
export const subjectRules = {
  required: "Subject is required.",
  maxLength: { value: 500, message: "Subject must be 500 characters or less" },
};
export const formspreeEndpoint = "https://formspree.io/f/mnjeenwz";
export const formFailure = "Something went wrong. Please try again later.";
export const formSuccess = "Thanks for reaching out! I will get back to you as soon as possible.";

// Footer
