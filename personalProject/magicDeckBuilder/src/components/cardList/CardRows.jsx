import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import EditBnt from "./CardEditBnt";
import CardProps from "./CardProps";
import axios from "axios";

const CardRows = ({ cardData, isNotPublic }) => {
  const [isEditing, setisEditing] = useState(true);
  const [cardCount, setCardCount] = useState(cardData.cardLists[0].cardCount);
  const [cardName, setCardName] = useState(cardData.cardLists[0].cardName);
  const [cardMana, setCardMana] = useState(cardData.manaCost);
  const [cardPrice, setCardPrice] = useState(
    (cardData.prices * cardCount).toFixed(2)
  );

  const changeEditmode = () => {
    if (isEditing) {
      setisEditing(!isEditing);
    } else {
      setisEditing(!isEditing);
      axios.get(`/api/card-name/${cardName}`).then((res) => {
        if (!res.data.success) {
          console.log("This card is not in my data base");
          axios
            .get(`https://api.scryfall.com/cards/named?fuzzy=${cardName}`)
            .catch((error) => {
              console.log("Card doesn't exists");
              setCardName("");
              setCardMana("");
            })
            .then((res) => {
              const scryfallData = res
              console.log("Scryfall has this card")
              setCardName(res.data.name);
              setCardMana(res.data.mana_cost);
              axios.get(`/api/card-name/${res.data.name}`)
              .then((res) => {
                console.log("I need to add this card into my database", !res.data.success)
                if (!res.data.success) {
                  axios.put('/api/update-cardStore', { scryfallData: scryfallData.data})
                  .then(
                    console.log("Did the card get added", res.data.success)
                  )
                }
              })
            });
        } else {
          console.log("This is the card: ", res.data);
          setCardCount(cardCount);
          setCardName(res.data.card.name);
          setCardMana(res.data.card.manaCost);
          setCardPrice(res.data.prices)
          // axios.put('/api/update-card', { scryfallData: res.data, cardData: cardData })
        }
      });
    }
  };

  return (
    <tr class="hover:bg-slate-300">
      <EditBnt
        cardId={cardData.cardLists[0]}
        clickEdit={changeEditmode}
        isPublic={isNotPublic}
      />
      <td class="p-4 text-[15px]">
        <CardProps
          isEditing={isEditing}
          value={cardCount}
          valueUpdate={setCardCount}
        />
      </td>
      <td class="p-4 text-[15px] text-gray-800">
        <CardProps
          isEditing={isEditing}
          value={cardName}
          valueUpdate={setCardName}
        />
      </td>
      <td class="p-4 text-[15px] text-gray-800">
        <td class="p-4 text-[15px] text-gray-800">
          <CardProps
            isEditing={isEditing}
            value={cardMana}
            valueUpdate={setCardMana}
          />
        </td>
      </td>
      <td class="p-4 text-[15px] text-gray-800">
        <td class="p-4 text-[15px] text-gray-800">
          <CardProps
            isEditing={isEditing}
            value={cardPrice}
            valueUpdate={setCardPrice}
          />
        </td>
      </td>
    </tr>
  );
};

export default CardRows;
