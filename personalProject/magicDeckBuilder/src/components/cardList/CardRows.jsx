import React from "react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import EditBnt from "./CardEditBnt";
import CardProps from "./CardProps";
import CardInfo from "./CardInfo";
import TooltipIMG from "../modal/tooltipIMG";
import axios from "axios";

const CardRows = ({ cardData, isNotPublic }) => {
  const [isEditing, setisEditing] = useState(true);
  const [cardCount, setCardCount] = useState(cardData.cardLists[0].cardCount);
  const [cardName, setCardName] = useState(cardData.cardLists[0].cardName);
  const [cardType, setCardType] = useState(cardData.typeLine);
  const [cardMana, setCardMana] = useState(cardData.manaCost);
  const [cardPrice, setCardPrice] = useState(cardData.prices);
  const [cardImg, setCardImg] = useState(cardData.imageUris);


  const nav = useNavigate();

  // The function responsible for switching row to be able to be editeda
  const changeEditmode = () => {
    // This turns on the editing function
    if (isEditing) {
      setisEditing(!isEditing);
    } else {
      // This turns off the editing and trigers updating the database
      setisEditing(!isEditing);
      // console.log("Sending /api/card-name/${cardName}")
      axios.get(`/api/card-name/${cardName}`).then((res) => {
        // console.log(`Is ${cardName} in my database?`, res.data.success)
        // This sends a true or false based off if the card is in my database or not
        if (!res.data.success) {
          // If it's not in my database
          // console.log("This card is not in my data base");
          // console.log("Sending https://api.scryfall.com/cards/named?fuzzy=${cardName}")
          axios // This sends a request to scryfall to see if they have the card
            .get(`https://api.scryfall.com/cards/named?fuzzy=${cardName}`)
            .catch((error) => {
              // If scryfall fails to find it
              // console.log("Card doesn't exists");
              setCardType("Couldn't find card");
              setCardMana(" ");
              setCardPrice(" ");
              // nav(`/edit/${cardData.cardLists[0].deckId}`);
            })
            .then((res) => {
              // If Scryfall did find it
              const scryfallData = res;
              // console.log("Scryfall has this card");
              // console.log(res.data);
              setCardName(res.data.name);
              setCardType(res.data.type_line);
              setCardMana(res.data.mana_cost);
              if (!res.data.prices.usd) {
                if (!res.data.prices.usd_foil) {
                  setCardPrice(0.0);
                } else {
                  setCardPrice(+res.data.prices.usd_foil);
                }
              } else {
                setCardPrice(+res.data.prices.usd);
              }
              // console.log("End of Scryfall's Data")
              // console.log("Updating CardList")
              // Finished updateing card now checking my data base
              // console.log("Sending /api/card-name/${res.data.name}")
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
                        // console.log("Did the card get added", res.data.success);

                        // console.log(cardName, cardCount, "cardId:", res.data.newCard.id, "deckId:", cardData.cardLists[0].deckId, "id:", cardData.cardLists[0].id)
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
                    // nav(`/edit/${cardData.cardLists[0].deckId}`);
                  } else {
                    // console.log("Not added");
                  }
                });
                
                
                nav(`/edit/${cardData.cardLists[0].deckId}`);

                // console.log("Updating CardList")
                // console.log("")
                
            });
        } else {
          // If I have the card in my database
          // console.log("This is the card: ", res.data);
          // console.log(
          //   "This is the Deck ID in cardData: ",
          //   cardData.cardLists[0].deckId
          // );
          // console.log("This is the Id: ", cardData.cardLists[0].id);
          setCardCount(+cardCount);
          setCardName(res.data.card.name);
          setCardType(res.data.card.typeLine);
          setCardMana(res.data.card.manaCost);
          setCardPrice(+res.data.card.prices);
          axios.put("/api/update-card", {
            cardData: {
              cardName,
              cardCount,
              cardId: res.data.card.id,
              deckId: cardData.cardLists[0].deckId,
              id: cardData.cardLists[0].id,
            },
          });
          // nav(`/edit/${cardData.cardLists[0].deckId}`);
        }
      });
    }
  };

  return (
    <>
      <tr className="hover:bg-slate-300">
        <EditBnt
          cardId={cardData.cardLists[0]}
          clickEdit={changeEditmode}
          isPublic={isNotPublic}
        />
        <td className="p-4 text-[15px]">
          <CardProps
            isEditing={isEditing}
            value={cardCount}
            valueUpdate={setCardCount}
          />
        </td>
        <td className="p-4 text-[15px] text-gray-800">
          <CardProps
            isEditing={isEditing}
            value={cardName}
            cardIMG={cardImg}
            valueUpdate={setCardName}
          />
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
    </>
  );
};

export default CardRows;
