# Portfolio - MD Shahidur Rahman (Shawon)

> A modern, responsive, and feature-rich portfolio website built with React.js, showcasing professional work, skills, and achievements.

[![Live Demo](https://img.shields.io/badge/demo-online-green.svg)](https://shahidur.me)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Made with React](https://img.shields.io/badge/Made%20with-React-61DAFB?logo=react)](https://reactjs.org/)

## ✨ Highlights

This portfolio website is a comprehensive showcase of my professional journey as a Full Stack Web Developer. Built from the ground up with modern web technologies, it features:

- 🎨 **Modern Design**: Clean, professional interface with smooth animations
- 🌓 **Dark Mode**: Seamless theme switching for comfortable viewing
- 📱 **Fully Responsive**: Perfect experience across all devices and screen sizes
- 📧 **Smart Contact System**: EmailJS integration with automatic reply functionality
- 🔗 **GitHub Integration**: Real-time project fetching and display
- ⚡ **Performance Optimized**: Fast loading times and smooth interactions
- 🎯 **SEO Friendly**: Optimized for search engines

## 🚀 Features

### Core Functionality

- **Interactive Landing Page** with animated hero section
- **Dynamic Skills Section** showcasing technical expertise
- **Education Timeline** with institution details
- **Work Experience** display with company information
- **Live Projects Gallery** connected to GitHub repositories
- **Achievement Showcase** with certifications and awards
- **Contact Form** with EmailJS integration and auto-reply
- **Social Media Integration** across all platforms
- **Smooth Scrolling** and page transitions
- **Theme Toggle** for light/dark mode preference

### Technical Features

- Real-time GitHub repository fetching
- Responsive image optimization
- Lottie animations for visual appeal
- Custom SCSS styling with global themes
- Environment-based configuration
- Production-ready build optimization

## 🛠️ Built With

### Frontend Technologies

- **React.js** - UI library for building component-based interface
- **SCSS** - Advanced styling with variables and mixins
- **React Reveal** - Scroll animations and transitions
- **React Easy Emoji** - Cross-platform emoji support
- **Lottie React** - Lightweight animations

### Services & APIs

- **EmailJS** - Email service for contact form and auto-replies
- **GitHub API** - Fetching repository and profile data
- **GraphQL** - Efficient data querying

### Build & Deployment

- **Create React App** - Development environment
- **npm/yarn** - Package management
- **Vercel/Netlify** - Deployment platforms (ready)

## 📦 Quick Start

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v14.0.0 or higher)
- **npm** (v6.0.0 or higher) or **yarn** (v1.22.0 or higher)
- **Git** (v2.0.0 or higher)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Shahidur8381/Portfolio---MD-Shahidur-Rahman-Shawon-.git
   cd Portfolio---MD-Shahidur-Rahman-Shawon-
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory:

   ```env
   # EmailJS Configuration
   REACT_APP_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
   REACT_APP_EMAILJS_SERVICE_ID=your_service_id
   REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
   REACT_APP_EMAILJS_AUTO_REPLY_TEMPLATE_ID=your_auto_reply_template_id

   # GitHub Configuration
   GITHUB_TOKEN=your_github_personal_access_token
   GITHUB_USERNAME=your_github_username
   USE_GITHUB_DATA=true

   # Medium Configuration (Optional)
   MEDIUM_USERNAME=your_medium_username
   ```

4. **Start development server**

   ```bash
   npm start
   # or
   yarn start
   ```

   Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 🎨 Customization

### Personal Information

Edit `src/portfolio.js` to customize all content:

```javascript
// Update greeting section
const greeting = {
  title: "Your Name",
  subTitle: "Your Professional Title",
  resumeLink: "link-to-your-resume"
};

// Update social media links
const socialMediaLinks = {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  gmail: "your.email@gmail.com"
  // ... add more
};

// Customize skills, experience, education, etc.
```

### Theme Customization

Modify global colors in `src/_globalColor.scss`:

```scss
// Primary colors
$buttonColor: #your-color;
$textColor: #your-color;
$subTitle: #your-color;

// Background colors
$lightBackground1: #your-color;
$darkBackground: #your-color;
```

### Lottie Animations

Replace animation files in `src/assets/lottie/` with your own from [LottieFiles](https://lottiefiles.com/).

## 📝 Available Scripts

```bash
# Development
npm start              # Start development server
npm test               # Run tests
npm run build          # Build for production
npm run eject          # Eject from Create React App (irreversible)

# GitHub Data
npm run fetch          # Fetch latest GitHub data
```

## � Configuration Guide

### Setting up EmailJS

1. Create account at [EmailJS](https://www.emailjs.com/)
2. Create email service (Gmail, Outlook, etc.)
3. Create email templates:
   - Main contact template
   - Auto-reply template
4. Copy credentials to `.env` file
5. Update template variables in `src/components/contactForm/ContactFormModal.js`

### GitHub Integration

1. Generate [Personal Access Token](https://github.com/settings/tokens)
2. Add token to `.env` file
3. Pin repositories you want to showcase on your GitHub profile
4. Run `npm run fetch` to get latest data

### SEO Optimization

Update `public/index.html` metadata:

```html
<title>Your Name - Portfolio</title>
<meta name="description" content="Your description" />
<meta name="keywords" content="your, keywords, here" />
```

## 🚀 Deployment

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Shahidur8381/Portfolio---MD-Shahidur-Rahman-Shawon-)

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Shahidur8381/Portfolio---MD-Shahidur-Rahman-Shawon-)

### GitHub Pages

1. Update `package.json`:

   ```json
   "homepage": "https://yourusername.github.io/portfolio"
   ```

2. Install gh-pages:

   ```bash
   npm install --save-dev gh-pages
   ```

3. Add deploy scripts:

   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

## 📂 Project Structure

```
portfolio/
├── public/              # Static files
│   ├── index.html      # HTML template
│   └── manifest.json   # PWA configuration
├── src/
│   ├── assets/         # Images, fonts, animations
│   ├── components/     # Reusable components
│   ├── containers/     # Page sections
│   ├── contexts/       # React contexts
│   ├── hooks/          # Custom hooks
│   ├── portfolio.js    # Personal data configuration
│   ├── App.js          # Main App component
│   └── index.js        # Entry point
├── .env                # Environment variables
├── package.json        # Dependencies and scripts
└── README.md          # Documentation
```

## 🎯 Key Sections

1. **Landing/Hero** - Introduction with animated elements
2. **Skills** - Technical skills with icons and proficiency
3. **Education** - Academic background and achievements
4. **Experience** - Professional work history
5. **Projects** - Portfolio of work with live links
6. **Achievements** - Certifications and awards
7. **Contact** - Get in touch form with social links

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Opera (latest)

## 📧 Contact

**MD Shahidur Rahman (Shawon)**

- **Email**: [shahidur8381@gmail.com](mailto:shahidur8381@gmail.com)
- **Website**: [shahidur.me](https://shahidur.me)
- **LinkedIn**: [linkedin.com/in/shahidur8381](https://www.linkedin.com/in/shahidur8381/)
- **GitHub**: [github.com/Shahidur8381](https://github.com/Shahidur8381)
- **Telegram**: [@shahidur2903](https://t.me/shahidur2903)
- **Phone**: +8801735838381

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Shahidur8381/Portfolio---MD-Shahidur-Rahman-Shawon-/issues).

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## ⭐ Show Your Support

Give a ⭐️ if you like this project!

---

<div align="center">

**Made with ❤️ by MD Shahidur Rahman**

*Building the web, one line of code at a time*

[![Website](https://img.shields.io/badge/Website-shahidur.me-blue?style=for-the-badge&logo=google-chrome&logoColor=white)](https://shahidur.me)
[![GitHub](https://img.shields.io/badge/GitHub-Shahidur8381-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Shahidur8381)

</div>
