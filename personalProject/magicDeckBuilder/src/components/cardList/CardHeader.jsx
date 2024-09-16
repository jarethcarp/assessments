import React from 'react'

const cardHeader = () => {
  return(
    <thead class="bg-gray-100 whitespace-nowrap bg-slate-400 w-1">
          <tr>
            <th class="p-4 text-left text-xs font-semibold text-gray-800">
              Actions
            </th>
            <th class="p-4 text-left text-xs font-semibold text-gray-800">
              # of cards
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
  )
}

export default cardHeader