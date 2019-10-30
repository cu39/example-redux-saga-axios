import {createSlice} from 'redux-starter-kit'

const initialState = 0

const counter = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state: number) => state + 1,
    decrement: (state: number) => state < 1 ? state : state - 1,
  },
})

export const {increment, decrement} = counter.actions

export default counter.reducer
