import * as React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import setupStore, {sagaMiddleware} from './setupStore'
import fetchPostsSaga from './sagas/fetchPostsSaga'
import App from './App'

const store = setupStore()

sagaMiddleware.run(fetchPostsSaga)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
