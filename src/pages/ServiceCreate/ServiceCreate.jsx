import React from 'react';
import CreateServiceForm from '../../components/CreateServiceForm/CreateServiceForm';

const ServiceCreate = () => {
  return (
    <div className='create-page'>
      <div className='container'>
        <div className='form-container'>
          <h1 className='title'>Create Service</h1>
          <CreateServiceForm />
        </div>
      </div>
    </div>
  );
};

export default ServiceCreate;
