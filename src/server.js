const express = require("express");
const app = express();
require("dotenv").config({ path: "../.env" });
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const Mailgun = require("mailgun.js");
const formData = require("form-data");

// ------------------- Mailgun setup -------------------
const mg = new Mailgun(formData);
const mailgunClient = mg.client({
  username: 'api',
  key: process.env.MAILGUN_API_KEY,
  url: 'https://api.eu.mailgun.net'
});

// Allowed origin for production
const allowedOrigins = ["https://vikariecentralen.se", "https://www.vikariecentralen.se"];

// ------------------- Express middleware -------------------
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Conditionally apply CORS
if (process.env.NODE_ENV === "production") {
  // Only allow specific origins in production
  app.use(cors({
    origin: function(origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST"],
    credentials: true
  }));
} else {
  // Allow all origins in development
  app.use(cors());
}

const upload = multer({ storage: multer.memoryStorage() });

// ------------------- Routes -------------------

// Send schools form
app.post("/send_schools_form", async (req, res) => {
  const { school, address, name, phone, email, substitutes } = req.body;

  const substitutesList = substitutes.reduce(
    (acc, b) =>
      acc +
      `</br><ul><li>Startdatum: ${b.date}</li><li>Tid: ${b.time}</li><li>Info: ${b.info}</li></ul>`,
    ""
  );

  try {
    await mailgunClient.messages.create("mg.vikariecentralen.se", {
      from: process.env.USER_SENDER,
      to: process.env.USER_RECEIVER,
      subject: `Vikarie begäran ${school}`,
      html: `
        <ul>
          <li>Skola: ${school}</li>
          <li>Adress: ${address}</li>
          <li>Kontaktperson: ${name}</li>
          <li>Telefon: ${phone}</li>
          <li>E-post: ${email}</li>
        </ul>
        <ul>${substitutesList}</ul>
      `
    });
    res.status(200).send("Success");
  } catch (err) {
    console.error(err);
    res.status(400).send("Error sending email.");
  }
});

// Send substitutes form with attachments
app.post(
  "/send_substitutes_form",
  upload.fields([
    { name: "cvFile", maxCount: 1 },
    { name: "otherFile", maxCount: 1 }
  ]),
  async (req, res) => {
    const { firstName, lastName, email, phone, address, city, postalCode, availability } = req.body;

    const attachments = [
      { filename: req.files["cvFile"][0].originalname, data: req.files["cvFile"][0].buffer },
      { filename: req.files["otherFile"][0].originalname, data: req.files["otherFile"][0].buffer }
    ];

    try {
      await mailgunClient.messages.create("mg.vikariecentralen.se", {
        from: process.env.USER_SENDER,
        to: process.env.USER_RECEIVER,
        subject: `Arbetsansökan ${firstName} ${lastName}`,
        html: `
          <ul>
            <li>Namn: ${firstName} ${lastName}</li>
            <li>E-post: ${email}</li>
            <li>Telefon: ${phone}</li>
            <li>Adress: ${address}</li>
            <li>Ort: ${city}, ${postalCode}</li>
            <li>Tillgänglighet: ${availability} dagar per vecka</li>
          </ul>
        `,
        attachment: attachments
      });
      res.status(200).send("Success");
    } catch (err) {
      console.error(err);
      res.status(400).send("Error sending email.");
    }
  }
);

// Serve frontend
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// ------------------- Start server -------------------
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log("Server is listening on port " + PORT);
});