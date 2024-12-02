// Kies een willekeurig getal
const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessInput = document.getElementById("guess-input");
const guessButton = document.getElementById("guess-button");
const feedback = document.getElementById("feedback");
const reward = document.getElementById("reward");

// Controleer de gok
guessButton.addEventListener("click", () => {
    const playerGuess = parseInt(guessInput.value, 10);
    attempts++;

    if (isNaN(playerGuess)) {
        feedback.textContent = "Voer een geldig getal in!";
        feedback.style.color = "red";
        return;
    }

    if (playerGuess === randomNumber) {
        feedback.textContent = `Gefeliciteerd! Je hebt het juiste getal (${randomNumber}) geraden in ${attempts} poging(en)!`;
        feedback.style.color = "green";
        guessButton.disabled = true; // Schakel de knop uit
        showReward(); // Toon de hidden div
    } else if (playerGuess < randomNumber) {
        feedback.textContent = "Te laag! Probeer het opnieuw.";
        feedback.style.color = "orange";
    } else {
        feedback.textContent = "Te hoog! Probeer het opnieuw.";
        feedback.style.color = "orange";
    }
});

// Toon de hidden div
function showReward() {
    reward.classList.remove("hidden");
}
