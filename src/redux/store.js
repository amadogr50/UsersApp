import createSagaMiddleware from 'redux-saga';
import {applyMiddleware, createStore} from 'redux';

import reducers from './reducers';
import sagas from './sagas';

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(reducers, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(sagas);
  return store;
};

export default configureStore;
