import React from 'react';
import '../assets/styles/components/Login.scss';
import '../assets/styles/components/NotFound.scss';
import Header from '../components/Header';

const NotFound = () => (
  <>
    <Header isNotFound />
    <div className='login'>
      <div className='not-found'>
        <h1 className='animated pulse'>404</h1>
        <p>Página no encontada</p>
      </div>
    </div>
  </>
);

export default NotFound;
