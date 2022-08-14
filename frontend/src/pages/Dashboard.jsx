import React, { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import GoalForm from '../components/GoalForm'
import Spinner from '../components/Spinner'
import {getGoals, reset} from '../features/goals/goalSlice.js'

function Dashboard() {

  // initialize useNavigate and dispatch
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // bring user from auth state 
  const {user} = useSelector((state) => state.auth)
  const {goals, isLoading, isError, message} = useSelector((state) => state.goals)

  // When we logout we dont want access to the dashboard therefore we need to navigate out
  useEffect(() => {

    if(isError) {
      console.log(message)
    }

    if(!user) {
      navigate('/login')
    }

    dispatch(getGoals())

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  if(isLoading) {
    return <Spinner/>
  }


  return (
    <>
    <section className='heading'>
      <h1>Welcome {user && user.name}</h1>
      <p>Goals Dashboard</p>
    </section>
    <GoalForm/>

    <section className='content'>
      {goals.length > 0 ? (
        <div className='goals'>
          {goals.map((goal) => (
            <GoalItem key={goal._id} goal={goal}/>
          ))}
        </div>
      ) : (<h3>You have note set any goals</h3>)}
    </section>
    </>
  )
}

export default Dashboard