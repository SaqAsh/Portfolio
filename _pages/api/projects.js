import Cors from "cors";
import runMiddleware from "../../utils/runMiddleware";

// Initializing the cors middleware
const cors = Cors({
  methods: ["GET", "HEAD"],
});

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);
  if (req.method === "GET") {
    const projects = [
      {
        name: "Brawn",
        description:
          "Elevate your fitness journey with the ultimate workout companion! Built using the robust MERN stack, our app combines a powerful Dashboard and Analytics to track your progress with an AI driven ChatGPT powered chatbot that offers personalized workout advice, curated routines, and tailored exercises just for you. Stay motivated, informed, and in control of your fitness goals—all in one seamless experience.",
        stack: ["MongoDB", "Express.js", "React.js", "Node.js"],
        link: "https://github.com/ArnabSarker2004/Brawn",
        image: "",
        largeImage: "",
      },
      {
        name: "Interviewly.ai",
        description:
          "Your ultimate AI assistant for job interview preparation! Powered by ChatGPT's Whisper API, it seamlessly converts your voice into actionable insights, analyzing every detail to provide tailored feedback. Get the confidence and guidance you need to ace your interview and land your dream job!",
        stack: ["Next.js, ChatGPT Whisper API"],
        link: "https://github.com/SaqAsh/Interviewly.ai",
        image: "",
        largeImage: "",
      },
      {
        name: "Sort Spectre",
        description:
          "A sorting algorithm visualizer",
        stack: ["Python"],
        link: "https://github.com/SaqAsh/SortSpectre",
        image: "",
        largeImage: "",
      },
      {
        name:"STUDY!",
        description:
        "Say goodbye to procrastination and supercharge your focus with STUDY! This smart tool uses psutil to detect distracting applications and automatically shuts them down, keeping you on track and fully focused on your goals. Stay productive, stay focused, and get things done",
        stack:["Python", "Psutil","Custom Tkinter"],
        link:"https://github.com/SaqAsh/Study",
        
      }
    ];

    return res.json(projects);
  } else {
    return res.status(400).json({ message: "Only GET request allowed" });
  }
}
