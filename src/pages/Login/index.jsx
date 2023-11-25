import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import classes from './style.module.scss';
import { connect, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { selectLogin } from '@containers/Client/selectors';
import { createStructuredSelector } from 'reselect';
import { loginUser } from '@containers/Client/actions';
import { FormattedMessage } from 'react-intl';

const Login = ({ login }) => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  console.log(user);
  console.log(login);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser(user));
  };

  useEffect(() => {
    if (login) {
      navigate('/');
    }
  }, [login, navigate]);

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h1>
          <FormattedMessage id="login_button" />
        </h1>
        <form>
          <div className={classes.inputItem}>
            <label htmlFor="email">
              <FormattedMessage id="login_email" />
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={user.email}
              onChange={handleInputChange}
            />
          </div>
          <div className={classes.inputItem}>
            <label htmlFor="password">
              <FormattedMessage id="login_password" />
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={user.password}
              onChange={handleInputChange}
            />
          </div>
          <button className={classes.buttonLogin} onClick={handleLogin}>
            <FormattedMessage id="login_button" />
          </button>
        </form>
        <p>
          <FormattedMessage id="login_text" />
          <Link to="/register">
            <FormattedMessage id="login_here" />
          </Link>
        </p>
      </div>
    </div>
  );
};

Login.propTypes = {
  login: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  login: selectLogin,
});

export default connect(mapStateToProps)(Login);
