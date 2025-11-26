import http from "http";
import handler from "./api/shorts";

const server = http.createServer((req, res) => {
  // --- CORS FIX ---
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3001");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", "true");

  // Handle preflight (OPTIONS request)
  if (req.method === "OPTIONS") {
    res.writeHead(204);
    return res.end();
  }
  // ----------------

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
