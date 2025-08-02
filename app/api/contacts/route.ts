/**
 * API route for fetching contact information.
 * @param {Request} request
 * @returns {Promise<Response>}
 */
export async function GET(request: Request): Promise<Response> {
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

    return Response.json(contactMediums, {
        status: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
    });
}
