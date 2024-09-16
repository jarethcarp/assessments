import React from 'react'
import { useLoaderData } from 'react-router-dom'
import DeckRows from '../components/decks/deckRows'
import DeckHeader from '../components/decks/DeckHeader'


const PublicDecks = () => {

  const { decks } = useLoaderData()
  const deckListItems = decks.map((deck) => {
    return (
      <DeckRows deckData={deck} isNotPublic={false} />
    )
  })

  return (
    <div class="font-sans overflow-x-auto shadow-sm">
      <table class="min-w-full bg-gray2">
        <DeckHeader isNotPublic={false} />
        <tbody class="whitespace-nowrap">
          {deckListItems}
        </tbody>
      </table>
    </div>
  )
}

export default PublicDecks