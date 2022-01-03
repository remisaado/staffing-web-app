import { useState } from 'react';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTransition, animated } from 'react-spring';
import { Link } from 'react-router-dom';

function MenuNavigation() {
  const [menuToggled, setMenuToggled] = useState(false);

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
        className="menuBarIcon"
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
            id="mainMenu"
            className={menuToggled ? "menuActive" : "menuInactive"}>
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
            className="menuMask"
            onClick={() => setMenuToggled(false)}/>
          )}
    </div>
  )
}

export {MenuNavigation};
