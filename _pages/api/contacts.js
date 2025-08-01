import Cors from "cors";
import runMiddleware from "../../utils/runMiddleware";

const cors = Cors({
	methods: ["GET", "HEAD"],
});

/**
 * Legacy pages router API route for fetching contact information.
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 * @returns {Promise<void>}
 */
export default async function handler(req, res) {
	await runMiddleware(req, res, cors);
	if (req.method === "GET") {
		const contactMediums = [
			{
				medium: "github",
				username: "SaqAsh",
				link: "https://github.com/SaqAsh",
			},
			{
				medium: "email",
				username: "s5ashraf@uwaterloo.ca",
				link: "mailto:s5ashraf@uwaterloo.ca",
			},
			{
				medium: "linkedin",
				username: "saqib5ashraf",
				link: "https://www.linkedin.com/in/saqib5ashraf/",
			},
		];

		res.json(contactMediums);
	} else {
		return res.status(400).json({ message: "Only GET request allowed" });
	}
}
