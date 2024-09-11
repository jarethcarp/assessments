import React from 'react'
import { useState } from 'react'

const loginForm = ({ onLogin }) => {
    const [emailValue, setEmailValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')

  return (
    <> 
        
      <div>Login</div>
      <form 
      onSubmit={(e) => {
        onLogin(e, {
            email: emailValue,
            password: passwordValue
        })
      }} >
        <div>
          <label htmlFor="email">Email: </label>
          <input
            name="email"
            id="email"
            type="email"
            required
            onChange={(e) => setEmailValue(e.target.value)}
            className="loginFormInput"
          />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            name="password"
            id="password"
            type="password"
            required
            onChange={(e) => setPasswordValue(e.target.value)}
            className="loginFormInput"
          />
        </div>
        <button type="submit" className="navButton mx-3">Submit</button>
      </form>
      
    </>
  )
}

export default loginForm