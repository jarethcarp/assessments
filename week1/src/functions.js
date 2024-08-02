// Return the quotient of x and y.
// Ex.:
//   divide(10, 2);
//   => 5
function divide(x, y) {
  return x/y
}

// Return the average of x and y.
// Here, the average of x and y is the *mean* of x and y. In other words, it's
// computed by dividing the sum of x and y by 2.
// Ex.:
//   average(10, 2);
//   => 6
function average(x, y) {
  return (x+y)/2
}

// Return true if x and y are mostly equivalent up to a tolerance of 0.001. I can use this (Math.abs)
// In other words, return true if the aboslute value of x - y is less than 0.001.
// Ex.:
//   approximatelyEqual(10.001, 10);
//   => true
function approximatelyEqual(x, y) {
  if (Math.abs(x-y) < 0.001){
    return true  
  } else {
    return false
  }
}

// Given a first name and last name, return a full name in the format "FIRST LAST"
// Ex.:
//   fullName('John', 'Doe');
//   => 'John Doe'
function fullName(firstName, lastName) {
  return firstName + " " + lastName
}

// const test = fullName('John', 'Doe');
// console.log(test)

// Generate the sentence "PERSON was drinking BEVERAGE at LOCATION" using the
// person, beverage and location provided.
// Ex.:
//   generateSentence('Kay', 'coffee', 'the local cafe');
//   => 'Kay was drinking coffee at the local cafe.'
//Kay was drinking coffee at the local cafe
function generateSentence(person, beverage, location) {
  const sentence = `${person} was drinking ${beverage} at ${location}.`
  return sentence
}

// let test = generateSentence('Kay', 'coffee', 'the local cafe');
// console.log(test)
// test = generateSentence('Joe', 'Mnt Dew', 'the game store');
// console.log(test)

// Return the given string with all vowels replced with '*' characters.
// Ex.:
//   censorVowels('javascript');
//   => 'j*v*scr*pt'
function censorVowels(string) {
  let censoredSentence = string.replaceAll('a', '*')
  censoredSentence = censoredSentence.replaceAll('e', '*')
  censoredSentence = censoredSentence.replaceAll('i', '*')
  censoredSentence = censoredSentence.replaceAll('o', '*')
  censoredSentence = censoredSentence.replaceAll('u', '*')
  return censoredSentence
}

// let test = censorVowels('Joe was programming javascript at the game store');
// console.log(test)

// Return the given string in sticky case.
// Ex.:
//   stickyCase('hello world');
//   => 'hElLo wOrLd'
function stickyCase(string) {
  // let newString
  // for (let i = 0; i<string.length;i++){
  //     if (i % 2 === 0){
  //       newString = string.charAt(i).toUpperCase()
  //       string = string.replace(string.charAt(i), newString)

  //       console.log(newString)
  //       console.log(string.charAt(i))
  //     }
      
  //   }
  //   console.log(string.length)
  //   return string
  // const tempString = []
  const splitString = string.split('')

  // console.log(splitString)
  for (let i = 0; i<splitString.length;i++){    
    if (i % 2 === 1){    //splitString.indexOf(splitString[i])%2 === 0
      splitString.splice(i, 1, splitString[i].toUpperCase())
      console.log(splitString[i])
    }
  }
  const newString = splitString.join('')
  return newString
}

let test = stickyCase('Joe was programming javascript at the game store');
console.log(test)
test = stickyCase('hello world');
console.log(test)

// Return the given string in leetspeak. Leetspeak is a modified version of
// English where characters are replaced by numbers or symbols. For this
// version of leetspeak, replace the following characters:
//   a => 4
//   e => 3
//   i => 1
//   o => 0
//   s => 5
//   t => 7
// Ex.:
//   leetspeak('javascript');
//   => 'j4v45cr1p7'
function leetspeak(string) {
  let leetSentence = string.replaceAll('a', '4')
  leetSentence = leetSentence.replaceAll('e', '3')
  leetSentence = leetSentence.replaceAll('i', '1')
  leetSentence = leetSentence.replaceAll('o', '0')
  leetSentence = leetSentence.replaceAll('s', '5')
  leetSentence = leetSentence.replaceAll('t', '7')
  return leetSentence
}

// let test = leetspeak('joe was programming javascript at the game store.');
// console.log(test)

export {
  approximatelyEqual,
  average,
  censorVowels,
  divide,
  fullName,
  generateSentence,
  leetspeak,
  stickyCase,
};
