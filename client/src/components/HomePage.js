import React from 'react';
import {Link} from 'react-router-dom';
import Signup from './Signup';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Cattologue!</h1>
      <p>
        Cattologue is the premier premium platform for humans to categorize and connect with their cats.
      </p>
      <p>
        <Link to='signup'>Sign up</Link> today!
      </p>
    </div>
  )
}

export default HomePage;