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
  username: "MD Shahidur Rahman (Shawon)",
  title: "Hi 👋 I'm Shawon",
  subTitle:
    "A passionate Computer Science and Engineering student at KUET. Experienced in building scalable full-stack web applications, collaborative desktop and mobile software, and data-driven solutions using Machine Learning.",
  resumeLink:
    "https://drive.google.com/file/d/1Br5ZXsyxuR0I_oiuU2VDWTlxWumHCYK6/view?usp=drive_link",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/shahidur8381",
  linkedin: "https://www.linkedin.com/in/md-shahidur-rahman-a109362a5/",
  gmail: "shahidur8381@gmail.com",
  facebook: "https://www.facebook.com/shahidur8381",
  twitter: "https://x.com/shahidur8381",
  telegram: "https://t.me/shahidur2903",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "FULL STACK WEB DEVELOPMENT | DATA SCIENCE & MACHINE LEARNING | SOFTWARE ENGINEERING",
  skills: [
    emoji(
      "⚡ Build robust, full-stack web applications and e-commerce platforms using React, Next.js, Node.js, and Express"
    ),
    emoji(
      "⚡ Develop collaborative mobile and desktop applications using Java and JavaFX"
    ),
    emoji(
      "⚡ Implement data processing, visualizations, and machine learning models using Python, Pandas, Numpy, and Scikit-Learn"
    ),
    emoji(
      "⚡ Design scalable databases and secure authentication systems using MongoDB, SQLite, and JWT"
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
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "express",
      fontAwesomeClassname: "fab fa-node-js"
    },
    {
      skillName: "nextjs",
      fontAwesomeClassname: "fas fa-arrow-circle-right"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "flask",
      fontAwesomeClassname: "fas fa-flask"
    },
    {
      skillName: "django",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "mongodb",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "sql",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "blockchain",
      fontAwesomeClassname: "fas fa-link"
    },
    {
      skillName: "ethereum",
      fontAwesomeClassname: "fab fa-ethereum"
    },
    {
      skillName: "ai-ml",
      fontAwesomeClassname: "fas fa-robot"
    }
  ,
    {
      skillName: "pandas",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "matplotlib",
      fontAwesomeClassname: "fas fa-chart-pie"
    },
    {
      skillName: "numpy",
      fontAwesomeClassname: "fas fa-calculator"
    },
    {
      skillName: "scikit-learn",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "deep learning",
      fontAwesomeClassname: "fas fa-network-wired"
    },
    {
      skillName: "neural networks",
      fontAwesomeClassname: "fas fa-project-diagram"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Khulna University of Engineering & Technology (KUET)",
      logo: require("./assets/images/kuetLogo.png"),
      subHeader: "Bachelor of Science in Computer Science and Engineering",
      duration: "October 2023 - Present",
      desc: "Active member of programming and tech clubs at KUET",
      descBullets: [
        "Member of SGIPC Club (Programming Club)",
        "Member of Bit2Byte Club (Tech Club)",
        "Working on various university projects and competitions"
      ]
    },
    {
      schoolName: "Rajshahi Govt. City College",
      logo: require("./assets/images/cityCollegeLogo.png"),
      subHeader: "Intermediate at Science",
      duration: "2021 - 2023",
      desc: "GPA 5.00 out of 5.00. Developed full stack projects and ranked in top 5%",
      descBullets: [
        "Worked as Full Stack Developer",
        "Ranked in top 5% among all students for full stack projects"
      ]
    }
  ]
};

// Your top proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend Development (React, Next.js, Vue.js)", //Insert stack or technology you have experience in
      progressPercentage: "92%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend Development (Node.js, Django, Flask)",
      progressPercentage: "88%"
    },
    {
      Stack: "Blockchain & Web3 (Solidity, Smart Contracts)",
      progressPercentage: "85%"
    },
    {
      Stack: "Database (MongoDB, PostgreSQL, MySQL)",
      progressPercentage: "90%"
    },
    {
      Stack: "AI/ML & Data Science (TensorFlow, NLP)",
      progressPercentage: "75%"
    },
    {
      Stack: "DevOps & Cloud (Docker, AWS, CI/CD)",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineering Intern",
      company: "DecodeLab",
      companylogo: require("./assets/images/freelanceLogo.png"), // fallback logo
      date: "Feb 2026 - Jun 2026",
      desc: "Contributed to the development and optimization of web applications, focusing on scalable architecture and clean code practices.",
      descBullets: [
        "Collaborated with the engineering team to integrate new features and resolve critical system bugs."
      ]
    },
    {
      role: "Freelance Full Stack + Blockchain Developer",
      company: "Fiverr, Upwork & Direct Clients",
      companylogo: require("./assets/images/freelanceLogo.png"),
      date: "January 2022 – Present",
      desc: "Top-rated developer delivering Web, Blockchain & AI/ML solutions to international clients",
      descBullets: [
        "✅ 15+ international projects delivered with 100% client satisfaction",
        "✅ Expertise: Full-stack web apps, Smart Contracts (Solidity), DApps, AI/ML integration",
        "✅ Total Earnings: $12,000+ | Specializing in e-commerce, NFT platforms & SaaS solutions",
        "✅ Technologies: React, Next.js, Node.js, Django, Solidity, Web3.js, TensorFlow"
      ]
    },
    {
      role: "Web Developer",
      company: "Bit2Byte Tech Club, KUET",
      companylogo: require("./assets/images/bit2byteLogo.png"),
      date: "October 2023 – Present",
      desc: "Leading web development initiatives and mentoring junior developers",
      descBullets: [
        "Developing club website & internal tools for event management",
        "Mentoring 20+ juniors in web development, Git workflows & best practices",
        "Organizing workshops & hackathons on modern web technologies"
      ]
    },
    {
      role: "Volunteer Developer",
      company: "BitFest 2025 (KUET's Largest Tech Fest)",
      companylogo: require("./assets/images/bitfestLogo.webp"),
      date: "February 2025",
      desc: "Built event management system and coordinated technical logistics for 500+ participants"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false, // Set false to hide this section, defaults to true
  displayFormat: "tiles", // "list" or "tiles" - tiles format shows projects in a grid with better visual appeal
  autoSlide: true, // Enable automatic sliding animation for project tiles
  slideInterval: 3000 // Slide interval in milliseconds (3 seconds)
};

// Some big projects you have worked on

const bigProjects = {
  title: "Featured Projects",
  subtitle: "FULL STACK | BLOCKCHAIN | AI/ML PROJECTS SHOWCASING EXPERTISE",
  projects: [
    {
      image: require("./assets/images/feriwalaLogo.webp"),
      projectName: "Feriwala (E-Commerce Platform)",
      projectDesc:
        "Built a full stack e-commerce product level website with admin panel. Where client panel uses clerk, reactjs, jwt auth, season management and admin panel created using nextjs focusing on security.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Shahidur8381/Feriwala-Full-Stack-Bangladeshi-E-commerce-Platform"
        }
      ]
    },
    {
      image: require("./assets/images/notepadLogo.webp"),
      projectName: "SyncNote (Android)",
      projectDesc:
        "Built an Android app SyncNote with Java - A powerful collaborative notepad app with real-time sync and secure sharing.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Shahidur8381/SyncNote-Android-A-Powerful-Collaborative-Notepad-App-with-Real-Time-Sync-Sharing"
        }
      ]
    },
    {
      image: require("./assets/images/notepadLogo.webp"),
      projectName: "SyncNote (Desktop)",
      projectDesc:
        "Built a desktop version of SyncNote using JavaFX - A desktop-based collaborative notepad application with secure sharing.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Shahidur8381/SyncNote-A-Desktop-Based-Collaborative-Notepad-Application-with-Secure-Sharing"
        }
      ]
    },
    {
      image: require("./assets/images/pwaLogo.webp"),
      projectName: "KLAC (KUET Lab Assignment Cover Generator)",
      projectDesc:
        "Built a website name KLAC which automatically creates the KUET assignment & lab report cover page with information.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Shahidur8381/KLAC---KUET-Lab-Assignment-Cover-Generator"
        },
        {
          name: "Live Demo",
          url: "https://klac.netlify.app"
        }
      ]
    },
    {
      image: require("./assets/images/portfolioLogo.png"),
      projectName: "Personal Portfolio Website",
      projectDesc:
        "Built a portfolio website (shahidur.me) using Vite + React to showcase projects and development skills.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Shahidur8381/Portfolio---MD-Shahidur-Rahman-Shawon-"
        },
        {
          name: "Live Demo",
          url: "https://shahidur.me"
        }
      ]
    },
    {
      image: require("./assets/images/kuetLogo.png"),
      projectName: "KUET Journalism Association Website",
      projectDesc:
        "Built a portfolio website for a club of KUET (KUET Journalism Association).",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Shahidur8381/-kuetja-portfolio"
        }
      ]
    },
    {
      image: require("./assets/images/cryptoLogo.webp"),
      projectName: "Kupata Coin ($KUPA)",
      projectDesc:
        "Built a memecoin website named Kupata Coin ($KUPA).",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Shahidur8381/KUPATA-coin-KUPA-"
        },
        {
          name: "Live Demo",
          url: "https://kupata.netlify.app"
        }
      ]
    },
    {
      image: require("./assets/images/cryptoLogo.webp"),
      projectName: "SBE-COIN",
      projectDesc:
        "Built another memecoin website SBE-COIN.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Shahidur8381/SBE-COIN"
        },
        {
          name: "Live Demo",
          url: "https://sbecoin.netlify.app/"
        }
      ]
    },
    {
      image: require("./assets/images/cryptoLogo.webp"),
      projectName: "🥩The Great Beef Off — Trump vs Elon",
      projectDesc:
        "Built another memecoin website: The Great Beef Off — Trump vs Elon.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Shahidur8381/-The-Great-Beef-Off-Trump-vs-Elon"
        },
        {
          name: "Live Demo",
          url: "https://beefbeef.netlify.app/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, and Contributions that I'm proud of!",

  achievementsCards: [
    {
      title: "Data Science Certification",
      subtitle:
        "Validated expertise in ML algorithms, neural networks, and data visualization.",
      image: require("./assets/images/achievementLogo.webp"),
      imageAlt: "Data Science Certificate",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1jbJhHGUsfC1Ia0-8NGS_xODxwktiPxTh/view?usp=sharing"
        }
      ]
    },
    {
      title: "Volunteer at BitFest 2025, KUET",
      subtitle:
        "Received volunteer certificate for contributing to one of the biggest tech fests at KUET",
      image: require("./assets/images/bitfestLogo.webp"),
      imageAlt: "BitFest Logo",
      footerLink: []
    },
    {
      title: "Web Developer at Bit2Byte Club",
      subtitle:
        "Working as a web developer at Bit2Byte Club, KUET, contributing to various tech projects and mentoring students",
      image: require("./assets/images/bit2byteLogo.webp"),
      imageAlt: "Bit2Byte Logo",
      footerLink: []
    },
    {
      title: "Participant at BitFest 2025",
      subtitle:
        "Participated in BitFest 2025, KUET - an inter-university tech fest featuring programming contests, datathon competitions, and project showcase events",
      image: require("./assets/images/bitfestLogo.webp"),
      imageAlt: "BitFest Logo",
      footerLink: []
    },
    {
      title: "Top 5% in Full Stack Projects",
      subtitle:
        "Ranked in top 5% among all students for full stack project development at Rajshahi Govt. City College",
      image: require("./assets/images/achievementLogo.webp"),
      imageAlt: "Achievement Logo",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Let's Build Something Amazing Together! 🚀"),
  subtitle:
    "Discuss a project, explore collaboration opportunities, or just want to say hi? I'm here to help bring your ideas to life!",
  number: "+8801735838381",
  email_address: "shahidur8381@gmail.com",
  telegram: "@shahidur2903",
  // Auto-writing animation for dynamic text display
  animatedTexts: [
    "Let's Build Something Amazing Together! 💡",
    "Ready to Transform Your Vision into Reality? 🚀",
    "Looking for Web, Blockchain or AI/ML Expert? 🔥",
    "Need a Full Stack Developer? I'm Here! 💻",
    "Let's Create Innovative Solutions Together! ✨",
    "Your Next Project Starts Here! 🎯"
  ]
};

// Twitter Section

const twitterDetails = {
  userName: "shahidur8381", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
