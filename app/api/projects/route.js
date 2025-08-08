/**
 * API route for fetching projects data.
 * @param {Request} request
 * @returns {Promise<Response>}
 */
export async function GET(request) {
	const projects = [
		{
			name: "CustomLicenser",
			description:
				"A powerful VS Code extension for adding license headers to your code files. Choose from standard licenses (MIT, GPL v3, Apache 2.0, BSD 3-Clause, ISC, Mozilla Public License) or create custom license templates with auto-insert functionality. Features multi-language support, template variables, and seamless integration with your development workflow.",
			stack: ["TypeScript", "VS Code Extension API", "JavaScript"],
			link: "https://github.com/SaqAsh/customlicenser",
			image: "",
			largeImage: "",
			additionalLinks: {
				marketplace:
					"https://marketplace.visualstudio.com/items?itemName=saqash-dev.customlicenser",
			},
		},
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
			description: "A sorting algorithm visualizer",
			stack: ["Python"],
			link: "https://github.com/SaqAsh/SortSpectre",
			image: "",
			largeImage: "",
		},
	];

	return Response.json(projects, {
		status: 200,
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
			"Access-Control-Allow-Headers": "Content-Type, Authorization",
		},
	});
}
