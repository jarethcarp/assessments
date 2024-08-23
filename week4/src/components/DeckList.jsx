import "./DeckList.css"
import CardListHeader from "./CardListHeader"
import AddCardButton from "./AddCardButton"
import CardRow from "./CardRow"
import { useState, useEffect } from "react"
import axios from "axios"


let globalId = 5


const DeckList = ({ initalData }) => {
    const [currentData, setCurrentData] = useState(initalData)


    const rows = currentData.map((cardList) => {
        return (
            <CardRow 
            key={cardList.id}
            initalCardData={cardList}
            initalIsEditing={false}
            />
        )
    })

    useEffect(() => {
        setCurrentData(initalData)
    }, [initalData])

    const addRow = () => {
        const newRow = {
            id: globalId,
            cardCount: cardCount,
            cardName: cardName,
            cardType: cardType,
            mana: mana,
        }
        setCurrentData({...currentData, newRow})
    }



  return (
    <div>
        <table>
            <thead>
                <CardListHeader />
            </thead>
            <tbody>
                {rows}
            </tbody>
            <tfoot>
                <AddCardButton addClick={addRow}/>
            </tfoot>
        </table>
    </div>
  )
}

export default DeckList