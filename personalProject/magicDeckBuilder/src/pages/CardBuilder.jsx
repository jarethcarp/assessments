import React from 'react'
import { useLoaderData, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaRegPlusSquare, FaCopy } from "react-icons/fa"
import CardRows from '../components/cardList/CardRows';
import CardHeader from '../components/cardList/cardHeader';

const CardBuilder = () => {
  const nav = useNavigate()
  const { cards } = useLoaderData()
  console.log(cards)
  const cardListItems = cards.map((card) => {
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
      <table class="min-w-full bg-gray2">
        <CardHeader />

        <tbody class="whitespace-nowrap">
          {cardListItems}
        </tbody>
      </table>
      <div className="float bg-gold">
        <FaRegPlusSquare className="size-5 hover:text-blue active:bg-black " onClick={() => addCard()}/>
        <FaCopy data-modal-target="copy-modal" data-modal-toggle="copy-modal" className="size-5 text-gray hover:text-blue active:bg-gold" type='button' onClick={() => console.log("Show Modal")}/>
        <button data-modal-target="copy-modal" data-modal-toggle="copy-modal" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
          Toggle modal
        </button>
      </div>

      <div id="copy-modal" tabIndex={'-1'} aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div  class="relative p-4 w-full max-w-2xl max-h-full">
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div class="p-4 md:p-5 space-y-4">
              <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                Test
              </p>
            </div>
            <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
              <FaCopy data-modal-hide="copy-modal" type='button' className="size-5 hover:text-blue active:bg-black" onClick={() => console.log("Hide Modal")}/>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default CardBuilder