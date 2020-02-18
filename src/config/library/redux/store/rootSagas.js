import {all} from 'redux-saga/effects';
import HomeSagas from './Home/saga';
import FavoriteSagas from './Favorite/saga';

export default function* rootSagas() {
    yield all([
        ...HomeSagas,
        ...FavoriteSagas
    ])
}