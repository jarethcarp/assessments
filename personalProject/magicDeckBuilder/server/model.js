import { DataTypes, Model } from "sequelize";
import util from 'util'
import connectToDB from "./db.js";

export const db = await connectToDB('postgresql:///deck')


export class User extends Model {
    [util.inspect.custom]() {
        return this.toJSON()
    }
}


User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    loggedIn: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    userToken: {
        type: DataTypes.STRING,
        allowNull: true
    },
    tokenExperation: {
        type: DataTypes.STRING,
        allowNull: true
    },
}, {
    modelName: 'user',
    sequelize: db,
})


// Come back to this latter


export class Decks extends Model {
    [util.inspect.custom]() {
        return this.toJSON()
    }
}


Decks.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    deckName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    colors: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    format: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    modelName: 'decks',
    sequelize: db
})



export class CardList extends Model {
    [util.inspect.custom]() {
        return this.toJSON()
    }
}


CardList.init({
    cardId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    deckId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    cardName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cardMana: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cardColor: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cardPrice: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cardCount: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cardImg: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    modelName: 'cardList',
    sequelize: db
})


User.hasMany(Decks, { foreignKey: 'id' })
Decks.belongsTo(User, { foreignKey: 'userId' })

Decks.hasMany(CardList, { foreignKey: 'id' })
CardList.belongsTo(Decks, { foreignKey: 'deck_id' })


