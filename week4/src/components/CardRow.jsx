import EditButtons from "./EditButtons"
import NameCell from "./NameCell"
import CountCell from "./CountCell"
import ManaCell from "./ManaCell"
import CardType from "./CardType"

const CardRow = ({ initalCardData }) => {

    const { cardCount, cardName, type, mana} = initalCardData
    
    

  return (
    <tr>
        <EditButtons 
        isEditing={false}
        />
        <CountCell 
        isEditing={false}
        value={cardCount}
        />
        <NameCell 
        isEditing={false}
        value={cardName}
        />
        <CardType 
        isEditing={false}
        value={type}
        />
        <ManaCell 
        isEditing={false}
        value={mana}
        />
    </tr>
  )
}

export default CardRow