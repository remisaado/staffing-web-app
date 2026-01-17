import React from 'react';

const Contact = () => {

  return (
    <div className="text-container">
      <h1 className="subheading">Kontakta oss</h1>
      <div className="contact-highlight-card">
        <ul>
          <li><h4>Kontakt</h4></li>
          <li>Telefon: <a href="tel:0101717551">010-1717551</a></li>
          <li>E-post: <a href="mailto:kontakt@vikariecentralen.se">kontakt@vikariecentralen.se</a></li>
          <li><h4>Öppettider</h4></li>
          <li>Måndag - Fredag 06:00-18:00</li>
          <li><h4>Adress</h4></li>
          <li>F O Petersons gata 6</li>
          <li>Västra Frölunda, 421 31</li>
        </ul>
      </div>
    </div>
  );
}

export {Contact};
