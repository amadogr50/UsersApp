import createSagaMiddleware from 'redux-saga';
import {applyMiddleware, compose, createStore} from 'redux';
import reactotron from '../../reactotron-config';
import Reactotron from 'reactotron-react-native';

import reducers from './reducers';
import sagas from './sagas';

const sagaMonitor = Reactotron.createSagaMonitor();

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware({sagaMonitor});
  const store = createStore(
    reducers,
    compose(applyMiddleware(sagaMiddleware), reactotron.createEnhancer()),
  );
  sagaMiddleware.run(sagas);
  return store;
};

export default configureStore;
