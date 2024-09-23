import React from 'react'
import TooltipIMG from '../modal/tooltipIMG'

const CardProps = ({ value, isEditing, valueUpdate, cardIMG }) => {
    return isEditing ? (
        <div className='text-gold'>
          <div className='hover:hidden hover:size-0 border-2'>
           {value}
           <TooltipIMG cardIMG={cardIMG} />
          </div>
          
        </div>
      ) : (
        <>
          <input type='text' value={value} onChange={(e) => valueUpdate(e.target.value)} />
        </>
    )
}

export default CardProps