import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div class="row w-50 mx-auto shadow-lg rounded" style={{marginTop:'200px', height:'400px'}}>
        <div class="col-sm-6 d-flex flex-column justify-content-center align-items-left px-3">
          <h1 class="text-danger text-center">Register</h1>
          <form className='pb-2' method='post'>
            <input type="text" name="" id="" class="form-control my-2" placeholder="Username" />
            <input type="text" name="" id="" class="form-control" placeholder="Name" />
            <input type="text" name="" id="" class="form-control my-2" placeholder="Email" />
            <input type="password" name="" id="" class="form-control " placeholder="Password" />
            <input type="password" name="" id="" class="form-control my-2" placeholder="Confirm Password" />
            <button type="submit" class="btn btn-primary w-100">Register</button>
          </form>
          <p>Don't have an account? <Link to="/">Login</Link></p>
        </div>
        <div class="col-sm-6 bg-primary h-100">
          <img src="/images/login-bg.png" className='w-100 mt-3' alt="" />
        </div>
    </div>
  )
}

export default Login
