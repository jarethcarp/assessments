import React from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Auth = ({ onLogin }) => {
    const [emailValue, setEmailValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')
    // const {users} = useLoaderData()
    // console.log(users.email)


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
            type="text"
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
        <button>Submit</button>
      </form>
      <br />
      <div>Don't have an account? Register here.</div>
      <form>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            name="newEmail"
            id="email"
            type="text"
            required
            className="loginFormInput"
          />
        </div>
        <div>
          <label htmlFor="newPassword">Password: </label>
          <input
            name="password"
            id="password"
            type="password"
            required
            className="loginFormInput"
          />
        </div>
        <div>
          <label htmlFor="ConfirmPassword">Confirm Password: </label>
          <input
            name="password"
            id="password"
            type="password"
            required
            className="loginFormInput"
          />
        </div>
      </form>
      <button>Submit</button>
    </>
  );
};


export default Auth
