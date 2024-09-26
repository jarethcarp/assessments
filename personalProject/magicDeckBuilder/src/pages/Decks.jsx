import React from "react";
import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import axios from "axios";
import DeckRows from "../components/decks/deckRows";
import DeckHeader from "../components/decks/DeckHeader";
import { FaRegPlusSquare } from "react-icons/fa";

const Decks = () => {
  const nav = useNavigate();
  const { decks } = useLoaderData();
  const [sortedDecks, setSortedDecks] = useState(decks);
  // const [tempid, setTempId] = useState(10)
  const deckListItems = sortedDecks.map((deck) => {
    return <DeckRows key={deck.id} deckData={deck} isNotPublic={true} />;
  });

  const addDeck = () => {
    axios.post("/api/add-deck").then((res) => {
      if (res.data.success) {
        console.log("Added Deck")
        nav("/decks");
      } else {
        console.log("Failed to make Deck");
      }
    });
  };

  const sortDecks = (sort) => {
    console.log("------------sortCards has been triggered------------");
    if (sort === 0) {
      console.log("Before Default Sort: ", sortedDecks);
      const decksSortedID = sortedDecks.sort((a, b) => {
        if (a.id < b.id) {
          return -1;
        }
        if (a.id > b.id) {
          return 1;
        }
        return 0;
      });
      setSortedDecks(decksSortedID);
      console.log("decks sorted by id: ", sortedDecks);
      nav(`/decks`);
    } else if (sort === 1) {
      console.log("Before Name Sort: ", sortedDecks);
      const decksSortedName = sortedDecks.sort((a, b) => {
        if (a.deckName < b.deckName) {
          return -1;
        }
        if (a.deckName > b.deckName) {
          return 1;
        }
        return 0;
      });
      console.log("decks sorted by name");
      setSortedDecks(decksSortedName);
      nav(`/decks`);
    } else if (sort === 2) {
      console.log("Type Sort: ", sortedDecks);
      const decksSortedType = sortedDecks.sort((a, b) => {
        if (a.colors < b.colors) {
          return -1;
        }
        if (a.colors > b.colors) {
          return 1;
        }
        return 0;
      });
      console.log("cards sorted by Type");
      setSortedDecks(decksSortedType);
      nav(`/decks`);
    } else if (sort === 3) {
      console.log("Type Sort: ", sortedDecks);
      const decksSortedType = sortedDecks.sort((a, b) => {
        if (a.format < b.format) {
          return -1;
        }
        if (a.format > b.format) {
          return 1;
        }
        return 0;
      });
      console.log("cards sorted by Type");
      setSortedDecks(decksSortedType);
      nav(`/decks`);
    } else {
      console.log("Other");
      const decksSortedID = sortedDecks.sort((a, b) => {
        if (a.id < b.id) {
          return -1;
        }
        if (a.id > b.id) {
          return 1;
        }
        return 0;
      });
      console.log("cards sorted by id");
      setSortedDecks(decksSortedID);
    }

  };

  return (
    <div class="font-sans overflow-x-auto shadow-sm">
      <div>
        <div>Sort: </div>
        <button
          className="hover:text-blue active:bg-black navButton"
          onClick={() => {
            sortDecks(0);
          }}
        >
          ID
        </button>
        <button
          className="hover:text-blue active:bg-black navButton"
          onClick={() => {
            sortDecks(1);
          }}
        >
          Name
        </button>
        <button
          className="hover:text-blue active:bg-black navButton"
          onClick={() => {
            sortDecks(2);
          }}
        >
          Colors
        </button>
        <button
          className="hover:text-blue active:bg-black navButton"
          onClick={() => {
            sortDecks(3);
          }}
        >
          Format
        </button>
      </div>
      <FaRegPlusSquare
        className="size-5 hover:text-blue active:bg-black"
        onClick={() => addDeck()}
      />
      <table class="min-w-full bg-gray2">
        <DeckHeader isNotPublic={true} />
        <tbody class="whitespace-nowrap">{deckListItems}</tbody>
      </table>
    </div>
  );
};

export default Decks;
