import React from 'react'
import { useLoaderData } from "react-router-dom";
import CardRows from '../components/cardList/CardRows';

const CardBuilder = () => {

  const { cards } = useLoaderData()
  const cardListItems = cards.map((card) => {
    console.log(card)
    return <CardRows cardData={card} />;
  });

  console.log(cards)

  const rows = <CardRows />
  // const rows = 'Test and some other stuff'

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
              Mana Cost
            </th>
            <th class="p-4 text-left text-xs font-semibold text-gray-800">
              Price
            </th>
          </tr>
        </thead>

        <tbody class="whitespace-nowrap">
          {cardListItems}
          {/* Test */}
        </tbody>
      </table>
    </div>
  )
}

export default CardBuilder