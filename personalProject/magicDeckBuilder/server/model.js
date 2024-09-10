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
    logged_in: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    user_token: {
        type: DataTypes.STRING,
        allowNull: true
    },
    token_experation: {
        type: DataTypes.STRING,
        allowNull: true
    },
}, {
    modelName: 'user',
    sequelize: db,
})

console.log('Creating database')

await db.sync({ force: true })

const usersToCreate = []
for (let i = 0; i<10; i++) {
    const email = `user${i}@test.com`
    usersToCreate.push(User.create({ email: email, password: 'password', logged_in: false, user_token: i, token_experation: 'Temp' }))
}

const usersInDB = await Promise.all(usersToCreate)

await db.close()
console.log("finished")