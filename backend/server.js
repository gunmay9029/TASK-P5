require("dotenv").config();

const express = require("express");
const sgMail = require("@sendgrid/mail");

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json({ limit: "10kb" }));

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

app.get("/health", (_req, res) => {
  res.status(200).json({ status: "ok", message: "Newsletter API is running." });
});

app.post("/subscribe", async (req, res) => {
  const email = typeof req.body?.email === "string" ? req.body.email.trim() : "";

  if (!email || !emailPattern.test(email) || email.length > 254) {
    return res.status(400).json({ message: "Please provide a valid email address." });
  }

  if (!process.env.SENDGRID_API_KEY || !process.env.SENDGRID_FROM_EMAIL) {
    console.error("SendGrid configuration is missing. Check backend/.env.");
    return res.status(500).json({ message: "Email service is not configured. Please try again later." });
  }

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const emailMessage = {
    to: email,
    from: process.env.SENDGRID_FROM_EMAIL,
    subject: "Welcome to DEV@Deakin!",
    text: `Hello,

Welcome to DEV@Deakin! Thank you for subscribing to the Daily Insider newsletter.

Regards,
DEV@Deakin`,
  };

  try {
    const [sendGridResponse] = await sgMail.send(emailMessage);
    const sendGridStatus = sendGridResponse?.statusCode;
    console.log(`SendGrid accepted welcome email. Status: ${sendGridStatus ?? "unknown"}`);
    return res.status(202).json({ message: "Subscription successful! SendGrid accepted the welcome email request." });
  } catch (error) {
    console.error("Email sending failed:", error.response?.body || error.message);
    return res.status(502).json({ message: "We could not send the welcome email. Please check the address or try again later." });
  }
});

app.use((error, _req, res, _next) => {
  if (error instanceof SyntaxError && "body" in error) {
    return res.status(400).json({ message: "Request body must contain valid JSON." });
  }
  console.error("Unexpected server error:", error.message);
  return res.status(500).json({ message: "An unexpected server error occurred." });
});

app.listen(PORT, () => {
  console.log(`Newsletter API running at http://localhost:${PORT}`);
});
