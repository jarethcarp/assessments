import React from 'react'

const Header = () => {
  return (
    <>
        <nav className='flex justify-between items-center h-24 px-10 shadow-md bg-gold text-primary-dark'>
            <div className='flex w-1/4 justify-between items-center'>
                <button>Your Decks</button>
                <button>Temp</button>
            </div>
            <div>
                <button>Log IN</button>
            </div>
        </nav>
    </>
  )
}

export default Header