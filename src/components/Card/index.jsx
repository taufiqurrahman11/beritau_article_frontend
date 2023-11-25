import PropTypes from 'prop-types';
import classes from './style.module.scss';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { useLocation } from 'react-router-dom';

const Card = ({ data, bookmark, details, onDelete }) => {
  const location = useLocation();
  const isProfilePage = location.pathname === '/profile';

  return (
    <div className={classes.container}>
      <div className={classes.cardWrapper}>
        <div className={classes.image}>
          <img src={data?.photoArticle} alt="" onClick={details} />
          <button className={classes.bookmark} onClick={bookmark}>
            <BookmarkBorderIcon className={classes.iconBookmark} />
          </button>
        </div>
        <div className={classes.content}>
          <h5 className={classes.category}>{data?.category.toUpperCase()}</h5>
          <h5 className={classes.date}>{data?.date}</h5>
          <h5 className={classes.author}>{data?.author}</h5>
          <h2 className={classes.title}>{data?.title}</h2>
          <div
            className={classes.desc}
            dangerouslySetInnerHTML={{ __html: data?.description }}
          />
        </div>
        {isProfilePage && (
          <button className={classes.deleteButton} onClick={onDelete}>
            DEL
          </button>
        )}
      </div>
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.object,
  bookmark: PropTypes.func,
  details: PropTypes.func,
  onDelete: PropTypes.func,
};

export default Card;
