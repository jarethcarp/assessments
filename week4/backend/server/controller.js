let TEST_DATA = [
    { id: 0, cardCount: 1, cardName: "Plummet", cardType: "Instant", mana: "{1} {G}" },
    { id: 1, cardCount: 4, cardName: "Lightning Bolt", cardType: "Instant", mana: "{R}" },
    { id: 2, cardCount: 4, cardName: "Ragavan, Nimble Pilferer", cardType: "Creature", mana: "{R}" },
    { id: 3, cardCount: 4, cardName: "Tarmogoyf", cardType: "Creature", mana: "{1} {G}" },
    { id: 4, cardCount: 4, cardName: "Thoughtseize", cardType: "Sorcery ", mana: "{B}" },
];


  let globalId = 10
  
const handlerFunc =  {
    getCards: (req,res) => {
        res.send({
            message: "Here are all the cards",
            cards: TEST_DATA,
        }) 
    },

    addCard: (req,res) => {
        const { cardCount, cardName, cardType, mana } = req.body

        const newCard = {
            id: globalId,
            cardCount: cardCount,
            cardName: cardName,
            cardType: cardType,
            mana: mana
        }

        globalId++

        TEST_DATA.push(newCard)

        res.send({
            message: "Added a New card Successfully",
            newCard: newCard,
        })

    },

    deleteCard: (req,res) => {
        const { id } = req.params

        TEST_DATA = TEST_DATA.filter((card) => card.id !== +id)

        res.send({
            message: "Card Deleted",
            cards: TEST_DATA
        })

    },

    editCard: (req,res) => {
        const { id, cardCount, cardName, cardType, mana } = req.body

        const idx = TEST_DATA.findIndex((card) => card.id === +id)

        const card = TEST_DATA[idx]

        card.cardCount = +cardCount
        card.cardName = cardName
        card.cardType = cardType
        card.mana = mana

        res.send({
            message: "Card Updated",
            updatedCard: card
        })
    }



}

export default handlerFunc