let value_number = document.getElementById("input")
console.log(value_number)
let random_number = Math.floor((Math.random() * 100) + 1);
console.log(random_number)

let inputNumber;

const guessNumber = () => {
    let guessedNumber = parseInt(inputNumber);
    console.log(guessedNumber)
    if (random_number > guessedNumber) {
        console.log("Too Low! Try Again.")
    }
    else if (random_number < guessedNumber) {
        // gameResult.textContent = "Too High! Try Again.";
        console.log("Too High! Try Again.")
    }
    else if (random_number == guessedNumber) {
        console.log("congratulations")
    }
    else {
        console.log("Please provide a valid input")
    }
}

const nothing = (event) => {
    inputNumber = event.target.value
}