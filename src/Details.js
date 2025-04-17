// Enter all your detials in this file
// Logo images


// Profile Image
import profile from "./assets/profile.jpg";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
// Porject Images
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.jpg";
import projectImage4 from "./assets/projects/project4.jpg";




// Enter your Personal Details here
export const personalDetails = {
  img: profile,
  about: `Full Stack Developer`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/",
  github: "https://www.github.com/",
  twitter: "https://twitter.com/",
  instagram: "https://www.instagram.com/",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Technology Analyst",
    Company: `Infosys Ltd.`,
    Location: "Pune",
    Type: "Full Time",
    Duration: "Jan 2022 - Present",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Full Stack Development",
    Company: "Coding Ninjas",
    Location: "Online",
    Type: "Distance Learning",
    Duration: "Jul 2024 - Mar 2025",
  },
  {
    Position: "Bachelor of Technology",
    Company: `Kolhapur Institute of Technology, College of Engineering (Autonomous), Kolhapur. India`,
    Location: "Kolhapur",
    Type: "Full Time",
    Duration: "Aug 2018 - July 2021",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "E-commerce Web App",
    image: projectImage1,
    description: `• Built a responsive e-commerce frontend using React, featuring modern UI, product listings, and category filters.`,
    techstack: "HTML, CSS, JavaScript, React",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Portfolio Website",
    image: projectImage2,
    description: `• Developed a personal portfolio website using React to showcase skills, projects, and professional background with a clean,
responsive UI.`,
    techstack: "HTML, CSS, JavaScript, React",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Music Player Application",
    image: projectImage3,
    description: `• Built a music player with search, genre filter, and song navigation features (play, next, previous).`,
    techstack: "HTML, CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Weather Application",
    image: projectImage4,
    description: `• Created a responsive Weather App utilizing OpenWeather API to display real-time weather data for city searches.`,
    techstack: "HTML, CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  
];

// Enter your Contact Details here
export const contactDetails = {
  email: "abc@email.com",
  phone: "+91 11223 34455",
};
