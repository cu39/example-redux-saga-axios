import * as React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {IState} from './setupStore'
import {increment, decrement} from './slices/counter'

const App = (): JSX.Element => {
  const count = useSelector((state: IState) => state.counter)
  const dispatch = useDispatch()

  const handleIncrement = (): void => {
    dispatch(increment())
  }

  const handleDecrement = (): void => {
    dispatch(decrement())
  }

  return (<>
    <p>{count}</p>
    <p>
      <Button onClick={handleDecrement} label='DECREMENT' />
      <Button onClick={handleIncrement} label='INCREMENT' />
    </p>
  </>)
}

const Button = ({onClick, label} : {onClick: () => void, label: string}) => (
  <button onClick={onClick}>{label}</button>
)

export default App