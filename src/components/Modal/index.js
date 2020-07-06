import React from 'react';

import './styles.scss';

import Skills from 'components/Skills';

export default function Modal({ onClose }) {
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal__content" onClick={onClose}>
        <div className="modal__content-button ">
          <button type="button" className="modal-button" onClick={onClose}>
            Cerrar
          </button>
        </div>
        <Skills />
      </div>
    </div>
  );
}
