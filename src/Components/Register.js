import React, { useState } from 'react'
import axios from 'axios'
import { createCookie, Link, useNavigate } from 'react-router-dom'

const Register = () => {
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
    if (formData.password === formData.conf_password){
      const data = {...formData, avatar: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'}
      try{
        console.log('Check');
        
        console.log(data);
     axios.post('https://api.escuelajs.co/api/v1/users/',
      data, {
        headers : {
          'Content-Type': 'application/json',

        }
      }
    ).then(function (response) {
      console.log(response.data);
      createCookie('jwt-access-token',response.data.access_token)
      createCookie('jwt-refresh-token',response.data.refresh_token)
      setFormData({})
      navigate('/login')
    })    
  }
    catch(error){
      console.log('Error',error);
      
    }
  }  
  else{
    console.log("Password doesn't match");
    
  }}
 
  return (
    <div class="row w-50 mx-auto shadow-lg rounded" style={{marginTop:'200px', height:'400px'}}>
        <div class="col-sm-6 d-flex flex-column justify-content-center align-items-left px-3">
          <h1 class="text-danger text-center">Register</h1>
          <form className='pb-2' method='post' onSubmit={handleSubmit}>
            <input type="text" name="name" id="name" class="form-control my-2" placeholder="Username" onChange={handleChange}/>
            <input type="text" name="email" id="email" class="form-control my-2" placeholder="Email" onChange={handleChange}/>
            <input type="password" name="password" id="password" class="form-control " placeholder="Password" onChange={handleChange}/>
            <input type="password" name="conf_password" id="conf_password" class="form-control my-2" placeholder="Confirm Password" onChange={handleChange}/>
            <button type="submit" class="btn btn-primary w-100">Register</button>
          </form>
          <p>Don't have an account? <Link to="/login">Login</Link></p>
        </div>
        <div class="col-sm-6 bg-primary h-100">
          <img src="/images/login-bg.png" className='w-100 mt-3' alt="" />
        </div>
    </div>
  )
}

export default Register
