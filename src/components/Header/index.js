import React from 'react';

import Menu from '../Menu';

function Header(props) {
  return (
    <header className="page__header">
      <div className="page__header-container">
        <Menu toogleAbout={props.toogleAbout} />
      </div>
    </header>
  );
}

export default Header;
