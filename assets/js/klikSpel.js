let target = 100; // Initiële target
let clickCount = 0; // Aantal klikken
let timeLeft = 10; // Timer in seconden
let countdown;

const clickButton = document.getElementById("click-button");
const startButton = document.getElementById("start-button");
const clickCountDisplay = document.getElementById("click-count");
const timerDisplay = document.getElementById("timer");
const reward = document.getElementById("reward");
const lost = document.getElementById("lost");
const targetDisplay = document.getElementById("target-display");
const finalScore = document.getElementById("final-score");

// Start het spel
startButton.addEventListener("click", () => {
    resetGame();
    startGame();
});

function startGame() {
    startButton.disabled = true;
    clickButton.disabled = false;

    countdown = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = `Tijd: ${timeLeft}s`;

        if (timeLeft <= 0) {
            endGame();
        }
    }, 1000);
}

// Klikken registreren
clickButton.addEventListener("click", () => {
    clickCount++;
    clickCountDisplay.textContent = `Klikken: ${clickCount}`;
});

// Beëindig het spel
function endGame() {
    clearInterval(countdown);
    clickButton.disabled = true;
    startButton.disabled = false;

    if (clickCount > target) {
        reward.classList.remove("hidden");
        finalScore.textContent = clickCount;
    } else {
        lost.classList.remove("hidden");
        target -= 100; // Verlaag de target
        targetDisplay.textContent = target; // Update de target in de interface
    }
}

// Reset het spel
function resetGame() {
    clickCount = 0;
    timeLeft = 10;
    clickCountDisplay.textContent = `Klikken: 0`;
    timerDisplay.textContent = `Tijd: 10s`;
    reward.classList.add("hidden");
    lost.classList.add("hidden");
}
