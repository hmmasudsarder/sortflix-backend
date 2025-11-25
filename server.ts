import http from "http";
import handler from "./api/shorts";

const server = http.createServer((req, res) => {
  if (req.url === "/api/shorts" && req.method === "GET") {
    handler(req, res);
  } else {
    res.statusCode = 404;
    res.end("Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
