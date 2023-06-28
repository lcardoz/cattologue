import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const UserForm = ({user}) => {

  const navigate = useNavigate()

  const initialState = {
    name: '',
    location: '', 
  }

  const [updatedFormData, setUpdatedFormData] = useState(initialState);

  const handleInput = (e) => {
    setUpdatedFormData({
      ...updatedFormData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log('submitted', updatedFormData)
    fetch(`/user-profile/${user.id}`, {
      method: 'PATCH',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(updatedFormData)
    })
    .then(r => {
      if (r.ok) {
        setUpdatedFormData(initialState)
        navigate(`/user-profile/${user.id}`)
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
      </div>
    </>

  )
}

export default UserForm;