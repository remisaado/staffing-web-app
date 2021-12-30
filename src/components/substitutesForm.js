import React from 'react';

const SubstitutesForm = () => {

  return (
    <section className="substitutesFormSection">
      <form className="form">
        <h2></h2>
        <label>Förnamn:</label>
        <input
          type="text"
          required/>
        <label>Efternamn:</label>
        <input
          type="text"
          required/>
        <label>E-post:</label>
        <input
          type="email"
          required/>
        <label>Mobiltelefonnummer:</label>
        <input
          type="tel"
          required/>
        <label>Adress:</label>
        <input
          type="text"
          required/>
        <button>Skicka</button>
      </form>
    </section>
  );
}

export {SubstitutesForm};
