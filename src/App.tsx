import React from 'react';
import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import axios from 'axios';

import Entrance from 'pages/App';

import rootReducers from 'config/library/redux/store/rootReducers';
import rootSagas from 'config/library/redux/store/rootSagas';

import { Provider } from 'react-redux';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

let store = createStore(
  rootReducers,
  composeEnhancers(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootSagas);

axios.defaults.baseURL = 'https://api.github.com/'

interface Props { }

interface State { }

class App extends React.Component<Props, State> {

  render() {

    return (
      <Provider store={store}>
        <Entrance/>
      </Provider>
    )
  }
}

export default App;
