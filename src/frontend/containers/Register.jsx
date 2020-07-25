import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerUser } from '../actions';
import '../assets/styles/components/Login.scss';
import '../assets/styles/components/Register.scss';
import Header from '../components/Header';

const Register = (props) => {
  const [form, setValues] = useState({
    email: '',
    name: '',
    password: '',
    passwordVerified: '',
  });
  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.registerUser(form, '/login');
  };
  return (
    <>
      <Header isRegister />
      <section className='login'>
        <div className='login--container'>
          <h3 className='login--title'>Regístrate</h3>
          <form
            action='home.html'
            className='login--form'
            onSubmit={handleSubmit}
          >
            <input
              name='name'
              type='text'
              className='login--form__input'
              placeholder='Nombre'
              onChange={handleInput}
            />
            <input
              name='email'
              type='email'
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
            {/* <input
              name='passwordVerified'
              type='password'
              className='login--form__input'
              placeholder='Repetir contraseña'
              onChange={handleInput}
            /> */}
            <button type='submit' className='login--form_button'>Registrarme</button>
          </form>
          <div className='back-login'>
            <Link to='/login'>Inicia sesión</Link>
          </div>
        </div>
      </section>
    </>
  );
};

const mapDispatchToProps = {
  registerUser,
};

export default connect(null, mapDispatchToProps)(Register);
