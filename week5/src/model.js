import { DataTypes, Model } from 'sequelize';
import util from 'util';
import connectToDB from './db.js';

const db = await connectToDB('postgresql:///animals');

export class Human extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }

  // I didn't use this
  getFullName() {
    console.log("test")
    console.log(this.firstName, this.lName)
    const human1 = this.findOne()
    return human1.firstName + " " + human1.lName
  }
}

// console.log(this.firstName, this.lName)
// const human1 = await Human.findOne()
//??

// TODO: Human.init()
Human.init({
  humanId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  fname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
},
{
  modelName: 'human',
  sequelize: db
})

export class Animal extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

// TODO: Animal.init()
Animal.init({
  animalId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  humanId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  species: {
    type: DataTypes.STRING,
    allowNull: false
  },
  birthYear: {
    type: DataTypes.INTEGER
  },
},
{
  modelName: 'animals',
  sequelize: db
})

// TODO: Define Relationship
Human.hasMany(Animal, {foreignKey: 'humanId'})
Animal.belongsTo(Human, {foreignKey: 'humanId'})

export default db;
