import {takeEvery, takeLatest, take, call, fork, put} from 'redux-saga/effects';
import * as actions from './action';
import * as api from 'services/api/Favorite';

function* getFavorite(action, payload) {
    try{
        const result = yield call(api.getFavoriteApi)
        yield put(actions.getFavoriteSuccess(result.data))
        yield put(actions.IsLoading(false))
    }catch (e) {
        
    }
}

function* watchGetFavoriteRequest() {
    yield takeEvery(actions.Types.GET_FAVORITE_REQUEST, getFavorite)
}

function* removeFavorite(action, payload) {
    try{
        yield call(api.removeFavoriteApi, action.payload.id)
        yield getFavorite()
    }catch (e) {

    }
}

function* watchRemoveFavoriteRequest() {
    yield takeEvery(actions.Types.REMOVE_FAVORITE_REQUEST, removeFavorite)
}

const FavoriteSagas = [
    fork(watchGetFavoriteRequest),
    fork(watchRemoveFavoriteRequest)
];

export default FavoriteSagas;