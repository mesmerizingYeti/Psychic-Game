let wins = 0
let losses = 0
let guessesLeft = 9
let currentGuesses = ''
let chosenOne = Math.floor(26 * Math.random()) + 97

const reset = _ => {
    guessesLeft = 9
    currentGuesses = ''
    chosenOne = Math.floor(26 * Math.random()) + 97
}

console.log(chosenOne)
document.onkeypress = (event) => {
    if (97 <= event.keyCode && event.keyCode <= 122) {

        if (!currentGuesses.includes(event.key)) {
            console.log(event.key)
            currentGuesses += event.key
            if (event.keyCode === chosenOne) {
                wins++
                alert('You Won!!')
                reset()
            } else if (guessesLeft === 1) {
                losses++
                alert('You Lost :(')
                reset()
            } else {
                guessesLeft--
            }

            document.getElementById('wins').textContent = `${wins}`
            document.getElementById('losses').textContent = `${losses}`
            document.getElementById('guesses-left').textContent = `${guessesLeft}`
            document.getElementById('current-guesses').textContent = `${currentGuesses}`
        } else {
            alert('You already chose that letter. Choose another.')
        }

    } else {
        alert('That is not a letter. Choose again.')
    }
}