import React from 'react';

import './styles.scss';
import aboutMe from '../../services/aboutMe';

function Skills() {
  return (
    <section className="skills">
      <div className="skills__container">
        <h1 className="skills__content-title">HABILIDADES</h1>
        <hr className="skills__line" />
        <div className="skills__content-description">
          {aboutMe
            .filter((item) => item.skills)
            .map((item, index) => (
              <div key={index}>
                <h2 className="skills__content-subtitle">Lenguajes</h2>
                <p className="skills__content-text">
                  [{item.skills.languages}]
                </p>
                <h2 className="skills__content-subtitle">Herramientas</h2>
                <p className="skills__content-text">[{item.skills.tools}]</p>
                <h2 className="skills__content-subtitle">Marcos de trabajo</h2>
                <p className="skills__content-text">
                  [{item.skills.framework}]
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
