import { useState } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import Header from './pages/Header'

function App() {
  

  return (
    <>
      <div>
        <div>
          <Header />

        </div>
        <div className='main'>
          <Outlet />

        </div>
      </div>
    </>
  )
}

export default App
