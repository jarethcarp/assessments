import React from "react";
import { useState, useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaRegPlusSquare, FaCopy } from "react-icons/fa";
import CardRows from "../components/cardList/CardRows";
import CardHeader from "../components/cardList/cardHeader";
import { Modal } from "flowbite";

const CardBuilder = () => {
  const [target, setTarget] = useState(false);
  // let target = document.getElementById("copy-modal");
  // console.log("Log for taget")
  // console.log(target)
  // let target = ("copy-modal");
  // let target = ("Nothing");

  useEffect(() => {
    setTarget(document.getElementById("copy-modal")) // Make my modal's into a componet
  }, [])

  const options = {
    placement: "bottom-right",
    backdrop: "dynamic",
    backdropClasses: "bg-gray-900/50 fixed inset-0 z-40",
    closable: true,
    onHide: () => {
      console.log("modal is hidden");
    },
    onShow: () => {
      console.log("modal is shown");
    },
    onToggle: () => {
      console.log("modal has been toggled");
    },
  };

  const instanceOptions = {
    id: "copy-modal",
    override: true,
  };

  let modal;
  if (target) {
    modal = new Modal(target, options, instanceOptions);
  }

  console.log("Start of CardBuilder");
  const nav = useNavigate();
  let { cards } = useLoaderData();
  const [sortedCards, setSortedCards] = useState([])
  console.log("SORTED CARDS:", sortedCards)
  // cards = cards.sort((a, b) => a.name[0]-b.name[0])
  // console.log(cards)
  const cardListItems = cards.map((card) => {
    // console.log("Here are the cards from /api/cardList/${id}");
    console.log(card);
    return <CardRows key={card.id} cardData={card} isNotPublic={true} />;
  });

  useEffect(() => {
    const cardsSorted = cards.sort((a, b) => a.name - b.name)
    setSortedCards(cardsSorted)
  }, [])

  const copyListItems = cards.map((card) => {
    return (
      <>
        {card.cardLists[0].cardCount} {card.name} <br />
      </>
    );
  });

  const addCard = () => {
    console.log("add Card trigger");
    axios.post("/api/add-card").then((res) => {
      if (res.data) {
        // setUpdate(res.data)
        nav(`/edit/${cards[0].cardLists[0].deckId}`);
        console.log("Here is the res from addCard: ", res.data);
      } else {
        console.log("Failed to make Card");
      }
    });
  };

  return (
    <div className="font-sans overflow-x-auto shadow-sm">
      <table className="min-w-full bg-gray2">
        <CardHeader />

        <tbody className="whitespace-nowrap">
          {cardListItems}
          {/* {update} */}
        </tbody>
      </table>
      <div className="float bg-gold">
        <FaRegPlusSquare
          className="size-5 hover:text-blue active:bg-black "
          onClick={() => {
            addCard();
          }}
        />
        <FaCopy
          data-modal-target="copy-modal"
          data-modal-toggle="copy-modal"
          className="size-5 text-gray hover:text-blue active:bg-gold"
          type="button"
          onClick={() => {
            console.log(target)
            modal.toggle();
          }}
        />
        <button
          data-modal-target="copy-modal"
          data-modal-toggle="copy-modal"
          className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
        ></button>
      </div>

      <div
        id="copy-modal"
        tabIndex={"-1"}
        aria-hidden="true"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative p-4 w-full max-w-2xl max-h-full">
          <div className="relative bg-blue rounded-lg shadow dark:bg-gray-700">
            <div className="p-4 md:p-5 space-y-4 h-60">
              {/* {copyListItems} */}
              <div
                id="multiliner"
                className="text-base w-full h-full bg-primary"
                contentEditable="true"
              >
                {copyListItems}
              </div>
            </div>
            <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button
                data-modal-hide="copy-modal"
                type="button"
                className="hover:bg-primary active:bg-gold navButton"
                onClick={() => {
                  // target = document.getElementById("copy-modal");
                  modal.hide();
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBuilder;
