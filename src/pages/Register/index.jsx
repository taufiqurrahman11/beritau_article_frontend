import React, { useState } from 'react';
import classes from './style.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { register } from './actions';
import { useNavigate } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [input, setInputForm] = useState({
    fullName: '',
    email: '',
    password: '',
    phone: '',
    role: '',
  });
  console.log(input);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputForm({ ...input, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { fullName, email, password, phone, role } = input;
    if (!fullName || !email || !password || !phone || !role) {
      alert('Semua field harus diisi');
      return;
    }

    if (password.length < 6) {
      alert('Password harus minimal 6 karakter');
      return;
    }

    dispatch(register(input));
    navigate('/login');
  };

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h1>
          <FormattedMessage id="register_button" />
        </h1>
        <form onSubmit={handleFormSubmit}>
          <div className={classes.inputItem}>
            <label htmlFor="fullName">
              <FormattedMessage id="register_fullName" />
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              value={input.fullName}
              onChange={handleInputChange}
            />
          </div>
          <div className={classes.inputItem}>
            <label htmlFor="email">
              <FormattedMessage id="register_email" />
            </label>
            <input
              id="email"
              name="email"
              type="text"
              value={input.email}
              onChange={handleInputChange}
            />
          </div>
          <div className={classes.inputItem}>
            <label htmlFor="password">
              <FormattedMessage id="register_password" />
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={input.password}
              onChange={handleInputChange}
            />
          </div>
          <div className={classes.inputItem}>
            <label htmlFor="phone">
              <FormattedMessage id="register_phone" />
            </label>
            <input
              id="phone"
              name="phone"
              type="text"
              value={input.phone}
              onChange={handleInputChange}
            />
          </div>
          <div className={classes.inputItem}>
            <label htmlFor="role">
              <FormattedMessage id="register_role" />
            </label>
            <select id="role" name="role" value={input.role} onChange={handleInputChange}>
              <option value="">
                <FormattedMessage id="register_select" />
              </option>
              <option value="reader">
                <FormattedMessage id="register_reader" />
              </option>
              <option value="writer">
                <FormattedMessage id="register_writer" />
              </option>
            </select>
          </div>
          <button type="submit" className={classes.buttonRegister}>
            <FormattedMessage id="register_button" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
