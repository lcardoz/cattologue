import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = ({setUser}) => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    username: '',
    password: '',
    location: ''
  })

  const handleInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log('formData', formData)

    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    })
    .then(r => {
      if (r.ok) {
        r.json()
        .then(setUser)
        .then(navigate("/"))
      } else {
        console.error('error! - error handling') // Add error rendering
      }
    })
  }

  return (
    <div>
      <h2>Sign up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={formData.name}
          name='name'
          placeholder='name'
          onChange={handleInput}
        />
        <input
          type='text'
          value={formData.username}
          name='username'
          placeholder='username'
          onChange={handleInput}
        />
        <input
          type='password'
          value={formData.password}
          name='password'
          placeholder='password'
          onChange={handleInput}
        />
        <input
          type='text'
          value={formData.location}
          name='location'
          placeholder='location'
          onChange={handleInput}
        />
        <input type='submit' />
      </form>
    </div>
  )
}

export default Signup;