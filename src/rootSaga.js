import { all } from 'redux-saga/effects';

import appSaga from '@containers/App/saga';
import { registerSaga } from '@pages/Register/saga';
import { loginSaga } from '@pages/Login/saga';
import { homeSaga } from '@pages/Home/saga';
import { detailArticleSaga } from '@pages/DetailArticle/saga';
import { detailProfileSaga } from '@pages/Profile/saga';
import { createArticleSaga } from '@pages/CreateArticle/saga';
import { changePasswordSaga } from '@pages/ChangePassword/saga';
import { bookmarkSaga } from '@pages/Bookmark/saga';

export default function* rootSaga() {
  yield all([
    appSaga(),
    registerSaga(),
    loginSaga(),
    homeSaga(),
    detailArticleSaga(),
    detailProfileSaga(),
    createArticleSaga(),
    changePasswordSaga(),
    bookmarkSaga()
  ]);
}
