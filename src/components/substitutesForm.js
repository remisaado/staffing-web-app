import React, { useState, useRef } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import { config } from "../constants.js";

const SubstitutesForm = () => {
  const [submitStatus, setSubmitStatus] = useState("");
  const [submitResponse, setSubmitResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [availability, setAvailability] = useState("");
  const [cvFile, setCvFile] = useState(null);
  const [otherFile, setOtherFile] = useState(null);

  const cvInputRef = useRef(null);
  const otherInputRef = useRef(null);
  const recaptchaRef = useRef();

  const baseUrl = config.url;

  const handleSubmit = async(e) => {
    e.preventDefault();
    setSubmitStatus("");
    setSubmitResponse("");
    setIsLoading(true);

    let formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("address", address);
    formData.append("city", city);
    formData.append("postalCode", postalCode);
    formData.append("availability", availability);
    formData.append("cvFile", cvFile);
    formData.append("otherFile", otherFile);

    try {
      await fetch(`${baseUrl}/send_substitutes_form`, {
        method: 'POST',
        body: formData
      }).then((res) => {
        console.log(res)
        if (!res.ok)
        {
          throw Error(res.statusText);
        }
        setSubmitStatus("Resolved");
        setSubmitResponse("Din ansökan har skickats!");
        resetForm();
      });
    }
    catch (error) {
      console.log(error);
      setSubmitStatus("Error");
      setSubmitResponse(error.message);
    }
    setIsLoading(false);
}

  const handleCaptcha = () => {
    setIsVerified(true);
  }

  const resetForm = () => {
    recaptchaRef.current.reset();
    setIsVerified(false);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setAddress("");
    setCity("");
    setPostalCode("");
    setAvailability("");
    cvInputRef.current.value = null;
    otherInputRef.current.value = null;
  }

  return (
    <section className="form-section substitutes-form-section">
      <form
        className="form"
        onSubmit={handleSubmit}>
        <h2>Skicka in din ansökan</h2>
        <div className="form-group">
          <div className="form-object">
            <label>Förnamn</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required/>
          </div>
          <div className="form-object">
            <label>Efternamn</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required/>
          </div>
        </div>
        <label>E-post</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required/>
        <label>Mobiltelefonnummer</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required/>
          <label>Adress</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required/>
        <div className="form-group">
          <div className="form-object">
            <label>Ort</label>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required/>
          </div>
          <div className="form-object flex-shrink">
            <label>Postnummer</label>
            <input
              type="text"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              required/>
          </div>
        </div>
        <label>Ungefär hur ofta kan du jobba i veckan?</label>
        <div
          className="radio-container">
          <label><input
            type="radio"
            name="days"
            onChange={(e) => setAvailability("1-2")}
            checked={availability === "1-2"}/> 1-2 dagar</label>
          <label><input
            type="radio"
            name="days"
            onChange={(e) => setAvailability("2-3")}
            checked={availability === "2-3"}/> 2-3 dagar</label>
          <label><input
            type="radio"
            name="days"
            onChange={(e) => setAvailability("3-4")}
            checked={availability === "3-4"}/> 3-4 dagar</label>
          <label><input
            type="radio"
            name="days"
            onChange={(e) => setAvailability("4-5")}
            checked={availability === "4-5"}/> 4-5 dagar</label>
        </div>
        <label>CV</label>
        <input
          ref={cvInputRef}
          type="file"
          onChange={(e) => setCvFile(e.target.files[0])}
          required/>
        <label>Personligt brev</label>
        <input
          ref={otherInputRef}
          type="file"
          onChange={(e) => setOtherFile(e.target.files[0])}
          required/>
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={process.env.REACT_APP_RECAPTCHA_TEST_KEY}
          onChange={handleCaptcha}
          />
        <p className={`submit-response-text ${submitStatus === "Resolved" ? "green" : "red"}`}>{submitResponse}</p>
        <button
          disabled={!isVerified || isLoading}
          className={`submit-button ${isLoading ? "disabled-button" : ""}`}
          type="submit">{isLoading ? "Skickar..." : "Skicka"}</button>
      </form>
    </section>
  );
}

export {SubstitutesForm};
