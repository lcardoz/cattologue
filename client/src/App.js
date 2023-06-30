import './App.css';
import {useState, useEffect} from 'react';
import {Routes, Route, useNavigate} from "react-router-dom";
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
    // Martin- 
    // Leah- 

  // TO DO: look into ReactNative?
  // Stretch Goals: Action Mailer, Active Storage, Styling Framework? (Tailwind, Bootstrap?)
  const navigate = useNavigate()

  const [user, setUser] = useState()

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

  const postCat = (e, formData) => {
    e.preventDefault()
    fetch('/cats', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    .then(r => {
      if (r.ok) {
          checkUser()
          navigate('/cats')
      } else {
        r.json().then(console.error)
      }
    })
  }

  const patchCat = (e, formData) => {
    e.preventDefault()
    fetch(`/cats/${formData.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    .then(r => {
      if (r.ok) {
          checkUser()
          navigate('/cats')
      } else {
        r.json().then(console.error)
      }
    })
  }
  
  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="signup" element={<Signup setUser={setUser} />} />
        <Route path="login" element={<Login setUser={setUser} />} />
        <Route path="cats" element={<Cats user={user} />} />
        <Route path="profile" element={<UserProfile user={user} checkUser={checkUser} />} />
        <Route path="profile/edit" element={<UserForm user={user} setUser={setUser} /> } />
        <Route path="new-cat" element={<CatForm handleSubmit={postCat} />} />
        <Route path="edit-cat" element={<CatForm handleSubmit={patchCat} />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  );
}

export default App;
