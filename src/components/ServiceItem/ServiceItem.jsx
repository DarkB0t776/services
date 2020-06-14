import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ServiceItem = ({ id, title, image, description }) => {
  const shortText = (text, maxLength = 50) => {
    if (!text) return '';
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + '...';
  };

  return (
    <div className='column is-one-third'>
      <div
        className='feature-card is-bordered has-text-centered revealOnScroll delay-1'
        data-animation='fadeInLeft'
      >
        <div className='card-title'>
          <h4>{title}</h4>
        </div>
        <div className='card-icon'>
          <img src={image} alt='' />
        </div>
        <div className='card-text'>
          <p>{shortText(description)}</p>
        </div>
        <div className='card-action'>
          <Link
            to={`/services/${id}`}
            className='button btn-align-md accent-btn raised'
          >
            Lear More
          </Link>
        </div>
      </div>
    </div>
  );
};

ServiceItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default ServiceItem;
