import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    query,
    orderBy,
    limit
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


// ===============================
// FIREBASE
// ===============================

const firebaseConfig = {
    apiKey: "AIzaSyDQJTStzsNkirI3lNX3SVwrR08xvZXdJr8",
    authDomain: "friendquiz-bc420.firebaseapp.com",
    projectId: "friendquiz-bc420",
    storageBucket: "friendquiz-bc420.firebasestorage.app",
    messagingSenderId: "290019969759",
    appId: "1:290019969759:web:f0cfd0f7e06cd68360776a",
    measurementId: "G-SK8QLXY92M"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


// ===============================
// QUESTIONS — UNCHANGED
// ===============================

const questions = [

    {
        question: "Who is Rico's crush?",
        answers: [
            "Secret 🤫",
            "None",
            "Kristine",
            "Someone from another school"
        ],
        correct: 3
    },

    {
        question: "What are Rico's favorite colors?",
        answers: [
            "Ocean Blue & Blush Pink",
            "Black & White",
            "Red & Orange",
            "Purple & Green"
        ],
        correct: 0
    },

    {
        question: "What's Rico's favorite food?",
        answers: [
            "Adobo",
            "Bistek",
            "Sinigang",
            "Fried Chicken"
        ],
        correct: 1
    },

    {
        question: "Which social media does Rico use the most?",
        answers: [
            "Facebook & Snapchat",
            "TikTok & Instagram",
            "X & Facebook",
            "Snapchat & Instagram"
        ],
        correct: 1
    },

    {
        question: "How would Rico describe himself?",
        answers: [
            "Genuine, kind, and funny",
            "Quiet and serious",
            "Competitive and strict",
            "Shy and reserved"
        ],
        correct: 0
    },

    {
        question: "What is Rico currently getting into?",
        answers: [
            "Calisthenics & trying new things",
            "Swimming",
            "Skateboarding",
            "Volleyball"
        ],
        correct: 0
    },

    {
        question: "What career paths has Rico considered?",
        answers: [
            "Culinary / IT",
            "Law / Medicine",
            "Architecture / Engineering",
            "Business / Accounting"
        ],
        correct: 0
    },

    {
        question: "What does Rico enjoy doing?",
        answers: [
            "Playing guitar",
            "Collecting watches",
            "Photography",
            "Skateboarding"
        ],
        correct: 0
    },

    {
        question: "What sports is Rico into?",
        answers: [
            "Badminton & boxing",
            "Basketball & football",
            "Tennis & swimming",
            "Volleyball & football"
        ],
        correct: 0
    },

    {
        question: "What does Rico call himself?",
        answers: [
            "A jack of all trades",
            "A professional athlete",
            "A gamer",
            "A musician"
        ],
        correct: 0
    },

    {
        question: "What type of content does Rico want to make?",
        answers: [
            "Cooking & fitness",
            "Gaming only",
            "Travel vlogs",
            "Music covers only"
        ],
        correct: 0
    },

    {
        question: "What is Rico's nickname?",
        answers: [
            "Rocky",
            "Riko",
            "Rico",
            "Rick"
        ],
        correct: 2
    },

    {
        question: "What is Rico most likely to do when he's interested in something?",
        answers: [
            "Try it out",
            "Ignore it",
            "Wait for someone else to do it",
            "Give up immediately"
        ],
        correct: 0
    },

    {
        question: "When is Rico's birthday?",
        answers: [
            "June 30",
            "July 15",
            "June 18",
            "May 30"
        ],
        correct: 0
    },

    {
        question: "What career paths has Rico considered?",
        answers: [
            "Culinary / IT",
            "Medicine",
            "Law",
            "Architecture"
        ],
        correct: 0
    },

    {
        question: "What kind of person is Rico when it comes to his interests?",
        answers: [
            "He likes trying different things",
            "He sticks to only one hobby",
            "He doesn't really have hobbies",
            "He avoids learning new skills"
        ],
        correct: 0
    },

    {
        question: "What's Rico's favorite game?",
        answers: [
            "CODM",
            "Roblox",
            "Mobile Legends",
            "Minecraft"
        ],
        correct: 0
    },

    {
        question: "What country would Rico like to visit or possibly live in someday?",
        answers: [
            "Japan",
            "Canada 🇨🇦",
            "South Korea",
            "Australia"
        ],
        correct: 1
    },

    {
        question: "What is something Rico really wants to achieve someday?",
        answers: [
            "Become successful and financially stable",
            "Become famous in gaming",
            "Become a professional athlete",
            "Travel the world"
        ],
        correct: 0
    }

];


let currentQuestion = 0;
let score = 0;
let playerName = "";
let answered = false;


// ===============================
// SCREEN CONTROL
// ===============================

function hideScreens() {

    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });

}


function goHome() {

    hideScreens();

    document.getElementById("home")
        .classList.add("active");
}


function showNameScreen() {

    hideScreens();

    document.getElementById("nameScreen")
        .classList.add("active");
}


function showCreateScreen() {

    hideScreens();

    document.getElementById("createScreen")
        .classList.add("active");
}


// ===============================
// START QUIZ
// ===============================

function startQuiz() {

    const input =
        document.getElementById("playerName");

    playerName =
        input.value.trim();

    if (playerName === "") {

        alert("Enter your name first!");

        return;
    }

    currentQuestion = 0;
    score = 0;

    hideScreens();

    document.getElementById("quizScreen")
        .classList.add("active");

    showQuestion();
}


// ===============================
// SHOW QUESTION
// ===============================

function showQuestion() {

    answered = false;

    const q =
        questions[currentQuestion];

    document.getElementById("questionNumber")
        .textContent =
        `Question ${currentQuestion + 1}/${questions.length}`;

    document.getElementById("scoreText")
        .textContent =
        `Score: ${score}`;

    document.getElementById("question")
        .textContent =
        q.question;

    document.getElementById("progressBar")
        .style.width =
        ((currentQuestion / questions.length) * 100) + "%";

    const answers =
        document.getElementById("answers");

    answers.innerHTML = "";

    q.answers.forEach((answer, index) => {

        const button =
            document.createElement("button");

        button.className =
            "answer-btn";

        button.textContent =
            answer;

        button.onclick = function() {
            chooseAnswer(index, button);
        };

        answers.appendChild(button);

    });

    document.getElementById("nextButton")
        .disabled = true;
}


// ===============================
// ANSWER
// ===============================

function chooseAnswer(index, button) {

    if (answered) return;

    answered = true;

    const q =
        questions[currentQuestion];

    const buttons =
        document.querySelectorAll(".answer-btn");

    if (index === q.correct) {

        button.classList.add("correct");

        score++;

    } else {

        button.classList.add("wrong");

        buttons[q.correct]
            .classList.add("correct");
    }

    document.getElementById("scoreText")
        .textContent =
        `Score: ${score}`;

    document.getElementById("nextButton")
        .disabled = false;
}


// ===============================
// NEXT QUESTION
// ===============================

function nextQuestion() {

    if (!answered) return;

    currentQuestion++;

    if (currentQuestion >= questions.length) {

        finishQuiz();

    } else {

        showQuestion();
    }
}


// ===============================
// FINISH QUIZ
// ===============================

async function finishQuiz() {

    hideScreens();

    document.getElementById("resultScreen")
        .classList.add("active");

    document.getElementById("finalScore")
        .textContent = score;

    const percentage =
        Math
