const questions = [
    {
        question: "What is the name of the cat in the famous cartoon 'Garfield'?",
        options: ["Tom", "Garfield", "Mittens", "Whiskers"],
        correctAnswer: "Garfield"
    },
    {
        question: "Which breed of cat is known for its distinctive flat face?",
        options: ["Persian", "Siamese", "Maine Coon", "Bengal"],
        correctAnswer: "Persian"
    },
    {
        question: "What do cats usually use to communicate with humans?",
        options: ["Meowing", "Barking", "Chirping", "Roaring"],
        correctAnswer: "Meowing"
    },
    {
        question: "Which of these is NOT a type of cat?",
        options: ["Lion", "Tiger", "Jaguar", "Penguin"],
        correctAnswer: "Penguin"
    },
    {
        question: "What part of the cat's body helps it with balance?",
        options: ["Tail", "Whiskers", "Ears", "Paws"],
        correctAnswer: "Tail"
    }
];

let currentQuestionIndex = 0;

function displayQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById("question-container").textContent = question.question;
    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = '';
    question.options.forEach(option => {
        const optionElement = document.createElement("div");
        optionElement.textContent = option;
        optionElement.classList.add("option");
        optionElement.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(optionElement);
    });
}

function checkAnswer(selectedAnswer) {
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;
    const resultDiv = document.getElementById("result");
    if (selectedAnswer === correctAnswer) {
        resultDiv.textContent = "Correct!";
        resultDiv.style.color = "green";
    } else {
        resultDiv.textContent = `Wrong! The correct answer is: ${correctAnswer}`;
        resultDiv.style.color = "red";
    }
    document.getElementById("next-btn").disabled = false;
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
        document.getElementById("result").textContent = "";
        document.getElementById("next-btn").disabled = true;
    } else {
        document.getElementById("result").textContent = "Quiz finished! Well done!";
        document.getElementById("next-btn").style.display = "none";
    }
}

// Initialize the quiz
displayQuestion();
document.getElementById("next-btn").disabled = true;