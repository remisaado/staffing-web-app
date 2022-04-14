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
        <p>031-123456</p>
      </div>
      <div className="info-container">
        <FontAwesomeIcon className="icon-style" icon={faEnvelope}/>
        <h4>E-post</h4>
        <p>kontakt@lararcentralen.se</p>
      </div>
      <div className="info-container">
        <FontAwesomeIcon className="icon-style" icon={faBuilding}/>
        <h4>Adress</h4>
        <p>Hemgatan 123</p>
        <p>Göteborg</p>
      </div>
      <div className="info-container">
        <FontAwesomeIcon className="icon-style" icon={faClock}/>
        <h4>Öppettider</h4>
        <p>Måndag - Fredag</p>
        <p>00:00-00:00</p>
      </div>
    </footer>
  );
}

export {Footer};
