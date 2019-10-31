import {PayloadAction, createSlice} from 'redux-starter-kit'

export interface IFetchStatus {
  phase: 'init' | 'fetching' | 'success' | 'failure'
  message?: string
}

const initialState: IFetchStatus = {
  phase: 'init',
}

const fetchStatusFactory = (name: string) => createSlice({
  name,
  initialState,
  reducers: {
    setStatus: (state: IFetchStatus, action: PayloadAction<IFetchStatus>) => (
      action.payload
    )
  },
})

const fetchPostsStatusSlice = fetchStatusFactory('fetchPostsStatus')
export const setFetchPostsStatus = fetchPostsStatusSlice.actions.setStatus
export const fetchPostsStatus = fetchPostsStatusSlice.reducer
