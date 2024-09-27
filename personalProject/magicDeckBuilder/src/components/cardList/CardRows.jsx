import React from "react";
import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import EditBnt from "./CardEditBnt";
import CardProps from "./CardProps";
import CardInfo from "./CardInfo";
import TooltipIMG from "../modal/tooltipIMG";
import axios from "axios";

const CardRows = ({ cardData, isNotPublic, update, onDelete }) => {
  const [isEditing, setisEditing] = useState(true);
  const [cardCount, setCardCount] = useState(cardData.cardLists[0].cardCount);
  const [cardName, setCardName] = useState(cardData.cardLists[0].cardName);
  const [cardType, setCardType] = useState(cardData.typeLine);
  const [cardMana, setCardMana] = useState(cardData.manaCost);
  const [cardPrice, setCardPrice] = useState(cardData.prices);
  const [cardImg, setCardImg] = useState(cardData.imageUris);
  const [isupdated, setIsUpdated] = useState(!update)
  const [newCard, setNewCard] = useState(true)


  const nav = useNavigate();

  useEffect(() => {
    // if(!isupdated) {
      // setIsUpdated(!isupdated)
    // }

  }, []);

    if(update) {
      setCardName("Updated");
      update = false
    }

  if (newCard) {
    setNewCard(false)
  }

  // The function responsible for switching row to be able to be editeda
  const changeEditmode = () => {
    // This turns on the editing function
    if (isEditing) {
      setisEditing(!isEditing);
    } else {
      // This turns off the editing and trigers updating the database
      setisEditing(!isEditing);
      axios.get(`/api/card-name/${cardName}`).then((res) => {
        // This sends a true or false based off if the card is in my database or not
        if (!res.data.success) {
          // If it's not in my database
          axios // This sends a request to scryfall to see if they have the card
            .get(`https://api.scryfall.com/cards/named?fuzzy=${cardName}`)
            .catch((error) => {
              // If scryfall fails to find it
              setCardType("Couldn't find card");
              setCardMana(" ");
              setCardPrice(" ");
              setCardImg("No card")
            })
            .then((res) => {
              // If Scryfall did find it
              const scryfallData = res;
              setCardName(res.data.name);
              setCardType(res.data.type_line);
              setCardMana(res.data.mana_cost);
              setCardImg(res.data.image_uris.normal)
              if (!res.data.prices.usd) {
                if (!res.data.prices.usd_foil) {
                  setCardPrice(0.0);
                } else {
                  setCardPrice(+res.data.prices.usd_foil);
                }
              } else {
                setCardPrice(+res.data.prices.usd);
              }
              // Finished updateing card now checking my data base
              axios
                .get(`/api/card-name/${res.data.name}`) // To see if this is a card I already have
                .then((res) => {
                  console.log(
                    "Do I already have this card? ",
                    res.data.success
                  );
                  if (!res.data.success) {
                    // If I don't have this card
                    console.log("Adding card to the database");
                    axios
                      .put("/api/update-cardStore", {
                        scryfallData: scryfallData.data,
                      }) // Send the new card to my database to update it
                      .then((res) => {
                        axios.put("/api/update-card", {
                          cardData: {
                            cardName,
                            cardCount,
                            cardId: res.data.newCard.id,
                            deckId: cardData.cardLists[0].deckId,
                            id: cardData.cardLists[0].id,
                          },
                        });
                      });
                  }
                });
                nav(`/edit/${cardData.cardLists[0].deckId}`);
            });
        } else {
          // If I have the card in my database
          setCardCount(+cardCount);
          setCardName(res.data.card.name);
          setCardType(res.data.card.typeLine);
          setCardMana(res.data.card.manaCost);
          setCardPrice(+res.data.card.prices);
          setCardImg(res.data.card.imageUris)
          axios.put("/api/update-card", {
            cardData: {
              cardName: res.data.card.name,
              cardCount,
              cardId: res.data.card.id,
              deckId: cardData.cardLists[0].deckId,
              id: cardData.cardLists[0].id,
            },
          });
        }
      });
    }
  };

  if (isupdated) {
  // console.log("Update", update)
  // console.log("isUpdate", isupdated)
  // console.log("Name: ", cardName)
  // console.log("Id: ", cardData.cardLists[0])
    
    // setCardType(cardType);
    // setCardName(cardData.cardLists[0].cardName);
    // setCardMana(cardMana);
    // setCardPrice(0);
    setIsUpdated(false)
    if (cardData.cardLists[0].cardName === "New Card") {
      setCardName(cardData.cardLists[0].cardName)
      setCardImg("cardImg")
    } else {
      setCardName(cardData.cardLists[0].cardName);
    }
  }
  


  return (
    <>
      <tr className="hidden lg:table-row hover:bg-slate-300">
        <EditBnt
          cardId={cardData.cardLists[0]}
          clickEdit={changeEditmode}
          isPublic={isNotPublic}
          update={isupdated}
          onDelete={onDelete}
        />
        <td className="p-4 text-[15px]">
          <CardProps
            isEditing={isEditing}
            value={cardCount}
            valueUpdate={setCardCount}
          />
        </td>
        <td className="p-4 text-[15px] text-gray-800 imagePopup">
          <CardProps
            isEditing={isEditing}
            value={cardName}
            cardIMG={cardImg}
            valueUpdate={setCardName}
          />
          <img className="imagePopupText" src={cardImg} alt={cardName} />
        </td>
        <td className="p-4 text-[15px] text-gray-800">
          <CardInfo value={cardType} />
        </td>
        <td className="p-4 text-[15px] text-gray-800">
          <CardInfo value={cardMana} />
        </td>
        <td className="p-4 text-[15px] text-gray-800">
          <CardInfo value={(cardPrice * cardCount).toFixed(2)} />
        </td>
      </tr>

      <tr className="table-row lg:hidden hover:bg-slate-300">
        <EditBnt
          cardId={cardData.cardLists[0]}
          clickEdit={changeEditmode}
          isPublic={isNotPublic}
          update={isupdated}
          onDelete={onDelete}
        />
        <td className="p-4 text-[15px]">
          <CardProps
            isEditing={isEditing}
            value={cardCount}
            valueUpdate={setCardCount}
          />
        </td>
        <td className="p-4 text-[15px] text-gray-800 imagePopup">
          <CardProps
            isEditing={isEditing}
            value={cardName}
            cardIMG={cardImg}
            valueUpdate={setCardName}
          />
          <img className="imagePopupText" src={cardImg} alt={cardName} />
        </td>
        <td className="p-4 text-[15px] text-gray-800">
          <CardInfo value={(cardPrice * cardCount).toFixed(2)} />
        </td>
      </tr>
    </>
  );
};

export default CardRows;
