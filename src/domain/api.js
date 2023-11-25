import config from '@config/index';
import { merge } from 'lodash';

import request from '@utils/request';

const urls = {
  ping: 'ping.json',
  register: 'register',
  login: 'login',
  getArticle: 'user/article',
  createArticle: 'writer/article',
  deleteArticle: 'writer/article',
  profile: 'user/getProfile',
  changePassword: 'user/password',
  bookmark: 'user/bookmark'
};

export const callAPI = async (endpoint, method, header = {}, params = {}, data = {}) => {
  const defaultHeader = {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  };

  const headers = merge(defaultHeader, header);
  const options = {
    url: config.api.host + endpoint,
    method,
    headers,
    data,
    params,
  };

  return request(options).then((response) => {
    const responseAPI = response.data;
    return responseAPI;
  });
};

export const ping = () => callAPI(urls.ping, 'get');
export const register = data => callAPI(urls.register, 'post', {}, {}, data)
export const login = data => callAPI(urls.login, 'post', {}, {}, data)

export const getAllArticle = () => callAPI(urls.getArticle, 'get')
export const getArticleById = id => callAPI(`${urls.getArticle}/${id}`, 'get')
export const createArticle = data => callAPI(urls.createArticle, 'post', {}, {}, data)
export const deleteArticle = id => callAPI(`${urls.deleteArticle}/${id}`, 'delete', {}, {}, { articleId: id})

export const getProfileById = () => callAPI(urls.profile, 'get')
export const changePassword = data => callAPI(urls.changePassword, 'put', {}, {}, data)

export const getAllBookmark = () => callAPI(urls.bookmark, 'get')
export const addToBookmark = id => callAPI(`${urls.bookmark}/${id}`, 'post', {}, {}, { articleId: id})
export const deleteFromBookmark = id => callAPI(`${urls.bookmark}/${id}`, 'delete', {}, {}, { articleId: id})