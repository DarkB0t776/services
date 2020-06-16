import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as servicesActions from '../../redux/actions';

import ServiceItem from '../../components/ServiceItem/ServiceItem';
import Spinner from '../../components/Spinner/Spinner';
import withAuthorization from '../../components/hoc/withAuthorization';

const UserServices = ({ userId }) => {
  const dispatch = useDispatch();
  const { userServices } = useSelector((state) => state.services);
  const { isFetching } = useSelector((state) => state.services);

  useEffect(() => {
    dispatch(servicesActions.fetchUserServices(userId));
  }, []);

  const renderUserServices = () => {
    return userServices.map((service) => {
      return (
        <ServiceItem
          key={service.id}
          id={service.id}
          title={service.title}
          description={service.description}
          image={service.image}
        />
      );
    });
  };

  return (
    <div className='container'>
      <div className='content-wrapper'>
        <h1 className='title'>My Services</h1>
        <div className='columns is-multiline'>
          {isFetching ? <Spinner /> : renderUserServices()}
        </div>
      </div>
    </div>
  );
};

export default withAuthorization()(UserServices);
