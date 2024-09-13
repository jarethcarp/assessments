import React from 'react'
import { useLoaderData } from 'react-router-dom'
import DeckRows from '../components/decks/deckRows'

const PublicDecks = () => {

  const { decks } = useLoaderData()
  const deckListItems = decks.map((deck) => {
    return (
      <DeckRows deckData={deck}/>
    )
  })

  return (
    <div class="font-sans overflow-x-auto shadow-sm">
      <table class="min-w-full bg-gray2">
        <thead class="bg-gray-100 whitespace-nowrap bg-slate-400">
          <tr>
            <th class="p-4 text-left text-xs font-semibold text-gray-800">
              Actions
            </th>
            <th class="p-4 text-left text-xs font-semibold text-gray-800">
              Name
            </th>
            <th class="p-4 text-left text-xs font-semibold text-gray-800">
              Colors
            </th>
            <th class="p-4 text-left text-xs font-semibold text-gray-800">
              Format
            </th>
          </tr>
        </thead>

        <tbody class="whitespace-nowrap">
          {deckListItems}
        </tbody>
      </table>
    </div>
  )
}

export default PublicDecks