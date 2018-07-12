import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import todoApp from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
/* eslint-disable no-underscore-dangle */
const store = createStore(
  todoApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(sagaMiddleware),
)
/* eslint-enable */
sagaMiddleware.run(rootSaga)

export default store
