// src: https://scotch.io/tutorials/create-a-custom-usefetch-react-hook
import { useState, useEffect } from 'react'

function useFetch(endpoint, options) {
  const [response, setResponse] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const res = await global.fetch(endpoint, options)
        const data = await res.json()
        setResponse(data)
      } catch (e) {
        setError(e)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [endpoint, options])

  return [response, error, isLoading]
}

export default useFetch
