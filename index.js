"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const shorts_1 = __importDefault(require("./api/shorts"));
const server = http_1.default.createServer((req, res) => {
    // --- CORS FIX ---
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3001");
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
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
        (0, shorts_1.default)(req, res);
    }
    else {
        res.statusCode = 404;
        res.end("Not Found");
    }
});
server.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});
