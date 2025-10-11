import express from "express";
import bodyParser from "body-parser";
import fs from "fs";
import cors from "cors";

const app = express();
const PORT = 3000;

// Enable CORS so all browsers/devices can connect
app.use(cors());

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Simulated database for credentials and persistent token
const ADMIN_USER = "admin";
const ADMIN_PASS = "yourStrongPassword123";
let GLOBAL_TOKEN = null; // stores token shared across browsers

// Login route
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === ADMIN_USER && password === ADMIN_PASS) {
    GLOBAL_TOKEN = Math.random().toString(36).substring(2); // generate global token
    res.json({ success: true, token: GLOBAL_TOKEN });
  } else {
    res.status(401).json({ success: false, message: "Invalid credentials" });
  }
});

// Check token route
app.post("/verify", (req, res) => {
  const { token } = req.body;
  if (token === GLOBAL_TOKEN && token !== null) {
    res.json({ valid: true });
  } else {
    res.status(403).json({ valid: false });
  }
});

// Messages API
app.post("/api/messages", (req, res) => {
  const file = "messages.json";
  const data = req.body;

  if (!fs.existsSync(file)) fs.writeFileSync(file, "[]");
  const messages = JSON.parse(fs.readFileSync(file));
  messages.push({ ...data, date: new Date().toISOString() });
  fs.writeFileSync(file, JSON.stringify(messages, null, 2));

  res.json({ success: true });
});

app.get("/api/messages", (req, res) => {
  if (!fs.existsSync("messages.json")) return res.json([]);
  const messages = JSON.parse(fs.readFileSync("messages.json"));
  res.json(messages);
});

app.listen(PORT, () =>
  console.log(`🌸 Fortune Flowers admin running on http://localhost:${PORT}`)
);
