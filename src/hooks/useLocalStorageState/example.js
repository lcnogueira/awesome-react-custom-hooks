import React from 'react'
import useLocalStorageState from './useLocalStorageState'

function App() {
  const [counter, setCounter] = useLocalStorageState('counter', 0)

  return (
    <div>
      {counter}
      <button
        onClick={() => {
          setCounter(counter + 1)
        }}
      >
        Add
      </button>
    </div>
  )
}

export default App
