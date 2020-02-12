import React from 'react'
import useFetch from './index'

function App() {
  // Ex.: https://api.github.com/users/lcnogueira
  const [res, error, isLoading] = useFetch(
    'https://api.github.com/users/lcnogueira'
  )

  if (error) {
    return <div>Error</div>
  }
  return <div>{isLoading ? <div>Loading...</div> : JSON.stringify(res)}</div>
}

export default App
