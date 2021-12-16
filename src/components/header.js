import React from 'react';
import { MenuNavigation } from '../components'

const Header = () => {

  return (
    <header className="header">
      <h1 className="title">Lärarcentralen</h1>
      <MenuNavigation/>
    </header>
  );
}

export {Header};
