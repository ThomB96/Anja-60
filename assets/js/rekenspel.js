let timeLeft = 60;
let score = 0;
let currentQuestion;

const timerElement = document.getElementById('timer');
const questionElement = document.getElementById('question');
const resultElement = document.getElementById('result');
const answerInput = document.getElementById('answer');
const finalImage = document.querySelector('.final-image');

// Start de timer
const timer = setInterval(() => {
    if (timeLeft <= 0) {
        clearInterval(timer);
        endGame();
    } else {
        timeLeft--;
        timerElement.textContent = `Tijd: ${timeLeft}`;
    }
}, 1000);

// Genereer een willekeurige rekenvraag
function generateQuestion() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operators = ['+', '-', '*', '/'];
    const operator = operators[Math.floor(Math.random() * operators.length)];

    currentQuestion = {
        question: `${num1} ${operator} ${num2}`,
        answer: eval(num1 + operator + num2)
    };

    questionElement.textContent = `Wat is ${currentQuestion.question}?`;
    answerInput.value = '';
}

// Controleer het antwoord
function submitAnswer() {
    const userAnswer = parseFloat(answerInput.value);
    if (userAnswer === currentQuestion.answer) {
        score++;
        resultElement.textContent = 'Correct!';
        resultElement.style.color = '#5cb85c';
    } else {
        resultElement.textContent = 'Fout!';
        resultElement.style.color = '#d9534f';
    }
    generateQuestion();
}

// Eindig het spel
function endGame() {
    questionElement.textContent = `Je score: ${score}`;
    answerInput.style.display = 'none';
    resultElement.style.display = 'none';
    finalImage.style.display = 'block';
}

// Start de eerste vraag
generateQuestion();
