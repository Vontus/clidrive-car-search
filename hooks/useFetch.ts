import React from 'react'

export const useFetch = <T>(url: string, search?: Record<string, any>) => {
  const [data, setData] = React.useState<T | null>(null)
  const [error, setError] = React.useState<Error | unknown>(null)
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  
  React.useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const searchQuery = new URLSearchParams(search).toString()
        const response = await fetch(`${url}?${searchQuery}`)
        const json = await response.json()
        setData(json)
      } catch (error) {
        setError(error)
        throw error
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }
  , [url, search])

  return { data, error, isLoading }
}
