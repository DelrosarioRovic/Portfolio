import projectGraphiscore from "../../../image/graphiscoreProject.png";
import axieproject from "../../../image/axieproject.png";
import sneakers from "../../../image/sneakers.png";
import blogify from "../../../image/blogify.png";
import grocery from "../../../image/grocery.png";
import lawportfolio from "../../../image/law-portfolio.jpg"

const projectArray = [
  {
    projectColor: "before:bg-green-800",
    projectUrl: "https://graphiscore-rate.cyclic.app/",
    projectImg: projectGraphiscore,
    projectTitle: "Graphiscore",
    projectDcrp:
      "This web application allows users to rate and review different graphics processing units (GPUs) based on their personal experiences. Users can rate GPUs on a scale of 1-5 and leave a detailed review with their thoughts and opinions. Other users can read and filter through reviews to help inform their own purchasing decisions.",
    projectLang: [
      "HTML",
      "CSS",
      "Javascript",
      "Node.Js",
      "Express",
      "EJS",
      "MongoDb",
    ],
  },
  {
    projectColor: "before:bg-blue-500",
    projectUrl: "https://delrosariorovic.github.io/Axie-E-Calculator/",
    projectImg: axieproject,
    projectTitle: "Axie-E-Calculator",
    projectDcrp:
      "The Axie E-Calculator is a tool designed specifically for players of the popular blockchain game, Axie Infinity. The website allows players to easily calculate the amount of energy required to level up their Axies, an important factor in the game that determines the rate at which Axies can become stronger.",
    projectLang: ["HTML", "CSS", "Javascript"],
  },
  {
    projectColor: "before:bg-orange-500",
    projectUrl: "https://e-commerce-practice-project.vercel.app/",
    projectImg: sneakers,
    projectTitle: "Sneakers",
    projectDcrp:
      "Welcome to this landing website project, which was built with Tailwind CSS and React. This project has a fully responsive design and utilizes external libraries such as React Router for navigation. ",
    projectLang: ["React", "Tailwind"],
  },
  {
    projectColor: "before:bg-blue-500",
    projectUrl: "https://blogify-phi.vercel.app/",
    projectImg: blogify,
    projectTitle: "Blogify",
    projectDcrp:
      "Blogify is a full-stack social web app built using the MERN stack and TypeScript.",
    projectLang: [
      "React",
      "Tailwind",
      "TypeScript",
      "Node.Js",
      "Express",
      "MongoDB",
      "JWT",
    ],
  },
  {
    projectColor: "before:bg-green-400",
    projectUrl: "https://github.com/DelrosarioRovic/Grocery-app/",
    projectImg: grocery,
    projectTitle: "Grocery App",
    projectDcrp:
      "Discover simplicity in grocery shopping with our streamlined Grocery App. Effortlessly create lists and receive personalized recommendations. Experience convenience at your fingertips. Download now for an enhanced shopping journey.",
    projectLang: ["React-native", "Expo", "Node.Js"],
  },
  {
    projectColor: "before:bg-gray-200",
    projectUrl: "",
    projectImg: lawportfolio,
    projectTitle: "Law portfolio",
    projectDcrp: "A simple law portfolio website",
    projectLang: ["React", "TailwindCSS", "NextJS"],
  },
];

export default projectArray;
