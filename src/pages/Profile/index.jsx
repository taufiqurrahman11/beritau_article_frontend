import PropTypes from 'prop-types';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectDetailProfile } from './selector';
import { connect, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { deleteAricle, getDetailProfile } from './actions';
import Card from '@components/Card';
import { selectDetail } from '@pages/DetailArticle/selector';
import classes from './style.module.scss';
import truncateText from '@utils/truncateText';
import { FormattedMessage } from 'react-intl';

const Profile = ({ detailProfile, article }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getDetailProfile());
  }, [dispatch]);

  const userRole = detailProfile?.data?.role?.toLowerCase();
  const isWriter = userRole === 'writer';

  const handleDetails = (articleId) => {
    navigate(`/article/${articleId}`);
  };

  const handleDelete = (articleId) => {
    dispatch(deleteAricle(articleId));
  };

  return (
    <div className={classes.container}>
      <div className={classes.profileWrapper}>
        <img
          src="https://www.hotelbooqi.com/wp-content/uploads/2021/12/128-1280406_view-user-icon-png-user-circle-icon-png.png"
          alt=""
        />
        <h2>{detailProfile?.data?.fullName}</h2>
        <i>{detailProfile?.data?.email}</i>
        {isWriter && (
          <Link to="/create-article">
            <button>
              <FormattedMessage id="profile_createNew" />
            </button>
          </Link>
        )}
        <Link to="/change-password">
          <button>
            <FormattedMessage id="profile_changePass" />
          </button>
        </Link>
      </div>

      <div className={classes.articleList}>
        {detailProfile?.data?.Articles?.map((article) => (
          <Card
            key={article.id}
            data={{
              ...article,
              description: truncateText(article.description, 440),
            }}
            details={() => handleDetails(article.id)}
            onDelete={() => handleDelete(article.id)}
          />
        ))}
      </div>
    </div>
  );
};

Profile.propTypes = {
  detailProfile: PropTypes.object,
  article: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  detailProfile: selectDetailProfile,
  article: selectDetail,
});

export default connect(mapStateToProps)(Profile);
