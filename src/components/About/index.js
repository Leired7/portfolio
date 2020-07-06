import React, { useState } from 'react';

import './styles.scss';
import aboutMe from 'services/aboutMe';
import Modal from '../Modal/index';

import CV from 'images/CV_LeireDíez_Desarrolladora_Web.pdf';

function About() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    return setShowModal(true);
  };

  const handleClose = () => {
    return setShowModal(false);
  };

  return (
    <section className="about">
      <div className="about__container">
        <h1 className="about__content-title">Sobre mí</h1>
        <div className="about__content-container">
          {aboutMe
            .filter((item) => item.description)
            .map((paragraph, index) => {
              return (
                <p key={index} className="about__content-text">
                  {paragraph.description}
                </p>
              );
            })}
          <div className="about__content-skills">
            <button
              className="about__content-skills-button"
              onClick={handleClick}
            >
              Habilidades
            </button>
            {showModal && <Modal onClose={handleClose} />}
            <a
              href={CV}
              target="_blank"
              rel="noopener noreferrer"
              className="about__content-skills-link"
            >
              Curriculum
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
