import { Op } from 'sequelize';
import { Animal, Human } from './model.js';


// Get the human with the primary key 2
console.log('Test')
export const query1 = await Human.findOne({
    where: {
        humanId: 2
    }
});
// console.log(query1)

// Get the first animal whose species is "fish"
export const query2 = await Animal.findOne({
    where: {
        species: "fish"
    }
});
// console.log(query2)

// Get all animals belonging to the human with primary key 5
export const query3 = await Animal.findAll({
    where: {
        humanId: 5
    }
});
// console.log(query3)

// Get all animals born in a year greater than (but not equal to) 2015.
export const query4 = await Animal.findAll({
    where: {
        birthYear: {[Op.gt]: 2015}
    }
});
// console.log(query4)

// Get all the humans with first names that start with "J"
export const query5 = await Human.findAll({
    where: {
        fname: {[Op.startsWith]: "J"}
    }
});
// console.log(query5)


// Get all the animals who don't have a birth year
export const query6 = await Animal.findAll({
    where: {
        birthYear: null
    }
});
// console.log(query6)


// Get all the animals with species "fish" OR "rabbit"
export const query7 = await Animal.findAll({
    where: {
        [Op.or]: [{species: "fish"}, {species: "rabbit"}]
    }
});
// console.log(query7)


// Get all the humans who DON'T have an email address that contains "gmail"
export const query8 = await Human.findAll({
    where: {
        email: { [Op.notRegexp]: '@gmail.com'}
    }
});
// console.log(query8)


// Continue reading the instructions before you move on!

// Print a directory of humans and their animals
export async function printHumansAndAnimals() {
    const totalHuman = await Human.max('humanId')

    const allHuman = await Human.findAll({
        include: Animal
    })
    for (let i = 0; i < totalHuman; i++){
        const currentHuman = allHuman[i]
        const animalCount = currentHuman.animals.length
        console.log(`${currentHuman.fname} ${currentHuman.lname}`)
        for (let i = 0; i < animalCount; i++){
            console.log(`- ${currentHuman.animals[i].name}, ${currentHuman.animals[i].species}`)
        }

    }

    // console.log(test)
    // const testList = test.map()
    // console.log(testList)

    // const human = await Human.findOne({
    //     include: Animal,
    //     where: {
    //         humanId: 1
    //     }
    // })
    // const { animal } = await Animal.map()
    // console.log(animal)
    // console.log(`${human.fname} ${human.lname}
    //     - ${human.animals[0].name}, ${human.animals[0].species}
    //     - ${human.animals[1].name}, ${human.animals[1].species}
    //     - ${human.animals[2].name}, ${human.animals[2].species}`)
    //     console.log(totalHuman)
// console.log(test)
// console.log(human.animals[0].name)


// What it should look like

//     console.log(`FirstName LastName
// - PetName1, species
// - PetName2, species
// - PetName3, species
// person 2 LastName
// - PetName1, species
// - PetName2, species
// - PetName3, species`)
}

// Return a Set containing the full names of all humans
// with animals of the given species.
export async function getHumansByAnimalSpecies(species) {
    const humans = new Set()
    const totalHuman = await Human.max('humanId')

    const allHuman = await Human.findAll({
        include: Animal
    })

    for (let i = 0; i < totalHuman; i++){
        const currentHuman = allHuman[i]
        const animalCount = currentHuman.animals.length
        for (let i = 0; i < animalCount; i++){
            if(currentHuman.animals[i].species === species){
                humans.add(`${currentHuman.fname} ${currentHuman.lname}`)
            }
        }

    }

    
    // console.log('Test')
    return humans
}


// console.log(printHumansAndAnimals())

console.log(await getHumansByAnimalSpecies('dog'))
