import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useToasts } from 'react-toast-notifications';
import { Redirect } from 'react-router-dom';

import { loginUser } from '../../redux/actions/auth';

const Login = () => {
  const { register, errors, handleSubmit } = useForm();
  const { addToast } = useToasts();
  const [redirect, setRedirect] = useState(false);

  const onSubmitHandler = async (data) => {
    try {
      await loginUser(data);
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
          <h3 className='title has-text-grey'>Login</h3>
          <p className='subtitle has-text-grey'>Please login to proceed.</p>
          <div className='box'>
            <figure className='avatar'>
              <img src='https://placehold.it/128x128' alt='Logo' />
            </figure>
            <form onSubmit={handleSubmit(onSubmitHandler)}>
              <div className='field'>
                <div className='control'>
                  <input
                    ref={register({ required: true })}
                    className='input is-large'
                    name='email'
                    type='email'
                    placeholder='Your Email'
                    autoFocus
                    autoComplete='email'
                  />
                  {errors.email && (
                    <div className='form-error'>
                      {errors.email.type === 'required' && (
                        <span className='help is-danger'>
                          Email is required
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>
              <div className='field'>
                <div className='control'>
                  <input
                    ref={register({ required: true })}
                    className='input is-large'
                    name='password'
                    type='password'
                    placeholder='Your Password'
                    autoComplete='current-password'
                  />
                  {errors.password && (
                    <div className='form-error'>
                      {errors.password.type === 'required' && (
                        <span className='help is-danger'>
                          Password is required
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>
              <button
                type='submit'
                className='button is-block is-info is-large is-fullwidth'
              >
                Sign In
              </button>
            </form>
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

export default Login;
