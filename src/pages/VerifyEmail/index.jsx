import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import classes from './style.module.scss';
import verified from '@static/images/verified.png';

const VerifyEmail = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div className={classes.container}>
      <img src={verified} alt="" style={{ width: '200px', height: '200px' }} />
      <h1>Verify Email Success</h1>
      <button className={classes.button} onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default VerifyEmail;
