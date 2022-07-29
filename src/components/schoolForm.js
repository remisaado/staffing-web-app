import React, { useState, useRef } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

const SchoolForm = () => {
  const [submitStatus, setSubmitStatus] = useState("");
  const [submitResponse, setSubmitResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [school, setSchool] = useState("");
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [substitutes, setSubstitutes] = useState([
    {date: "", time: "", info: ""}
  ]);

  const recaptchaRef = useRef();

  const handleSubmit = async(e) => {
    e.preventDefault();
    setSubmitStatus("");
    setSubmitResponse("");
    setIsLoading(true);

    try {
      await axios.post("http://localhost:4000/send_schools_form", {
        school,
        address,
        name,
        phone,
        email,
        substitutes
      }).then((res) => {
        if (res.status)
        {
          setSubmitStatus("Resolved");
          setSubmitResponse("Din begäran har skickats!");
          resetForm();
        }
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

  const handleInputChange = (index, event) => {
    const values = [...substitutes];
    values[index][event.target.name] = event.target.value;
    setSubstitutes(values);
  }

  const addSubstitute = () => {
    if(substitutes.length < 25)
    {
      setSubstitutes([...substitutes, {date: "", time: "", info: ""}]);
    }
  }

  const removeSubstitute = (index) => {
    if(substitutes.length > 1)
    {
      const values = [...substitutes];
      values.splice(index, 1);
      setSubstitutes(values);
    }
  }

  const resetForm = () => {
    recaptchaRef.current.reset();
    setIsVerified(false);
    setSchool("");
    setAddress("");
    setName("");
    setPhone("");
    setEmail("");
    setSubstitutes([{date: "", time: "", info: ""}]);
  }

  return (
    <section className="form-section substitutes-form-section">
      <form
        className="form"
        onSubmit={handleSubmit}>
        <h2>Fyll i formuläret för att boka vikarier</h2>
        <label>Skola/Förskola</label>
        <input
          type="text"
          value={school}
          onChange={(e) => setSchool(e.target.value)}
          required/>
        <label>Adress</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required/>
        <div className="form-group">
          <div className="form-object">
            <label>Kontaktperson</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required/>
          </div>
          <div className="form-object">
            <label>Telefon</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required/>
          </div>
        </div>
        <label>E-post</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required/>
        { substitutes.map((substitute, index) => (
          <div key={index}>
            <div className={substitutes.length > 1 ? "" : "hide"}>
              <p className="substitute-number-header">Vikarie #{index + 1}</p>
              <hr className="divider"/>
            </div>
            <div className="form-group">
              <div className="form-object">
                <label>Startdatum</label>
                <input
                  name="date"
                  type="date"
                  max={ "9999-12-31"}
                  value={substitute.date}
                  onChange={event => handleInputChange(index, event)}/>
              </div>
              <div className="form-object">
                <label>Starttid och sluttid</label>
                <input
                  name="time"
                  type="text"
                  value={substitute.time}
                  onChange={event => handleInputChange(index, event)}/>
              </div>
            </div>
              <div className="form-group">
                <div className="form-object">
                  <label>Info om uppdrag</label>
                  <input
                    name="info"
                    type="text"
                    placeholder="Arbetsuppgift, årskurs, ämnen osv."
                    value={substitute.info}
                    onChange={event => handleInputChange(index, event)}/>
                </div>
                <div className="form-icons-group">
                  <FontAwesomeIcon
                    icon={faMinus}
                    className={substitutes.length > 1 ? "form-icons remove-icon" : "hide"}
                    onClick={() => removeSubstitute(index)}/>
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="form-icons add-icon"
                    onClick={() => addSubstitute()}/>
                </div>
              </div>
          </div>
        ))}
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={process.env.REACT_APP_RECAPTCHA_TEST_KEY}
          onChange={handleCaptcha}
          />
        <p className={`submit-response-text ${submitStatus === "Resolved" ? "green" : "red"}`}>{submitResponse}</p>
        <button
          disabled={!isVerified || isLoading}
          className={`submit-button ${isLoading === true ? "disabled-button" : ""}`}
          type="submit">{isLoading ? "Skickar..." : "Skicka"}</button>
      </form>
    </section>
  );
}

export {SchoolForm};
