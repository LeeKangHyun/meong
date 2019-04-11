import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'

import reducer from './Reducers'

export default function initStore() {
  /*const sagaMiddleware = createSagaMiddleware()
  return {
    ...createStore(
      reducer,
      composeWithDevTools(applyMiddleware(sagaMiddleware))
    ),
    runSaga: sagaMiddleware.run,
  }*/
  return createStore(
    reducer,
    applyMiddleware(
      // Middleware will not be applied to this sample.
    ),
  );
}
