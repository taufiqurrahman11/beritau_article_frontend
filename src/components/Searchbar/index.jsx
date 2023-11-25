import PropTypes from 'prop-types';
import classes from './style.module.scss';
import { FormattedMessage } from 'react-intl';

const Searchbar = ({ onClick, onChange, onSelectChange }) => {
  return (
    <div className={classes.container}>
      <div className={classes.searchWrapper}>
        <select className={classes.select} onChange={onSelectChange}>
          <option value="">
            <FormattedMessage id="search_allCategory" />
          </option>
          <option value="ekonomi">
            <FormattedMessage id="search_economy" />
          </option>
          <option value="olahraga">
            <FormattedMessage id="search_sport" />
          </option>
          <option value="teknologi">
            <FormattedMessage id="search_tech" />
          </option>
        </select>
        <input type="text" onChange={onChange} placeholder="Search Article" />
        <button onClick={onClick}>
          <FormattedMessage id="search_search" />
        </button>
      </div>
    </div>
  );
};

Searchbar.propTypes = {
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  onSelectChange: PropTypes.func,
};

export default Searchbar;
