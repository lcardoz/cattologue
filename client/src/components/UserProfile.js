import React from 'react';
import {useEffect} from 'react';

const UserProfile = ({user, checkUser}) => {
  useEffect(checkUser, [])

  return (
    <div id="profile-container">
      <div id="profile-child">
        <h2>Name: {user?.name}</h2>
        {/* <img src={user.image} alt="user"/> */}
        <h3>Location: {user?.location}</h3>
        <div>  
          <h3>Cats:</h3>
          {user.cats?.map(cat => <li key={cat.id}>{cat.name}</li>)}
        </div>
        {/* <button>Follow User</button> */}
      </div>
    </div>
  )
}

export default UserProfile;