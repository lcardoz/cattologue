import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const UserForm = ({user, setUser}) => {

  const navigate = useNavigate()

  const initialState = {
    name: user.name,
    location: user.location, 
  }

  const [updatedFormData, setUpdatedFormData] = useState(initialState);

  const handleInput = (e) => {
    setUpdatedFormData({
      ...updatedFormData,
      [e.target.name]: e.target.value
    })
  }

  const handleDeleteAccount = () => {
    console.log('clicked delete')
    fetch(`/users/${user.id}`, {method: 'DELETE'})
    .then(r => {
      if (r.ok) {
        setUser(null)
        navigate('/')
      } else {
        r.json().then(console.error)
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch(`/users/${user.id}`, {
      method: 'PATCH',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(updatedFormData)
    })
    .then(r => {
      if (r.ok) {
        console.log('submitted', updatedFormData)
        // setUpdatedFormData(initialState)
        r.json().then(setUser)
        navigate(`/profile`)
      } else {
        r.json().then(console.error)
      }
    })
  }

  return (
    <>
      <h2>Edit Profile</h2>
      <div className='user-form'>
        <form onSubmit={handleSubmit}>
          <label>Name: </label>
            <input
              type="text"
              name="name"
              value={updatedFormData.name}
              onChange={handleInput}
            />
          <label>Location: </label>
            <input 
              type="text"
              name="location"
              value={updatedFormData.location}
              onChange={handleInput}
            />
          <input type="Submit"/>
        </form>
        <div style={{paddingTop: "50px"}}>
          <button onClick={handleDeleteAccount}>
            Delete Account
          </button>
        </div>
      </div>
    </>

  )
}

export default UserForm;