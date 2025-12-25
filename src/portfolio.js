/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Zakaria Khalil",
  title: "Hi, I'm Zakaria",
  subTitle: emoji(
    "A passionate Software Engineer & Full Stack Developer 🚀 with 4+ years of experience building high-performance backend systems, scalable microservices, and modern web applications using Java, Spring Boot, Angular, Python, and AI frameworks."
  ),
  englishresume : "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing",
  resumeLink:
    "https://drive.google.com/file/d/1YVvROOup_H48HjI1tvbSMRCdpESPCMWC/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/khalilzakaria",
  linkedin: "https://www.linkedin.com/in/zakaria-khalil-sig/",
  gmail: "zakaria.khalil1999@gmail.com",
  instagram: "https://www.instagram.com/zakariakhaliil",
  stackoverflow: "https://stackoverflow.com/users/10089626/zakaria-khalil",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK JAVA ANGULAR AND CURRENTLY TRANSITIONNING INTO AI ENGINEERING",
  skills: [
    emoji(
      "⚡Design and develop robust backend architectures using Java, Spring Boot, Kafka, REST APIs."
    ),
    emoji("⚡ Build modern, interactive web interfaces using Angular, TypeScript, and Bootstrap."),
    emoji(
      "⚡ Transform monolithic systems into cloud-ready, containerized microservices (Docker, Kubernetes, CI/CD)."
    ),
        emoji(
      "⚡Build and train AI/ML models using TensorFlow, PyTorch, Scikit-learn — from data processing to deployment."
    ),
        emoji(
      "⚡ Create end-to-end RAG pipelines, integrate LLMs into real products, and work with vector search & embeddings"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "École Hassania des Travaux Publics (EHTP)",
      logo: require("./assets/images/EHTP.png"),
      subHeader: "GIS engineering degree",
      duration: "September 2018 - April 2021",
      desc: "Top engineering school in Morocco.",
      descBullets: [
        "Ranked Top 1 in my class",
        "Strong foundation in software engineering, algorithms, data management, and geospatial systems.",
        "Completed a full PFE on data processing & geoportals (MorSnow Project)."
      ]
    },
    {
      schoolName: "Preparatory classes for engineering schools",
      logo: require("./assets/images/CPGE.png"),
      subHeader: "Passed the national common exam",
      duration: "September 2016 - Mai 2028",
      desc: "Intensive training in mathematics, physics, and engineering sciences leading to national engineering school admission",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    },
     {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Infotel",
      companylogo: require("./assets/images/infotelc.png"),
      date: "January 2026 – Present",
      desc: "Develop AirFrance projects",
      descBullets: [
        "Working at the aviation field.",
        "Analysis of client requirements and drafting of functional and technical specifications.",
        "Full-stack development of client interfaces and back-end services using Java 8, Spring, Angular, and REST APIs."
      ]
    },
    {
      role: "Software Engineer",
      company: "HPS",
      companylogo: require("./assets/images/HPSC.png"),
      date: "September 2021 – December 2025",
      desc: "Part of the acquiring team in the software factory. main mission was to develop the PowerCARD project",
      descBullets: [
        "Migration from a monolithic architecture to microservices, integrating modern technologies such as Spring Boot, Kafka, Cloud platforms, and the ELK Stack.",
        "Full-stack development of client interfaces and back-end services using Java 8, Spring, Angular, and REST APIs.",
        "Writing user guides and technical documentation for system adaptation and deployment."
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "CRSA",
      companylogo: require("./assets/images/um6pcrop.png"),
      date: "Jan 2021 – June 2021",
      desc: "Management of the geographical data for the MorSnow project."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/postpilot.png"),
      projectName: "PostPilot",
      projectDesc: "A lightweight AI agent that takes one piece of content (text, link, or short video) and automatically adapts it for multiple platforms like X, LinkedIn, Instagram, and TikTok",
    },
    {
      image: require("./assets/images/medibot.png"),
      projectName: "Medibot",
      projectDesc: "A medical chatbot designed to guide users from symptoms to the right level of care. Instead of diagnosing, it asks structured, medically validated questions to assess urgency, then clearly recommends self-care, a medical drug",
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Deep learning certification by Deeplearning.ai",
      subtitle:
        "A professional certification covering the foundations and practical applications of deep learning, including neural networks, CNNs, RNNs, and model optimization using real-world case studies. It emphasizes hands-on implementation and best practices for building scalable AI solutions.",
      image: require("./assets/images/dl.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1U5mkHxnq8DmIYrzWmlQtHUlHHBbjQSCU/view?usp=drive_link"
        }
      ]
    },
    {
      title: "State Engineering Diploma – Hassania School of Public Works (EHTP)",
      subtitle:
        "A nationally recognized state engineering diploma delivered by the Hassania School of Public Works, focusing on rigorous scientific training, engineering fundamentals, and applied problem-solving. The program develops strong analytical, technical, and project management skills through intensive coursework and engineering projects.",
      image: require("./assets/images/EHTPDIP.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1ZzoGgV76PjzmJ9ibb4qVjsQyXCxCz2T3/view?usp=sharing"
        }
      ]
    },

    {
      title: "Professional Scrum Master (PSM) Certification",
      subtitle: "A globally recognized certification validating a strong understanding of Scrum theory, Agile principles, and the Scrum Master role. It demonstrates the ability to apply Scrum practices effectively to improve team collaboration, delivery, and continuous improvement.",
      image: require("./assets/images/psm.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", 
          url: "https://drive.google.com/file/d/126X6pG61iICTpRDBjfbKxmayuj33zkOA/view?usp=drive_link"
        },

      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+212-631633107",
  email_address: "zakaria.khalil1999@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
