import {PayloadAction, createSlice} from 'redux-starter-kit'

/**
 * @see https://jsonplaceholder.typicode.com/
 * @see https://jsonplaceholder.typicode.com/posts/1
 */
export interface Post {
  userId: number
  id: number
  title: string
  body: string
}

const initialState: Post[] = []

const posts = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setUsers: (state: Post[], action: PayloadAction<Post[]>) => {
      return action.payload
    },
  },
})

export const {setUsers} = posts.actions

export default posts.reducer
