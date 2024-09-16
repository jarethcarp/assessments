import React from 'react'
import { useLoaderData } from "react-router-dom";
import axios from "axios";
import { FaRegPlusSquare } from "react-icons/fa"
import CardRows from '../components/cardList/CardRows';
import CardHeader from '../components/cardList/cardHeader';

const CardBuilder = () => {

  const { cards } = useLoaderData()
  const cardListItems = cards.map((card) => {
    console.log(card)
    return <CardRows cardData={card} isNotPublic={true} />;
  });

  

  const addCard = () => {
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
      <FaRegPlusSquare className="size-5 hover:text-blue active:bg-black" onClick={() => addCard()}/>
      <table class="min-w-full bg-gray2">
        <CardHeader />

        <tbody class="whitespace-nowrap">
          {cardListItems}
        </tbody>
      </table>
    </div>
  )
}

export default CardBuilder