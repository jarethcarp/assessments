import { useState } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import Header from './components/Header'

function App() {
  

  return (
    <>
      <div className=''>
        <Header />
        <Outlet />
      </div>
    </>
  )
}

export default App
