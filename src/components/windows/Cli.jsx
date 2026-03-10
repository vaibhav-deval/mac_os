import "./Cli.scss";
import MacWindow from "./MacWindow";
import Terminal from "react-console-emulator";
const Cli = () => {
  const commands = {
    echo: {
      description: "Echo a passed string.",
      usage: "echo <string>",
      fn: (...args) => args.join(" "),
    },
    about: {
      description: "Display information about Ashu.",
      usage: "about",
      fn: () =>
        "Ashu is a passionate developer specializing in React, Node.js, and modern web technologies. Always eager to learn and build amazing things!",
    },
    projects: {
      description: "List some of Ashu's projects.",
      usage: "projects",
      fn: () =>
        "1. Mac OS Portfolio - A React-based macOS-inspired portfolio website.\n2. CLI Emulator - Interactive terminal component.\n3. Github Viewer - Display GitHub repositories.\n4. Note App - Simple note-taking application.",
    },
    skills: {
      description: "List Ashu's technical skills.",
      usage: "skills",
      fn: () =>
        "Frontend: React, JavaScript, HTML, CSS, SCSS\nBackend: Node.js, Express\nTools: Git, VS Code, Vite\nOther: Responsive Design, UI/UX",
    },
    contact: {
      description: "Get contact information.",
      usage: "contact",
      fn: () =>
        "Email: ashu@example.com\nLinkedIn: linkedin.com/in/ashu\nGitHub: github.com/ashu",
    },
  };
  return (
    <MacWindow>
      <div className="cli-window">
        <Terminal
          welcomeMessage={
            "Welcome to Ashu's Portfolio CLI! Available commands: help, echo, about, projects, skills, contact"
          }
          promptLabel={"ashu_@React:~$"}
          promptLabelStyle={{ color: "green" }}
          commands={commands}
        />
      </div>
    </MacWindow>
  );
};

export default Cli;
