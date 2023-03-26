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
    appacademy,
    threejs,
    igenesis,
    quanta,
    eats,
    lab,
    brianeats,
    brandai,
    teamsync,
    astroscience,
    cpn,
    astor2,
    logo,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "projects",
      title: "Projects",
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
      title: "Co-Founder",
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
      title: "Software engineering intern",
      company_name: "igenesis biotech",
      icon: igenesis,
      iconBg: "white",
      date: "March 2020 - April 2021",
      points: [
        "Collaborated with front-end team to enhance GUI features using RESTful APIs in Django, following SRS for the Nano Sniffer biotechnical device, improving client-side operation.",
        "Managed sprint product backlogs, developed object-oriented Java classes, and implemented communication protocol for data transfer during device engine testing under Sr engineer's supervision.",
        "Collaborated with Sr Software Engineer to optimize program runtime by debugging and testing errors during product implementation.",
        "Implemented hardware support applications and software development tools using Unix OS, enhancing UI and increasing developer workflow efficiency by 20%",
      ],
    },
    {
      title: "IT/software engineer intern",
      company_name: "Quanta Computer",
      icon: quanta,
      iconBg: "gray",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Collaborated with backend engineers to rebuild and consolidate the UI using Retool, transitioning from a single page to a multiple page layout to support cross-functional departments. The result was a 25% improvement in workflow and a 30% increase in human resource cost-efficiency.",
        "Co-managed with the IT manager and project manager to implement a database migration project from excel to MySQL",
        "Participated in and led one of the iterative prototyping stages with Figma regarding user and system requirements for building clear and responsive backend UI",
      ],
    },
    {
      title: "student",
      company_name: "App Academy",
      icon: appacademy,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Designed and built database model and schema by working closely with PostgreSQL and Ruby on Rails framework while constructing React components with Redux to accomplish dynamic CRUD features in a two-week time frame.",
        "Developed encapsulated callback functions to create asynchronous API fetching patterns, resulting in improved application scalability and enhanced search capabilities with additional categories.",
        "Collaborated with team lead to develop a dynamic,real-time chatbox component with socket.io resulting in a streamlined implementation by cross communicating with UI designer and backend engineer within a strict timeline.",
        "Streamlined user authentication and registration http request by working closely with Axios, Jwt web token and Mongoose to secure user information and enhance new user’s profile-creating experience. ",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "",
      icon: logo,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Research new technologies and programming languages to stay up-to-date with the latest trends in full stack development.",
        "Collaborate with sr software engineers and scientist as tech-lead to create use case and build a web app platform within lifescience domain, which generates 10k pageviews in the initial stage.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Brian is the best jungle NA, duoing with him gets the seemless league of legend summoner experience.",
      name: "Lucy Luo",
      designation: "support",
      company: "Brian",
      image: "https://i0.wp.com/digiparadise.com/wp-content/uploads/2021/08/Sona-Wild-Rift-Guide-Build.jpg?fit=1360%2C760&ssl=1",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Brian does.",
      name: "Alec Choy",
      designation: "COO",
      company: "Jfrog",
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
      name: "Eats",
      description:
        "Eats is a simplified yelp clone where users can discover,connect with local businesses of all sizes by different categories and leaving reviews.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "redux",
          color: "blue-text-gradient",
        },
        {
          name: "ruby on rails",
          color: "pink-text-gradient",
        },
        {
          name:"posgreSQL",
          color:"green-text-gradient",
        }
      ],
      image: eats,
      source_code_link: "https://github.com/",
    },
    {
      name: "Lab of Love",
      description:
        "Lab of Love is an original dating card game website. Each card on the website represents a user that someone could potentially match with.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "redux",
          color: "blue-text-gradient",
        },
        {
          name: "AWS",
          color: "pink-text-gradient",
        },
        {
           name:"MongoDB",
           color:"green-text-gradient",
        }
      ],
      image: lab,
      source_code_link: "https://github.com/",
    },
    {
      name: "BrianEats",
      description:
        "A web app that picks food for users base on their current location and mood. It utilized Google map API and Yelp fusion API which set routes of the designated restaurant on a global scale.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: brianeats,
      source_code_link: "https://github.com/",
    },
    {
      name: "BrandAI",
      description:
        "This is a SaaS application that generates branding snippets and keywords for the customer's brand. It is a full stack application, and created as  an AI driven SaaS app.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "OpenAI",
          color: "green-text-gradient",
        },
         {
          name:"FastAPI",
          color:"text-lime-500",
         },
         { 
          name:"docker",
          color:'text-sky-400',
         },

        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: brandai,
      source_code_link: "https://github.com/",
    },
    {
      name: "TeamSync",
      description:
        "A web-based platform that allows user to sign in with google authentication and chat with friends and co-workers in different channels. Providing a dynamic and effcient solution for group communication. ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: teamsync,
      source_code_link: "https://github.com/",
    },
    {
      name: "Cup of Proteins",
      description:
        "A e-commerce platform that sells work out suppliments to gym enthusiast. Utilizing santity.io and stripe api to enhance the cycle of purchasing experience ",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "sanityio",
          color: "green-text-gradient",
        },
        {
          name: "stripe-api",
          color: "pink-text-gradient",
        },
      ],
      image:cpn,
      source_code_link: "https://github.com/",
    },
    {
      name: "astorscientific",
      description:
        "A multi-vendors ecommerce platform customize to inline with startup's business model, connecting buyers and vendors in lifescience industry ",
      tags: [
        {
          name: "wordpress",
          color: "blue-text-gradient",
        },
        {
          name: "woocommerce",
          color: "green-text-gradient",
        },
        {
          name: "dokan",
          color: "pink-text-gradient",
        },
      ],
      image:astor2,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };