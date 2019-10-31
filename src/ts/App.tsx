import * as React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {IState} from './setupStore'
import {Post} from './slices/posts'
import {fetchPosts} from './sagas/fetchPostsSaga'

const App = (): JSX.Element => {
  const {
    fetchPostsStatus,
    posts,
  } = useSelector((state: IState) => state)
  const dispatch = useDispatch()

  const URL = 'https://jsonplaceholder.typicode.com/posts'

  const handleFetch = (): void => {
    dispatch(fetchPosts(URL))
  }

  return (<>
    <p>
      <Button onClick={handleFetch} label='FETCH' />
    </p>
    <p>{fetchPostsStatus.phase}</p>
    {
      posts.slice(0, 10)
        .sort((pa: Post, pb: Post) => Number(pa.id) - Number(pb.id))
        .map((post: Post) => (
          <div className='post' key={post.id}>
            <h3>({post.id}) {post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))
    }
  </>)
}

interface ButtonProps {
  onClick: () => void
  label: string
}

const Button = ({onClick, label}: ButtonProps): JSX.Element => (
  <button onClick={onClick}>{label}</button>
)

export default App
