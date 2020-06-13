import React, { useState, useEffect } from 'react';

import { getServices } from '../../store';

import Navbar from '../../components/Navbar/Navbar';
import NavbarClone from '../../components/NavbarClone/NavbarClone';
import ServiceItem from '../../components/ServiceItem/ServiceItem';
import Hero from '../../components/Hero/Hero';

const Home = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const services = getServices();
    setServices(services);
  }, []);

  const renderServices = (services) => {
    return services.map(({ id, title, description, image }) => (
      <ServiceItem
        key={id}
        title={title}
        description={description}
        image={image}
      />
    ));
  };

  return (
    <div>
      <Navbar />
      <NavbarClone />
      <Hero />
      <section className='section section-feature-grey is-medium'>
        <div className='container'>
          <div className='title-wrapper has-text-centered'>
            <h2 className='title is-2'>Great Power Comes </h2>
            <h3 className='subtitle is-5 is-muted'>
              With great Responsability
            </h3>
            <div className='divider is-centered'></div>
          </div>

          <div className='content-wrapper'>
            <div className='columns'>{renderServices(services)}</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
