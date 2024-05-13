import React from 'react'

const LoginPage = () => {
  return (
    <>
      <div className="container">
        <img src="https://bcassetcdn.com/assets/images/icons/common-large/common-large-logo-files.svg" alt="" srcset="" />
        <h2>Login</h2>
        <div className="entries">
          <input placeholder="username" type="text" name="username" id="" />
          <input placeholder="password" type="password" name="password" id="" />
          <input className="submit" type="submit" value="Login" />
        </div>
        <p>By continuing, you agree to our <a href="">Condition of Use</a> and <a href="">Privacy Notice</a></p>

        <div className="new">
          <h4>New to App?</h4>
          <button>Register Yourself</button>
        </div>
        
      </div>
    </>
  )
}

export default LoginPage
