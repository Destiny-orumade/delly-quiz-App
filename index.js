const quizData = [
    { question: "How many planets do we have?", options: ["3", "8", "9", "6"], answer: 1 },
    { question: "What is the capital of Nigeria?", options: ["Berlin", "Madrid", "Abuja", "Lisbon"], answer: 2 },
    { question: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Venus"], answer: 1 },
    { question: "What is the largest ocean on Earth?", options: ["Atlantic", "Indian", "Arctic", "Pacific"], answer: 3 },
    { question: "What is the powerhouse of the cell?", options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi body"], answer: 1 },
    { question: "What is the chemical symbol for gold?", options: ["Au", "Ag", "Pb", "Fe"], answer: 0 },
    { question: "Who wrote 'To Kill a Mockingbird'?", options: ["Harper Lee", "Mark Twain", "Jane Austen", "J.K. Rowling"], answer: 0 },
    { question: "What is the tallest mountain in the world?", options: ["K2", "Everest", "Kilimanjaro", "Denali"], answer: 1 },
    { question: "Which element has the atomic number 1?", options: ["Helium", "Oxygen", "Hydrogen", "Carbon"], answer: 2 },
    { question: "What is the fastest land animal?", options: ["Cheetah", "Leopard", "Lion", "Horse"], answer: 0 }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    document.getElementById("question").textContent = quizData[currentQuestion].question;
    document.getElementById("progress").textContent = `Question ${currentQuestion + 1} of ${quizData.length}`;
    
    const optionsEl = document.getElementById("options");
    optionsEl.innerHTML = "";
    quizData[currentQuestion].options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option");
        button.onclick = () => {
            disableOptions();
            checkAnswer(index, button);
        };
        optionsEl.appendChild(button);
    });
}

function disableOptions() {
    document.querySelectorAll(".option").forEach(button => button.disabled = true);
}

function checkAnswer(selectedIndex, button) {
    if (selectedIndex === quizData[currentQuestion].answer) {
        score++;
        button.style.background = "#4CAF50";
    } else {
        button.style.background = "#f44336";
    }
    setTimeout(nextQuestion, 1000);
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById("question").textContent = "Quiz Completed!";
    document.getElementById("options").innerHTML = "";
    document.getElementById("score").textContent = `Your final score: ${score} / ${quizData.length}`;
    document.getElementById("score").classList.remove("hidden");
}

loadQuestion();