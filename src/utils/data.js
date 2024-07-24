import { IoLogoJavascript, IoLogoReact, IoLogoNodejs } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
// import { TbApi } from "react-icons/tb";

export const PROFILE_DATA = {
  name: "M Rizki",
  jobtitle: "Frontend-Developer",
  // image: "mrzki.jpg",
  location: "Purwakarta, Indonesia",
  email: "mr.rizki.jobs@gmail.com",
  phone: "+6287708454955",
  github: "https://github.com/rizki97mr",

  yearsOfExperience: "< 1 years",
  bio: "I'm a passionate Web Developer who loves building scalable and maintainable applications.",
  skills: [
    "React.js",
    "Tailwind CSS",
    "JavaScript",
    "Git",
    "Node.js",
    "Express JS",
    "Redux",
    "RESTful APIs",
  ],
};

export const SKILLS = [
  {
    id: "01",
    icon: IoLogoJavascript,
    title: "JavaScript",
    comment:
      "JavaScript is a very versatile language used in both frontend and backend development. JavaScript has its unique ability to function both on the client-side and server-side, making it super flexible.",
  },
  {
    id: "02",
    icon: FaGitAlt,
    title: "Git Version Control",
    comment:
      "Git is all about efficiency. For developers, it eliminates everything from the time wasted passing commits over a network connection to the man hours required to integrate changes in a centralized version control system. Git makes collaboration easier, allowing changes by multiple people to all be merged into one source.",
  },
  {
    id: "03",
    icon: IoLogoReact,
    title: "React.JS",
    comment:
      "React makes it easier for me to create interactive UI. Design a simple view for each state in my application, and React will efficiently update and render the right components when the data changes. Declarative views make your code easier to predict and debug.",
  },
  {
    id: "04",
    icon: IoLogoNodejs,
    title: "Node.js",
    comment:
      "I love using Node.js for creating server-side applications and building APIs",
  },
  {
    id: "05",
    icon: RiTailwindCssFill,
    title: "Tailwind CSS",
    comment:
      "Working with Tailwind CSS encourages a more direct approach to styling. Instead of moving between HTML files and separate CSS stylesheets, developers can apply styles right within the HTML. This makes me quicker and simpler.",
  },
  {
    id: "06",
    icon: SiRedux,
    title: "Redux",
    comment:
      "I love using Redux for managing state in applications and building applications with complex user interactions",
  },
  // {
  //   id: "07",
  //   icon: SiMongodb,
  //   title: "Mongodb",
  //   comment:
  //     "I love using Mongodb for storing and querying data in a NoSQL database",
  // },
];

export const EDUCATION = [
  {
    id: "01",
    degree: "Bachelor of Computer Science",
    institution: "Universitas Komputer Indonesia",
    year: "2016-2021",
    major: "Informatics Engineering",
  },
  {
    id: "02",
    institution: "SMK Daarut Tauhiid",
    year: "2013-2016",
    major: "Computer and Network Engineering",
  },
  {
    id: "03",
    institution: "SMP Negeri 5 Purwakarta",
    year: "2010-2013",
  },
  {
    id: "04",
    institution: "SD Negeri 4 Munjuljaya",
    year: "2004-2010",
  },
];

export const ABOUT_ME_DATA = {
  introduction: `an experienced React JS developer passionate about building engaging web aplication.`,
  skills: `I'm proficient in variety of technologies including React JS, JavaScript, HTML, CSS and Node.js`,
  projects:
    "Some of my notable Projects include an e-commerce website built with react.js and Express",
  experiences:
    "I've worked with various companies including Google, Facebook and Amazon",
  contact:
    "You can reach me at johndoe@example.com or find me on social media platforms.",
  careerGoals:
    "In the future, I aim to continue honing my skills as a developer and exploring new technologies.",
  interest:
    "I'm always open to learning new technologies and challenges, and I'm eager to contribute to the community.",
  background: `Hi, I'm M Rizki, I've completed my bachelor's degree in Computer Science from Universitas Komputer Indonesia in 2021.`,

  stats: {},
};
