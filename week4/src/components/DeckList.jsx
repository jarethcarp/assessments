import "./DeckList.css"
import CardListHeader from "./CardListHeader"
import AddCardButton from "./AddCardButton"
import CardRow from "./CardRow"




const DeckList = ({ initalData }) => {

    const currentData = initalData

    const rows = currentData.map((cardList) => {
        console.log("CardList", cardList)
        return (
            <CardRow 
            key={cardList.id}
            initalCardData={cardList}
            initalIsEditing={false}
            />
        )
    })
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
                <AddCardButton />
            </tfoot>
        </table>
    </div>
  )
}

export default DeckList