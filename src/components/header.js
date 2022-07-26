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
      <div className="main-page-container">
        <div className={pathname === "/" ? "main-page-text" : "hide"}>
          <h1>
            Vikariebemanning till skolor och förskolor
          </h1>
          <p>
            Vikariecentralen arbetar med uthyrning av vikarier och rekrytering av personal till skolor och förskolor.
            Vi strävar efter att vara det självklara valet när ni söker vikarier. Vi står redo med kompetent och
            pålitlig personal oavsett om det handlar om kortare eller längre uppdrag
          </p>
        </div>
        <div className={pathname === "/" ? "buttons-container" : "hide"}>
          <Link to="/for-vikarier">SÖK JOBB</Link>
          <Link to="/for-skolor">HYR VIKARIE</Link>
        </div>
      </div>
    </div>
  );
}

export {Header};
