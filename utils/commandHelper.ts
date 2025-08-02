export type CommandDescriptionMapping = {
    command: string;
    description: string;
};
const COMMANDS: CommandDescriptionMapping[] = [
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
        <p>Stay tuned for more exciting projects! I'm currently developing a Java-based interpreter, a cutting-edge personal finance application, and the next evolution of Interviewly.ai. The new version will feature proprietary ML/AI algorithms for tone analysis and advanced sentiment insights, taking interview preparation to the next level.</p>`
    );
};

const getContacts = async () => {
    const contactMediums = await (await fetch("/api/contacts")).json();
    return contactMediums
        .map(
            (
                contact
            ) => `<div style="display: flex; justify-content: space-between;">
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
            (
                command
            ) => `<div style="display: flex; justify-content: space-between;">
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
    I am experienced with Javascript, Typescript and Python and the web technologies dominating at the time:<br />
    <div class="skill"><b>core</b>: Java, Spring Boot, React.js, Ruby on Rails, Node.js, and .NET<br /></div>
    <div class="skill"><b>frameworks</b>: React, NextJS, Express, Angular , Vite, Storybook<br /></div>
    <div class="skill"><b>database</b>: MongoDB, PostgreSQL, MySQL, and SQLite, GraphQL<br /></div>
    <br />
Apart from web technologies, as an Computer Engineering student, I also delve into low-level programming and hardware interfacing. I have experience in the following areas:
<div class="skill"><b>Languages</b>: C++, C, Matlab, VHDL, Verilog<br /></div> 
<div class="skill"><b>Libraries and Frameworks</b>: FreeRTOS, STM32 HAL, CMSIS<br /></div>
<div class="skill"><b>Communication Protocols</b>: SPI, I2C, UART, CAN<br /></div> 
<div class="skill"><b>Embedded Tools and Equipment</b>: Oscilloscopes, Logic Analyzers, Multimeters<br /></div>
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
