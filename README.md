# macOS Desktop Portfolio 🖥️

A beautifully crafted, interactive portfolio experience that replicates the macOS desktop environment. This innovative showcase brings together modern web technologies to create an immersive, desktop-like interface where visitors can explore your professional work, projects, resume, and connect with you—all within draggable, resizable windows.

## 🎯 Project Overview

**macOS Desktop Portfolio** is a unique, interactive portfolio application built with React and Vite that presents your professional information through an intuitive macOS-inspired UI. Instead of a traditional single-page portfolio, this project creates a dynamic desktop environment where each section (GitHub projects, resume, notes, music, and CLI) lives in its own draggable window, offering an engaging and memorable user experience.

This project is perfect for developers, designers, and creative professionals who want to stand out with a cutting-edge portfolio that showcases both their work and technical expertise.

## ✨ Key Features

### 🪟 Interactive Windows
- **GitHub Window**: Fetch and display your repositories and projects from GitHub
- **Resume Window**: Present your professional qualifications and experience in a polished format
- **Note Window**: A personal memo or quick notes section for additional information
- **Spotify Window**: Display your current music or favorite tracks (music integration)
- **CLI Window**: An interactive command-line interface with emulated terminal functionality

### 🎨 macOS-Inspired Design
- Authentic macOS visual design with custom dock and window styling
- Color-coded window control buttons (red for close, yellow for minimize, green for maximize)
- Smooth transitions and professional SCSS-based styling
- Responsive layout that adapts to different screen sizes

### 🖱️ Draggable & Resizable Windows
- Built with **react-rnd** for seamless drag-and-drop functionality
- Resize windows dynamically to fit your content
- Intuitive window management with keyboard and mouse support
- Persistent window positioning during your session

### 🚀 Modern Technology Stack
- **React 19.2.0**: Latest React with hooks for state management
- **Vite**: Lightning-fast build tool and development server
- **SCSS**: Advanced styling with variables, mixins, and nested rules
- **React Console Emulator**: Terminal-like experience in the browser
- **React Syntax Highlighter**: Beautiful code highlighting for technical content
- **Markdown Support**: Parse and render markdown content

### 🔗 Quick Access
- **Dock Navigation**: Icon-based dock at the bottom for quick application access
- **External Integrations**: One-click links to Google Calendar and email
- **DateTime Display**: Real-time date and time information in the navigation bar

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| React | 19.2.0 | UI framework and component library |
| Vite | 7.2.4 | Build tool and dev server |
| SCSS | 1.97.3 | Advanced styling and theming |
| react-rnd | 10.5.2 | Draggable and resizable components |
| react-console-emulator | 5.0.2 | Terminal interface emulation |
| react-syntax-highlighter | 16.1.0 | Code syntax highlighting |
| Markdown | 0.5.0 | Markdown parsing and rendering |
| ESLint | 9.39.1 | Code quality and linting |

## 📁 Project Structure

```
mac_os/
├── src/
│   ├── components/
│   │   ├── Dock.jsx              # Dock navigation component
│   │   ├── Nav.jsx               # Top navigation bar with DateTime
│   │   ├── DateTime.jsx          # Date and time display component
│   │   ├── dock.scss             # Dock styling
│   │   ├── Nav.scss              # Navigation styling
│   │   └── windows/              # Window components
│   │       ├── MacWindow.jsx      # Base window container with draggable wrapper
│   │       ├── Github.jsx        # GitHub repository showcase
│   │       ├── Resume.jsx        # Professional resume display
│   │       ├── Note.jsx          # Notes and memo section
│   │       ├── Spotify.jsx       # Music/Spotify integration
│   │       ├── Cli.jsx           # Terminal interface
│   │       ├── MacWindow.scss    # Window styling
│   │       ├── Github.scss       # GitHub window styles
│   │       ├── Resume.scss       # Resume window styles
│   │       ├── Note.scss         # Note window styles
│   │       ├── Spotify.scss      # Spotify window styles
│   │       └── Cli.scss          # CLI window styles
│   ├── assets/
│   │   └── github.json           # GitHub API data or configuration
│   ├── App.jsx                   # Main application component
│   ├── App.scss                  # Global application styling
│   └── main.jsx                  # React entry point
├── public/
│   ├── dock_icon/                # SVG icons for dock applications
│   ├── nav_icon/                 # Navigation bar icons
│   └── note.txt                  # Sample note file
├── package.json                  # Project dependencies
├── vite.config.js                # Vite configuration
├── eslint.config.js              # ESLint configuration
└── README.md                      # This file
```

## 🚀 Getting Started

### Prerequisites
- **Node.js**: Version 16 or higher
- **npm** or **yarn**: Package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd mac_os
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173` (or the port shown in your terminal)

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📋 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with hot module replacement |
| `npm run build` | Build optimized production bundle |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint to check code quality |

## 🎨 Component Architecture

### Core Components

**App.jsx** - Main application component that manages window state
- Maintains the state of all windows (open/closed)
- Conditionally renders windows based on state
- Passes window control callbacks to child components

**MacWindow.jsx** - Reusable window container
- Wraps content in draggable, resizable containers using react-rnd
- Provides macOS-style window chrome (title bar with control buttons)
- Handles window close actions through state callbacks
- Supports custom width and height

**Dock.jsx** - Navigation dock
- Icon-based launcher for different windows
- Toggles window state on icon click
- External links for Google Calendar and email
- SVG icon support

**Nav.jsx** - Top navigation bar
- Displays application name/branding
- Shows date and time via DateTime component
- Professional header styling

### Window Components

Each window component (Github, Resume, Note, Spotify, Cli) is specialized for displaying specific content:

- **Github.jsx**: Showcases your repositories, projects, and contributions
- **Resume.jsx**: Displays your professional resume in a formatted window
- **Note.jsx**: Personal notes, achievements, or additional information
- **Spotify.jsx**: Current music, playlists, or music-related content
- **Cli.jsx**: Interactive terminal interface for commands or demos

## 🎨 Styling & Design

The project uses **SCSS** for advanced styling with:
- **Variables**: Consistent colors, fonts, and spacing
- **Mixins**: Reusable styling patterns
- **Nested Rules**: Organized, readable CSS
- **Responsive Design**: Adapts to different screen sizes

### macOS Design Elements
- Clean, minimal aesthetic matching modern macOS
- Soft shadows and subtle animations
- Professional typography
- Consistent spacing and alignment
- Color-coded window controls

## 🔧 Configuration Files

**vite.config.js** - Vite build and development configuration
- React plugin integration
- Build optimization settings
- Dev server configuration

**eslint.config.js** - Code quality standards
- React-specific linting rules
- React Hooks validation
- Code consistency checks

**package.json** - Project metadata and dependencies
- NPM scripts for development and production
- Project dependencies with versions
- Development tools configuration

## 🌟 Features in Detail

### State Management
Uses React's `useState` hook for managing:
- Window visibility (open/closed state)
- Window positioning and sizing (via react-rnd)
- Application-wide state accessibility through prop drilling

### Window Management
- **Draggable Windows**: Click and drag windows anywhere on the desktop
- **Resizable Windows**: Drag edges/corners to resize
- **Window Controls**: Red button closes, other buttons provide visual feedback
- **Dynamic Positioning**: Defaults to preset positions, remembers drag state

### Integration Points
- **GitHub API**: Fetch real project data
- **External Services**: Quick links to Google Calendar and email
- **File Management**: Load and display notes from files
- **Terminal Emulation**: Interactive CLI commands

## 💡 Use Cases

- **Developer Portfolio**: Showcase projects, code, and technical skills
- **Creative Resume**: Stand out with an interactive resume presentation
- **Personal Brand**: Create a unique, memorable online presence
- **Project Showcase**: Display multiple projects in an organized interface
- **Professional Networking**: Impress potential employers or clients
- **Portfolio Website**: Replace traditional single-page portfolios

## 🚀 Performance Optimizations

- **Vite's Fast Build**: Lightning-quick development and production builds
- **Code Splitting**: Automatic optimal chunk splitting
- **Lazy Loading**: Windows are only rendered when opened
- **Efficient Rendering**: React's virtual DOM and hooks optimization
- **SCSS Compilation**: Optimized CSS output

## 📱 Browser Compatibility

Works best on modern browsers:
- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🎓 Learning Outcomes

This project demonstrates expertise in:
- Modern React patterns and hooks
- Component-based architecture
- State management in React
- SCSS advanced styling
- Vite build tool optimization
- Interactive UI development
- Desktop-inspired web design
- Responsive web design

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Improve styling or components
- Optimize performance
- Add new window applications

## 📝 License

This project is open source and available under the MIT License.

## 👨‍💻 About

This is a portfolio project created as part of Cohort 2.0, showcasing the intersection of design and development in creating unique, interactive web experiences.

---

**Happy exploring!** Open the application and drag the windows around to experience the macOS-inspired portfolio. 🎉