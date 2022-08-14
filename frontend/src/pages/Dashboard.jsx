import React, { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
import GoalForm from '../components/GoalForm'

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
    <>
    <section className='heading'>
      <h1>Welcome {user && user.name}</h1>
      <p>Goals Dashboard</p>
    </section>
    <GoalForm/>
    </>
  )
}

export default Dashboard