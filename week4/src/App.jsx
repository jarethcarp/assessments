import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DeckList from './components/DeckList.jsx'

let TEST_DATA = [
  { id: 0, cardCount: 1, cardName: "Plummet", type: "Instant", mana: "1 G" },
  { id: 1, cardCount: 4, cardName: "Lightning Bolt", type: "Instant", mana: "R" },
  { id: 2, cardCount: 4, cardName: "Ragavan, Nimble Pilferer", type: "Creature", mana: "R" },
  { id: 3, cardCount: 4, cardName: "Tarmogoyf", type: "Creature", mana: "1 G" },
  { id: 4, cardCount: 4, cardName: "Thoughtseize", type: "Sorcery ", mana: "B" },
];

function App() {
  

  return (
    <DeckList initalData={TEST_DATA}/>
  )
}

export default App
