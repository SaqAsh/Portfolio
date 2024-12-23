export async function GET(request) {
    const projects = [
      {
        name: "",
        description:
          "",
        stack: ["", "", "", ""],
        link: "",
        image: "",
        largeImage: "",
      }
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
