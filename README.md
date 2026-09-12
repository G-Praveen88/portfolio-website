# Personal Portfolio Website

> **Company**: ApexPlanet Software Pvt. Ltd.  
> **Internship**: 60-Day Full Stack Web Development Internship  
> **Milestone**: TASK 1 — Foundation & Environment Setup (Days 1–12)  
> **Author**: [YOUR NAME]  
> **Live Demo**: [GitHub Pages Live Link](#github-pages-deployment) *(Replace after deploying)*

---

## About The Project

This repository contains the complete implementation for **Task 1: Foundation & Environment Setup** of the ApexPlanet Software Pvt. Ltd. 60-Day Full Stack Web Development Internship.

The goal of this task is to establish a solid, production-grade foundation in fundamental web technologies (**HTML5**, **CSS3**, and **Vanilla JavaScript**), configure local version control with **Git**, and construct a clean, modern, fully accessible, and mobile-responsive **Personal Portfolio Website** ready for zero-cost deployment on **GitHub Pages**.

### Key Highlights
- **Zero Frameworks & Zero Build Tools**: Built strictly with standards-compliant HTML5, CSS3, and ES6+ JavaScript. Runs directly in any web browser without Node.js, Webpack, Babel, Bootstrap, or Tailwind.
- **Strictly Semantic & Accessible**: Developed with WCAG accessibility guidelines in mind, including keyboard navigation, visible focus indicators, `aria-*` attributes, and screen-reader accessible forms.
- **Zero Broken Dependencies**: Includes an inline, self-contained SVG avatar graphic in `assets/profile-placeholder.svg` to guarantee the site never breaks due to external CDN outages or missing images.
- **Honest Academic & Student Representation**: Uses structured placeholders for personal and project details without inventing fake credentials, certificates, or achievements.

---

## Implemented Features

1. **Header & Responsive Navigation**:
   - Sticky header with backdrop blur and elevation shadow on scroll.
   - Branded logo with code bracket accents.
   - Mobile hamburger menu toggle with accessible ARIA attributes (`aria-expanded`, `aria-controls`, `aria-label`).
   - Seamless closing upon link selection, outside click, or pressing the `Escape` key.
   - Smooth scrolling with offset padding for sticky header.
   - Active section highlighting (ScrollSpy) via `IntersectionObserver`.

2. **Hero Section**:
   - Clear professional greeting and identity headline.
   - Aspiring Full Stack Web Developer introduction.
   - Two prominent call-to-action buttons (*View Projects* and *Contact Me*).
   - High-resolution, responsive vector profile avatar placeholder.

3. **About Me Section**:
   - Narrative highlighting academic background, career goals, and current internship focus at ApexPlanet.
   - Three structured highlight cards showcasing core principles: *Focus & Discipline*, *Responsive Design*, and *Continuous Growth*.

4. **Skills & Technologies Section**:
   - 7 core skill cards highlighting foundational competencies:
     - **HTML5**: Semantic tags, accessible forms, audio/video elements.
     - **CSS3**: Flexbox, CSS Grid, media queries, CSS variables, transitions.
     - **JavaScript**: ES6+ syntax, DOM manipulation, client-side validation.
     - **PHP**: Server-side fundamentals, control structures, modular scripts.
     - **MySQL**: Relational database concepts, schema design, basic CRUD.
     - **Git**: Distributed version control, atomic commits, branch management.
     - **GitHub**: Remote repository management, GitHub Pages deployment.
   - Balanced and honest proficiency badges without unrealistic mastery claims.

5. **Featured Projects Section**:
   - 3 clean project showcase cards:
     1. *Personal Portfolio Website* (Live Task 1 project).
     2. *[YOUR PROJECT NAME]* (Full Stack / PHP & MySQL placeholder).
     3. *[YOUR PROJECT NAME]* (Frontend / API interaction placeholder).
   - Each card features a descriptive summary, technology stack pills, and distinct buttons for *GitHub Code* and *Live Demo*.

6. **Education Section**:
   - Timeline card structure detailing degree/coursework, university/college, and academic highlights.
   - Dedicated card for the ApexPlanet 60-Day Full Stack Internship.

7. **Contact Section & Client-Side Validation**:
   - Direct communication channels (Email, Phone, Location, GitHub, LinkedIn).
   - Fully accessible contact form (Name, Email, Message).
   - Client-side validation:
     - Full Name validation (non-empty, minimum 2 characters).
     - Email validation with standard RFC regex pattern checking.
     - Message length validation (non-empty, minimum 10 characters).
     - Inline accessible error messages linked with `aria-describedby`.
     - Live success message banner without page refresh.
     - Automatic form reset on successful validation.

8. **Footer**:
   - Name, copyright notice, and links to GitHub and LinkedIn.

9. **Accessibility & Usability Enhancements**:
   - "Skip to main content" link for keyboard users.
   - Floating scroll-to-top button appearing after 300px scroll.
   - Progressive enhancement section reveal animations supporting `prefers-reduced-motion`.

---

## Technologies Used

| Technology | Purpose |
| :--- | :--- |
| **HTML5** | Semantic markup (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`) |
| **CSS3** | CSS variables, Flexbox, CSS Grid, Media Queries, Elevation Shadows |
| **Vanilla JavaScript (ES6+)** | Mobile menu, ScrollSpy, Form Validation, Scroll-to-top |
| **Git** | Distributed Version Control (Tracking progress with atomic commits) |
| **GitHub Pages** | Free, production-ready static site deployment |

---

## Project Structure

```
portfolio/
│
├── index.html                  # Main semantic HTML5 webpage
├── style.css                   # Responsive CSS3 styling & design system
├── script.js                   # Vanilla JavaScript interaction & validation
├── README.md                   # Comprehensive documentation & setup instructions
└── assets/
    └── profile-placeholder.svg # Self-contained vector avatar placeholder
```

---

## How to Run Locally

You do not need to install Node.js, npm, or any external packages to run this project.

### Method 1: Direct File Open (Easiest)
1. Navigate to the `portfolio/` folder on your computer.
2. Double-click `index.html` (or right-click and select **Open with** &rarr; your favorite browser: Chrome, Edge, Firefox, or Safari).
3. The portfolio will run immediately with all CSS styles and JavaScript interactions active.

### Method 2: VS Code Live Server Extension
1. Open the `portfolio/` folder in Visual Studio Code.
2. Install the **Live Server** extension (by Ritwick Dey) if you haven't already.
3. Right-click on `index.html` in the file explorer and click **"Open with Live Server"**.
4. The site will open at `http://127.0.0.1:5500/index.html` with automatic hot reload on file save.

### Method 3: Python Built-in HTTP Server
If you have Python installed, open a terminal in the `portfolio/` directory and run:
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000` in your web browser.

---

## Customization Guide

All personal and project information uses clearly identifiable placeholders in `index.html`. Follow the checklist below to personalize your portfolio:

| Placeholder | Where Found in `index.html` | Replacement Instructions |
| :--- | :--- | :--- |
| `[YOUR NAME]` | `<title>`, `<meta>`, Header logo, Hero, About, Footer | Replace with your full name (e.g., `Alex Johnson`) |
| `[YOUR EMAIL]` | Hero / Contact section (`mailto:[YOUR EMAIL]`) | Replace with your active email (e.g., `alex@example.com`) |
| `[YOUR PHONE]` | Contact section (`tel:[YOUR PHONE]`) | Replace with your phone number (e.g., `+91 98765 43210`) |
| `[YOUR LOCATION]` | About & Contact section | Replace with your city and country (e.g., `Bengaluru, India`) |
| `[YOUR GITHUB URL]` | Contact & Footer sections (`href="#"`) | Replace `#` and placeholder text with your GitHub profile link |
| `[YOUR LINKEDIN URL]` | Contact & Footer sections (`href="#"`) | Replace `#` and placeholder text with your LinkedIn profile link |
| `[YOUR COLLEGE NAME]` | About & Education sections | Replace with your university or college name |
| `[YOUR DEGREE]` | About & Education sections | Replace with your degree (e.g., `B.Tech in Computer Science`) |
| `[YOUR GRADUATION YEAR]`| Education section | Replace with your graduation year (e.g., `2026`) |
| `[YOUR PROJECT NAME]` | Projects section (Cards 2 and 3) | Replace with your academic or personal project titles |

> [!TIP]
> You can also replace `assets/profile-placeholder.svg` with your own photograph (`assets/profile.jpg` or `assets/profile.png`). Simply update the `src` attribute of the `<img>` tag in the Hero section of `index.html`.

---

## Contact Form Implementation Note

> [!IMPORTANT]
> The contact form in this project implements **frontend client-side validation only**.
> 
> In accordance with **Task 1 requirements** (Foundation & Environment Setup, Days 1–12), this milestone focuses purely on HTML5 forms, CSS3 styling, and JavaScript event handling & validation. There is **no backend server** connected. When you submit valid information, JavaScript intercepts the event, validates the input fields, displays a user-friendly success alert, and clears the form. No real emails are dispatched across the internet. Backend form handling with PHP and MySQL will be introduced in subsequent tasks.

---

## Git Commands Guide

Here is a quick reference for the essential Git commands used in this project:

```bash
# 1. Initialize a new local Git repository
git init

# 2. Check the current status of files (untracked, modified, staged)
git status

# 3. Stage changes for the next commit
git add .

# 4. Commit staged changes with a clear, descriptive message
git commit -m "Your descriptive commit message"

# 5. Ensure you are on the default branch named 'main'
git branch -M main

# 6. Link your local repository to your remote GitHub repository
git remote add origin https://github.com/<YOUR_USERNAME>/<REPO_NAME>.git

# 7. Push your committed changes to GitHub
git push -u origin main
```

---

## GitHub Pages Deployment

Follow these exact steps to deploy your portfolio online for free using GitHub Pages:

### Step 1: Create a Public GitHub Repository
1. Log into your account at [GitHub.com](https://github.com).
2. Click the **+** (plus) icon in the top-right corner and select **New repository**.
3. Name your repository (e.g., `personal-portfolio` or `apexplanet-task1-portfolio`).
4. Set the visibility to **Public** (required for free GitHub Pages).
5. Leave "Initialize this repository with a README" **unchecked** (we already have a local `README.md`).
6. Click **Create repository**.

### Step 2: Push Local Code to GitHub
Open your command terminal (PowerShell, Command Prompt, or Git Bash) inside the `portfolio/` folder and run:
```bash
git init
git add .
git commit -m "Initial commit: Complete ApexPlanet Task 1 portfolio"
git branch -M main
git remote add origin https://github.com/<YOUR_USERNAME>/<YOUR_REPOSITORY_NAME>.git
git push -u origin main
```
*(Make sure to replace `<YOUR_USERNAME>` and `<YOUR_REPOSITORY_NAME>` with your actual details).*

### Step 3: Enable GitHub Pages
1. Go to your repository page on GitHub.
2. Click on the **Settings** tab located at the top right of the repository.
3. In the left navigation sidebar under "Code and automation", click **Pages**.
4. Under **Build and deployment** &rarr; **Branch**:
   - Select `main` from the branch dropdown.
   - Ensure the folder is set to `/(root)`.
5. Click **Save**.

### Step 4: Access Your Live Site
1. Wait 1 to 2 minutes for GitHub Actions to build and publish your site.
2. Refresh the **Pages** settings tab. You will see a banner:  
   `"Your site is live at https://<YOUR_USERNAME>.github.io/<YOUR_REPOSITORY_NAME>/"`
3. Click the link to open your live deployed website!
4. Test the live site on desktop and mobile devices to verify all sections, buttons, and form validations function identically.

---

## Future Improvements

Following Task 1, future enhancements planned for subsequent internship milestones include:
- **PHP Backend Scripting**: Creating a server-side endpoint (`send_mail.php`) using PHPMailer to deliver actual email messages.
- **MySQL Database Storage**: Storing contact inquiries and messages securely in a relational database table with prepared statements.
- **Dark/Light Mode Switcher**: Adding a toggle switch using CSS custom properties with preference persistence via `localStorage`.
- **Dynamic Project Filtering**: Adding interactive filter buttons (e.g., *All*, *Frontend*, *Full Stack*) to filter project cards smoothly.
- **Interactive Project Modals**: Opening detailed modal dialogs displaying project screenshots and technical architecture diagrams.

---

## License & Acknowledgments

- **Internship Program**: ApexPlanet Software Pvt. Ltd. (60-Day Full Stack Web Development Internship)
- **Task**: Task 1 — Foundation & Environment Setup
- **License**: MIT Open Source License. Free to adapt and use for learning and portfolio purposes.
