import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Modal = ({ openButtonText, children, onModalSubmit }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleIsActive = () => setIsActive(!isActive);

  return (
    <div>
      <button
        type='button'
        className='button is-medium is-info is-outlined'
        data-toggle='modal'
        data-target='#exampleModal'
        onClick={toggleIsActive}
      >
        {openButtonText || 'Open'}
      </button>
      <div className={`modal ${isActive ? 'is-active' : ''}`}>
        <div className='modal-background'></div>
        <div className='modal-card'>
          <header className='modal-card-head'>
            <p className='modal-card-title'>Make a Deal</p>
            <button
              onClick={toggleIsActive}
              className='delete'
              aria-label='close'
            ></button>
          </header>
          <section className='modal-card-body'>{children}</section>
          <footer className='modal-card-foot'>
            <button className='button is-success' onClick={onModalSubmit}>
              Save changes
            </button>
            <button className='button' onClick={toggleIsActive}>
              Cancel
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  openButtonText: PropTypes.string,
  children: PropTypes.node,
  onModalSubmit: PropTypes.func,
};

export default Modal;
