import React from 'react';

import './styles.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
function Footer() {
  return (
    <footer className="footer__container">
      <div className="container">
        <div className="container-text">
          <h2 className="container-title">Contacto</h2>
        </div>
        <div className="container__network">
          <div className="container__network-icon">
            <a
              target="blank"
              rel="noopener noreferrer"
              title="GitHub Leire Díez"
              alt="GitHub"
              href="https://github.com/Leired7"
            >
              <FontAwesomeIcon
                icon={['fab', 'github']}
                size="2x"
                style={{ color: '#282c34' }}
              />
            </a>
          </div>
          <a
            className="container__network-link"
            target="blank"
            rel="noopener noreferrer"
            title="Github Leire Díez"
            alt="GitHub"
            href="https://github.com/Leired7"
          >
            github.com/Leired7
          </a>
          <div className="container__network-icon">
            <a
              target="blank"
              rel="noopener noreferrer"
              title="Linkedin Leire Díez"
              alt="Linkedin"
              href="https://www.linkedin.com/in/leirediez/"
            >
              <FontAwesomeIcon
                icon={['fab', 'linkedin']}
                size="2x"
                style={{ color: '#282c34' }}
              />
            </a>
          </div>
          <a
            className="container__network-link"
            target="blank"
            rel="noopener noreferrer"
            title="Linkedin Leire Díez"
            alt="Linkedin"
            href="https://www.linkedin.com/in/leirediez/"
          >
            linkedin.com/in/leirediez
          </a>
          <div className="container__network-icon">
            <a
              target="blank"
              rel="noopener noreferrer"
              title="E-mail Leire Díez"
              alt="email"
              href="leirediez.7@gmail.com"
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                size="2x"
                style={{ color: '#282c34' }}
              />
            </a>
          </div>
          <a
            className="container__network-link"
            target="blank"
            rel="noopener noreferrer"
            title="Correo electrónico Leire Díez"
            alt="email"
            href="mailto:leirediez.7@gmail.com"
          >
            leirediez.7@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
