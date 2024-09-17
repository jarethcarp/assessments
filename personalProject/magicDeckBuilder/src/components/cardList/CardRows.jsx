import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import EditBnt from "../EditBnt";
import CardProps from "./CardProps";
import axios from "axios";

const CardRows = ({ cardData, isNotPublic }) => {
  const [isEditing, setisEditing] = useState(true);
  const [cardCount, setCardCount] = useState(cardData.cardLists[0].cardCount);
  const [cardName, setCardName] = useState(cardData.name);
  const [cardMana, setCardMana] = useState(cardData.manaCost);
  const [cardPrice, setCardPrice] = useState(parseFloat(cardData.price * cardData.cardCount).toFixed(2));

  const changeEditmode = () => {
    if (isEditing) {
      console.log(isEditing);
      setisEditing(!isEditing);
    } else {
      console.log(isEditing);
      setisEditing(!isEditing);
      axios.get(`api/card-name`)
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
    <tr class="hover:bg-slate-300">
      <EditBnt 
        cardId={cardData.cardId}
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
