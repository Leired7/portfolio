import React from 'react';

import './styles.scss';
import aboutMe from '../../services/aboutMe';
/* import Skills from '../Skills/index'; */

function About() {
  return (
    <section className="about">
      <div className="about__container">
        <h1 className="about__content-title">Sobre mí</h1>
        <div className="about__content-description">
          {aboutMe.map((paragraph) => (
            <p className="about__content-text">{paragraph.description}</p>
          ))}
        </div>
        <div className="about__content-skills">{/* <Skills /> */}</div>
      </div>
    </section>
  );
}

export default About;
