import {combineReducers} from 'redux'
import {createLogger} from 'redux-logger'
import {configureStore, getDefaultMiddleware} from 'redux-starter-kit'
import counter from './slices/counter'

export interface IState {
  counter: number
}

const reducer = combineReducers({
  counter,
})

const middleware = getDefaultMiddleware({
  thunk: false,
})

if (process.env.NODE_ENV !== 'production') {
  const logger = createLogger({
    collapsed: true,
    diff: true,
  })
  middleware.push(logger)
}

export default () => configureStore({
  reducer,
  middleware,
})
