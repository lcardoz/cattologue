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
    // Martin- attempt to create new cat
    // Leah- attempt to create new user

  // TO DO: CRUD, look into ReactNative?
  // Stretch Goals: Action Mailer, Active Storage, Styling Framework? (Tailwind, Bootstrap?)

  const checkUser = () => {
    fetch("/auth")
    .then(r => {
      if (r.ok) {
        r.json().then(setUser)
      } else {
        r.json().then(console.error)
      }
    })
  }

  useEffect(() => {
    checkUser()
  }, [])

  const [user, setUser] = useState()
  
  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="signup" element={<Signup setUser={setUser} />} />
        <Route path="login" element={<Login setUser={setUser} />} />
        <Route path="cats" element={<Cats user={user} />} />
        <Route path="user-profile" element={<UserProfile user={user} />} />
        <Route path="new-cat" element={<CatForm checkUser={checkUser} />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  );
}

export default App;
