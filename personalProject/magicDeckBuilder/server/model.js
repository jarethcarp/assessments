import { DataTypes, Model } from "sequelize";
import util from 'util'
import bcryptjs from 'bcryptjs'
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
    user_id: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    deck_name: {
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
})

export class Card_List extends Model {
    [util.inspect.custom]() {
        return this.toJSON()
    }
}

Card_List.init({
    card_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    deck_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    card_Name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    card_Mana: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    card_Color: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    card_Price: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    card_Count: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    card_Img: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})

User.hasMany(Decks, { foreignKey: id })
Decks.belongsTo(User, { foreignKey: user_id})

Decks.hasMany(Card_List, { foreignKey: id })
Card_List.belongsTo(Decks, { foreignKey: deck_id})


