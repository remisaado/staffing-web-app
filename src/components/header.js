import React from 'react';
import { MenuNavigation } from '../components'
import Logo from '../logo/logo-transparent-high-res.png';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {

  const {pathname} = useLocation();
  const headerImageClass = pathname === "/" ? "homeImage" : (pathname === "/for-skolor" ? "schoolsImage" : (pathname === "/for-vikarier" ? "substitutesImage" : (pathname === "/om-oss" ? "aboutImage" : (pathname === "/kontakt" ? "contactImage" : ""))));

  return (
    <div className={`headerContainer ${headerImageClass}`}>
      <header id="header">
        <Link to="/" className="logoContainer">
          <img src={Logo} className="logo" alt="Logo"/>
        </Link>
        <MenuNavigation/>
      </header>
      <div className="buttonsContainer">
        <Link to="/for-vikarier">SÖK JOBB</Link>
        <Link to="/for-skolor">HYR VIKARIE</Link>
      </div>
    </div>
  );
}

export {Header};
