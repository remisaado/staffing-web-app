import React, { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

const SchoolForm = () => {
  const [isVerified, setIsVerified] = useState(false);
  const [school, setSchool] = useState("");
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [substitutes, setSubstitutes] = useState([
    {date: "", time: "", info: ""}
]);

  const handleSubmit = async(e) => {
    e.preventDefault();

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
          console.log("Res is ok!");
        }
        else
        {
          console.log("There has been an error!");
        }
      });
    }
    catch (error) {
      console.log(error);
    }

    // let formData = new FormData();
    // formData.append("school", school);
    // formData.append("address", address);
    // formData.append("name", name);
    // formData.append("phone", phone);
    // formData.append("email", email);
    // substitutes.forEach(substitute => {
    //   formData.append("substitutes", JSON.stringify(substitute))
    // });
    //
    // console.log(formData.getAll('substitutes'));
    //
    // fetch("http://localhost:4000/send_schools_form", {
    //   method: 'POST',
    //   body: formData
    // })
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

  return (
    <section className="form-section school-form-section">
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
                    className="form-icons remove-icon"
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
          sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
          onChange={handleCaptcha}
        />
        <button
          disabled={!isVerified}
          className="submit-button"
          type="submit">Skicka</button>
      </form>
    </section>
  );
}

export {SchoolForm};
