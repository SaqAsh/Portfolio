/**
 * API route for fetching projects data.
 * @param {Request} request
 * @returns {Promise<Response>}
 */
export async function GET(request) {
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
