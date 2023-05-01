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
    appacademy,
    threejs,
    igenesis,
    quanta,
    eats,
    lab,
    brianeats,
    brandai,
    teamsync,
    cpn,
    astor2,
    logo,
    journizen,
    jobfinder,
    zhileplay,
    blogbox,
    staylocal,
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
        "Zhile is a curious software engineer with a keen interest in expanding his knowledge and creating innovative programs. During our tenure at App Academy, he consistently sought to delve deeper into the topics at hand by posing insightful queries. Additionally, he harbors a fervor for developing noval projects that incorporate different technologies, such as Journizen, brand-ai and brianeats. I am eager to witness his future endeavors!",
      name: "Lucy Luo",
      designation: "software engineer",
      company: "Amazon",
      image: "https://media.licdn.com/dms/image/C5603AQHVyR_LKbT1nA/profile-displayphoto-shrink_800_800/0/1571629263468?e=2147483647&v=beta&t=G-hyHBTZ9fRznE5--Py8o9a9_WygoW9qlc2shBbjt1o",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Zhile does.",
      name: "Josiah Leon",
      designation: "Instructor",
      company: "App Academy",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Zhile optimized our website, our traffic increased by 50%. We can't thank them enough!",
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
      image: eats,
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
      image: staylocal,
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
      image: zhileplay,
      source_code_link: "https://github.com/Opengundumstyle/ZhilePlay",
      demo_link:'https://www.zhileplay.com/',
      category:"fullstack",
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
      image:blogbox,
      source_code_link: "https://github.com/Opengundumstyle/BlogBox",
      demo_link:'https://github.com/Opengundumstyle/BlogBox',
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
      image:journizen,
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
      image: brandai,
      source_code_link: "https://github.com/Opengundumstyle/brandAI",
      demo_link:'https://brand-ai-one.vercel.app/',
      category:"Ecommerce & Ai",
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
          name: "materialui",
          color: "pink-text-gradient",
        },
      ],
      image: teamsync,
      source_code_link: "https://github.com/Opengundumstyle/TeamSync",
      demo_link:'https://teamsync-52949.web.app/',
      category:"games & apps",
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
      image:astor2,
      source_code_link: "https://github.com/",
      demo_link:'https://lifesciencedemo.store/',
      category:"Ecommerce & Ai",
    },
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
      image:jobfinder,
      source_code_link: "https://github.com/Opengundumstyle/JobFinder",
      demo_link:'https://github.com/Opengundumstyle/JobFinder',
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
      image: lab,
      source_code_link: "https://github.com/enintoah/lab_of_love",
      demo_link:'https://laboflove.herokuapp.com/#/welcome',
      category:"games & apps",
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
      source_code_link: "https://github.com/Opengundumstyle/BrianEats",
      demo_link:'https://brianeats.herokuapp.com/',
      category:"games & apps",
    },
   
  ];
  
  export { services, technologies, experiences, testimonials, projects };