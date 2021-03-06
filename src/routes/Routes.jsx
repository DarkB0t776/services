import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home/Home';
import Faq from '../pages/FAQ/Faq';
import Services from '../pages/Services/Services';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import ServiceDetail from '../pages/ServiceDetail/ServiceDetail';
import ServiceCreate from '../pages/ServiceCreate/ServiceCreate';
import UserServices from '../pages/UserServices/UserServices';
import SentOffers from '../pages/Offers/SentOffers';
import ReceivedOffer from '../pages/Offers/ReceivedOffer';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/register' component={Register} />
      <Route path='/login' component={Login} />
      <Route path='/offers/sent' component={SentOffers} />
      <Route path='/offers/received' component={ReceivedOffer} />
      <Route exact path='/services' component={Services} />
      <Route path='/services/new' component={ServiceCreate} />
      <Route path='/services/user' component={UserServices} />
      <Route path='/services/:id' component={ServiceDetail} />
      <Route path='/faq' component={Faq} />
    </Switch>
  );
};

export default Routes;
