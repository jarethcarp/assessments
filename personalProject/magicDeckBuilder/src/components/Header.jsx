import React from 'react'

const Header = () => {
  return (
    <>
        <nav className='flex justify-between items-center bg-gold h-[10vh] px-10 text-primary-dark shadow-md'>
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