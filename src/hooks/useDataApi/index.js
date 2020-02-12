// src: https://www.robinwieruch.de/react-hooks-fetch-data
import { useState, useEffect } from 'react'

function useDataApi(initialUrl, initialData) {
  const [data, setData] = useState(initialData)
  const [url, setUrl] = useState(initialUrl)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false)
      setIsLoading(true)
      try {
        console.log(url)
        const result = await global.fetch(url)
        const data = await result.json()
        setData(data)
      } catch (error) {
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [url])
  return [{ data, isLoading, isError }, setUrl]
}

export default useDataApi
