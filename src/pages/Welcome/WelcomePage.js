import React from 'react';

import Welcome from '../../components/Welcome/index';

import './styles.scss';
import logo from '../../images/Logo.png';
import welcomeText from '../../services/welcomeText';

function Modal(props) {
  const { entryText, greeting, name, profession } = welcomeText;
  const { onClose } = props;

  console.log(onClose);

  return (
    <div className="welcome__container">
      <div className="welcome__content">
        <Welcome
          entryText={entryText}
          greeting={greeting}
          logo={logo}
          name={name}
          onClose={onClose}
          profession={profession}
        />
      </div>
    </div>
  );
}

export default Modal;
