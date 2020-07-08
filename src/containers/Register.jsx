import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/components/Login.scss'
import '../assets/styles/components/Register.scss'

const Register = () => (
<section className="login">
    <div className="login--container">
      <h3 className="login--title">Regístrate</h3>
      <form action="home.html" className="login--form">
        <input type="text" className="login--form__input" placeholder="Nombre"/>
        <input type="email" className="login--form__input" placeholder="Correo"/>
        <input type="password" className="login--form__input" placeholder="Contraseña"/>
        <input type="password" className="login--form__input" placeholder="Repetir contraseña"/>
        <button className="login--form_button">Registrarme</button>
      </form>
      <div className="back-login">
        <Link to="/login">Inicia sesión</Link>
      </div>
    </div>
  </section>
);

export default Register;
