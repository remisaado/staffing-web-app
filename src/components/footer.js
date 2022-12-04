import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faEnvelope, faClock } from '@fortawesome/free-regular-svg-icons'
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {

  return (
    <footer id="footer">
      <div className="info-container">
        <FontAwesomeIcon className="icon-style" icon={faMobileAlt}/>
        <h4>Telefon</h4>
        <p>010-1717551</p>
      </div>
      <div className="info-container">
        <FontAwesomeIcon className="icon-style" icon={faEnvelope}/>
        <h4>E-post</h4>
        <p>kontakt@vikariecentralen.se</p>
      </div>
      <div className="info-container">
        <FontAwesomeIcon className="icon-style" icon={faBuilding}/>
        <h4>Adress</h4>
        <p>F O Petersons gata 6</p>
        <p>Västra Frölunda, 421 31</p>
      </div>
      <div className="info-container">
        <FontAwesomeIcon className="icon-style" icon={faClock}/>
        <h4>Öppettider</h4>
        <p>Måndag - Fredag</p>
        <p>06:00-18:00</p>
      </div>
    </footer>
  );
}

export {Footer};
