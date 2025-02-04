import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import closeImg from './close.png';

import './modal.css';

function Modal({ title, content, buttonRef }) {
  const modalRef = useRef(null);

  function open() {
    modalRef.current.style.display = 'block';
  }

  function close() {
    modalRef.current.style.display = 'none';
  }

  useEffect(() => {
    buttonRef.current.onclick = open;
    modalRef.current.onclick = close;
  });

  return (
    <div className="modalContainer" ref={modalRef}>
      <div className="modal">
        {title && <h2 className="modal__title">{title}</h2>}
        <div>{content && <p className="modal__content">{content}</p>}</div>
        <img
          src={closeImg}
          alt="close button"
          className="modal__close"
          onClick={close}
        />
      </div>
    </div>
  );
}

Modal.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  buttonRef: PropTypes.node.isRequired,
};

export default Modal;
