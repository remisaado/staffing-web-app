import React from 'react';
import { MenuNavigation } from '../components'

const Header = () => {

  return (
    <div className="headerContainer">
      <header id="header">
        <h1 className="title">Lärarcentralen</h1>
        <MenuNavigation/>
      </header>
    </div>
  );
}

export {Header};
