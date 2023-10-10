import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Graphic Designer Intern at SWG Academy",
    company_name: "SWG Academy",
    iconBg: "#383E56",
    date: "March, 2022 - May, 2022",
    points: [
      "Drove the creative process as a Graphic Designer Intern, utilizing Adobe Illustrator, Figma, Adobe Photoshop, Canva, and other design tools to produce visually appealing and engaging content.",
      "Collaborated seamlessly with cross-functional teams, including designers, product managers, and developers, to create high-quality and visually captivating products.",
      "Emphasized responsive design principles to ensure the adaptability of designs across various platforms and devices while maintaining cross-browser compatibility.",
      "Played an active role in code reviews, providing valuable feedback on design-related aspects to enhance the overall quality of projects.",
    ],
  },
  
  {
    title: "Website Designer at Asiana Times",
    company_name: "Asiana Times",
    iconBg: "#E6DEDD",
    date: "Jun, 2022 - Aug, 2022",
    points: [
      "Led the development and maintenance of cutting-edge web applications using a variety of JavaScript technologies, including React.js and Next.js, ensuring a seamless user experience.",
      "Collaborated closely with cross-functional teams, including designers, product managers, and fellow developers, to deliver high-quality products.",
      "Championed responsive design principles and cross-browser compatibility to enhance the accessibility and usability of web applications.",
      "Played a pivotal role in code reviews, providing valuable feedback and insights to improve code quality and team performance.",
    ],
  },
  {
    title: "Associate Technical Researcher at College AfterMath",
    company_name: "College AfterMath",
    iconBg: "#383E56",
    date: "Jun, 2022 - Sept, 22",
    points: [
      "Contributed significantly to the development and maintenance of web applications, leveraging React.js and Next.js, among other technologies, to drive the creation of exceptional products.",
      "Collaborated seamlessly with multifunctional teams, including designers, product managers, and developers, to deliver innovative and high-quality solutions.",
      "Prioritized responsive design and cross-browser compatibility, ensuring a superior user experience for diverse audiences.",
      "Actively engaged in code reviews, offering valuable insights and feedback to enhance code quality and team cohesion.",
    ],
  },
  {
    title: "Full-stack Android Developer at Achieve X",
    company_name: "Achieve X",
    iconBg: "#E6DEDD",
    date: "Oct, 2022 - Dec, 2022",
    points: [
      "Took a leading role in developing and maintaining web applications using React.js and Next.js, delivering robust and user-friendly solutions.",
      "Collaborated effectively with cross-functional teams, including designers, product managers, and developers, to create innovative and high-quality products.",
      "Emphasized responsive design and cross-browser compatibility to ensure optimal user interactions and satisfaction.",
      "Actively participated in code reviews, providing constructive feedback to enhance code quality and promote team growth.",
    ],
  },
  {
    title: "Application Developer Intern at IEM IEDC",
    company_name: "IEM IEDC",
    iconBg: "#383E56",
    date: "Aug, 2022 - Aug, 2023",
    points: [
      "Contributed significantly to the development and maintenance of web applications using React.js, Next.js, and other technologies, driving impactful solutions.",
      "Collaborated closely with cross-functional teams, including designers, product managers, and developers, to create high-quality and user-centric products.",
      "Prioritized responsive design and cross-browser compatibility to optimize user experiences and accessibility.",
      "Played an active role in code reviews, providing constructive feedback to enhance code quality and foster team collaboration.",
    ],
  },
  {
    title: "Flutter Application Developer Intern at IEMCC",
    company_name: "IEMCC",
    iconBg: "#E6DEDD",
    date: "Aug, 2022 - Aug, 2023",
    points: [
      "Contributed to the development and maintenance of Flutter-based mobile applications, delivering robust and efficient solutions.",
      "Collaborated seamlessly with cross-functional teams, including designers, product managers, and developers, to create impactful and user-friendly products.",
      "Focused on responsive design and cross-platform compatibility to optimize user engagement and satisfaction.",
      "Actively participated in code reviews, providing valuable input to enhance code quality and promote teamwork.",
    ],
  },
  {
    title: "React Web Developer at BudgetTrip.net",
    company_name: "BudgetTrip.net",
    iconBg: "#383E56",
    date: "Apr, 2023 - Aug, 2023",
    points: [
      "Spearheaded the development and maintenance of web applications using React.js, Next.js, and other related technologies, delivering top-notch and user-centric solutions.",
      "Collaborated effectively with cross-functional teams, including designers, product managers, and developers, to create innovative and high-quality products.",
      "Prioritized responsive design and cross-browser compatibility to ensure an exceptional user experience across platforms.",
      "Played an integral role in code reviews, offering constructive feedback to enhance code quality and foster a culture of continuous improvement.",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
