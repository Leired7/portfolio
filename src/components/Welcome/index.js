import React, { Fragment } from 'react';

import './styles.scss';
import logo from 'assets/Logo.png';

import welcomeText from 'services/welcomeText';

const Welcome = () => {
  const { greeting, name, profession, entryText } = welcomeText;
  return (
    <Fragment>
      <div className="welcome__container">
        <div className="welcome__content">
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
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Welcome;
