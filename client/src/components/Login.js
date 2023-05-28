import React from 'react';

const Login = () => {

  const handleFormSubmit = (e) => { 
    e.preventDefault();

  }

  return (
    <div id="login-container">
      <h1>LOGIN</h1>
      <div id="login-form">
        <form onSubmit={handleFormSubmit}>
          <label> Username: 
            <input 
              type="text" 
              name="username"
              // value={Obj.username}
              // onChange={handleChange}
            />
          </label>
          <br /> 
          <label> Password: 
            <input 
              type="text" 
              name="password"
              // value={Obj.password}
              // onChange={handleChange}
            />
          </label>
          <br /> 
          <br /> 
          <input   
            id='button-submit-form'
            type="submit" 
            value="Submit"
          />
        </form>
      </div>   
    </div>
  )
}

export default Login;