import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div class="row w-50 mx-auto shadow-lg rounded" style={{marginTop:'200px', height:'400px'}}>
        <div class="col-sm-6 bg-primary h-100">
          <img src="/images/login-bg.png" className='w-100 mt-3' alt="" />
        </div>
        <div class="col-sm-6 d-flex flex-column justify-content-center align-items-left p-3">
          <h1 class="text-danger text-center">Login</h1>
          <form className='py-4' method='post'>
            <input type="text" name="" id="" class="form-control" placeholder="Username" />
            <input type="password" name="" id="" class="form-control my-2" placeholder="Password" />
            <button type="submit" class="btn btn-primary w-100">Login</button>
          </form>
          <p className='my-1'>Forgot Password?</p>
          <p>Don't have an account? <Link to="/register">Register</Link></p>
        </div>
    </div>
  )
}

export default Login
