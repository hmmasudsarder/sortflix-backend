import http from "http";
import handler from "./api/shorts";

const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:3001",
  "https://shortflix-frontend.vercel.app",
];

const server = http.createServer((req, res) => {
  const origin = req.headers.origin;

  if (typeof origin === "string" && allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Access-Control-Allow-Credentials", "true");
  }

  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    return res.end();
  }

  if (req.url === "/api/shorts" && req.method === "GET") {
    handler(req, res);
  } else {
    res.statusCode = 404;
    res.end("Not Found");
  }
});

server.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
