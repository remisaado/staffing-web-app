import React, { useState, useEffect } from 'react';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTransition, animated } from 'react-spring';
import { Link } from 'react-router-dom';

function MenuNavigation() {
  const [menuToggled, setMenuToggled] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('disable-scroll', menuToggled);
  },[menuToggled])

  window.addEventListener("resize", () => {
    if (window.innerWidth > 980) {
      setMenuToggled(false);
    }
  });

  const menuMaskTransitions = useTransition(menuToggled, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })
  
  return (
    <div>
      <FontAwesomeIcon
        className="menu-bar-icon"
        icon={menuToggled ? faTimes : faBars}
        onClick={() => setMenuToggled(!menuToggled)}/>
          <ul
            id="main-menu"
            className={menuToggled ? "menu-active" : "menu-inactive"}>
            <li>
              <Link
                to="/for-skolor"
                onClick={() => setMenuToggled(false)}>
                FÖR SKOLOR
              </Link>
            </li>
            <li>
              <Link
                to="/for-vikarier"
                onClick={() => setMenuToggled(false)}>
                FÖR VIKARIER
              </Link>
            </li>
            <li>
              <Link
                to="/om-oss"
                onClick={() => setMenuToggled(false)}>
                OM OSS
              </Link>
            </li>
            <li>
              <Link
                to="/kontakt"
                onClick={() => setMenuToggled(false)}>
                KONTAKT
              </Link>
            </li>
            <li>
              <Link
                to="/"
                onClick={() => setMenuToggled(false)}>
                HEM
              </Link>
            </li>
          </ul>
        {menuMaskTransitions(
          (styles, item) => item &&
          <animated.div
            style={styles}
            className="menu-mask"
            onClick={() => setMenuToggled(false)}/>
          )}
    </div>
  )
}

export {MenuNavigation};
