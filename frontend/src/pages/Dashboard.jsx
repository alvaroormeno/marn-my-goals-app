import React, { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'

function Dashboard() {

  // initialize useNavigate
  const navigate = useNavigate()

  // bring user from auth state 
  const {user} = useSelector((state) => state.auth)

  // When we logout we dont want access to the dashboard therefore we need to navigate out
  useEffect(() => {
    if(!user) {
      navigate('/login')
    }
  }, [user, navigate])


  return (
    <div>Dashboard</div>
  )
}

export default Dashboard