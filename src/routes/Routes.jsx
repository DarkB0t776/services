import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home/Home';
import Faq from '../pages/FAQ/Faq';
import Services from '../pages/Services/Services';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import ServiceDetail from '../pages/ServiceDetail/ServiceDetail';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/register' component={Register} />
      <Route path='/login' component={Login} />
      <Route exact path='/services' component={Services} />
      <Route path='/services/:id' component={ServiceDetail} />
      <Route path='/faq' component={Faq} />
    </Switch>
  );
};

export default Routes;
