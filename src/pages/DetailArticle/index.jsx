import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import classes from './style.module.scss';
import { selectDetail } from './selector';
import { useParams } from 'react-router-dom';
import { getDetailArticle } from './actions';
import { useEffect } from 'react';
import { FormattedMessage } from 'react-intl';

const DetailArticle = ({ detailArticle }) => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getDetailArticle(id));
  }, [dispatch, id]);

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <div className={classes.title}>{detailArticle?.data?.title}</div>
        <div className={classes.category}>{detailArticle?.data?.category}</div>
      </div>
      <div className={classes.content}>
        <img src={detailArticle?.data?.photoArticle} alt={detailArticle?.data?.title} />
        <div className={classes.author}>
          <FormattedMessage id="detail_author" />: <b>{detailArticle?.data?.author}</b>
        </div>
        <div className={classes.date}>{detailArticle?.data?.date}</div>
        <div
          className={classes.description}
          dangerouslySetInnerHTML={{ __html: detailArticle?.data?.description }}
        />
      </div>
    </div>
  );
};

DetailArticle.propTypes = {
  detailArticle: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  detailArticle: selectDetail,
});

export default connect(mapStateToProps)(DetailArticle);
