import axios from 'axios'
import {takeLatest, call, put} from 'redux-saga/effects'
import {PayloadAction, createAction} from 'redux-starter-kit'
import {setUsers} from '../slices/posts'
import {setFetchPostsStatus} from '../slices/fetchStatus'

function* fetch(action: PayloadAction<string>) {
  yield put(setFetchPostsStatus({ phase: 'fetching' }))
  try {
    const res = yield call((url: string) => axios.get(url), action.payload)
    yield put(setFetchPostsStatus({
      phase: 'success',
      message: 'Success!',
    }))
    yield put(setUsers(res.data))
  } catch (error) {
    yield put(setFetchPostsStatus({
      phase: 'failure',
      message: error.message,
    }))
  }
}

export const fetchPosts = createAction<string>('fetchPosts/fetchPosts')

export default function* fetchPostsSaga() {
  yield takeLatest(fetchPosts.type, fetch)
}
