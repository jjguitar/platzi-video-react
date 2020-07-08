import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/components/Login.scss";
import googleIcon from "../assets/static/google-icon.png";
import twitterIcon from "../assets/static/twitter-icon.png";

const Login = () => (
  <section className="login">
    <div className="login--container">
      <h3 className="login--title">Inicia sesión</h3>
      <form action="home.html" className="login--form">
        <input
          type="text"
          className="login--form__input"
          placeholder="Correo"
        />
        <input
          type="password"
          className="login--form__input"
          placeholder="Contraseña"
        />
        <button className="login--form_button">Iniciar sesión</button>
      </form>
      <div className="login--remember">
        <label className="login--remember__check">
          <input type="checkbox" />
          Recuérdame
        </label>
        <a href="/">Olvidé mi contraseña</a>
      </div>
      <div className="social--login">
        <div className="social--login__red">
          <img src={googleIcon} alt="" />
          <a href="/">Inicia sesión con Google</a>
        </div>
        <div className="social--login__red">
          <img src={twitterIcon} alt="" />
          <a href="/">Inicia sesión con Twitter</a>
        </div>
      </div>
      <div className="register">
        <p>
          No tienes ninguna cuenta
          <Link to="/register"> Regístrate</Link>
        </p>
      </div>
    </div>
  </section>
);

export default Login;
