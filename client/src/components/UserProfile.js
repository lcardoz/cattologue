import React from 'react';
import CatCard from './CatCard';

const UserProfile = ({user}) => {

  return (

    <div id="profile-container">
      <div id="profile-child">
        <h2>Name: {user.name}</h2>
        {/* <img src={user.image} alt="user"/> */}
        <h3>Location: {user.location}</h3>
        <div>  
          <h3>Cats:</h3>
          {user.cats.map(cat => <CatCard key={cat.name} cat={cat} />)}
        </div>
        {/* <button>Follow User</button> */}
      </div>
    </div>
  )
}

export default UserProfile;