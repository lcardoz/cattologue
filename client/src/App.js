import './App.css';
import { useState, useEffect } from 'react';
import {Routes, Route} from "react-router-dom";
import Cats from './components/Cats';
import HomePage from './components/HomePage';
import Login from './components/Login';
import NavBar from './components/NavBar';
import Signup from './components/Signup';
import UserProfile from './components/UserProfile';
import NoPage from './components/NoPage';
import CatForm from './components/CatForm';

function App() {

  // HOMEWORK: 
    // Martin- create formData object, rearrange form fields / add labels on his own branch :)
    // Leah- implement Cat filter/search on their own branch :)

  // TO DO: CRUD, filter on cats, ReactNative for site responsiveness?

  // Stretch Goals: Action Mailer, Active Storage, Styling Framework? (Tailwind, Bootstrap?)

  useEffect(() => {
    fetch("/auth")
    .then(r => {
      if (r.ok) {
        r.json().then(setUser)
      } // Add error handling
    })
  }, [])

  const [user, setUser] = useState()
  
  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login setUser={setUser}/>} />
        <Route path="cats" element={<Cats />} />
        <Route path="user-profile" element={<UserProfile user={user} />} />
        <Route path="new-cat" element={<CatForm />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  );
}

export default App;
