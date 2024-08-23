import { useState, useEffect } from "react";
import "./App.css";
import DeckList from "./components/DeckList.jsx";
import axios from "axios";

function App() {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    axios.get("api/cards").then((res) => {
      setCardData(res.data.cards);
    });
  }, []);
      console.log(cardData)


  return <DeckList initalData={cardData} />;
}

export default App;
