import React from 'react';
import {Link, useNavigate} from 'react-router-dom';

const NoPage = () => {
  const navigate = useNavigate()

  return (
    <div>
      <h3>Oops! That page doesn't exist.</h3>
      <p>
        <Link to={navigate(-1)}>Let's go back.</Link>
      </p>
    </div>
  )
}

export default NoPage;