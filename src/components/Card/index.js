import React, { Fragment } from 'react';

import './styles.scss';

function Card({
  id,
  name,
  description,
  image,
  codeUrl,
  codeArialLabel,
  technology,
  webUrl,
  webArialLabel,
  backgroundColor,
}) {
  return (
    <Fragment>
      <div
        className="card__container"
        style={{ backgroundColor: `${backgroundColor}` }}
      >
        <div className="card__header">
          <h3 className="card__header-title">{name}</h3>
        </div>
        
        <div className="card__body">
          <img src={image} alt={name} className="card__body-image" />
          
          <div className="card__body-technology">
            <p className="card__body-description">{description}</p>
            <h3 className="card__body-technology-title">TECNOLOGÍAS: </h3>
            <p className="card__body-technology-description">{technology}</p>
          </div>
        </div>
        

        <div className="card__links-container">
          <a
            target="blank"
            rel="noopener noreferrer"
            href={codeUrl}
            className="card__link repo"
            title={codeArialLabel}
          >
            Repositorio
          </a>
          <a
            target="blank"
            rel="noopener noreferrer"
            href={webUrl}
            className="card__link demo"
            title={webArialLabel}
          >
            Demo
          </a>
        </div>
      </div>
      <hr className="line" />
    </Fragment>
  );
}

export default Card;
