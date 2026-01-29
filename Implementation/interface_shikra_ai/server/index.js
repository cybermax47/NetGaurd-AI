import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Mock anomalies endpoint (later wired to AI + Postgres)
app.get("/api/anomalies", (req, res) => {
  const mockData = [
    {
      id: 1,
      timestamp: new Date().toISOString(),
      type: "DDoS",
      severity: "high",
      sourceIp: "192.168.1.10",
      destinationIp: "10.0.0.5",
      description: "Unusually high traffic volume detected",
    },
    {
      id: 2,
      timestamp: new Date(Date.now() - 5 * 60 * 1000).toISOString(),
      type: "Port Scan",
      severity: "medium",
      sourceIp: "203.0.113.42",
      destinationIp: "10.0.0.10",
      description: "Multiple ports probed from single external host",
    },
  ];
  res.json({ anomalies: mockData });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});


