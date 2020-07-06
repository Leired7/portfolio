import React, { useState } from 'react';

import './styles.scss';
import aboutMe from 'services/aboutMe';
import Modal from '../Modal/index';

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
              className="about__content-skills__button-skills"
              onClick={handleClick}
            >
              Habilidades
            </button>
            {showModal && <Modal onClose={handleClose} />}
            <button
              onClick={}
              className="about__content-skills__button-curriculum"
            >
              Currículum
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
