import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import EditBnt from "../EditBnt";
import CardProps from "./CardProps";

const CardRows = ({ cardData ,isNotPublic }) => {
  const [isEditing, setisEditing] = useState(true);
  const [cardCount, setCardCount] = useState(cardData.cardCount);
  const [cardName, setCardName] = useState(cardData.cardName);
  const [cardMana, setCardMana] = useState(cardData.cardMana);
  const [cardPrice, setCardPrice] = useState(parseFloat(cardData.cardPrice * cardData.cardCount).toFixed(2));

  const changeEditmode = () => {
    if (isEditing) {
      console.log(isEditing);
      setisEditing(!isEditing);
    } else {
      console.log(isEditing);
      setisEditing(!isEditing);
      axios.get(`https://api.scryfall.com/cards/named?fuzzy=${cardName}`)
      .catch(function (error) {
        console.log(error);
      })
      .then((res) => {
        setCardCount(cardCount)
        setCardName(res.data.name);
        setCardMana(res.data.manaCost)
        // setCardPrice(res.data.prices[usd])
      })
    }
  };

  return (
    <tr class="hover:bg-gray-50">
      <EditBnt 
        cardId={cardData.cardId}
        clickEdit={changeEditmode}
        isPublic={isNotPublic}
      />
      <td class="p-4 text-[15px] text-gray-800">
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
