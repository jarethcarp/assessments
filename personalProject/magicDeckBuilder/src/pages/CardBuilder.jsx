import React from "react";
import { useState, useEffect } from "react";
import { useLoaderData, useNavigate, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { FaRegPlusSquare, FaCopy, FaShareAlt } from "react-icons/fa";
import CardRows from "../components/cardList/CardRows";
import CardHeader from "../components/cardList/cardHeader";
import { Modal } from "flowbite";

const CardBuilder = () => {
  const [isPublic, setIsPublic] = useState(false);
  const [target, setTarget] = useState(false);
  const [url, setURL] = useState(window.location.href);
  const [sortedCards, setSortedCards] = useState([]);
  // let target = document.getElementById("copy-modal");
  // console.log("Log for taget")
  // console.log(target)
  // let target = ("copy-modal");
  // let target = ("Nothing");
  const sortBy = useSelector((state) => state.sortBy)
  console.log("Sort By", sortBy)

  useEffect(() => {
    setTarget(document.getElementById("copy-modal")); // Make my modal's into a componet


    if (sortBy === 0) {
      const cardsSortedID = cards.sort((a, b) => {
        if (a.id < b.id) {
          return -1;
        }
        if (a.id > b.id) {
          return 1;
        }
        return 0;
      });
      console.log("cards sorted by id")
      setSortedCards(cardsSortedID)
    } else if (sortBy === 1) {
        const cardsSortedName = cards.sort((a, b) => {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        });
        console.log("cards sorted by name")
        setSortedCards(cardsSortedName)
    } else if (sortBy === 2) {
        const cardsSortedType = cards.sort((a, b) => {
          if (a.typeLine < b.typeLine) {
            return -1;
          }
          if (a.typeLine > b.typeLine) {
            return 1;
          }
          return 0;
        });
        console.log("cards sorted by Type")
        setSortedCards(cardsSortedType)
     } else {
      console.log("Other")
     }

    // switch (sortBy) {
    //   case '0':
    //     const cardsSortedID = cards.sort((a, b) => {
    //       if (a.id < b.id) {
    //         return -1;
    //       }
    //       if (a.id > b.id) {
    //         return 1;
    //       }
    //       return 0;
    //     });
    //     console.log("cards sorted by id")
    //     setSortedCards(cardsSortedID)
    //     case '1':
    //       const cardsSortedName = cards.sort((a, b) => {
    //         if (a.name < b.name) {
    //           return -1;
    //         }
    //         if (a.name > b.name) {
    //           return 1;
    //         }
    //         return 0;
    //       });
    //       console.log("cards sorted by name")
    //       setSortedCards(cardsSortedName)
    //     case '2':
    //       const cardsSortedType = cards.sort((a, b) => {
    //         if (a.typeLine < b.typeLine) {
    //           return -1;
    //         }
    //         if (a.typeLine > b.typeLine) {
    //           return 1;
    //         }
    //         return 0;
    //       });
    //       console.log("cards sorted by Type")
    //       setSortedCards(cardsSortedType)
    //   default:
    //     console.log("Default")
    // }

    dispatch({
      type: "DEFAULT_SORT"
    })
    // console.log("Sorted cards", sortedCards);
  }, []);

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
  const dispatch = useDispatch()
  let { cards } = useLoaderData();

  

  axios.get("/api/deck-check").then((res) => {
    if (res.data.success) {
      setIsPublic(true);
    } else {
      setIsPublic(false);
    }
  });

  // const cardsSorted = cards.sort((a, b) => {
  //   if (a.id < b.id) {
  //     return -1;
  //   }
  //   if (a.id > b.id) {
  //     return 1;
  //   }
  //   return 0;
  // });
  // cards = cards.sort((a, b) => a.name[0]-b.name[0])
  // console.log(cards)

  const cardListItems = cards.map((card) => {
    return <CardRows key={card.id} cardData={card} isNotPublic={isPublic} />;
  });

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
        // Set card Name to New Card and everything to null
      } else {
        console.log("Failed to make Card");
      }
    });
  };
  
  const sortCards = (fillterBy) => {
    if (fillterBy === 0) {
      dispatch({
        type: "DEFAULT_SORT"
      })
    } else if (fillterBy === 1) {
      dispatch({
        type: "NAME_SORT"
      })
    } else if (fillterBy === 2) {
      dispatch({
        type: "TYPE_SORT"
      })
    }
    
  }

  console.log("End of Cardbuilder")

  return (
    <div className="font-sans overflow-x-auto shadow-sm">
      <table className="min-w-full bg-gray2">
        <CardHeader filter={sortCards} isNotPublic={isPublic} />

        <tbody className="whitespace-nowrap">{cardListItems}</tbody>
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
          className="size-5 text-primary-dark hover:text-blue active:bg-gold"
          type="button"
          onClick={() => {
            modal.toggle();
          }}
        />

        <div className="popup">
          <FaShareAlt
            onClick={() => {
              navigator.clipboard.writeText(url);
            }}
            className="text-primary-dark hover:text-blue active:bg-gold"
          />
          <div className="popupText">copied</div>
        </div>
      </div>

      <div
        id="copy-modal"
        tabIndex={"-1"}
        aria-hidden="true"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 max-h-full shadow-md"
      >
        <div className="relative p-4 w-full max-w-2xl max-h-full">
          <div className="relative bg-blue rounded-lg shadow dark:bg-gray-700">
            <div className="p-4 md:p-5 space-y-4 h-60">
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
