// server.js
import express from "express";
import bodyParser from "body-parser";
import twilio from "twilio";
import cors from "cors";

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Replace these with your Twilio credentials
const accountSid = "AC72872f00d04ffc7c1526e7c79f558253";
const authToken = "8ba96d54207271253472fd29ea91a666";
const twilioNumber = "+18889614823";

const client = twilio(accountSid, authToken);

app.post("/send-sms", async (req, res) => {
  const { phone } = req.body;

  try {
    await client.messages.create({
      body: "🌸 Thank you for signing up with Fortune Flowers! You’ll now receive our latest offers and updates.",
      from: twilioNumber,
      to: phone
    });
    res.status(200).json({ success: true, message: "Text sent successfully" });
  } catch (error) {
    console.error("Error sending SMS:", error);
    res.status(500).json({ success: false, message: "Failed to send SMS" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
