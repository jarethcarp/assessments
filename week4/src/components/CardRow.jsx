import EditButtons from "./EditButtons";
import NameCell from "./NameCell";
import CountCell from "./CountCell";
import ManaCell from "./ManaCell";
import CardType from "./CardType";
import { useState } from "react";
import axios from "axios";

const CardRow = ({ initalCardData, initalIsEditing, deleteFunc }) => {
  // Setting useState variables
  const [editMode, setEditMode] = useState(initalIsEditing);
  const [cardCount, setCardCount] = useState(initalCardData.cardCount);
  const [cardName, setCardName] = useState(initalCardData.cardName);
  const [cardType, setCardType] = useState(initalCardData.cardType);
  const [mana, setMana] = useState(initalCardData.mana);

  // For toggling the ability to edit
  const changeEditmode = () => setEditMode(true);
  const changeNormalmode = () => {
    const bodyObj = {
        id: initalCardData.id,
        cardCount: cardCount,
        cardName: cardName,
        cardType: cardType,
        mana: mana
    }

    axios.put("/api/editCard", bodyObj)
    .then((res) => {
        setCardCount(res.data.updatedCard.cardCount)
        setCardName(res.data.updatedCard.cardName)
        setCardType(res.data.updatedCard.cardType)
        setMana(res.data.updatedCard.cardCount)
    })

    setEditMode(false);
  }

  return (
    <tr>
      <EditButtons
        isEditing={editMode}
        editClick={changeEditmode}
        saveClick={changeNormalmode}
        deleteFunc={deleteFunc}
      />
      <CountCell
        isEditing={editMode}
        value={cardCount}
        onValueChange={setCardCount}
      />
      <NameCell
        isEditing={editMode}
        value={cardName}
        onValueChange={setCardName}
      />
      <CardType
        isEditing={editMode}
        value={cardType}
        onValueChange={setCardType}
      />
      <ManaCell 
        isEditing={editMode} 
        value={mana} 
        onValueChange={setMana} 
      />
    </tr>
  );
};

export default CardRow;
