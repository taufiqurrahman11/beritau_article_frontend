import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { deleteFromBookmark, getAllBookmark } from './actions';
import { createStructuredSelector } from 'reselect';
import { selectBookmark } from './selector';
import classes from './style.module.scss';
import Card from '@components/Card';
import { useNavigate } from 'react-router-dom';
import truncateText from '@utils/truncateText';

const Bookmark = ({ allBookmark }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(allBookmark);

  useEffect(() => {
    dispatch(getAllBookmark());
  }, [dispatch]);

  const handleDetail = (articleId) => {
    navigate(`/article/${articleId}`);
  };

  const handleDelete = (articleId) => {
    dispatch(deleteFromBookmark(articleId));
  };

  return (
    <div className={classes.container}>
      <h1>Bookmark</h1>
      {allBookmark?.length > 0 ? (
        allBookmark?.map((val) => {
          const dataCard = {
            photoArticle: val?.articleBookmark?.photoArticle,
            category: val?.articleBookmark?.category,
            title: val?.articleBookmark?.title,
            description: val?.articleBookmark?.description,
            author: val?.articleBookmark?.author,
            date: val?.articleBookmark?.auhtor,
          };
          return (
            <Card
              key={val?.id}
              data={{
                ...dataCard,
                description: truncateText(dataCard.description, 440),
              }}
              bookmark={() => handleDelete(val?.articleBookmark?.id)}
              details={() => handleDetail(val?.articleBookmark?.id)}
            />
          );
        })
      ) : (
        <div className={classes.empty}>Empty Bookmark</div>
      )}
    </div>
  );
};

Bookmark.propTypes = {
  allBookmark: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  allBookmark: selectBookmark,
});

export default connect(mapStateToProps)(Bookmark);
