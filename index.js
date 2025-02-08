
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
    const questionEl = document.getElementById("question");
    const optionsEl = document.getElementById("options");
    const progressEl = document.getElementById("progress");
    
    questionEl.textContent = quizData[currentQuestion].question;
    progressEl.textContent = `Question ${currentQuestion + 1} of ${quizData.length}`;
    optionsEl.innerHTML = "";
    
    quizData[currentQuestion].options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option");
        button.onclick = () => checkAnswer(index, button);
        optionsEl.appendChild(button);
    });
    
    document.getElementById("next-btn").classList.add("hidden");
    document.getElementById("submit-btn").classList.add("hidden");
}

function checkAnswer(selectedIndex, button) {
    const correctAnswer = quizData[currentQuestion].answer;
    if (selectedIndex === correctAnswer) {
        score++;
        button.style.background = "#4CAF50";
        button.style.color = "white";
    } else {
        button.style.background = "#f44336";
        button.style.color = "white";
    }
    
    document.getElementById("next-btn").classList.remove("hidden");
    if (currentQuestion === quizData.length - 1) {
        document.getElementById("submit-btn").classList.remove("hidden");
    }
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    }
}

function showResults() {
    document.getElementById("question").textContent = "Quiz Completed!";
    document.getElementById("options").innerHTML = "";
    document.getElementById("next-btn").classList.add("hidden");
    document.getElementById("submit-btn").classList.add("hidden");
    document.getElementById("score").textContent = `Your final score: ${score} / ${quizData.length}`;
    document.getElementById("score").classList.remove("hidden");
}

loadQuestion();