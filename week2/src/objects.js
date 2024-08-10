// Unit 2 Assessment: objects.js

// Given an array of objects representing people, return a new array of just
// their full (first name and last name) names.
//
// Each object will be structured like so:
// { firstName: 'Dame', lastName: 'Aylin', location: 'Reithwin' }
//
// Ex.:
//   getNames([
//     { firstName: 'Gale', lastName: 'Dekarios', location: 'Waterdeep' },
//     { firstName: 'Wyll', lastName: 'Ravengard', location: "Baldur's Gate" },
//     { firstName: 'Karlach', lastName: 'Cliffgate', location: 'Avernus' }
//   ]);
//   => ['Gale Dekarios', 'Wyll Ravengard', 'Karlach Cliffgate'];
function getNames(people) {
    const firstName = []
    const lastName = []
    const fullName = []
  for (let i = 0; i < people.length; i++){
    firstName.push(people[i].firstName)
    lastName.push(people[i].lastName)
    fullName.push(firstName[i] + ' ' + lastName[i])
  }
    console.log(firstName)
    console.log(lastName)
    console.log(fullName)
  return fullName
}

// const bg3Names = [
//   { firstName: 'Gale', lastName: 'Dekarios', location: 'Waterdeep' },
//   { firstName: 'Wyll', lastName: 'Ravengard', location: "Baldur's Gate" },
//   { firstName: 'Karlach', lastName: 'Cliffgate', location: 'Avernus' }
// ]

// console.log(getNames(bg3Names))

// Given an object representing a person, return their full name (first name and last name).
// You MUST use object destructuring in your solution.
//
// Each object will be structured like so:
// { firstName: 'Dame', lastName: 'Aylin', location: 'Reithwin' }
//
// Ex.:
//   getName({ firstName: 'Gale', lastName: 'Dekarios', location: 'Waterdeep' });
//   => 'Gale Dekarios'
function getNameUsingDestructuring(person) {
  const {firstName, lastName} = person
  return firstName + ' ' + lastName
}

// const bg3Gale = { firstName: 'Gale', lastName: 'Dekarios', location: 'Waterdeep' }
// console.log(getNameUsingDestructuring(bg3Gale))

// Given an array of objects representing people, return a new array of the
// people matching the given location.
//
// Each object will be structured like so:
// { firstName: 'Dame', lastName: 'Aylin', location: 'Reithwin' }
//
// Ex.:
//   getPeopleByLocation([
//     { firstName: 'Gale', lastName: 'Dekarios', location: 'Waterdeep' },
//     { firstName: 'Wyll', lastName: 'Ravengard', location: "Baldur's Gate" },
//     { firstName: 'Karlach', lastName: 'Cliffgate', location: 'Avernus' }
//     { firstName: 'Astarion', lastName: 'Ancunin', location: "Baldur's Gate" }
//   ], "Baldur's Gate");
//   => [
//     { firstName: 'Wyll', lastName: 'Ravengard', location: "Baldur's Gate" },
//     { firstName: 'Astarion', lastName: 'Ancunin', location: "Baldur's Gate" }
//   ];

function getPeopleByLocation(people, location) {
  const peopleIn = []
  for (let key in people){
    if (people[key].location === location){
      peopleIn.push(people[key])
    }
    // console.log(people[key])
    // console.log(people[key].location)
  }
  return peopleIn

}



// const bg3Names = [
//   { firstName: 'Gale', lastName: 'Dekarios', location: 'Waterdeep' },
//   { firstName: 'Wyll', lastName: 'Ravengard', location: "Baldur's Gate" },
//   { firstName: 'Karlach', lastName: 'Cliffgate', location: 'Avernus' },
//   { firstName: 'Astarion', lastName: 'Ancunin', location: "Baldur's Gate" }
// ]

// console.log(getPeopleByLocation(bg3Names, "Baldur's Gate"))


// Translate a phrase to pirate talk.
//
// Given an English phrase, use the EN_PIRATE_LOOKUP object to translate words
// to pirate talk. Words that aren't listed in the lookup object should not be
// translated and should pass through unchanged.
//
// The given phrase will be normalized so it'll never contain punctuation and
// will only consist of lowercased letters.
//
// Ex.:
//   translateToPirateTalk('excuse me sir where is the restroom');
//   => 'avast me matey where be the head'
const EN_PIRATE_LOOKUP = {
  excuse: 'avast',
  sir: 'matey',
  is: 'be',
  restroom: 'head',
  student: 'swabbie',
  friend: 'matey',
  restaurant: 'galley',
  your: 'yer',
  are: 'be',
  my: 'me',
  hotel: 'fleabag inn',
  hello: 'ahoy',
};

function translateToPirateTalk(phrase) {
  const pirateTalk = phrase.split(' ')
  // console.log(phrase)
  for (let key in EN_PIRATE_LOOKUP){
    for (let i = 0; i <= pirateTalk.length-1; i++){
      if (pirateTalk[i] === key){
        pirateTalk.splice(i, 1, EN_PIRATE_LOOKUP[key])
        // console.log("Hello World!!!!!!!!!!!!!!SS")
        // console.log(i)
        // console.log(key)
        // console.log(pirateTalk[i])
        // console.log(EN_PIRATE_LOOKUP[key])
        // console.log(pirateKeys[i])
      }
  }
  }
  //   console.log(EN_PIRATE_LOOKUP[i])
  return pirateTalk.join(' ')
}

// console.log(translateToPirateTalk("i am a student at devmountain, are you a student there too?"))
// console.log(translateToPirateTalk('excuse me sir where is the restroom'))

// Return the number of occurrences of each word in a string.
// This function doesn't handle punctuation and is case-sensitive, so you can
// count 'hello!', 'hello', and 'Hello' as different words.
//
// Ex.:
//   wordCount('hello world')
//   => { hello: 1, world: 1 }
function wordCount(str) {
  const newArr = str.split(' ')
  const countingWords = {}
    let count = 1
  // console.log(count)
  // console.log(newArr)
  for (let key of newArr){
    if(typeof countingWords[key] === 'number'){
      count = countingWords[key]
      count++
    } else{
      count = 1
    }
    if(typeof countingWords[key] === 'number'){
      countingWords[key] = count
    } else{
      countingWords[key] = 1
    }
    // console.log(count)
    // console.log(countingWords)
  }
  return countingWords
}

// const wordsCount = 'hello hello world hello hello world'
// console.log(wordCount(wordsCount))

// Given an object representing a bug, return true if the given bug is
// available in the given month.
//
// Each bug object will be structured like so:
// {
//   name: 'common butterfly',
//   availability: {
//     rarity: 'common',
//     months: [9, 10, 11, 12, 1, 2, 3, 4, 5, 6],
// }
//
// Ex.:
//   isBugAvailable({
//     name: 'common butterfly',
//     availability: {
//       rarity: 'common',
//       months: [9, 10, 11, 12, 1, 2, 3, 4, 5, 6],
//     }
//   }, 1);
//   => true
function isBugAvailable(bug, month) {
  let isBug = null
  if(bug.availability.months.find((months) => months === month)){
    isBug = true
  } else{
    isBug = false
  }
  console.log(isBug);
  return isBug
}

// const aBug = {
//   name: 'common butterfly',
//   availability: {
//         rarity: 'common',
//         months: [9, 10, 11, 12, 1, 2, 3, 4, 5, 6],
//     }
// }

// console.log(isBugAvailable(aBug, 6))


// Given an array of objects representing bugs, return an object that'll be
// used to build a calendar. The keys of the object should be the months of the
// year, and the values should be the names of bugs available in that month.
//
// Each bug object will be structured like so:
// {
//   name: 'common butterfly',
//   availability: {
//     rarity: 'common',
//     months: [9, 10, 11, 12, 1, 2, 3, 4, 5, 6],
// }
//
// Ex.:
//   const bugs = [
//     {
//       name: 'peacock butterfly',
//       availability: {
//         rarity: 'common',
//         months: [1, 2, 3],
//       },
//     },
//     {
//       name: 'yellow butterfly',
//       availability: {
//         rarity: 'common',
//         months: [3],
//       },
//     },
//   ];
//   buildBugHuntCalendar(bugs);
//   => {
//     1: ['peacock butterfly'],
//     2: ['peacock butterfly'],
//     3: ['peacock butterfly', 'yellow butterfly'],
//     4: [],
//     5: [],
//     ...
//     11: [],
//     12: [],
//   }

function buildBugHuntCalendar(bugs) {
  const bugCalendar = {} 
  let bugArr = []

  // for (let month = 1; month<5;month++){
    for (let bug of bugs){
      const bugMonth = bug.availability.months
      console.log(bug.name)
      bugMonth.forEach((month) => {
        console.log("Month: ", month)
        // if (bugCalendar[month]){
          const currentMonth = bugCalendar[month];
            currentMonth.push(bug.name)
            console.log("3", bugArr)
        // } 
        // }else{
          // bugCalendar[month] = [

          // ]
          console.log("1", bugArr)
        // }
        
          // bugCalendar[month] = bugArr
      })
          // bugArr = []


      // if(bug.availability.months.find((month) => month === i) === i){
      //   if (bugArr.find((bug) => bug === key.name) !== key.name){
      //   console.log(i)
      //   // console.log(key.name)
      //   bugArr.push(key.name)
      //   bugCalendar[i] = bugArr
      //   console.log(bugArr)
      //   console.log(bugCalendar)
      //   }
      // }
      // console.log("end of Bugs")
    // }
    // bugArr.splice(0,i)
    // console.log(bugArr)
  }

  // 
  //   const test = key.availability.months.filter((month) => month = 3)
  //   console.log(test)


  //   for (let i = 1; i<=3; i++){
  //     console.log(bugs.availability)
  //   }
  //   console.log(key.availability.months)
  // }


    // for (let key of bugs){
    //   bugArr.push(key.name)
    //   // console.log(i)
    //   for (let i = 1; i<=3; i++){
    //     if(i == key.availability.months[i])
        
    //     bugCalendar[i] = bugArr[i]
    //     // bugCalendar[i] = Array.of('Test')
    // }
  // }
  console.log("BugCalendar ", bugCalendar)
  return bugCalendar
}



const bugs = [
  {
    name: 'peacock butterfly',
    availability: {
      rarity: 'common',
      months: [1, 2, 3],
    },
  },
  // {
  //   name: 'common butterfly',
  //   availability: {
  //     rarity: 'common',
  //     months: [9, 10, 11, 12, 1, 2, 3, 4, 5, 6],
  // }
  // },
  {
    name: 'yellow butterfly',
    availability: {
      rarity: 'common',
      months: [3],
    },
  },
  {
    name: 'test butterfly',
    availability: {
      rarity: 'common',
      months: [3],
    },
  },
]

console.log(buildBugHuntCalendar(bugs))

export {
  buildBugHuntCalendar,
  getNameUsingDestructuring,
  getNames,
  getPeopleByLocation,
  isBugAvailable,
  translateToPirateTalk,
  wordCount,
};
