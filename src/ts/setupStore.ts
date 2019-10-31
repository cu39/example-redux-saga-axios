import {combineReducers} from 'redux'
import {createLogger} from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import {configureStore, getDefaultMiddleware} from 'redux-starter-kit'
import {IFetchStatus, fetchPostsStatus} from './slices/fetchStatus'
import posts, {Post} from './slices/posts'

export interface IState {
  posts: Post[]
  fetchPostsStatus: IFetchStatus
}

const reducer = combineReducers({
  posts,
  fetchPostsStatus,
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

export const sagaMiddleware = createSagaMiddleware()

middleware.push(sagaMiddleware)

export default () => configureStore({
  reducer,
  middleware,
})
