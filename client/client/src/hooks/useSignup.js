import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import { showNotification } from '@mantine/notifications'

export const useSignup = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext()

  const signup = async (email, password, companyId, firstName, lastName, phone) => {
    setIsLoading(true)
    setError(null)

    const response = await fetch('http://localhost:4000/api/user/register', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ email, password, companyId, firstName, lastName, phone })
    })
    const json = await response.json()

    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)

      showNotification ({ message: json.error, 
        title: 'Oh no! Something went wrong.', 
        color: 'red',
        radius: 'lg',
      })
    }
    if (response.ok) {
      // save the user to local storage
      localStorage.setItem('user', JSON.stringify(json))

      // update the auth context
      dispatch({type: 'LOGIN', payload: json})

      // update loading state
      setIsLoading(false)
    }
  }

  return { signup, isLoading, error }
}