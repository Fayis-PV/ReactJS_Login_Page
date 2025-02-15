import React, { useState } from 'react'
import axios from 'axios'
import { createCookie, Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({})
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name] : value
    })   
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('formData',formData);
    
    try{
     axios.post('https://api.escuelajs.co/api/v1/auth/login',
      formData, {
        headers : {
          'Content-Type': 'application/json',

        }
      }
    ).then(function (response) {
      console.log(response.data);
      createCookie('jwt-access-token',response.data.access_token)
      createCookie('jwt-refresh-token',response.data.refresh_token)
      setFormData({})
      navigate('/')
    })    
  }
    catch(error){
      console.log('Error',error);
      
    }
  }  
  return (
    <div class="row w-50 mx-auto shadow-lg rounded" style={{marginTop:'200px', height:'400px'}}>
        <div class="col-sm-6 bg-primary h-100">
          <img src="/images/login-bg.png" className='w-100 mt-3' alt="" />
        </div>
        <div class="col-sm-6 d-flex flex-column justify-content-center align-items-left p-3">
          <h1 class="text-danger text-center">Login</h1>
          <form className='py-4' method='post' onSubmit={handleSubmit}>
            <input type="email" name="email" id="name" class="form-control" placeholder="Email" onChange={handleChange} />
            <input type="password" name="password" id="password" class="form-control my-2" placeholder="Password" onChange={handleChange} />
            <button type="submit" class="btn btn-primary w-100">Login</button>
          </form>
          <p className='my-1'>Forgot Password?</p>
          <p>Don't have an account? <Link to="/register">Register</Link></p>
        </div>
    </div>
  )
}

export default Login
