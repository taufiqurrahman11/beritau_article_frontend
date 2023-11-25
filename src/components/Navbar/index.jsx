import PropTypes from 'prop-types';
import { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { Form, useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightsStayIcon from '@mui/icons-material/NightsStay';

import { setLocale, setTheme } from '@containers/App/actions';

import classes from './style.module.scss';
import { Link } from 'react-router-dom';
import { logoutUser } from '@containers/Client/actions';

const Navbar = ({ title, locale, theme, isLogin }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [menuPosition, setMenuPosition] = useState(null);
  const open = Boolean(menuPosition);

  const handleClick = (event) => {
    setMenuPosition(event.currentTarget);
  };

  const handleClose = () => {
    setMenuPosition(null);
  };

  const handleTheme = () => {
    dispatch(setTheme(theme === 'light' ? 'dark' : 'light'));
  };

  const onSelectLang = (lang) => {
    if (lang !== locale) {
      dispatch(setLocale(lang));
    }
    handleClose();
  };

  const goHome = () => {
    navigate('/');
  };

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  const goProfile = () => {
    navigate('/profile');
  };

  const goBookmark = () => {
    navigate('/bookmark');
  };

  return (
    <div className={classes.headerWrapper} data-testid="navbar">
      <div className={classes.contentWrapper}>
        <div className={classes.logoImage} onClick={goHome}>
          <img src="/vite.svg" alt="logo" className={classes.logo} />
          <div className={classes.title}>{title}</div>
        </div>
        <div className={classes.toolbar}>
          <div className={classes.theme} onClick={handleTheme} data-testid="toggleTheme">
            {theme === 'light' ? <NightsStayIcon /> : <LightModeIcon />}
          </div>
          <div className={classes.toggle} onClick={handleClick}>
            <Avatar
              className={classes.avatar}
              src={locale === 'id' ? '/id.png' : '/en.png'}
            />
            <div className={classes.lang}>{locale}</div>
            <ExpandMoreIcon />
          </div>
          <div className={classes.auth}>
            <div className={classes.auth}>
              {isLogin ? (
                <>
                  <button className={classes.profile} onClick={goProfile}>
                    <FormattedMessage id="navbar_profile" />
                  </button>
                  <button className={classes.bookmark} onClick={goBookmark}>
                    <FormattedMessage id="navbar_bookmark" />
                  </button>
                  <button className={classes.logout} onClick={handleLogout}>
                    <FormattedMessage id="navbar_logout" />
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login">
                    <button className={classes.login}>
                      <FormattedMessage id="login_button" />
                    </button>
                  </Link>
                  <Link to="/register">
                    <button className={classes.register}>
                      <FormattedMessage id="register_button" />
                    </button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
        <Menu open={open} anchorEl={menuPosition} onClose={handleClose}>
          <MenuItem onClick={() => onSelectLang('id')} selected={locale === 'id'}>
            <div className={classes.menu}>
              <Avatar className={classes.menuAvatar} src="/id.png" />
              <div className={classes.menuLang}>
                <FormattedMessage id="app_lang_id" />
              </div>
            </div>
          </MenuItem>
          <MenuItem onClick={() => onSelectLang('en')} selected={locale === 'en'}>
            <div className={classes.menu}>
              <Avatar className={classes.menuAvatar} src="/en.png" />
              <div className={classes.menuLang}>
                <FormattedMessage id="app_lang_en" />
              </div>
            </div>
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string,
  locale: PropTypes.string.isRequired,
  theme: PropTypes.string,
  isLogin: PropTypes.bool.isRequired,
};

export default Navbar;
