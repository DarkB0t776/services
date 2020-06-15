import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

const withAuthorization = (userRole = null) => (Component) => {
  const WithAuthorization = () => {
    const { isLoggedIn } = useSelector((state) => state.auth);

    if (!userRole) {
      return isLoggedIn ? (
        <Component isLoggedIn={isLoggedIn} />
      ) : (
        <Redirect to='/login' />
      );
    }

    if (userRole === 'registered') {
      return isLoggedIn ? (
        <Redirect to='/' />
      ) : (
        <Component isLoggedIn={isLoggedIn} />
      );
    }
  };

  return WithAuthorization;
};

export default withAuthorization;
