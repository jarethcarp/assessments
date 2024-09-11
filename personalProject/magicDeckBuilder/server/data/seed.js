import { User, Decks,Card_List,db } from "../model.js"
import deckData from './deckData.json' assert { type: 'json' }
import cardListData from './cardList.json' assert { type: 'json' }

console.log('Creating database')

const hashedPassword = bcryptjs.hashSync("password", bcryptjs.genSaltSync(10))

await db.sync({ force: true })

const usersToCreate = []
for (let i = 0; i<10; i++) {
    const email = `user${i}@test.com`
    usersToCreate.push(User.create({ email: email, password: hashedPassword, logged_in: false, user_token: i, token_experation: 'Temp' }))
}

const usersInDB = await Promise.all(usersToCreate)

console.log(usersInDB)

const decksInDB = await Promise.all(
    deckData.map((deck) => {
        const { userId, deckName, colors, format } = deck

        const newDeck = Decks.create({
            userId: userId,
            deckName: deckName,
            colors: colors,
            format: format
        })

        return newDeck
    })
)

console.log(decksInDB)

const cardListInDB = await Promise.all(
    cardListData.map((cardList) => {
        const { deckId, cardName, cardMana, cardColor, cardPrice, cardCount, cardImg } = cardList

        const newCardList = Card_List.create({
            deckId: deckId,
            cardName: cardName,
            cardMana: cardMana,
            cardColor: cardColor,
            cardPrice: cardPrice,
            cardColor: cardCount,
            cardImg: cardImg
        })

        return newCardList 
    })
)

console.log(cardListInDB)


await db.close()
console.log("finished")

