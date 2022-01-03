import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faEnvelope, faClock } from '@fortawesome/free-regular-svg-icons'
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {

  return (
    <footer id="footer">
      <div className="infoContainer">
        <FontAwesomeIcon className="iconStyle" icon={faMobileAlt}/>
        <h4>Telefon</h4>
        <p>031-123456</p>
      </div>
      <div className="infoContainer">
        <FontAwesomeIcon className="iconStyle" icon={faEnvelope}/>
        <h4>E-post</h4>
        <p>hej@hotmail.com</p>
      </div>
      <div className="infoContainer">
        <FontAwesomeIcon className="iconStyle" icon={faBuilding}/>
        <h4>Adress</h4>
        <p>Hemgatan 123, Göteborg</p>
      </div>
      <div className="infoContainer">
        <FontAwesomeIcon className="iconStyle" icon={faClock}/>
        <h4>Öppettider</h4>
        <p>Måndag - Fredag 00:00-00:00</p>
      </div>
    </footer>
  );
}

export {Footer};
