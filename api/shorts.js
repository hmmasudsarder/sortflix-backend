"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = handler;
function handler(req, res) {
    const shorts = [
        {
            id: 1,
            title: "Big Buck Bunny one",
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            tags: ["funny", "animation"]
        },
        {
            id: 2,
            title: "Sample 5s two",
            videoUrl: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
            tags: ["short"]
        },
        {
            id: 3,
            title: "Big Buck Bunny three",
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            tags: ["funny", "animation"]
        },
        {
            id: 4,
            title: "Sample 5s four",
            videoUrl: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
            tags: ["short"]
        },
        {
            id: 5,
            title: "Big Buck Bunny five",
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            tags: ["funny", "animation"]
        },
        {
            id: 6,
            title: "Sample 5s six",
            videoUrl: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
            tags: ["short"]
        }
    ];
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(shorts));
}
