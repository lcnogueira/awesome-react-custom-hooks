import React from 'react'
import { useMyHook } from 'awesome-react-custom-hooks'

const App = () => {
  const example = useMyHook()
  return <div>{example}</div>
}
export default App
