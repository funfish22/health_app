import {takeEvery, takeLatest, take, call, fork, put} from 'redux-saga/effects';
import * as actions from './action';
import * as actionsFavorite from '../Favorite/action';
import * as api from 'services/api/Home';
import * as apiFavorite from 'services/api/Favorite';

function* getMask(action, payload) {
    try{
        const result = yield call(api.getMaskApi, { title: action.payload.title, page: action.payload.page });
        if (result.data.items !== 0) {
            yield put(actions.getMaskSuccess({
                list: result.data.items
            }))
            yield put(actions.IsLoading(false))
        } else {
            yield put(actions.IsLoading(false))
        }
    }catch (e) {

    }
}

function* watchGetNoteRequest() {
    yield takeEvery(actions.Types.GET_MASK_REQUEST, getMask)
}

function* createFavorite(action, payload) {
    try{
        yield call(api.createFavorite, action.payload.info)
        const result = yield call(apiFavorite.getFavoriteApi)
        yield put(actionsFavorite.getFavoriteSuccess(result.data))
        yield put(actions.IsLoading(false))
    }catch (e) {

    }
}

function* watchCreateFavoriteSuccess() {
    yield takeEvery(actions.Types.CREATE_FAVORITE, createFavorite)
}

const HomeSagas = [
    fork(watchGetNoteRequest),
    fork(watchCreateFavoriteSuccess)
];

export default HomeSagas;