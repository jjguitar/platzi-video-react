import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUser } from '../actions';
import '../assets/styles/components/Login.scss';
import googleIcon from '../assets/static/google.png';
import twitterIcon from '../assets/static/twitter.png';
import Header from '../components/Header';

const Login = (props) => {
  const [form, setValues] = useState({
    email: '',
  });
  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.loginUser(form, '/');
  };
  return (
    <>
      <Header isLogin />
      <section className='login'>
        <div className='login--container'>
          <h3 className='login--title'>Inicia sesión</h3>
          <form className='login--form' onSubmit={handleSubmit}>
            <input
              name='email'
              type='text'
              className='login--form__input'
              placeholder='Correo'
              onChange={handleInput}
            />
            <input
              name='password'
              type='password'
              className='login--form__input'
              placeholder='Contraseña'
              onChange={handleInput}
            />
            <button type='submit' className='login--form_button'>Iniciar sesión</button>
          </form>
          <div className='login--remember'>
            <label htmlFor='cbox1' className='login--remember__check'>
              <input type='checkbox' id='cbox1' />
              Recuérdame
            </label>
            <a href='/'>Olvidé mi contraseña</a>
          </div>
          <div className='social--login'>
            <div className='social--login__red'>
              <img src={googleIcon} alt='' />
              <a href='/'>Inicia sesión con Google</a>
            </div>
            <div className='social--login__red'>
              <img src={twitterIcon} alt='' />
              <a href='/'>Inicia sesión con Twitter</a>
            </div>
          </div>
          <div className='register'>
            <p>
              No tienes ninguna cuenta
              {' '}
              {' '}
              <Link to='/register'>Regístrate</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

const mapDispatchToProps = {
  loginUser,
};

export default connect(null, mapDispatchToProps)(Login);
