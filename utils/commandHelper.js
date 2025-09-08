/**
 * @fileoverview Command helper utilities for the terminal interface.
 */

/**
 * @typedef {Object} CommandDefinition
 * @property {string} command
 * @property {string} description
 */

/**
 * @typedef {Object} Project
 * @property {string} name
 * @property {string} description
 * @property {string} link
 * @property {string[]} stack
 */

/**
 * @typedef {Object} Contact
 * @property {string} medium
 * @property {string} username
 * @property {string} link
 */
const COMMANDS = [
  {
    command: "about",
    description: "About Me",
  },
  {
    command: "education",
    description: "My Education",
  },
  {
    command: "skills",
    description: "My Skills",
  },
  {
    command: "projects",
    description: "My Projects",
  },
  {
    command: "resume",
    description: "My Resume",
  },
  {
    command: "contact",
    description: "Contact Me",
  },
  {
    command: "clear",
    description: "Clear terminal",
  },
];

const getProjects = async () => {
  const projects = await (await fetch("/api/projects")).json();
  const projectHTML =
    `<h3>My Projects (You can scroll)</h3>` +
    projects
      .map(
        (project) => `<div class="command">
        <a href="${project.link}" target="_blank"><b class="command">${
          project.name
        }</b></a> - <b>${project.stack.join(", ")}</b>
        <p class="meaning">${project.description}</p>
      </div>`
      )
      .join("");
  return (
    projectHTML +
    `        <br/>
        <p>Stay tuned for more exciting projects! I've shifted my focus towards lower-level programming languages and systems programming. I'm currently working on building smaller compilers, exploring assembly language programming, and diving deep into Rust and Zig. Additionally, I'm dabbling in ASIC design to understand hardware at the most fundamental level.</p>`
  );
};

const getContacts = async () => {
  const contactMediums = await (await fetch("/api/contacts")).json();
  return contactMediums
    .map(
      (contact) => `<div style="display: flex; justify-content: space-between;">
      <p style="font-size: 15px">${contact.medium}</p>
      <a class="meaning" href="${contact.link}" target="_blank">${contact.username}</a>
    </div>`
    )
    .join("");
};

/**
 * Command helper utilities for the terminal interface.
 */
export const CONTENTS = {
  help: () =>
    COMMANDS.map(
      (command) => `<div style="display: flex; justify-content: space-between;">
        <p style="font-size: 15px">${command.command}</p>
        <p>${command.description}</p>
      </div>`
    ).join("") +
    `<br />
      <div class="command">Type one of the above to view. For eg. <span style="color: var(--secondary)">about</span></div>`,

  about: () =>
    `Hello! I'm Saqib, a passionate engineer with a knack for problem-solving. While I am still young at ${getAge(
      "September 26, 2005"
    )} years old, I also love hitting the soccer field whenever I get the chance.`,

  education: () =>
    `I am a second year Computer engineering student at <a href="https://uwaterloo.ca/content/home" target="_blank">University of Waterloo</a>.`,

  skills: () => `
    As a Computer Engineering student, I have extensive experience in low-level programming and hardware interfacing:<br />
    <div class="skill"><b>Systems Languages</b>: C++, C, Rust, Zig, Assembly (x86, RISC-V)<br /></div>
    <div class="skill"><b>Hardware Description</b>: VHDL, Verilog<br /></div>
    <div class="skill"><b>Real-time Systems</b>: FreeRTOS, STM32 HAL, CMSIS, Multithreading, Concurrency, Thread synchronization<br /></div>
    <div class="skill"><b>Communication Protocols</b>: SPI, I2C, UART, CAN, TCP/IP, HTTP/HTTPS<br /></div>
    <div class="skill"><b>Performance & Optimization</b>: Memory management, Cache optimization, Profiling, Performance tuning<br /></div>
    <div class="skill"><b>Embedded Tools</b>: Oscilloscopes, Logic Analyzers, Multimeters, Debuggers<br /></div>
    <br />
    In web development, I work with modern technologies and cloud platforms:<br />
    <div class="skill"><b>Core Languages</b>: JavaScript, TypeScript, Python, Java, C#<br /></div>
    <div class="skill"><b>Backend Frameworks</b>: Node.js, Express, Spring Boot, .NET Core, Ruby on Rails<br /></div>
    <div class="skill"><b>Frontend Frameworks</b>: React, NextJS, Angular, Vite, Storybook<br /></div>
    <div class="skill"><b>Databases</b>: MongoDB, PostgreSQL, MySQL, SQLite, Redis, GraphQL<br /></div>
    <div class="skill"><b>Cloud & DevOps</b>: AWS (EC2, S3, Lambda, RDS), Docker, Kubernetes, CI/CD<br /></div>
    <div class="skill"><b>Web Servers & Performance</b>: Nginx, Apache, Load balancing, Caching strategies, CDN<br /></div>
  `,
  projects: getProjects,
  contact: getContacts,

  resume: () => {
    window.open("https://saqash.github.io/resume/", "_blank");
    return "";
  },
  error: (input) =>
    `<div class="help-command">sh: Unknown command: ${input}</div><div class="help-command">See \`help\` for info`,
};

function getAge(dateString) {
  const today = new Date();
  const birthDate = new Date(dateString);

  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;

  return age;
}
