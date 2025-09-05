import React from "react";
import Project from "../components/Project";

const Projects = () => {
  const works = [
    {
      name: "Browser Extensions Manager",
      description:
        "Users have been provided with a mock extension list, and this project allows the user to manipulate the list and active status.",
      stack: ["HTML5", "JavaScript", "CSS", "Reactjs"],
      liveSite: "https://browser-extensions-manager-ui-main-red.vercel.app/",
      githubrepo:
        "https://github.com/Jamieeee1/browser-extensions-manager-ui-main",
      imageLink:
        "https://i.postimg.cc/BZ53C78n/browser-extensions-manager-ui-main-red-vercel-app.png",
    },
    {
      name: "Multi-Step Form",
      description:
        "Validates input from user, and also gives a full breakdown of everything selected.",
      stack: ["HTML5", "JavaScript", "CSS3"],
      liveSite: "https://multistepform-gamma.vercel.app/",
      githubrepo: "https://github.com/Jamieeee1/Multistep",
      imageLink:
        "https://i.postimg.cc/C5c6Q8Tm/multistepform-gamma-vercel-app.png",
    },
    {
      name: "Conference Ticket Generator",
      description:
        "Generates a ticket for attendees using input provided by the user.",
      stack: ["HTML5", "JavaScript", "TailwindCSS"],
      liveSite: "https://shopping-cart-one-puce.vercel.app/",
      githubrepo:
        "https://github.com/Jamieeee1/conference-ticket-generator-main",
      imageLink:
        "https://i.postimg.cc/qMtLTS8k/conference-ticket-generator-peach-vercel-app.png",
    },
    {
      name: "Landing Page",
      description: "A simple landing page.",
      stack: ["HTML5", "JavaScript", "TailwindCSS"],
      liveSite: "https://manage-landing-page-master-gamma.vercel.app/",
      githubrepo: "https://github.com/Jamieeee1/manage-landing-page-master",
      imageLink:
        "https://i.postimg.cc/0QcfkqWN/manage-landing-page-master-gamma-vercel-app.png",
    },
    {
      name: "Shoping Cart",
      description:
        "Models a fully fucntional shopping site. It features includes selecting items, manipulating amounts and provision of a summary on checkout. ",
      stack: ["HTML5", "JavaScript", "React", "TailwindCSS"],
      liveSite: "https://shopping-cart-one-puce.vercel.app/",
      githubrepo: "https://github.com/Jamieeee1/Shopping-Cart",
      imageLink:
        "https://i.postimg.cc/Vs27dzsS/shopping-cart-one-puce-vercel-app.png",
    },
    {
      name: "Random Quote Generator",
      description:
        "A random quote is generated using once the site is loaded and also on request. This is done with the asistance of a restful api ",
      stack: ["HTML5", "JavaScript", "CSS3", "React"],
      liveSite: "https://random-quote-react-one.vercel.app/",
      githubrepo:
        "https://github.com/Jamieeee1/FreeCodeCamp-framework-challenge-one",
      imageLink:
        "https://i.postimg.cc/rsYVf1KB/random-quote-react-one-vercel-app.png",
    },
  ];
  return (
    <div className="projects-main-div">
      <span className="projects-mobile-header">_projects</span>
      <div className="projects-grid">
        {works.map((work, index) => (
          <Project key={index} index={index} work={work} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
