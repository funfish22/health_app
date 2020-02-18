import { combineReducers } from 'redux';

import Home from './Home/reducer';
import Favorite from './Favorite/reducer';

const rootReducer = combineReducers({
    Home, Favorite
})

export default rootReducer