import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

const UserProfile = ({user, checkUser}) => {
  useEffect(checkUser, [])

  const navigate = useNavigate()

  return (
    <>
      <div style={{textAlign: 'center', marginBottom: '20px'}}>
        <button onClick={() => navigate(`/profile/edit`)}>
          Edit Profile
        </button>
      </div>
      <div id="profile-container">
        <div id="profile-child">
          <h2>Name: {user?.name}</h2>
          {/* <img src={user.image} alt="user"/> */}
          <h3>Location: {user?.location}</h3>
          <div>  
            <h3>Cats:</h3>
            {user.cats?.map(cat => <li key={cat.id}>{cat.name}</li>)}
          </div>
        </div>
      </div>
    </>
  )
}

export default UserProfile;