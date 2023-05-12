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
    nodejs,
    mongodb,
    git,
    docker,
    threejs,
    rubyonrails,
    postgresql,
   
   
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
      name: "Ruby on Rails",
      icon: rubyonrails,
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
    // {
    //   name: "Tailwind CSS",
    //   icon: tailwind,
    // },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Postgesql",
      icon: postgresql,
    },
    // {
    //   name: "mySQL",
    //   icon: mysql,
    // },
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
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Software engineering intern",
      company_name: "igenesis biotech",
      icon: 'https://res.cloudinary.com/dzklgl8gn/image/upload/v1683739578/igenesis_vldymi.jpg',
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
      icon: 'https://res.cloudinary.com/dzklgl8gn/image/upload/v1683739579/quanta_ss2nva.png',
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
      icon: 'https://res.cloudinary.com/dzklgl8gn/image/upload/v1683739578/app_academy_znexuj.webp',
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
      icon: 'https://res.cloudinary.com/dzklgl8gn/image/upload/v1683739401/logo_edi0yj.svg',
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
        "Brian(Zhile) is a curious software engineer with a keen interest in expanding his knowledge and creating innovative programs. During our tenure at App Academy, he consistently sought to delve deeper into the topics at hand by posing insightful queries. Additionally, he harbors a fervor for developing noval projects that incorporate different technologies, such as Journizen, brand-ai and brianeats. I am eager to witness his future endeavors!",
      name: "Lucy Luo",
      designation: "software engineer",
      company: "Amazon",
      image: "https://media.licdn.com/dms/image/C5603AQHVyR_LKbT1nA/profile-displayphoto-shrink_800_800/0/1571629263468?e=2147483647&v=beta&t=G-hyHBTZ9fRznE5--Py8o9a9_WygoW9qlc2shBbjt1o",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their projects' user experience like Zhile does.",
      name: "Josiah Leon",
      designation: "Instructor",
      company: "App Academy",
      image:"data:image/jpeg;base64,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"
    },
    {
      testimonial:
        "Zhile’s thirst for knowledge and excitement to understand new technologies is inspirational. He never just says he wants to build a new application or learn something new, he actually acts on it. ",
      name: "Cindy Vuong",
      designation: "product manager",
      // company: "AA Anumni",
      image: "https://media.licdn.com/dms/image/C5603AQFLPZTdZvmKHg/profile-displayphoto-shrink_800_800/0/1660179760551?e=2147483647&v=beta&t=l9kpgRrdqILDdpy2nj_Pnt-5MGycfmHlkWddFeQsIbk",
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
      image: 'https://res.cloudinary.com/dzklgl8gn/image/upload/v1683739333/eats_tjpqe3.png',
      source_code_link: "https://github.com/Opengundumstyle/eats",
      demo_link:'https://yeats.herokuapp.com/',
      category:"fullstack",
    },
    {
      name: "StayLocal",
      description:
        "StayLocal is an advance airbnb clone where travelers can discover and book with local residence of all sizes by different categories and locations",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },
        {
          name: "prisma",
          color: "pink-text-gradient",
        },
        {
          name:"tailwindcss",
          color:"green-text-gradient",
        }
      ],
      image: 'https://res.cloudinary.com/dzklgl8gn/image/upload/v1683739431/staylocal_yrqjfg.png',
      source_code_link: "https://github.com/Opengundumstyle/StayLocal/tree/main/staylocal",
      demo_link:'https://stay-local-ekijcggmn-opengundumstyle.vercel.app/',
      category:"fullstack",
    },
    {
      name: "ZhilePlay",
      description:
        "Zhileplay is a video sharing platform. Each person can comment, like, subscribe to the other zhileplayers' posts and have the absolute freedom to share their owns.",
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
          name: "firebase",
          color: "pink-text-gradient",
        },
        {
           name:"mongoDB",
           color:"green-text-gradient",
           
        }
      ],
      image: 'https://res.cloudinary.com/dzklgl8gn/image/upload/v1683739435/zhileplay_b9ceft.png',
      source_code_link: "https://github.com/Opengundumstyle/ZhilePlay",
      demo_link:'https://www.zhileplay.com/',
      category:"fullstack",
    },
    {
      name: "Vibey",
      description:
        "It's a music streaming application that allows users to listen to their favorite songs, discover new music. It offers a similar user interface and features as the original Spotify app..",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "redux",
          color: "green-text-gradient",
        },
        {
          name: "rapidapi",
          color: "pink-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image:'https://res.cloudinary.com/dzklgl8gn/image/upload/v1683739402/vibey_hscqsl.png',
      source_code_link: "https://github.com/Opengundumstyle/Vibey",
      demo_link:'https://vibeyopen.com/',
      category:"fullstack",
    },
    {
      name: "Journizen",
      description:
        " A social media base platform that generates everything from memes and text prompts to inspire more creative UI/UX designs by uitlizing openai."
        ,
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "nodejs",
          color: "blue-text-gradient",
        },
        {
          name: "openai",
          color: "green-text-gradient",
        },
        {
          name: "cloudinary",
          color: "green-text-gradient",
        },
        {
          name: "mongoDB",
          color: "pink-text-gradient",
        },
      ],
      image:'https://res.cloudinary.com/dzklgl8gn/image/upload/v1683739358/journizen_bxe5iz.png',
      source_code_link: "https://github.com/Opengundumstyle/Journizen",
      demo_link:'https://journizen.cloud/',
      category:"Ecommerce & Ai",
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
          name: "openai",
          color: "green-text-gradient",
        },
         {
          name:"fastapi",
          color:"text-lime-500",
         },
         { 
          name:"docker",
          color:'text-sky-400',
         },
         {
          name: "aws-lambda",
          color: "pink-text-gradient",
          },
        {
          name: "tailwindcss",
          color: "text-pink-500",
        },
      ],
      image: 'https://res.cloudinary.com/dzklgl8gn/image/upload/v1683739259/brandai_hsf9xc.png',
      source_code_link: "https://github.com/Opengundumstyle/brandAI",
      demo_link:'https://brand-ai-one.vercel.app/',
      category:"Ecommerce & Ai",
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
      image:'https://res.cloudinary.com/dzklgl8gn/image/upload/v1683739333/cpn_knjxwo.png',
      source_code_link: "https://github.com/Opengundumstyle/cup-of-proteins",
      demo_link:'https://cup-of-proteins-m69c1r7ca-opengundumstyle.vercel.app/',
      category:"Ecommerce & Ai",
    },
    {
      name: "Astor Scientific",
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
          color: "green-text-gradient",
        },
        {
          name: "MySQL",
          color: "pink-text-gradient",
        },
        {
          name: "php",
          color: "pink-text-gradient",
        },
      ],
      image:'https://res.cloudinary.com/dzklgl8gn/image/upload/v1683739259/astor2_e5qjlq.png',
      source_code_link: "https://github.com/",
      demo_link:'https://lifesciencedemo.store/',
      category:"Ecommerce & Ai",
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
      image: 'https://res.cloudinary.com/dzklgl8gn/image/upload/v1683739259/BrianEatSnapShot_jlkcgg.png',
      source_code_link: "https://github.com/Opengundumstyle/BrianEats",
      demo_link:'https://brianeats.herokuapp.com/',
      category:"games & apps",
    },
    // {
    //   name: "TeamSync",
    //   description:
    //     "A web-based platform that allows user to sign in with google authentication and chat with friends and co-workers in different channels. Providing a dynamic and effcient solution for group communication. ",
    //   tags: [
    //     {
    //       name: "react",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "firebase",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "materialui",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: teamsync,
    //   source_code_link: "https://github.com/Opengundumstyle/TeamSync",
    //   demo_link:'https://teamsync-52949.web.app/',
    //   category:"games & apps",
    // },
    {
      name: "Jobfinder",
      description:
        "A moblie app that asists job seeker in his job hunting with the enssential & easy to use functionalities like key word filtering, job posts display by popularity,job types and etc.",
      tags: [
        {
          name: "react native",
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
      image:'https://res.cloudinary.com/dzklgl8gn/image/upload/v1683739351/jobfinder_lnvvcf.jpg',
      source_code_link: "https://github.com/Opengundumstyle/JobFinder",
      demo_link:'https://github.com/Opengundumstyle/JobFinder',
      category:"games & apps",
    },
    {
      name: "BlogBox",
      description:
        "A moblie app that asists job seeker in his job hunting with the enssential & easy to use functionalities like key word filtering, job posts display by popularity,job types and etc.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "contextapi",
          color: "green-text-gradient",
        },
        {
          name: "MySQL",
          color: "pink-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image:'https://res.cloudinary.com/dzklgl8gn/image/upload/v1683739259/blogbox_bwuv0k.png',
      source_code_link: "https://github.com/Opengundumstyle/BlogBox",
      demo_link:'https://github.com/Opengundumstyle/BlogBox',
      category:"games & apps",
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
          name: "aws",
          color: "pink-text-gradient",
        },
        {
           name:"mongoDB",
           color:"green-text-gradient",
           
        }
      ],
      image: 'https://res.cloudinary.com/dzklgl8gn/image/upload/v1683739351/lab_bjqfjz.png',
      source_code_link: "https://github.com/enintoah/lab_of_love",
      demo_link:'https://laboflove.herokuapp.com/#/welcome',
      category:"games & apps",
    },
    
   
  ];
  
  export { services, technologies, experiences, testimonials, projects };