let TEST_DATA = [
    { id: 0, cardCount: 1, cardName: "Plummet", cardType: "Instant", mana: "{1} {G}", link: "https://scryfall.com/card/mid/193/plummet?utm_source=api" },
    { id: 1, cardCount: 4, cardName: "Lightning Bolt", cardType: "Instant", mana: "{R}", link: "https://scryfall.com/card/clu/141/lightning-bolt?utm_source=api" },
    { id: 2, cardCount: 4, cardName: "Ragavan, Nimble Pilferer", cardType: "Creature", mana: "{R}", link: "https://scryfall.com/card/mh2/138/ragavan-nimble-pilferer?utm_source=api" },
    { id: 3, cardCount: 4, cardName: "Tarmogoyf", cardType: "Creature", mana: "{1} {G}", link: "https://scryfall.com/card/tsr/235/tarmogoyf?utm_source=api" },
    { id: 4, cardCount: 4, cardName: "Thoughtseize", cardType: "Sorcery ", mana: "{B}", link: "https://scryfall.com/card/2xm/109/thoughtseize?utm_source=api" },
];


  let globalId = 6
  
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
    },

    getScryfall: (req,res) => {

    }



}

export default handlerFunc