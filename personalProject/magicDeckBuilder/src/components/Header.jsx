import React from 'react'
import { NavLink, useNavigate, Outlet } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <nav className='flex justify-between items-center h-24 px-10 shadow-md bg-gold text-primary-dark'>
            <div className='flex w-1/4 justify-between items-center'>
              <NavLink to="/" className='navButton'>Your Decks (Home)</NavLink>
              <NavLink to="/edit" className='navButton'>Deckbuilder</NavLink>
              <NavLink to="/public-decks" className='navButton'>PublicDecks</NavLink>
            </div>
            <div>
              <NavLink to="/auth" className='navButton'>Login</NavLink>
            </div>
        </nav>
    </>
  )
}

export default Header