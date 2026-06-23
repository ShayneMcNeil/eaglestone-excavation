# Eaglestone Excavation & Forestry Services Website

This repository contains the source code for the official website of **Eaglestone Excavation & Forestry Services**, a professional site work, septic installation, dug well digging, and watercourse alteration contractor based in Bear River, Nova Scotia, serving Southwestern Nova Scotia.

The website is designed as a modern, high-performance, responsive Single Page Application (SPA) with a focus on rich design aesthetics, SEO optimization, and seamless user interaction.

---

## 🚀 Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 8](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (using the native Vite plugin `@tailwindcss/vite` and `@import "tailwindcss"` syntax)
- **Icons**: [Lucide React](https://lucide.dev/) (modern, clean SVG icons)
- **Form Handling**: [@formspree/react](https://formspree.io/) (used for the contact and inquiry form to submit emails securely without requiring a dedicated backend)
- **Deployment**: [gh-pages](https://github.com/tschaub/gh-pages) (automatic build and deployment to GitHub Pages)

---

## 📁 Project Architecture

The codebase follows a clean, component-driven single-page architecture:

```
├── .github/              # GitHub workflows and settings (if any)
├── public/               # Static assets (images, favicon, etc.)
│   ├── eaglestone_logo.jpg
│   └── ... (excavation and material stock images)
├── src/
│   ├── assets/           # React component assets
│   ├── components/       # Reusable, global UI components
│   │   ├── Button.jsx         # Custom interactive button component
│   │   └── ServiceModal.jsx   # Details modal for selected services
│   ├── data/             # Static constants and configurations
│   │   └── constants.jsx      # Holds company contact details, services list, materials list, and image URLs
│   ├── views/            # Content views rendered conditionally by App.jsx
│   │   ├── HomeView.jsx       # Hero, core value propositions, and summary cards
│   │   ├── AboutView.jsx      # Owner details, license details, and team introduction
│   │   ├── ServicesView.jsx   # Excavation, septic, well-digging details with modal popups
│   │   ├── MaterialsView.jsx  # Catalog of available gravels, sands, soils, and mulches for sale
│   │   ├── ProjectsView.jsx   # Gallery of previous excavation and site-work projects
│   │   └── ContactView.jsx    # Contact details, business hours, and Formspree contact form
│   ├── App.jsx           # Main application shell: coordinates page navigation state, layout header/footer, and dynamic SEO updates
│   ├── index.css         # Global styles containing the Tailwind v4 import
│   └── main.jsx          # Application bootstrap entry point
├── index.html            # Core HTML template containing fallback SEO tags and viewport configuration
├── vite.config.js        # Vite configuration (sets plugins for React and Tailwind CSS, and configures the base path)
├── package.json          # Node scripts and project dependencies
└── eslint.config.js      # ESLint code style and quality rules
```

### Key Architectural Concepts:
1. **State-Based SPA Routing**: Instead of client-side routing libraries, navigation is handled dynamically in [App.jsx](file:///c:/Users/shayn/Desktop/eaglestone-excavation/src/App.jsx) via a `currentPage` state variable. This guarantees lightweight bundle sizes and high speed.
2. **Dynamic SEO Engine**: Inside [App.jsx](file:///c:/Users/shayn/Desktop/eaglestone-excavation/src/App.jsx), a React `useEffect` hook monitors `currentPage` and programmatically updates `document.title` and the `<meta name="description">` tag. This ensures that search engine crawlers receive descriptive, page-specific metadata.
3. **Decoupled Business Data**: Almost all business data, phone numbers, email addresses, and product listings reside in [constants.jsx](file:///c:/Users/shayn/Desktop/eaglestone-excavation/src/data/constants.jsx). If pricing, stock status, or descriptions change, they can be updated in a single place.

---

## 🛠️ Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (v18+ recommended) and `npm` package manager.

### 1. Install Dependencies
Clone the repository and install the project dependencies:
```bash
npm install
```

### 2. Run the Development Server
Run the local dev server with hot module replacement (HMR):
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

### 3. Lint the Codebase
Ensure code style and consistency conforms to the rules configured in `eslint.config.js`:
```bash
npm run lint
```

### 4. Build for Production
To compile the site and bundle resources into static files for production (output to the `dist/` directory):
```bash
npm run build
```

### 5. Preview the Production Build
Test your production bundle locally before deploying:
```bash
npm run preview
```

---

## 🚀 Deployment

The site is configured to deploy directly to **GitHub Pages** under the subdirectory path specified in the `homepage` and `vite.config.js` (`/eaglestone-excavation/`).

To deploy the latest changes to the live site, run:
```bash
npm run deploy
```

### What this script does:
1. **`predeploy`**: Automatically triggers `npm run build` to compile the latest assets to `/dist`.
2. **`deploy`**: Invokes the `gh-pages` CLI to push the content of the `/dist` directory to the `gh-pages` branch on GitHub, updating the live site within a few minutes.

---

## 📬 Contact Form Configuration (Formspree)

The contact form in [ContactView.jsx](file:///c:/Users/shayn/Desktop/eaglestone-excavation/src/views/ContactView.jsx) uses **Formspree** to process submissions.
If you need to change the destination email address or configure custom redirects/spam filters, log into your Formspree dashboard, locate your form ID, and update the form ID string in the `useForm` hook call within the ContactView component.
