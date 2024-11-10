document.addEventListener("DOMContentLoaded", () => {
    const rebusImages = ["../../assets/img/opdrachten/opdracht3/rebus1.svg", "../../assets/img/opdrachten/opdracht3/rebus2.svg", "../../assets/img/opdrachten/opdracht3/rebus3.svg", "../../assets/img/opdrachten/opdracht3/rebus4.svg"];
    const rebusAnswers = ["hoera, anja is zestig jaar", "we gaan een feestje bouwen", "laat je verassen en wees niet nieuwsgierig", "jouw cadeau ligt verstopt achter het kippenhok"];
    let currentRebus = 0;

    const rebusImageElement = document.getElementById("rebus-image");
    const answerInput = document.getElementById("rebus-answer");
    const checkButton = document.getElementById("check-answer");
    const feedbackMessage = document.getElementById("feedback-message");

    checkButton.addEventListener("click", () => {
        const userAnswer = answerInput.value.trim().toLowerCase();

        if (userAnswer === rebusAnswers[currentRebus]) {
            feedbackMessage.textContent = "Correct! Ga door naar de volgende rebus.";
            feedbackMessage.style.color = "green";
            answerInput.value = "";
            currentRebus++;

            if (currentRebus < rebusImages.length) {
                // Update to the next rebus
                rebusImageElement.src = rebusImages[currentRebus];
            } else {
                feedbackMessage.innerHTML = "<strong>Gefeliciteerd!</strong> Je hebt alle rebussen opgelost! <br><img src=../../assets/img/opdrachten/rewards/Reward3-min.JPG id=rewardImage>";
                feedbackMessage.style.color = "green";
                checkButton.disabled = true;
            }
        } else {
            feedbackMessage.textContent = "Ongeldig antwoord, probeer het opnieuw.";
            feedbackMessage.style.color = "red";
        }
    });
});
