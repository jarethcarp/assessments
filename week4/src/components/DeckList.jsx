import "./DeckList.css";
import CardListHeader from "./CardListHeader";
import AddCardButton from "./AddCardButton";
import CardRow from "./CardRow";
import { useState, useEffect } from "react";
import axios from "axios";

// let globalId = 5;

const DeckList = ({ initalData }) => {
  const [currentData, setCurrentData] = useState(initalData);


  const rows = currentData.map((cardList) => {
    return (
      <CardRow
        key={cardList.id}
        initalCardData={cardList}
        initalIsEditing={false}
        deleteFunc={() => deleteRow(cardList.id)}
      />
    );
  });

  useEffect(() => {
    setCurrentData(initalData);
  }, [initalData]);

  const addRow = () => {
    const newRow = {
        // id: globalId,
        cardCount: 4,
        cardName: "Test Card",
        cardType: "Creature",
        mana: "{G}",
    }

    axios.post('/api/addCard', newRow)
    .then((res) => {
        setCurrentData([...currentData, newRow])
    })
  };

  const deleteRow = (id) => {
    // const filteredData = currentData.filter((element) => element.id !== id);
    axios.delete(`/api/deleteCard/${id}`)
    .then((res) => {
        setCurrentData(res.data.cards); 
    })
    
  };

  return (
    <div>
      <table>
        <thead>
          <CardListHeader />
        </thead>
        <tbody>{rows}</tbody>
        <tfoot>
          <AddCardButton addClick={addRow} />
        </tfoot>
      </table>
    </div>
  );
};

export default DeckList;
