import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Cats from './components/Cats';
import HomePage from './components/HomePage';
import Login from './components/Login';
import NavBar from './components/NavBar';
import Signup from './components/Signup';
import UserProfile from './components/UserProfile';
import NoPage from './components/NoPage';
import CatForm from './components/CatForm';
import UserForm from './components/UserForm';

function App() {

  // HOMEWORK: 
    // Martin- UD for cat model, fix rendering of user cats on profile after new cat has been added
    // Leah- UD for user model

  // TO DO: look into ReactNative?
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
        <Route path="signup" element={<Signup setUser={setUser} />} />
        <Route path="login" element={<Login setUser={setUser} />} />
        <Route path="cats" element={<Cats user={user} />} />
        <Route path="profile" element={<UserProfile user={user} />} />
        <Route path="profile/edit" element={<UserForm user={user} setUser={setUser} /> } />
        <Route path="new-cat" element={<CatForm />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  );
}

export default App;
