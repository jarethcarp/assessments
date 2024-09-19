import React from 'react'
import { useLoaderData, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaRegPlusSquare } from "react-icons/fa"
import CardRows from '../components/cardList/CardRows';
import CardHeader from '../components/cardList/cardHeader';

const CardBuilder = () => {
  const nav = useNavigate()
  const { cards } = useLoaderData()
  console.log(cards)
  const cardListItems = cards.map((card) => {
    console.log("Card", card)
      if (card.cardLists.length > 1){ // Might need to edit/delete this later
        card.cardLists.map((subcard) => {
            console.log("SubCard: ", subcard)
            return <CardRows cardData={card} isNotPublic={true} />
        })
      }
    return <CardRows cardData={card} isNotPublic={true} />;
  });

  // console.log(cardListItems)
  

  const addCard = () => {
    axios.post("/api/add-card")
    .then((res) => {
      if (res.data.success) {
        console.log(cards[0].cardLists[0].deckId)
         nav(`/edit/${cards[0].cardLists[0].deckId}`)
      } else {
         console.log("Failed to make Card")
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