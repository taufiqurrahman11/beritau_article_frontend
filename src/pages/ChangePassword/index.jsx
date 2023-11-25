import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import classes from './style.module.scss';
import { connect, useDispatch } from 'react-redux';
import { changePassword } from './actions';
import { useNavigate } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectChangePassword } from './selector';
import { FormattedMessage } from 'react-intl';

const ChangePassword = ({ isChange }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    oldPassword: '',
    newPassword: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(changePassword(user));
  };

  useEffect(() => {
    if (isChange) {
      navigate('/profile');
    }
  }, [isChange, navigate]);
  console.log(isChange);

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h3>
          <FormattedMessage id="profile_changePass" />
        </h3>
        <form onSubmit={handleSubmit}>
          <div className={classes.inputItem}>
            <label htmlFor="oldPassword">
              <FormattedMessage id="change_old" />
            </label>
            <input
              type="password"
              id="oldPassword"
              name="oldPassword"
              value={user.oldPassword}
              onChange={handleInputChange}
            />
          </div>
          <div className={classes.inputItem}>
            <label htmlFor="newPassword">
              <FormattedMessage id="change_old" />
            </label>
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              value={user.newPassword}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" className={classes.buttonLogin}>
            <FormattedMessage id="change_button" />
          </button>
        </form>
      </div>
    </div>
  );
};

ChangePassword.propTypes = {
  isChange: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  isChange: selectChangePassword,
});

export default connect(mapStateToProps)(ChangePassword);
