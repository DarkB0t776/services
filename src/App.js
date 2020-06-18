import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';

import * as authActions from './redux/actions/auth';
import * as collabActions from './redux/actions/collaborations';

import ServiceApp from './ServiceApp';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = authActions.onAuthStateChanged((authUser) => {
      dispatch(authActions.storeAuthUser(authUser));
      if (authUser) {
        dispatch(collabActions.subscribeToMessages(authUser.uid));
      }
    });

    return unsubscribe;
  }, []);
  return (
    <ToastProvider>
      <Router>
        <ServiceApp />
      </Router>
    </ToastProvider>
  );
};

export default App;
