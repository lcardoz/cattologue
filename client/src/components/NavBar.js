import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = ({user, setUser}) => {
  const navigate = useNavigate()

  const handleLogout = () => {
    fetch("/logout", {method: "DELETE"})
    .then(r => {
      if (r.ok) {
        setUser(null)
        navigate("/")
      }
    })
  }

  return (
    <nav id="navbar">
      <Link to="/">
        <h1 id="nav-title">CATTOLOGUE</h1>
      </Link>
      <h4 id="nav-links">
      <Link to="/cats">CATS</Link>
      {user ?
        <> 
          <Link to={`/user-profile/${user.id}`}>MY PROFILE</Link>
          <button onClick={handleLogout}>Log out</button>
        </> 
      : 
        <>
          <Link to="/login">LOGIN</Link>
          <Link to="/signup">SIGNUP</Link>
        </>}
      </h4>
    </nav>
  )
}

export default NavBar;