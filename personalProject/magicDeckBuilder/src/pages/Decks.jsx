import React from "react";
import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import axios from "axios";
import DeckRows from "../components/decks/deckRows";
import DeckHeader from "../components/decks/DeckHeader";
import { FaRegPlusSquare } from "react-icons/fa"

const Decks = () => {
  const nav = useNavigate()
  
  // const [tempid, setTempId] = useState(10)
  const { decks } = useLoaderData()
  const deckListItems = decks.map((deck) => {
    return <DeckRows deckData={deck} isNotPublic={true} />;
  });

  const addDeck = () => {
    axios.post("/api/add-deck")
    .then((res) => {
      if (res.data.success) {
         nav('/decks')
      } else {
         console.log("Failed to make Deck")
      }
   });
  }

  return (
    <div class="font-sans overflow-x-auto shadow-sm">
      <FaRegPlusSquare className="size-5 hover:text-blue active:bg-black" onClick={() => addDeck()}/>
      <table class="min-w-full bg-gray2">
        <DeckHeader  isNotPublic={true}/>
        <tbody class="whitespace-nowrap">
          {deckListItems}
        </tbody>
      </table>
    </div>
  );
};

export default Decks;
