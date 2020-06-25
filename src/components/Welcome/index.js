import React, { Fragment } from 'react';

import './styles.scss';

function Welcome({ greeting, name, logo, profession, entryText, onClose }) {
  return (
    <Fragment>
      <div className="welcome__header">
        <p className="welcome__header-gretting">{greeting}</p>
      </div>
      <div className="welcome__body">
        <p className="welcome__title">{name}</p>
        <img
          className="welcome__logo"
          src={logo}
          alt="Logo, es un casco de astronauta"
          width="100px"
          heigth="100px"
        />
        <div className="welcome__presentation">
          <h1 className="welcome__subtitle">{profession}</h1>

          <p className="welcome__subtitle">{entryText}</p>
        </div>

        <button className="welcome__button" onClick={onClose}>
          <span aria-hidden="true">ADELANTE</span>
        </button>
      </div>
    </Fragment>
  );
}

export default Welcome;
