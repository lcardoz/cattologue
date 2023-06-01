import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({setUser}) => {
  const navigate = useNavigate()

  const [login, setLogin] = useState({
    username: '',
    password: ''
  })

  const handleInput = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value
    })
  }

  const handleFormSubmit = (e) => { 
    e.preventDefault();
    handleLogin(login)
  }

  const handleLogin = (login) => {
    fetch("/login", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(login)
    })
    .then(r => r.json())
    .then(setUser)
    .then(navigate("/"))
  }

  return (
    <div id="login-container">
      <h2>LOGIN</h2>
      <div id="login-form">
        <form onSubmit={handleFormSubmit}>
          <label> Username: 
            <input 
              type="text" 
              name="username"
              value={login.username} 
              onChange={handleInput}
            />
          </label>
          <br /> 
          <label> Password: 
            <input 
              type="password" 
              name="password"
              value={login.password}
              onChange={handleInput}
            />
          </label>
          <br /> 
          <br /> 
          <input   
            id='button-submit-form'
            type="submit" 
            value="Submit"
          />
        </form>
      </div>   
    </div>
  )
}

export default Login;