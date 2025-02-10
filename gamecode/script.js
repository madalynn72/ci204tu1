const questions = [
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        options: ["var", "let", "const", "All of the above"],
        correctAnswer: "All of the above"
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        options: ["alert('Hello World');", "msg('Hello World');", "prompt('Hello World');", "console.log('Hello World');"],
        correctAnswer: "alert('Hello World');"
    },
    {
        question: "Which symbol is used for single-line comments in JavaScript?",
        options: ["//", "/*", "#", "<!--"],
        correctAnswer: "//"
    },
    {
        question: "What will `typeof []` return in JavaScript?",
        options: ["array", "object", "list", "undefined"],
        correctAnswer: "object"
    },
    {
        question: "Which function is used to convert a string to an integer?",
        options: ["parseInt()", "parseFloat()", "Number()", "String()"],
        correctAnswer: "parseInt()"
    },
    {
        question: "What is the correct syntax for a 'for' loop?",
        options: [
            "for (i = 0; i < 5; i++)",
            "for (i <= 5; i++)",
            "for (i = 0; i < 5; i+)",
            "for i = 1 to 5"
        ],
        correctAnswer: "for (i = 0; i < 5; i++)"
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        options: ["*", "=", "-", "=="],
        correctAnswer: "="
    },
    {
        question: "How do you create a function in JavaScript?",
        options: [
            "function myFunction()",
            "def myFunction()",
            "create myFunction()",
            "function = myFunction()"
        ],
        correctAnswer: "function myFunction()"
    },
    {
        question: "How do you call a function named `myFunction`?",
        options: ["call myFunction();", "myFunction();", "execute myFunction();", "run myFunction();"],
        correctAnswer: "myFunction();"
    },
    {
        question: "Which event occurs when a user clicks on an HTML element?",
        options: ["onmouseover", "onchange", "onclick", "onfocus"],
        correctAnswer: "onclick"
    },
    {
        question: "How do you declare a JavaScript array?",
        options: [
            "let colors = 'red', 'green', 'blue'",
            "let colors = ['red', 'green', 'blue']",
            "let colors = (1:'red', 2:'green', 3:'blue')",
            "let colors = 'red'; 'green'; 'blue';"
        ],
        correctAnswer: "let colors = ['red', 'green', 'blue']"
    },
    {
        question: "Which method is used to find the length of a string?",
        options: ["length()", "size()", "length", "getLength()"],
        correctAnswer: "length"
    },
    {
        question: "What does `NaN` stand for in JavaScript?",
        options: ["Not a Number", "Null and None", "No Assigned Name", "None of the Above"],
        correctAnswer: "Not a Number"
    },
    {
        question: "What is the correct way to write an IF statement?",
        options: ["if i = 5", "if i == 5 then", "if (i == 5)", "if i = 5 then"],
        correctAnswer: "if (i == 5)"
    },
    {
        question: "Which of the following is NOT a JavaScript data type?",
        options: ["Number", "Boolean", "Integer", "Undefined"],
        correctAnswer: "Integer"
    },
    {
        question: "Which of the following is used to execute a function repeatedly at set intervals?",
        options: ["setTimeout()", "setInterval()", "repeat()", "executeEvery()"],
        correctAnswer: "setInterval()"
    },
    {
        question: "Which JavaScript operator is used to compare both value and type?",
        options: ["==", "===", "!=", "<>"],
        correctAnswer: "==="
    },
    {
        question: "Which built-in method is used to remove the last element from an array?",
        options: ["pop()", "shift()", "splice()", "removeLast()"],
        correctAnswer: "pop()"
    },
    {
        question: "How do you round a number to the nearest integer in JavaScript?",
        options: ["Math.round()", "Math.ceil()", "Math.floor()", "round()"],
        correctAnswer: "Math.round()"
    },
    {
        question: "How do you convert a JavaScript object to a JSON string?",
        options: ["JSON.parse()", "JSON.stringify()", "toJSON()", "convertToJson()"],
        correctAnswer: "JSON.stringify()"
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