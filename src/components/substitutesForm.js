import React from 'react';

const SubstitutesForm = () => {

  return (
    <section className="form-section substitutes-form-section">
      <form className="form">
        <h2>Skicka in din ansökan</h2>
        <div className="form-group">
          <div className="form-object">
            <label>Förnamn</label>
            <input
              type="text"
              required/>
          </div>
          <div className="form-object">
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
        <div className="form-group">
          <div className="form-object">
            <label>Ort</label>
            <input
              type="text"
              required/>
          </div>
          <div className="form-object flex-shrink">
            <label>Postnummer</label>
            <input
              type="text"
              required/>
          </div>
        </div>
        <label>Ungefär hur ofta kan du jobba?</label>
        <div className="radio-container">
          <label><input type="radio" name="days" required/> 1-2 dagar</label>
          <label><input type="radio" name="days" required/> 2-3 dagar</label>
          <label><input type="radio" name="days" required/> 3-4 dagar</label>
          <label><input type="radio" name="days" required/> 4-5 dagar</label>
        </div>
        <label>CV</label>
        <input
          type="file"
          required/>
        <label>Personligt brev</label>
        <input
          type="file"
          required/>
        <button>Skicka</button>
      </form>
    </section>
  );
}

export {SubstitutesForm};
