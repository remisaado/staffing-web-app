import React from 'react';

const SubstitutesForm = () => {

  return (
    <section className="substitutesFormSection">
      <form className="substitutesForm">
        <h2>Skicka in din ansökan</h2>
        <div className="formGroup">
          <div className="formObject">
            <label>Förnamn</label>
            <input
              type="text"
              required/>
          </div>
          <div className="formObject">
            <label>Efternamn</label>
            <input
              type="text"
              required/>
          </div>
        </div>
        <label>E-post</label>
        <input
          type="email"
          required/>
        <label>Mobiltelefonnummer</label>
        <input
          type="tel"
          required/>
          <label>Adress</label>
          <input
            type="text"
            required/>
        <div className="formGroup">
          <div className="formObject">
            <label>Ort</label>
            <input
              type="text"
              required/>
          </div>
          <div className="formObject flexShrink">
            <label>Postnummer</label>
            <input
              type="text"
              required/>
          </div>
        </div>
        <label>Ungefär hur ofta kan du jobba?</label>
        <div className="radioContainer">
          <label><input type="radio" name="days" required/> 1-2 dagar</label>
          <label><input type="radio" name="days" required/> 2-3 dagar</label>
          <label><input type="radio" name="days" required/> 3-4 dagar</label>
          <label><input type="radio" name="days" required/> 4-5 dagar</label>
        </div>
        <div className="formGroup">
          <div className="formObject">
            <label>CV</label>
            <input
              type="file"
              required/>
          </div>
          <div className="formObject">
            <label>Personligt brev</label>
            <input
              type="file"
              required/>
          </div>
        </div>
        <button>Skicka</button>
      </form>
    </section>
  );
}

export {SubstitutesForm};
