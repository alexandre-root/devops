const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
    res.json({ status: "update-health", timestamp: new Date() });
});

app.get("/api/activities", (req, res) => {
    res.json([]);
});

app.listen(3000, () => console.log("VitalSync API on :3000"));
