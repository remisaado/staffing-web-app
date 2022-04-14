import React, { useState } from 'react';
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

const SchoolForm = () => {
  const [school, setSchool] = useState("");
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [info, setInfo] = useState("");
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
      });
    }
    catch (error) {
      console.log(error);
    }
  }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //
  //   let formData = {
  //     school: school,
  //     address: address,
  //     name: name,
  //     phone: phone,
  //     email: email,
  //     date: date,
  //     time: time,
  //     info: info,
  //   }
  //
  //   let xhr = new XMLHttpRequest();
  //   xhr.open("POST", "/for-skolor");
  //   xhr.setRequestHeader("content-type", "application/json");
  //
  //   xhr.onload = function() {
  //     console.log(xhr.responseText);
  //
  //     if(xhr.responseText == "success") {
  //       alert("Email sent");
  //       setSchool("");
  //       setAddress("");
  //       setName("");
  //       setPhone("");
  //       setEmail("");
  //       setDate("");
  //       setTime("");
  //       setInfo("");
  //     }
  //     else {
  //       alert("Something went wrong!");
  //     }
  //   }
  //   xhr.send(JSON.stringify.formData);
  // }

  const handleInputChange = (index, event) => {
    const values = [...substitutes];
    values[index][event.target.name] = event.target.value;
    setSubstitutes(values);
  }

  const addSubstitute = () => {
    setSubstitutes([...substitutes, {date: "", time: "", info: ""}]);
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
        <hr className="divider"/>
        { substitutes.map((substitute, index) => (
          <div key={index}>
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
              <hr className="divider"/>
          </div>
        ))}
        <button
          className="submit-button"
          type="submit">Skicka</button>
      </form>
    </section>
  );
}

export {SchoolForm};
