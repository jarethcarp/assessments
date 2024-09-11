import React from 'react'

const RegisterForm = () => {
  return (
    <>
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
        <button type="submit" className="navButton mx-3">Submit</button>
     </>
  )
}

export default RegisterForm