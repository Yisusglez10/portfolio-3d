import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  interlub,
  prepa7,
  udg,
  bootstrap,
  mysql,
  php,
  crudnode,
  portfolioScreen,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Game Developer",
    icon: mobile,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Interlub",
    icon: interlub,
    iconBg: "#F8F8F8",
    date: "May 2022 - Apr 2024",
    points: [
      "Designed and developed a digital transformation project in the company, with an estimated value of $50K USD. This project is expected to generate significant cost savings in paper. Utilizing technologies such as JavaScript, HTML5, PHP, jQuery, Bootstrap and MySQL.",
      "Increased monthly traffic by 20% on company websites through website maintenance and updates, including Interlub.com, Interglass.global, and Intermol.mx.",
      "Developed internal software, using these skills and technologies, to create efficient solutions tailored to the needs of each client.",
      "Modernized the company intranet used for managing user permissions across various internal developments by updating several systems to modern technologies like Node.js, Express, MongoDB, and React.",
      "Provided technical support (in person, phone, email, chat) to a company of approximately 200 employees, resolving issues related to hardware, software, connectivity, CCTV, operating systems, data backup and security.",
    ],
  },
  {
    title: "Internship",
    company_name: "Preparatoria 7 UDG",
    icon: prepa7,
    iconBg: "#D3D3D3",
    date: "Nov 2020 - May 2021",
    points: [
      "Oversaw the loan and maintenance of over 50 pieces of technological equipment, such as laptops and projectors, ensuring their availability and operation for the use of students and teachers.",
      "Contributed to software development using NFC cards to streamline the process of acquiring technological equipment in the school, aiming to optimize inventory control.",
      "Maintained and updated 3 computer labs, ensuring all software was current and hardware remained in optimal condition.",
      "Provided technical support to over 20 teachers, solving problems on their personal laptops and offering both in-person and remote assistance.",
    ],
  },
  {
    title: "Computer Engineer",
    company_name: "Universidad de Guadalajara",
    icon: udg,
    iconBg: "#FFF3E0",
    date: "Aug 2017 - Jul 2021",
    points: [
      `Contributed to the development of a mobile application (school project). This application was designed to reinforce 
        knowledge based on a primary school textbook. The application features interactive 3D models using
        augmented reality, created with Blender and implemented in Unity. Developed with C#, it also incorporates AI to
        select questions from a MySQL database using PHP. These questions dynamically adapt to the user's progress,
        providing a personalized and effective learning experience,`
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "",
    name: "",
    designation: "",
    company: "",
    image: "",
  },
];

const projects = [
  {
    name: "Portfolio",
    description:
      `This project showcases the code behind this portfolio website, highlighting the development of a modern, responsive web application.`,
      tags: [   
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: portfolioScreen,
    source_code_link: "https://github.com/",
  },
  {
    name: "Crud Job",
    description:
      `A web application designed to create detailed product sheets, helping to reduce paper costs by generating PDFs for potential clients.`,
    description2:
      `https://crudnode.yisusglez.com
      User: test
      Pass: test`,
    tags: [
      {
        name: "handlebars",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: crudnode,
    source_code_link: "https://github.com/",
  }
];

export { services, technologies, experiences, testimonials, projects };