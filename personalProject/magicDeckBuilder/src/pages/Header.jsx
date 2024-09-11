import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { NavLink, useNavigate, useLoaderData} from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import LogoutBnt from '../components/auth/LogoutBnt'

const Header = () => {
  const nav = useNavigate()
  const isLoggedIn = useSelector((state) => state.isLoggedIn)
  const dispatch = useDispatch()
  
  const sessionCheck = async () => {
    const res = await axios.get("/api/session-check")
    if (res.data.success) {
      dispatch({
        type: "USER_LOGIN"
      })
    }
  }

  const handleLogout = async (e) => {
    e.preventDefault()
    const res = await axios.post('/api/logout')
    console.log("res.data.logged_in: ",res.data.logged_in)
    if (res.data.success) {
      dispatch({
        type: 'USER_LOGOUT'
      })
      nav('/')

    }
  }

  useEffect(() => {
    sessionCheck()
  }, [])


  return (
    isLoggedIn ? (
      <>
          <nav className='flex justify-between items-center h-24 px-10 shadow-md bg-gold text-primary-dark m-0'>
              <div className='flex w-1/4 justify-between items-center'>
                <NavLink to="/" className='navButton'>YourDecks</NavLink>
                <NavLink to="/edit" className='navButton'>Deckbuilder</NavLink>
                <NavLink to="/public-decks" className='navButton'>PublicDecks</NavLink>
              </div>
              
                <div>
                  <LogoutBnt onLogout={handleLogout} />
                </div>

          </nav>
      </>
    ) : (
      <nav className='flex justify-between items-center h-24 px-10 shadow-md bg-gold text-primary-dark m-0'>
              <div className='flex w-1/4 justify-between items-center'>
                <NavLink to="/" className='navButton'>Your Decks</NavLink>
                <NavLink to="/edit" className='navButton'>Deckbuilder</NavLink>
                <NavLink to="/public-decks" className='navButton'>PublicDecks</NavLink>
              </div>
              
                <div>
                  <NavLink to="/auth" className='navButton'>Login</NavLink>
                </div>

          </nav>
    )
  )
}

export default Header