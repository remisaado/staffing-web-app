const express = require("express");
const app = express();
require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(cors());;

const transport = nodemailer.createTransport({
  host: "smtp-mail.outlook.com",
  port: 587,
  auth: {
    user: process.env.USER,
    pass: process.env.PASS
  },
  tls: {
    rejectUnauthorized: false
  }
});

app.post("/send_schools_form", cors(), async (req, res) => {
  let {
    school,
    address,
    name,
    phone,
    email,
    date,
    time,
    info
  } = req.body;

  await transport.sendMail({
    from: `${name}`,
    to: process.env.USER,
    subject: "Substitutes request application",
    html: `
    <ul>
      <li>Skola: ${school}</li>
      <li>Adress: ${address}</li>
      <li>Kontaktperson: ${name}</li>
      <li>Telefon: ${phone}</li>
      <li>E-post: ${email}</li>
      <li>Startdatum: ${date}</li>
      <li>Starttid och sluttid ${time}</li>
      <li>Info om uppdrag: ${info}</li>
    </ul>
    `
  })
});

app.post("/send_substitutes_form", cors(), async (req, res) => {
  let {
    firstName,
    lastName,
    email,
    phone,
    address,
    city,
    postalCode,
    availability,
    cvFile,
    otherFile
  } = req.body;

  await transport.sendMail({
    from: `${firstName} ${lastName}`,
    to: process.env.USER,
    subject: "Work application",
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
    attachments: [{
      filename: "",
      path: ""
    }]
  })
});

app.listen(4000, () => {
  console.log("Server is listening on port 4000");
});
