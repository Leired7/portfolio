import React, { Fragment } from 'react';

import './styles.scss';

function Card({
  id,
  name,
  description,
  image,
  codeUrl,
  codeArialLabel,
  webUrl,
  webArialLabel,
  backgroundColor,
}) {
  console.log(image);
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
          <img
            src={image}
            alt={name}
            className="card__body-image"
            width="240px"
            height="240px"
          />
          <p className="card__body-description">{description}</p>
        </div>

        <div className="card__links-container">
          <a
            target="blank"
            rel="noopener noreferrer"
            href={codeUrl}
            className="card__link"
            title="{codeArialLabel}"
          >
            Repositorio
          </a>
          <a
            target="blank"
            rel="noopener noreferrer"
            href={webUrl}
            className="card__link"
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
