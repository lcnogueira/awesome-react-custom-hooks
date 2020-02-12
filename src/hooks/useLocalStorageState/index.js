// src: https://github.com/Rocketseat/youtube-code-drop-theme-switcher/blob/master/src/utils/usePersistedState.ts
// src: https://www.youtube.com/watch?v=ngVU74daJ8Y
import { useState, useEffect } from 'react'

function useLocalStorageState(key, defaultState) {
  const [state, setState] = useState(() => {
    const storageValue = global.localStorage.getItem(key)

    if (storageValue) {
      return JSON.parse(storageValue)
    } else {
      return defaultState
    }
  })

  useEffect(() => {
    global.localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [state, setState]
}

export default useLocalStorageState
