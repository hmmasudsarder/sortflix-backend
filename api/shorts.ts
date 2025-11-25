export default function handler(req: any, res: any) {
  const shorts = [
    {
      id: 1,
      title: "Big Buck Bunny",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
      tags: ["funny", "animation"]
    },
    {
      id: 2,
      title: "Sample 5s",
      videoUrl: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
      tags: ["short"]
    }
  ];

  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(shorts));
}
