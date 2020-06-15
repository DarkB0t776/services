// eslint-disable-next-line

import React from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

import { isValidImageUrl, isPasswordMatch } from '../../utils/validators';

const RegisterForm = ({ onSubmitHandler }) => {
  const { register, errors, handleSubmit, getValues } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <div className='field'>
        <div className='control'>
          <input
            ref={register({
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            })}
            name='email'
            className='input is-large'
            type='email'
            placeholder='Your Email'
            autoFocus=''
            autoComplete='email'
          />
          {errors.email && (
            <div className='form-error'>
              {errors.email.type === 'required' && (
                <span className='help is-danger'>Email is required</span>
              )}
              {errors.email.type === 'pattern' && (
                <span className='help is-danger'>
                  Email address is not valid
                </span>
              )}
            </div>
          )}
        </div>
      </div>
      <div className='field'>
        <div className='control'>
          <input
            ref={register({ required: true, minLength: 2 })}
            name='fullName'
            className='input is-large'
            type='text'
            placeholder='Full Name'
            autoFocus=''
          />
          {errors.fullName && (
            <div className='form-error'>
              {errors.fullName.type === 'required' && (
                <span className='help is-danger'>Name is required</span>
              )}
              {errors.fullName.type === 'minLength' && (
                <span className='help is-danger'>Name is not valid</span>
              )}
            </div>
          )}
        </div>
      </div>
      <div className='field'>
        <div className='control'>
          <input
            ref={register({
              required: true,
              validate: { isValidImageUrl },
            })}
            name='avatar'
            className='input is-large'
            type='text'
            placeholder='Avatar'
            autoFocus=''
          />
          {errors.avatar && (
            <div className='form-error'>
              {errors.avatar.type === 'required' && (
                <span className='help is-danger'>Avatar is required</span>
              )}
              {errors.avatar.type === 'isValidImageUrl' && (
                <span className='help is-danger'>Avatar url is not valid</span>
              )}
            </div>
          )}
        </div>
      </div>
      <div className='field'>
        <div className='control'>
          <input
            ref={register({ required: true, minLength: 6 })}
            name='password'
            className='input is-large'
            type='password'
            placeholder='Your Password'
            autoComplete='current-password'
          />
          {errors.password && (
            <div className='form-error'>
              {errors.password.type === 'required' && (
                <span className='help is-danger'>Password is required</span>
              )}
              {errors.password.type === 'minLength' && (
                <span className='help is-danger'>
                  Password should be at least 6 characters
                </span>
              )}
            </div>
          )}
        </div>
      </div>
      <div className='field'>
        <div className='control'>
          <input
            ref={register({
              required: true,
              validate: (pass) => isPasswordMatch(pass, getValues('password')),
            })}
            name='passwordConfirmation'
            className='input is-large'
            type='password'
            placeholder='Repeat Password'
            autoComplete='current-password'
          />

          {errors.passwordConfirmation && (
            <div className='form-error'>
              {errors.passwordConfirmation.type === 'required' && (
                <span className='help is-danger'>Password is required</span>
              )}
              {errors.passwordConfirmation.type === 'validate' && (
                <span className='help is-danger'>Passwords do not match</span>
              )}
            </div>
          )}
        </div>
      </div>
      <button
        type='submit'
        className='button is-block is-info is-large is-fullwidth'
      >
        Register
      </button>
    </form>
  );
};

RegisterForm.propTypes = {
  onSubmitHandler: PropTypes.func.isRequired,
};

export default RegisterForm;
