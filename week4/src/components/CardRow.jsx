import EditButtons from "./EditButtons";
import NameCell from "./NameCell";
import CountCell from "./CountCell";
import ManaCell from "./ManaCell";
import CardType from "./CardType";
import { useState } from "react";
import axios from "axios";

const CardRow = ({ initalCardData, initalIsEditing }) => {
  // Setting useState variables
  const [editMode, setEditMode] = useState(initalIsEditing);
  const [cardCount, setCardCount] = useState(initalCardData.cardCount);
  const [cardName, setCardName] = useState(initalCardData.cardName);
  const [cardType, setCardType] = useState(initalCardData.cardType);
  const [mana, setCardMana] = useState(initalCardData.mana);

  // For toggling the ability to edit
  const changeEditmode = () => setEditMode(true);
  const changeNormalmode = () => setEditMode(false);

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
        onValueChange={setCardMana} 
      />
    </tr>
  );
};

export default CardRow;
