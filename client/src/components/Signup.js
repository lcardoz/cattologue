import React from 'react';
import {useState} from 'react';

const Signup = () => {
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
    e.preventDefault()
    console.log(formData)
  }

  return (
    <div>
      <h2>Sign up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={formData.name}
          name='name'
          onChange={handleInput}
        />
        <input
          type='text'
          value={formData.username}
          name='username'
          onChange={handleInput}
        />
        <input
          type='text'
          value={formData.password}
          name='password'
          onChange={handleInput}
        />
        <input
          type='text'
          value={formData.location}
          name='location'
          onChange={handleInput}
        />
        <input type='submit' />
      </form>
    </div>
  )
}

export default Signup;