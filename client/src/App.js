import './App.css';
import {Routes, Route} from "react-router-dom";
import Cats from './components/Cats';
import HomePage from './components/HomePage';
import Login from './components/Login';
import NavBar from './components/NavBar';
import Signup from './components/Signup';
import UserProfile from './components/UserProfile';
import NoPage from './components/NoPage';

function App() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="signup" element={<Signup />} />
      <Route path="login" element={<Login />} />
      <Route path="cats" element={<Cats />} />
      <Route path="user-profile" element={<UserProfile />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
    </>
  );
}

export default App;
