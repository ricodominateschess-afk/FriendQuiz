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
// QUESTIONS
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
            "He doesn't really
