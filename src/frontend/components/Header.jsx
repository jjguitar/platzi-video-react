import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import gravatar from '../utils/gravatar';
import { logoutRequest } from '../actions';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';
// npm install classnames --save

const Header = (props) => {
  const { user, isLogin, isRegister, isNotFound } = props;
  const hasUser = Object.keys(user).length > 0;
  const handleLogout = () => {
    document.cookie = 'email=';
    document.cookie = 'name=';
    document.cookie = 'id=';
    document.cookie = 'token=';
    props.logoutRequest({});
    window.location.href = '/login';
  };

  const headerClass = classNames('header', {
    isLogin,
    isRegister,
    isNotFound,
  });

  return (
    <header className={headerClass}>
      <Link to='/'>
        <img className='header--logo' src={logo} alt='Platzi logo' />
      </Link>
      <div className='header--menu'>
        <div className='header--menu_profile'>
          {hasUser ? (
            <img src={gravatar(user.email)} alt={user.email} width='50' />
          ) : (
            <img src={userIcon} alt='' />
          )}
          <p className='header--menu_profile_p'>Perfil</p>
        </div>
        <ul>
          {hasUser ? (
            <li>
              <a href='/'>{user.name}</a>
            </li>
          ) :
            null}
          {hasUser ?
            <li><a href='#logout' onClick={handleLogout}>Cerrar sesión</a></li> : (
              <li>
                <Link to='/login'>Iniciar Sesión</Link>
              </li>
            )}
        </ul>
      </div>
    </header>
  );
};

Header.protoTypes = {
  user: PropTypes.object,
  isLogin: PropTypes.classNames,
  isRegister: PropTypes.classNames,
  isNotFound: PropTypes.classNames,
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
