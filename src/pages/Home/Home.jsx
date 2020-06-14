import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchServices } from '../../redux/actions';

import ServiceItem from '../../components/ServiceItem/ServiceItem';
import Hero from '../../components/Hero/Hero';

const Home = () => {
  const dispatch = useDispatch();
  const services = useSelector((state) => state.services.items);

  useEffect(() => {
    dispatch(fetchServices());
  }, []);

  const renderServices = (services) => {
    return services.map(({ id, title, description, image }) => (
      <ServiceItem
        id={id}
        key={id}
        title={title}
        description={description}
        image={image}
      />
    ));
  };

  return (
    <div>
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
