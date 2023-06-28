import React from 'react';
import {useNavigate} from 'react-router-dom';
// import CatCard from './CatCard';

const UserProfile = ({user}) => {
  
  const navigate = useNavigate()

  // console.log('user', user)

  return (
    <>
      <div style={{textAlign: 'center', marginBottom: '20px'}}>
        <button onClick={() => navigate(`/user-profile/${user.id}/edit-profile`)}>
          Edit Profile
        </button>
      </div>
      <div id="profile-container">
        <div id="profile-child">
          <h2>Name: {user.name}</h2>
          {/* <img href={user.image} alt="user"/> */}
          <h3>Location: {user.location}</h3>
          <div>  
            <h3>Cats: 
              {user.cats.map(cat => (
              // Can we import CatCard here? 
                <div>
                  <h4>Name: {cat.name}</h4>
                  <img href={cat.image} alt={cat.name}/>
                  <p>Age: {cat.age}</p>
                  <p>Sex: {cat.sex}</p>
                  <p>Color: {cat.color}</p>
                  <p>Disposition: {cat.disposition}</p>
                </div>
              ))}
            </h3>
          </div>
          {/* <button>Follow User</button> */}
        </div>
      </div>
    </>
  )
}

export default UserProfile;