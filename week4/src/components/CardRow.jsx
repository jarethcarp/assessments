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
  const [link, setLink] = useState(initalCardData.link);

  axios
    .get(`https://api.scryfall.com/cards/named?fuzzy=${cardName}`)
    .catch(function (error) {
      console.log(error);
      setCardName("Please put in the name of a MTG card");
      setCardType("");
      setMana("");
    })
    .then((res) => {
      if (res.data.object === "card") {
        setCardName(res.data.name);
        setCardType(res.data.type_line);
        setMana(res.data.mana_cost);
        setLink(res.data.scryfall_uri);
      }
    });

  // For toggling the ability to edit
  const changeEditmode = () => {
    if (cardName === "Please put in the name of a MTG card") {
      setCardName("");
    }
    setEditMode(true);
  };
  const changeNormalmode = () => {
    const bodyObj = {
      id: initalCardData.id,
      cardCount: cardCount,
      cardName: cardName,
      cardType: cardType,
      mana: mana,
    };

    // Calls scryfalls targeting the name of the card and returns data about that card
    axios
      .get(`https://api.scryfall.com/cards/named?fuzzy=${cardName}`)
      .catch(function (error) {
        console.log(error);
        setCardName("Please put in the name of a MTG card");
        setCardType("");
        setMana("");
      })
      .then((res) => {
        if (res.data.object === "card") {
          setCardName(res.data.name);
          setCardType(res.data.type_line);
          setMana(res.data.mana_cost);
          setLink(res.data.scryfall_uri);
        }
      });

    // This is what to use so you can edit the box yourself

    // axios.put("/api/editCard", bodyObj)
    // .then((res) => {
    //     setCardCount(res.data.updatedCard.cardCount)
    //     setCardName(res.data.updatedCard.cardName)
    //     setCardType(res.data.updatedCard.cardType)
    //     setMana(res.data.updatedCard.cardCount)
    // })

    setEditMode(false);
  };

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
        linkValue={link}
        onValueChange={setCardName}
      />
      <CardType
        isEditing={editMode}
        value={cardType}
        onValueChange={setCardType}
      />
      <ManaCell isEditing={editMode} value={mana} onValueChange={setMana} />
    </tr>
  );
};
// Prettier for some reason dosen't want ManaCell to be on sepraite lines and I am tried of fighting it
export default CardRow;
