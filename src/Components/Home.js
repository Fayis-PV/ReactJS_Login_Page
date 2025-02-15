import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <h1 className='text-center'>Welcome to Login Page</h1>

      <p>Don't have an account? <Link to="/register">Register</Link></p>
      <p>Sign In here? <Link to="/login">Login</Link></p>

    </>
  )
}

export default Home
