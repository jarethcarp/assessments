import React from 'react'
import { NavLink } from 'react-router-dom'
import EditBnt from '../EditBnt'

const DeckRows = ({ deckData }) => {
  return (
    <tr class="hover:bg-gray-50">
        <EditBnt />
        <td class="p-4 text-[15px] text-gray-800">
            <NavLink to={`/edit/${deckData.id}`}>{deckData.deckName}</NavLink>
        </td>
        <td class="p-4 text-[15px] text-gray-800">
            {deckData.colors}
        </td>
        <td class="p-4 text-[15px] text-gray-800">
            {deckData.format}
        </td>
    </tr>
  )
}

export default DeckRows