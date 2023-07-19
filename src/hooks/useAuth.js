import { useNavigate } from 'react-router-dom'

export function useAuth () {
  const token = 'xxxxx'
  const navigate = useNavigate()

  const redirectLogin = () => {
    navigate('login')
  }

  return {
    token,
    redirectLogin
  }
}