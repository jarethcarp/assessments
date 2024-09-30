import React from 'react'
import { useState } from 'react';

const UpdateForm = ({ onUpdate, userId }) => {
    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    
  return (
    <>
      <form
      onSubmit={(e) => {
        console.log("Above onRegister")
        onUpdate(e, {
            email: emailValue,
            password: passwordValue,
            confirmPassword: confirmPassword
            // confirmPassword: confirmPassword,
          });
          console.log('UpdateForm test')
        }}
      >
        <div>
          <label htmlFor="email">Email: </label>
          <input
            name="newEmail"
            id="email"
            type="email"
            onChange={(e) => setEmailValue(e.target.value)}
            className="loginFormInput"
          />
        </div>
        <div>
          <label htmlFor="newPassword">Password: </label>
          <input
            name="password"
            id="password"
            type="password"
            onChange={(e) => setPasswordValue(e.target.value)}
            className="loginFormInput"
          />
        </div>
        <div>
          <label htmlFor="ConfirmPassword">Confirm Password: </label>
          <input
            name="password"
            id="password"
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="loginFormInput"
          />
        </div>
      <button type="submit" className="navButton mx-3 hover:text-blue">
        Submit
      </button>
      </form>
    </>
  )
}

export default UpdateForm