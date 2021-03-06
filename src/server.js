const express = require("express");
const app = express();
require("dotenv").config({path: "../.env"});
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");
const multer = require("multer");

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(cors());

const transport = nodemailer.createTransport({
  host: "smtp-mail.outlook.com",
  port: 587,
  auth: {
    user: process.env.USER_SENDER,
    pass: process.env.PASS
  },
  tls: {
    rejectUnauthorized: false
    //Change to true
  }
});

app.post("/send_schools_form", cors(), async (req, res) => {
  let {
    school,
    address,
    name,
    phone,
    email,
    substitutes
  } = req.body;

  var substitutesList = substitutes.reduce(function(a, b) {
  return a + '</br><ul><li>Startdatum: ' + b.date + '</li><li>Tid: ' + b.time + '</li><li>Info: ' + b.info + '</li></ul>';
}, '');

  await transport.sendMail({
    from: `${name}`,
    to: process.env.USER_RECEIVER,
    subject: "Substitutes request application",
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
  }, (err) => {
    if (err) {
      console.log(err);
      res.status(400).send('Error');
    } else {
      res.status(200).send('Success');
    }
  })
});

const upload = multer({
  storage: multer.memoryStorage()
});

let middleware = [
  cors(),
  upload.fields([
    {name: "cvFile", maxCount: 1},
    {name: "otherFile", maxCount: 1}
  ])
];

app.post("/send_substitutes_form", middleware, async (req, res) => {
  let {
    firstName,
    lastName,
    email,
    phone,
    address,
    city,
    postalCode,
    availability
  } = req.body;

  await transport.sendMail({
    from: `${firstName} ${lastName}`,
    to: process.env.USER_RECEIVER,
    subject: "Work application",
    html: `
    <ul>
      <li>Namn: ${firstName} ${lastName}</li>
      <li>E-post: ${email}</li>
      <li>Telefon: ${phone}</li>
      <li>Adress: ${address}</li>
      <li>Ort: ${city}, ${postalCode}</li>
      <li>Tillg??nglighet: ${availability} dagar per vecka</li>
    </ul>
    `,
    attachments: [{
      filename: req.files["cvFile"][0].originalname,
      content: req.files["cvFile"][0].buffer
    },
    {
      filename: req.files["otherFile"][0].originalname,
      content: req.files["otherFile"][0].buffer
    }]
  }, (err) => {
    if (err) {
      console.log(err);
      res.status(400).send('Error');
    } else {
      res.status(200).send('Success');
    }
  })
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log("Server is listening on port " + PORT);
});
