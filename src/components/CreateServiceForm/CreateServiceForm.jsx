import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import * as serviceActions from '../../redux/actions';

import withAuthorization from '../../components/hoc/withAuthorization';

const CreateServiceForm = ({ userId }) => {
  const [serviceForm, setServiceForm] = useState({
    category: 'mathematics',
    title: '',
    description: '',
    image: '',
    price: null,
  });
  const [isCreated, setIsCreated] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setServiceForm({
      ...serviceForm,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await serviceActions.createService(serviceForm, userId);
      setIsCreated(true);
    } catch (err) {
      console.log(err);
    }
  };

  if (isCreated) {
    return <Redirect to='/' />;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='field'>
        <label className='label'>Category</label>
        <div className='control'>
          <div className='select'>
            <select name='category' onChange={handleChange}>
              <option value='mathematic'>Mathematic</option>
              <option value='programming'>Programming</option>
              <option value='painting'>Painting</option>
              <option value='english'>English</option>
            </select>
          </div>
        </div>
      </div>
      <div className='field'>
        <label className='label'>Title</label>
        <div className='control'>
          <input
            onChange={handleChange}
            className='input'
            name='title'
            type='text'
            placeholder='Text input'
          />
        </div>
      </div>
      <div className='field'>
        <label className='label'>Description</label>
        <div className='control'>
          <textarea
            onChange={handleChange}
            name='description'
            className='textarea'
            placeholder='Textarea'
          ></textarea>
        </div>
      </div>
      <div className='field'>
        <label className='label'>Image Url</label>
        <div className='control'>
          <input
            className='input'
            onChange={handleChange}
            name='image'
            type='text'
            placeholder='Text input'
          />
        </div>
      </div>
      <div className='field'>
        <label className='label'>Price per Hour</label>
        <div className='control'>
          <input
            className='input'
            onChange={handleChange}
            name='price'
            type='number'
            placeholder='Text input'
          />
        </div>
      </div>
      <div className='field is-grouped'>
        <div className='control'>
          <button type='submit' className='button is-link'>
            Create
          </button>
        </div>
        <div className='control'>
          <button className='button is-text'>Cancel</button>
        </div>
      </div>
    </form>
  );
};

CreateServiceForm.propTypes = {
  userId: PropTypes.string,
};

export default withAuthorization()(CreateServiceForm);
