import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

  const [user, setUser] = useState(false);

  return (
    <nav id="navbar">
      <h1 id="nav-title">CATTOLOGUE</h1>
      {user ?
      <> 
        <h4 id="nav-links">
          <Link to="/cats">CATS</Link>
          <Link to="/user-profile">MY PROFILE</Link>
        </h4>
      </> 
      : 
      <>
        <h4 id="nav-links">
          <Link to="/login">LOGIN</Link>
          <Link to="/signup">SIGNUP</Link>
        </h4>
      </>}
    </nav>
  )
}

export default NavBar;