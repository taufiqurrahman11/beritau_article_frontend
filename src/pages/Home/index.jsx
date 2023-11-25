import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import Searchbar from '@components/Searchbar';
import Card from '@components/Card';
import { selectArticle } from './selectors';
import { addToBookmark, getAllArticle } from './actions';
import { useNavigate } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectLogin } from '@containers/Client/selectors';
import truncateText from '@utils/truncateText';

const Home = ({ articles, login }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleSelectChange = (event) => {
    setSelectedCategory(event.target.value.toLowerCase());
  };

  const handleSearch = () => {
    let filteredArticles = articles?.data;

    if (selectedCategory) {
      filteredArticles = filteredArticles?.filter(
        (article) => article.category.toLowerCase() === selectedCategory
      );
    }

    if (searchInput) {
      filteredArticles = filteredArticles?.filter((article) =>
        article.title.toLowerCase().includes(searchInput.toLowerCase())
      );
    }

    return filteredArticles;
  };

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearchClick = () => {
    const filteredArticles = handleSearch();
    console.log(filteredArticles);
  };

  useEffect(() => {
    dispatch(getAllArticle());
  }, [dispatch]);

  const handleBookmark = (articleId) => {
    if (login) {
      dispatch(addToBookmark(articleId));
      console.log(articleId);
    } else {
      alert('Please login');
    }
  };

  const handleDetails = (articleId) => {
    navigate(`/article/${articleId}`);
  };

  return (
    <div>
      <Searchbar
        onClick={handleSearchClick}
        onChange={handleInputChange}
        onSelectChange={handleSelectChange}
      />
      {handleSearch()?.map((article, index) => (
        <Card
          key={index}
          data={{
            ...article,
            description: truncateText(article.description, 440),
          }}
          bookmark={() => handleBookmark(article.id)}
          details={() => handleDetails(article.id)}
        />
      ))}
    </div>
  );
};

Home.propTypes = {
  article: PropTypes.object,
  login: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  articles: selectArticle,
  login: selectLogin,
});

export default connect(mapStateToProps)(Home);
