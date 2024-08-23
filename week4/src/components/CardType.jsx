import React from 'react'

const CardType = ({ isEditing, value, onValueChange }) => {
    return isEditing ? (
        <td>
            <input 
            type="text"
            value={value}
            onChange={(e) => onValueChange(e.target.value)}
            />
        </td>
      ) : (
    <td>
        <p>{value}</p>
    </td>
  )
}

export default CardType