import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {

  return(
    <footer>
      <div className="infoContainer">
        <FontAwesomeIcon style={styles.iconStyle} icon={faMobileAlt}/>
        <h4>Telefon</h4>
        <p>031-123456</p>
      </div>
      <div className="infoContainer">
        <FontAwesomeIcon style={styles.iconStyle} icon={faEnvelope}/>
        <h4>Kontakt</h4>
        <p>hej@hotmail.com</p>
      </div>
      <div className="infoContainer">
        <FontAwesomeIcon style={styles.iconStyle} icon={faBuilding}/>
        <h4>Adress</h4>
        <p>Hemgatan 123, Göteborg</p>
      </div>
    </footer>
  );
}

const styles = {
  iconStyle: {
    fontSize: "1.8em",
  },
}

export {Footer};
