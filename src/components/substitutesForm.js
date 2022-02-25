import React, { useState } from 'react';
import axios from "axios";

const SubstitutesForm = () => {
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

  const handleSubmit = async(e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:4000/send_substitutes_form", {
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
      });
    }
    catch (error) {
      console.log(error);
    }
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
        <label>Ungefär hur ofta kan du jobba?</label>
        <div
          className="radio-container"
          onChange={(e) => setAvailability(e.target.value)}>
          <label><input type="radio" name="days" value="1-2" required/> 1-2 dagar</label>
          <label><input type="radio" name="days" value="2-3" required/> 2-3 dagar</label>
          <label><input type="radio" name="days" value="3-4" required/> 3-4 dagar</label>
          <label><input type="radio" name="days" value="4-5" required/> 4-5 dagar</label>
        </div>
        <label>CV</label>
        <input
          type="file"
          onChange={(e) => setCvFile(e.target.files[0])}
          required/>
        <label>Personligt brev</label>
        <input
          type="file"
          onChange={(e) => setOtherFile(e.target.files[1])}
          required/>
        <button type="submit">Skicka</button>
      </form>
    </section>
  );
}

export {SubstitutesForm};
