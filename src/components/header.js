import React from 'react';
import { MenuNavigation } from '../components'
import Logo from '../logo/logo-transparent-high-res.png';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {

  const {pathname} = useLocation();
  const headerImageClass = pathname === "/" ? "home-image" : (pathname === "/for-skolor" ? "schools-image" : (pathname === "/for-vikarier" ? "substitutes-image" : (pathname === "/om-oss" ? "about-image" : (pathname === "/kontakt" ? "contact-image" : ""))));

  return (
    <div className={`header-container ${headerImageClass}`}>
      <header id="header">
        <Link to="/" className="logo-container">
          <img src={Logo} className="logo" alt="Logo"/>
        </Link>
        <MenuNavigation/>
      </header>
      <div className="buttons-container">
        <Link to="/for-vikarier">SÖK JOBB</Link>
        <Link to="/for-skolor">HYR VIKARIE</Link>
      </div>
    </div>
  );
}

export {Header};
