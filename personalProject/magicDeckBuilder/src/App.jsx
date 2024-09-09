import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Home from './components/home'
import Auth from './components/Auth'
import DeckBuilder from './components/DeckBuilder'
import PublicDecks from './components/PublicDecks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='dark:bg-black dark:text-white'>
        <Header />
        <Home />
        <Auth />
        <DeckBuilder />
        <PublicDecks />

      </div>
    </>
  )
}

export default App
