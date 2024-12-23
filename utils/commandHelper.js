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
    command:
      "clear",
    description: "Clear terminal",
  },
];

const getProjects = async () => {
  const projects = await (await fetch("/api/projects")).json();
  // const projectHTML =
  //   `<h3>My Projects (You can scroll)</h3>` +
  //   projects
  //     .map(
  //       (project) => `<div class="command">
  //       <a href="${project.link}" target="_blank"><b class="command">${
  //         project.name
  //       }</b></a> - <b>${project.stack.join(", ")}</b>
  //       <p class="meaning">${project.description}</p>
  //     </div>`
  //     )
  //     .join("");
  const projectHTML =
    `<p>I'm currently working on showcasing my projects here. Stay tuned!</p>`
  return projectHTML;
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
  about: () => `Hello! I'm Saqib, a passionate engineer with a knack for problem-solving. While I am still young at ${getAge("September 26, 2005")} years old, I also love hitting the soccer field whenever I get the chance.`
  ,
  education:
    () => `I am a second year engineering student at  at <a href="https://uwaterloo.ca/content/home" target="_blank">University of Waterloo</a>.`,
  skills: () => `
    I am experienced with Javascript, Typescript and Python and the web technologies dominating at the time:<br />
    <div class="skill"><b>core</b>: HTML, CSS, Node.js, Angular.js and .NET<br /></div>
    <div class="skill"><b>frameworks</b>: React, NextJS, Express, Angular <br /></div>
    <div class="skill"><b>database</b>: MongoDB, PostgreSQL, MySQL, and SQLite<br /></div>
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
