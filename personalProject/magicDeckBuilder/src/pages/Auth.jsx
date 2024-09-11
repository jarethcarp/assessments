import React from "react";
import { useState } from "react";
import { useLoaderData, NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import LoginForm from "../components/auth/loginForm";


const Auth = ({ onLogin }) => {
  const nav = useNavigate()
  const isLoggedIn = useSelector((state) => state.isLoggedIn)
  const dispatch = useDispatch()


  const handleLogin = async (e, formdata) => {
    event.preventDefault()

    const res = await axios.post("/api/auth", formdata)

    if (res.data.success) {
      dispatch({
        type: 'USER_LOGIN'
      })
      nav('/')
    }
  }
    
  return (
    <>
      <LoginForm onLogin={handleLogin} />
      <br/>
      <h2>Don't have an account?</h2> 
      <NavLink to="./register" className='text-blue'>Register Here</NavLink>
    </>
  );
};


export default Auth
