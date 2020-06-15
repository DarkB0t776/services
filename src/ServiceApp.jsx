import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as authActions from './redux/actions/auth';

import Routes from './routes/Routes';
import Sidebar from './components/Sidebar/Sidebar';
import Navbar from './components/Navbar/Navbar';
import Spinner from './components/Spinner/Spinner';

const ServiceApp = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const logout = () => dispatch(authActions.logout());

  const renderApp = (auth) => {
    return (
      <>
        <Navbar auth={auth} id='navbar-main' handleLogout={logout} />
        <Navbar auth={auth} id='navbar-clone' handleLogout={logout} />
        <Sidebar />
        <Routes />
      </>
    );
  };

  const spinner = (
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
      }}
    >
      <Spinner />
    </div>
  );

  return auth.isLoggedResolved ? renderApp(auth) : spinner;
};

export default ServiceApp;
