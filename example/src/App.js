import React from 'react'
import { useLocalStorageState } from 'awesome-react-custom-hooks'

function App() {
  const [counter, setCounter] = useLocalStorageState('counter', 0)

  return (
    <div>
      <h1>useLocalStorageState Example</h1>
      <div>{counter}</div>
      <button
        onClick={() => {
          setCounter(counter + 1)
        }}
      >
        Add counter
      </button>
    </div>
  )
}

export default App
