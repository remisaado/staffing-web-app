import { useState } from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTransition, animated } from 'react-spring'

function MenuNavigation() {
  const [menuVisible, setMenuVisible] = useState(false);

  const menuMaskTransitions = useTransition(menuVisible, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })
{/*
  const menuTransitions = useTransition(menuVisible, {
    from: { opacity: 0, transform: 'translateX(-100%)' },
    enter: { opacity: 1, transform: 'translateX(0%)'  },
    leave: { opacity: 0, transform: 'translateX(-100%)'  },
  })
*/}
  return (
    <menuNavigation>
      <FontAwesomeIcon
        className="menuBarIcon"
        icon={faBars}
        onClick={() => setMenuVisible(!menuVisible)}/>
        {/*menuTransitions(
          (styles, item) => item &&
          <animated.div
            style={styles}
            className="menu">
          </animated.div>
        )*/}
          <ul className={menuVisible ? "menuActive" : "menuInactive"}>
            <li><a>Item One</a></li>
            <li><a>Item Two</a></li>
            <li><a>Item Three</a></li>
            <li><a>Item Four</a></li>
            <li><a>Item Five</a></li>
          </ul>
        {menuMaskTransitions(
          (styles, item) => item &&
          <animated.div
            style={styles}
            className="menuMask"
            onClick={() => setMenuVisible(false)}/>
          )}
    </menuNavigation>
  )
}

export {MenuNavigation};
