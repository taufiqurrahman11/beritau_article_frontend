import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import classes from './style.module.scss';
import { connect, useDispatch } from 'react-redux';
import { createArticle } from './actions';
import { format } from 'date-fns';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Form, useNavigate } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { selectDetailProfile } from '@pages/Profile/selector';

const CreateArticle = ({ detailProfile }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInputForm] = useState({
    title: '',
    category: '',
    date: format(new Date(), 'dd MMMM yyyy'),
    photoArticle: null,
  });

  const [description, setDescription] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputForm({ ...input, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setInputForm({ ...input, photoArticle: file });
  };

  const handleDescriptionChange = (value) => {
    setDescription(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.title || !input.category || !input.photoArticle || !description) {
      alert('Please fill in all fields');
      return;
    }

    let formData = new FormData();
    formData.append('title', input.title);
    formData.append('category', input.category);
    formData.append('date', input.date);
    formData.append('description', description);
    formData.append('photoArticle', input.photoArticle);

    try {
      dispatch(createArticle(formData));
      navigate('/profile');
    } catch (error) {
      console.error('Failed to create article:', error);
    }
  };

  useEffect(() => {
    if (detailProfile?.data?.role !== 'writer') {
      navigate('/profile');
    }
  }, [detailProfile, navigate]);

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h1>
          <FormattedMessage id="create_article" />
        </h1>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className={classes.inputItem}>
            <label htmlFor="title">
              <FormattedMessage id="create_title" />
            </label>
            <input
              id="title"
              name="title"
              type="text"
              value={input.title}
              onChange={handleInputChange}
            />
          </div>
          <div className={classes.inputItem}>
            <label htmlFor="category">
              <FormattedMessage id="create_category" />
            </label>
            <select
              id="category"
              name="category"
              value={input.category}
              onChange={handleInputChange}
            >
              <option value="">Choose One</option>
              <option value="Ekonomi">
                <FormattedMessage id="search_economy" />
              </option>
              <option value="Olahraga">
                <FormattedMessage id="search_sport" />
              </option>
              <option value="Teknologi">
                <FormattedMessage id="search_tech" />
              </option>
            </select>
          </div>
          <div className={classes.inputItem}>
            <label htmlFor="photoArticle">
              <FormattedMessage id="create_photo" />
            </label>
            <input
              id="photoArticle"
              name="photoArticle"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>
          <div className={classes.inputItem}>
            <label htmlFor="description">
              <FormattedMessage id="create_description" />
            </label>
            <ReactQuill
              name="description"
              theme="snow"
              value={description}
              onChange={handleDescriptionChange}
              className={classes.description}
            />
          </div>
          <button type="submit" className={classes.button}>
            <FormattedMessage id="create_button" />
          </button>
        </form>
      </div>
    </div>
  );
};

CreateArticle.propTypes = {
  detailProfile: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  detailProfile: selectDetailProfile,
});

export default connect(mapStateToProps)(CreateArticle);
