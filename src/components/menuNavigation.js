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

  const menuMaskTransitions = useTransition(menuToggled, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })
// {
//   const menuTransitions = useTransition(menuToggled, {
//     from: { opacity: 0, transform: 'translateX(-100%)' },
//     enter: { opacity: 1, transform: 'translateX(0%)'  },
//     leave: { opacity: 0, transform: 'translateX(-100%)'  },
//   })
// }
  return (
    <div>
      <FontAwesomeIcon
        className="menu-bar-icon"
        icon={menuToggled ? faTimes : faBars}
        onClick={() => setMenuToggled(!menuToggled)}/>
        {/*menuTransitions(
          (styles, item) => item &&
          <animated.div
            style={styles}
            className="menu">
          </animated.div>
        )*/}
          <ul
            id="main-menu"
            className={menuToggled ? "menu-active" : "menu-inactive"}>
            <li>
              <Link
                to="/for-skolor"
                onClick={() => setMenuToggled(!menuToggled)}>
                FÖR SKOLOR
              </Link>
            </li>
            <li>
              <Link
                to="/for-vikarier"
                onClick={() => setMenuToggled(!menuToggled)}>
                FÖR VIKARIER
              </Link>
            </li>
            <li>
              <Link
                to="/om-oss"
                onClick={() => setMenuToggled(!menuToggled)}>
                OM OSS
              </Link>
            </li>
            <li>
              <Link
                to="/kontakt"
                onClick={() => setMenuToggled(!menuToggled)}>
                KONTAKT
              </Link>
            </li>
            <li>
              <Link
                to="/"
                onClick={() => setMenuToggled(!menuToggled)}>
                LOGGA IN
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
