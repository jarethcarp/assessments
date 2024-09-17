import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import EditBnt from "../DeckEditBnt";
import DeckEditName from "./DeckEditName";
import DeckEditColors from "./DeckEditColors";
import DeckEditFormat from "./DeckEditFormat";

const DeckRows = ({ deckData, isNotPublic }) => {
  const [deckName, setDeckName] = useState(deckData.deckName);
  const [deckcolor, setDeckColor] = useState(deckData.colors);
  const [deckFormat, setDeckFormat] = useState(deckData.format);
  const [isEditing, setisEditing] = useState(true);

  const changeEditmode = () => {
    if (isEditing) {
      console.log(isEditing);
      setisEditing(!isEditing);
    } else {
      console.log(isEditing);
      setisEditing(!isEditing);
      axios.put("/api/update-deck", {
        id: deckData.id,
        deckName,
        deckcolor,
        deckFormat,
      });
    }
  };

  return (
    <tr class="hover:bg-slate-300">
      <EditBnt
        deckId={deckData.id}
        clickEdit={changeEditmode}
        isPublic={isNotPublic}
      />
      <td class="p-4 text-[15px] text-gray-800">
        <DeckEditName
          isEditing={isEditing}
          value={deckName}
          deckId={deckData.id}
          valueUpdate={setDeckName}
        />
      </td>
      <td class="p-4 text-[15px] text-gray-800">
        <DeckEditColors
          isEditing={isEditing}
          value={deckcolor}
          valueUpdate={setDeckColor}
        />
      </td>
      <td class="p-4 text-[15px] text-gray-800">
        <DeckEditFormat
          isEditing={isEditing}
          value={deckFormat}
          valueUpdate={setDeckFormat}
        />
      </td>
    </tr>
  );
};

export default DeckRows;
