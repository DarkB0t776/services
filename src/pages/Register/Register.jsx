// eslint-disable-next-line

import React, { useState } from 'react';
import { useToasts } from 'react-toast-notifications';
import { Redirect } from 'react-router-dom';

import * as authActions from '../../redux/actions/auth';
import withAuthorization from '../../components/hoc/withAuthorization';

import RegisterForm from '../../components/auth/RegisterForm';

const Register = () => {
  const [redirect, setRedirect] = useState(false);
  const { addToast } = useToasts();

  const registerUser = async (formData) => {
    try {
      await authActions.registerUser(formData);
      setRedirect(true);
    } catch (err) {
      addToast(err, {
        appearance: 'error',
        autoDismissTimeout: 5000,
        autoDismiss: true,
      });
    }
  };

  if (redirect) return <Redirect to='/' />;

  return (
    <div className='auth-page'>
      <div className='container has-text-centered'>
        <div className='column is-4 is-offset-4'>
          <h3 className='title has-text-grey'>Register</h3>
          <p className='subtitle has-text-grey'>Please Register to proceed.</p>
          <div className='box'>
            <figure className='avatar'>
              <img src='https://placehold.it/128x128' alt='logo' />
            </figure>
            <RegisterForm onSubmitHandler={registerUser} />
          </div>
          <p className='has-text-grey'>
            <a>Sign In With Google</a>&nbsp;
            <a href='/'>Sign Up</a> &nbsp;·&nbsp;
            <a href='../'>Need Help?</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default withAuthorization('registered')(Register);
