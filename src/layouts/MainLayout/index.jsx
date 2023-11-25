import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectLocale, selectTheme } from '@containers/App/selectors';

import Navbar from '@components/Navbar';
import { selectLogin } from '@containers/Client/selectors';

const MainLayout = ({
  children,
  locale,
  theme,
  intl: { formatMessage },
  isLogin,
  userId,
}) => (
  <div>
    <Navbar
      title={formatMessage({ id: 'app_title_header' })}
      locale={locale}
      theme={theme}
      isLogin={isLogin}
      userId={userId}
    />
    {children}
  </div>
);

const mapStateToProps = createStructuredSelector({
  locale: selectLocale,
  theme: selectTheme,
  isLogin: selectLogin,
});

MainLayout.propTypes = {
  children: PropTypes.element.isRequired,
  locale: PropTypes.string,
  theme: PropTypes.string,
  intl: PropTypes.object,
  isLogin: PropTypes.bool,
  userId: PropTypes.bool,
};

export default injectIntl(connect(mapStateToProps)(MainLayout));
