// Given an array of numbers, return all the numbers that are greater than ten.
// Ex.:
//   greaterThanTen([1, 2, 3, 11, 12, 13]);
//   => [11, 12, 13]
function greaterThanTen(numbers) {
  const newarr = []
  for (let i = 0; i<=numbers.length; i++){
    if(numbers[i]>10){
      newarr.push(numbers[i])
    }
  }
  // console.log(newarr)
  return newarr
}

// const test = greaterThanTen([1, 2, 3, 11, 12, 13])
// console.log(test)

// Given an array of strings, return all words that start with 'b' or 'B'.
// Ex.:
//   bWords(['banana', 'orange', 'apple', 'Bonobo', 'kiwi', 'pear']);
//   => ['banana', 'Bonobo]
function bWords(words) {
  const newarr = []
  for (let i = 0; i<words.length; i++){
    if (words[i].charAt(0) === 'b' || words[i].charAt(0) === 'B' ){
      newarr.push(words[i])
    }
  }
  return newarr
}

// const test = bWords(['banana', 'orange', 'apple', 'Bonobo', 'kiwi', 'pear']);
// console.log(test)


// Add all the elements from additionalItems to the end of originalArray.
// Return the originalArray..
// Ex.:
//  extend([1, 2, 3], [4, 5, 6]);
//  => [1, 2, 3, 4, 5, 6]
function extend(originalArray, additionalItems) {
  const newarr = []
  for (let i = 0; i < (originalArray.length+additionalItems.length); i++){
    if (i >= originalArray.length){
      newarr.push(additionalItems[i-originalArray.length])
    } else{
      newarr.push(originalArray[i])
    }
    // console.log(i)
    // console.log(originalArray.length)
  }
  return newarr
}

// const test = extend([1, 2, 3, 9, 27 ,52], [4, 5, 6]);
// console.log(test)

// Return an array of all items with the given length.
// Ex.:
//   itemsWithLength(['a', 'bbb', 'cccc', 'dddddd', 'eee'], 3);
//   => ['bbb', 'eee']
function itemsWithLength(items, length) {
  const newarr = []
  for (let i = 0; i<items.length; i++){
    if (items[i].length === length){
      newarr.push(items[i])
    }
  }
  return newarr
}

// const test = itemsWithLength(['a', 'bbb', 'cccc', 'dddddd', 'eee'], 3);
// console.log(test)

// Return an array with every other element from the input array (start with index 0).
// Ex.:
//   everyOtherItem(['a', 'b', 'c', 'd', 'e']);
//   => ['a', 'c', 'e']
function everyOtherItem(items) {
  const newarr = []
  for (let i = 0; i<items.length;i++){
    if (items.indexOf(items[i])%2 === 0){
      newarr.push(items[i])
      // console.log(items.indexOf(items[i]))
    }
  }
  return newarr
}

// const test = everyOtherItem(['a', 'b', 'c', 'd', 'e']);
// console.log(test)

// Given a list of words and a letter, return the indexes of the words that
// start with that letter. You can assume that the words and letter will always
// be lowercased.
// Ex.:
//   findWordsStartingWith(['apple', 'banana', 'kiwi', 'pear', 'bacon'], 'b');
//   => [1, 4]
function findWordsStartingWith(words, letter) {
  const newarr = []
  for (let i = 0; i<words.length; i++){
    if (words[i].charAt(0) === letter){
      newarr.push(words.indexOf(words[i]))
    }
  }
  return newarr
}

// Return the `n` smallest values in the array in descending order (largest
// numbers first). Assume that `n` will always be less than the length of the
// array.
// Ex.:
//   smallestNItems([1, 30, 4, 21, 100000], 3);
//   => [21, 4, 1]
function smallestNItems(items, n) {
  const newarr = []
  items.sort(function sortNums (a, b) {return b - a;}) // I was looking into .sort and this is the only was I found to sort numbers properly. From what I found you create a function that compares two values and then gives a negitive zero or positive value and .sort uses that to properly sort numbers. You have a - b for ascending and b - a for descending
  // console.log(items)
  for (let i = 0; i<items.length;i++){
    if (i > ((items.length-1)-n)){
      newarr.push(items[i])
    }
  }
  return newarr
}

// const test = smallestNItems([1, 30, 4, 21, 100000, 25, 72, 9, 16], 6);
// console.log(test)

// Search for a value in the array and return its index. If the value appears
// more than once, return the index of the *FIRST* occurrence of the value. If
// the value doesn't exist in the array, return undefined.
// Ex.:
//   findIndex(['a', 'b', 'c', 'a', 'b', 'c'], 'c');
//   => 2
function findIndex(items, value) {
  let foundIndex
  for (let i = 0; i<items.length;i++){
    if (items[i] === value){
      foundIndex = items.indexOf(items[i])
      return foundIndex
    }
  }
  return foundIndex
}

// const test = findIndex(['a', 'b', 'c', 'a', 'b', 'c'], 'c');
// console.log(test)

// Given a start number and stop number, return a new array containing all the numbers
// between the start and stop number.
// Ex.:
//   range(1, 5);
//   => [1, 2, 3, 4, 5]
function range(start, stop) {
  const newarr = []
  for (let i = start; i<=stop; i++){
    newarr.push(i)
  }
  return newarr
}

// const test = range(3, 9);
// console.log(test)

export {
  bWords,
  everyOtherItem,
  extend,
  findIndex,
  findWordsStartingWith,
  greaterThanTen,
  itemsWithLength,
  range,
  smallestNItems,
};
