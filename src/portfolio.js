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
  username: "MD Shahidur Rahman",
  title: "Hi all, I'm Shawon",
  subTitle: emoji(
    "A passionate Full Stack Web Developer 🚀 with expertise in HTML, CSS, JavaScript, React, Express, Node.js, Next.js, Flask, Django, MongoDB, SQL and more. Aspiring Data Scientist and Machine Learning enthusiast currently exploring the fascinating world of AI and data analytics."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1Snr-QefA5GHrov3X87n9ieD4JuEmsh0L/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/shahidur8381",
  linkedin: "https://www.linkedin.com/in/shahidur8381/",
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
    "FULL STACK WEB DEVELOPER | OPEN FOR OPPORTUNITIES | EXPLORING DATA SCIENCE & ML",
  skills: [
    emoji(
      "⚡ Build complete web applications from frontend to backend - specializing in React, Next.js, Vue.js, Node.js, Express, Flask, and Django"
    ),
    emoji(
      "⚡ Design and implement scalable database solutions with MongoDB and SQL, along with secure JWT authentication systems"
    ),
    emoji(
      "⚡ Create responsive and interactive user interfaces with modern CSS frameworks and JavaScript libraries"
    ),
    emoji(
      "⚡ Develop RESTful APIs and integrate payment gateways for e-commerce solutions"
    ),
    emoji(
      "⚡ Currently expanding skills in Data Science and Machine Learning to build intelligent, data-driven applications"
    ),
    emoji(
      "⚡ Available for freelance projects, internships, and full-time opportunities in web development"
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

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    },
    {
      Stack: "Database Management",
      progressPercentage: "70%"
    },
    {
      Stack: "Data Science",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Freelance Full Stack Developer",
      company: "Fiverr & Local Clients",
      companylogo: require("./assets/images/freelanceLogo.png"),
      date: "2022 – Present",
      desc: "Working on various web development projects for international and local clients",
      descBullets: [
        "Developed full-stack web applications using modern technologies",
        "Delivered custom solutions for e-commerce, business websites, and web apps",
        "Maintained client relationships and provided ongoing support"
      ]
    },
    {
      role: "Web Developer",
      company: "Bit2Byte Club, KUET",
      companylogo: require("./assets/images/bit2byteLogo.png"),
      date: "2023 – Present",
      desc: "Contributing to club projects and helping fellow students learn web development",
      descBullets: [
        "Developing club website and various tech projects",
        "Conducting workshops and mentoring juniors"
      ]
    },
    {
      role: "University Projects",
      company: "KUET",
      companylogo: require("./assets/images/kuetLogo.png"),
      date: "2023 – Present",
      desc: "Working on various academic and research projects in web development and data science"
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
  subtitle: "MAJOR PROJECTS THAT SHOWCASE MY FULL STACK DEVELOPMENT SKILLS",
  projects: [
    {
      image: require("./assets/images/feriwalaLogo.webp"),
      projectName: "Feriwala",
      projectDesc:
        "A comprehensive e-commerce platform for Bangladesh featuring three separate interfaces: Client Site (Vue.js) with cart management, filtering, and payment gateway integration; Seller Panel (React + Redux) with full CRUD operations for products, shipping & payment status tracking, and JWT authentication; Admin Panel (Next.js) with complete control over sellers, products, and users. A full-stack solution demonstrating expertise across multiple modern frameworks.",
      footerLink: [
        {
          name: "View Project",
          url: "#"
        }
        //  you can add extra buttons here.
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
  title: emoji("Reach Out to Me 📬"),
  subtitle:
    "Discuss a project or just want to say hi? I'm open for opportunities and collaborations!",
  number: "+8801735838381",
  email_address: "shahidur8381@gmail.com",
  telegram: "@shahidur2903"
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
