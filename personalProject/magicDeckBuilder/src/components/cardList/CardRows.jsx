import React from 'react'
import { NavLink } from 'react-router-dom'
import EditBnt from '../EditBnt'

const CardRows = ({ cardData }) => {
    // console.log(cardData)
  return (
    <tr class="hover:bg-gray-50">
        <EditBnt />
        <td class="p-4 text-[15px] text-gray-800">
            {cardData.cardName}
        </td>
        <td class="p-4 text-[15px] text-gray-800">
        {cardData.cardMana}
        </td>
        <td class="p-4 text-[15px] text-gray-800">
        {cardData.cardPrice}
        </td>
    </tr>
  )
}

export default CardRows