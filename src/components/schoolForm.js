import React from 'react';

const SchoolForm = () => {

  return (
    <section className="school-form-section">
      <form className="school-form">
        <h2>Fyll i formuläret för att boka en vikarie</h2>
        <label>Skola/Förskola</label>
        <input
          type="text"
          required/>
        <label>Adress</label>
        <input
          type="text"
          required/>
        <div className="form-group">
          <div className="form-object">
            <label>Kontaktperson</label>
            <input
              type="text"
              required/>
          </div>
          <div className="form-object">
            <label>Telefon</label>
            <input
              type="tel"
              required/>
          </div>
        </div>
        <label>E-post</label>
        <input
          type="email"
          required/>
        <label>Startdatum</label>
        <input
          type="date"
          required/>
        <label>Starttid och sluttid</label>
        <input
          type="text"
          required/>
        <label>Info om uppdrag(arbetsuppgift, årskurs, ämnen osv)</label>
        <textarea/>
        <button>Skicka</button>
      </form>
    </section>
  );
}

export {SchoolForm};
