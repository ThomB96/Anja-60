document.addEventListener("DOMContentLoaded", () => {
    const words = ["ZESTIG", "VERJAARDAGSFEESTJE", "WEIJLAND", "NEGENTIENNEGENENTACHTIG", "VERRASSINGEN", "NEGENTIENVIERENZESTIG"];
    let selectedWord = words[Math.floor(Math.random() * words.length)];
    let guessedLetters = [];
    let remainingGuesses = 6;

    const wordDisplay = document.getElementById("word-display");
    const letterButtons = document.getElementById("letter-buttons");
    const hangmanImage = document.getElementById("hangman-image");
    const resultMessage = document.getElementById("result-message");
    const newGameButton = document.getElementById("new-game-button");

    // Display initial word with underscores
    function displayWord() {
        let display = selectedWord.split("").map(letter => guessedLetters.includes(letter) ? letter : "_").join(" ");
        wordDisplay.textContent = display;
        if (!display.includes("_")) {
            endGame(true);
        }
    }

    // Create letter buttons
    function createLetterButtons() {
        letterButtons.innerHTML = "";
        for (let i = 65; i <= 90; i++) {
            let button = document.createElement("button");
            button.textContent = String.fromCharCode(i);
            button.classList.add("letter-button");
            button.addEventListener("click", handleGuess);
            letterButtons.appendChild(button);
        }
    }

    // Handle letter guess
    function handleGuess(event) {
        let guessedLetter = event.target.textContent;
        event.target.disabled = true;
        guessedLetters.push(guessedLetter);

        if (selectedWord.includes(guessedLetter)) {
            displayWord();
        } else {
            remainingGuesses--;
            hangmanImage.src = `../../assets/img/opdrachten/hangman-${6 - remainingGuesses}.svg`;
            if (remainingGuesses === 0) {
                endGame(false);
            }
        }
    }

    // End game
    function endGame(won) {
        letterButtons.childNodes.forEach(button => button.disabled = true);
        resultMessage.textContent = won ? "Gefeliciteerd, je hebt gewonnen!" : `Helaas, het woord was: ${selectedWord}`;
        newGameButton.classList.remove("hidden");
    }

    // New game
    newGameButton.addEventListener("click", () => {
        selectedWord = words[Math.floor(Math.random() * words.length)];
        guessedLetters = [];
        remainingGuesses = 6;
        hangmanImage.src = `../assets/img/hangman-0.png`;
        resultMessage.textContent = "";
        newGameButton.classList.add("hidden");
        createLetterButtons();
        displayWord();
    });

    // Initialize game
    createLetterButtons();
    displayWord();
});
