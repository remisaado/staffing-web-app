import React, { useState } from 'react';
import axios from "axios";

const SchoolForm = () => {
  const [school, setSchool] = useState("");
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [info, setInfo] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:4000/send_schools_form", {
        school,
        address,
        name,
        phone,
        email,
        date,
        time,
        info
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

  return (
    <section className="form-section school-form-section">
      <form
        className="form"
        onSubmit={handleSubmit}>
        <h2>Fyll i formuläret för att boka en vikarie</h2>
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
        <label>Startdatum</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required/>
        <label>Starttid och sluttid</label>
        <input
          type="text"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required/>
        <label>Info om uppdrag(arbetsuppgift, årskurs, ämnen osv)</label>
        <textarea
          value={info}
          onChange={(e) => setInfo(e.target.value)}/>
        <button type="submit">Skicka</button>
      </form>
    </section>
  );
}

export {SchoolForm};
