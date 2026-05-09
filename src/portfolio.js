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
  subTitle: emoji(
    "Full Stack + Blockchain + AI/ML Developer 🚀 Building the future with Web3 🔗, Smart Contracts 📜, and AI-powered solutions 🤖. Top-rated freelancer with 15+ international projects | 100% client satisfaction | Available for Web, Blockchain & AI/ML consulting 💼"
  ),
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
    "FULL STACK | BLOCKCHAIN | AI/ML DEVELOPER | OPEN FOR FREELANCE & WEB3 CONSULTING",
  skills: [
    emoji(
      "⚡ Build full-stack web applications with React, Next.js, Vue.js, Node.js, Express, Django & Flask"
    ),
    emoji(
      "⚡ Develop secure Smart Contracts (Solidity), DApps, NFT marketplaces & Web3 integrations (Ethers.js, Web3.js, IPFS)"
    ),
    emoji(
      "⚡ Create AI/ML solutions: Predictive models, NLP chatbots, Computer Vision, Recommendation systems with TensorFlow & Scikit-learn"
    ),
    emoji(
      "⚡ Design scalable databases (MongoDB, PostgreSQL, MySQL, Redis) with JWT/OAuth authentication"
    ),
    emoji(
      "⚡ Integrate payment gateways (Stripe, PayPal), real-time features (WebSockets), and API development (REST/GraphQL)"
    ),
    emoji(
      "⚡ DevOps: Docker, AWS, CI/CD pipelines, Git workflows, Linux server management"
    ),
    emoji(
      "⚡ 15+ international projects delivered | Top-rated on Fiverr | 100% client satisfaction"
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
  display: true, // Set false to hide this section, defaults to true
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
      projectName: "Feriwala — E-commerce Ecosystem",
      projectDesc:
        "🛒 Multi-interface full-stack e-commerce platform: Client Site (Vue.js) with cart, filters & Stripe/PayPal integration | Seller Panel (React + Redux) with product CRUD, order tracking | Admin Dashboard (Next.js) with platform-wide control | JWT auth, real-time analytics, MongoDB database. Stack: Vue.js • React • Next.js • Node.js • Express • MongoDB • Redux • Stripe",
      footerLink: [
        {
          name: "View Demo",
          url: "#"
        }
      ]
    },
    {
      image: require("./assets/images/cryptoLogo.webp"),
      projectName: "CryptoMarket — NFT Marketplace DApp",
      projectDesc:
        "🔗 Decentralized NFT minting & trading platform on Ethereum/Polygon | Smart contract-powered transactions | MetaMask & WalletConnect integration | IPFS for decentralized storage | Web3.js blockchain interaction | Gas optimization strategies. Stack: React • Solidity • Hardhat • Ethers.js • IPFS • Web3 • Tailwind CSS",
      footerLink: [
        {
          name: "Live Demo",
          url: "#"
        },
        {
          name: "Smart Contract",
          url: "#"
        }
      ]
    },
    {
      image: require("./assets/images/aiLogo.webp"),
      projectName: "AI Resume Analyzer",
      projectDesc:
        "🤖 ML-powered resume screening system: NLP for parsing & keyword extraction | Job-resume matching algorithm (92% accuracy) | Skill gap analysis & recommendations | ATS compatibility checker | Interactive D3.js dashboard | FastAPI real-time processing. Stack: Python • TensorFlow • NLP • FastAPI • React • PostgreSQL • D3.js",
      footerLink: [
        {
          name: "Try It Out",
          url: "#"
        }
      ]
    },
    {
      image: require("./assets/images/notepadLogo.webp"),
      projectName: "NotePAD — Collaborative Notes",
      projectDesc:
        "📝 Real-time collaborative note-taking app: Create, edit & share notes | Comment & collaboration features | Real-time sync with WebSockets | Markdown support & rich text editor | User authentication | Fully responsive. Stack: Flask • SQLite • JavaScript • Socket.io • HTML/CSS • Bootstrap",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Shahidur8381/NotePAD---Collaborative-Note-Taking-Web-App"
        },
        {
          name: "Live Demo",
          url: "#"
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
      title: "Volunteer at BitFest 2025, KUET",
      subtitle:
        "Received volunteer certificate for contributing to one of the biggest tech fests at KUET",
      image: require("./assets/images/bitfestLogo.webp"),
      imageAlt: "BitFest Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "#"
        }
      ]
    },
    {
      title: "Web Developer at Bit2Byte Club",
      subtitle:
        "Working as a web developer at Bit2Byte Club, KUET, contributing to various tech projects and mentoring students",
      image: require("./assets/images/bit2byteLogo.webp"),
      imageAlt: "Bit2Byte Logo",
      footerLink: [
        {
          name: "Learn More",
          url: "#"
        }
      ]
    },
    {
      title: "Participant at BitFest 2025",
      subtitle:
        "Participated in BitFest 2025, KUET - an inter-university tech fest featuring programming contests, datathon competitions, and project showcase events",
      image: require("./assets/images/bitfestLogo.webp"),
      imageAlt: "BitFest Logo",
      footerLink: [{name: "Event Info", url: "#"}]
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
