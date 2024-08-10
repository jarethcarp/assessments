// Unit 2 Assessment: js-dom.js
// This file is imported as a script by `js-dom.html`.
// Refer to `js-dom.html` to see the HTML elements you will be interacting with.

// Log in/log out button
//
// When a user clicks on the button that says "Log In", its text should
// update and say "Log out". If a user clicks on the button again, its text
// should switch from "Log Out" to "Log In".

// const bntLogin = document.querySelector()

const loginLogout = () => {
    let status = document.querySelector("#auth")
    // console.log("$auth".innerText)
    // console.log(status)
    if (status.innerText === 'Log in'){
        status.innerText = 'Log out'
    } else if(status.innerText === 'Log out'){
        status.innerText = 'Log in'
    }
    console.log("Test")
}

document.querySelector("#auth").addEventListener('click', loginLogout)

// Send an alert
//
// This form will send an alert to a user via the built-in alert function.
//
// A user should be able to enter what they want the alert to say in the
// text box. Then, they can submit the form to trigger the alert.

// const alertSend = document.querySelector("#alert-message")

// form.addEventListener("#submit", (e) => {
//     e.preventDefault()
//     console.log("You typed:")
// })

const alert = document.querySelector('#send-alert')
const messageAlert = document.querySelector('#alert-message')

alert.addEventListener("submit", (e) => {
    e.preventDefault()
    // console.log("You typed:" + messageAlert.value)
    window.alert(messageAlert.value)
})




// Add an item
//
// This is a pretty silly feature -- when a user clicks on the
// button (the one that says "Double-ulick to add an item"), a new list
// item should appear.
//
// In other words, whenever a user clicks on the button, just
// add another <li>Item</li>. So, a user has clicked on the
// button once, the list should look like this:
//
//   <ol id="list">
//     <li>Item</li>  <!-- This list item was already here -->
//     <li>Item</li>  <!-- This was added after double-clicking -->
//   </ol>

const listAdd = document.querySelector('#list')
const adder = document.querySelector('#item-adder')
const textAdd = ["You doubbled clicked this", "Why", "It works", "You can move on now", "Really?"]
let textAddCount = 0

adder.addEventListener("dblclick", () => {
    if (textAddCount >= 0 && textAddCount <= 4){
        const newLi = document.createElement("li")
        newLi.innerText = textAdd[textAddCount]
        listAdd.appendChild(newLi)
        textAddCount++
        console.log(textAddCount)
    } else {
        const newLi = document.createElement("li")
        newLi.innerText = "I don't have anything more"
        listAdd.appendChild(newLi)
    }
    console.log("works")
})

// Change colors
//
// Users should be able to change the color of any element with the
// class, "changes-colors", by clicking on the "Turn Stuff Red" button
// or "Turn Stuff Blue" button.
//
// Clicking on "Turn Stuff Red" should make text red and clicking on "Turn
// Stuff Blue" should make text blue.

const redBnt = document.querySelector('#red')
const blueBnt = document.querySelector('#blue')
const colorChange = document.querySelector('.changes-colors')
// const colorChange = document.getElementById('.changes-colors')

// document.getElementById('#changes-colors').style.color = 'red'

redBnt.addEventListener('click', () => {
    console.log("RED!!!")
    console.log(colorChange)
    document.querySelector('div', '.changes-colors').style.color = 'red'
    // document.getElementById('#changes-colors').style.color = 'red'

})
blueBnt.addEventListener('click', () => {
    document.querySelector('div', '.changes-colors').style.color = 'blue'
    console.log("BLUE!!!")
})

// Calculate factorial
//
// The factorial of a number is the product of an integer and all the integers
// below it. For example, the factorial of 4 is equal to 4 * 3 * 2 * 1 = 24. The
// factorial of 6 is 6 * 5 * 4 * 3 * 2 * 1 = 720.
//
// Write the following code to calculate the factorial of a positive integer (you
// don't need to worry about negative numbers).
//
// Write a function that calculates the factorial of a positive number Add an
// event listener that catches when someone clicks on the "calculate" button and:
//   - gets whatever number is inside the input field
//   - calls your function that calculates a factorial
//   - puts the result of the function inside the "result" span

const calculation = document.querySelector('#factorial-calculator') // factorial-calculator
const numsCalc = document.querySelector('#factorial-input').value // number
let result = document.querySelector('#result')


calculation.addEventListener("submit", (e) => {
    e.preventDefault()
    let finalcalc = numsCalc

    // for(let i = numsCalc-1; i <= 0; i++){
        // finalcalc = i * finalcalc
        // console.log(i)
    // }


    console.log(numsCalc)
    result.innerText = finalcalc
})

// Validate a form
//
// This form is used to collect word recommendations from users. However, it
// only accepts words that are at least four characters long. Add code that
// checks the length of the text entered into the <textarea> when the user
// submits the form.
//
//  If the text is three or more characters long, change
//  the feedback text to say "Thanks for your submission!" and change
//  the color of the text to green.
//
// If the text is less than three characters long, change
// the feedback text to say "The word must be at least 4 characters long." and
// change the color of the text to red..

/// TODO: replace this with your code
